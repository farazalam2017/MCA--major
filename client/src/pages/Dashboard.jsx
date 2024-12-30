import React from "react";
import { useState } from "react";
import { DUMMY_POSTS } from "../data";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/userContext";
import axios from "axios";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import DeletePost from "./DeletePost";
const Dashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const { currentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const token = currentUser?.token;
  //redirect to login for any user who is not log in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts/users/${id}`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, [id]);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="dashboard">
      {posts.length ? (
        <div className="container dashboard__container">
          {posts.map((post) => {
            return (
              <article key={post.id} className="dashboard__post">
                <div className="dashboard__post-info">
                  <div className="dashboard__post-thumbnail">
                    <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`} alt="" />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard__post-actions">
                  <Link to={`/posts/${post._id}`} className="btn sm">
                    View
                  </Link>
                  <Link
                    to={`/posts/${post._id}/edit`}
                    className="btn sm primary"
                  >
                    Edit
                  </Link>
                  <DeletePost postId={post._id}/>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2 className="center">You have no post yet</h2>
      )}
    </section>
  );
};

export default Dashboard;
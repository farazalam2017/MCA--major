import React, { useEffect } from "react";
import { useState } from "react";
import Loader from "./Loader";
import axios from "axios";
import PostItem from "./PostItem";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      SetIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts`
        );
        setPosts(response?.data);
      } catch (err) {
        console.log(err);
      }
      SetIsLoading(false);
    };
    fetchPosts();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <section className="posts">
        {posts.length > 0 ? (
          <div className="container posts__container">
            {posts.map(
              ({
                _id: id,
                thumbnail,
                category,
                title,
                description,
                creator,
                createdAt,
              }) => (
                <PostItem
                  key={id}
                  postID={id}
                  thumbnail={thumbnail}
                  category={category}
                  title={title}
                  description={description}
                  authorID={creator}
                  createdAt={createdAt}
                />
              )
            )}
          </div>
        ) : (
          <h2 className="center">No posts found</h2>
        )}
      </section>
    </>
  );
};

export default Posts;
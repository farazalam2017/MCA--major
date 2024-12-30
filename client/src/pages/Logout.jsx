/*   import React, { useContext, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { UserContext } from "../context/userContext";
  const Logout = () => {
    const { setCurrentUser } = useState(UserContext);
    const navigate = useNavigate();
    setCurrentUser(null);
    navigate("/login");
    return <></>;
  };

  export default Logout;
 */
  import React, { useContext } from "react";
  import { useNavigate } from "react-router-dom";
  import { UserContext } from "../context/userContext";
  
  const Logout = () => {
    const { setCurrentUser } = useContext(UserContext); // Use useContext instead of useState
    const navigate = useNavigate();
  
    const handleLogout = () => {
      setCurrentUser(null);
      navigate("/login");
    };
  
    // You might want to call handleLogout directly or use it as an onClick handler in a button or link
    handleLogout();
  
    return <></>; // This component doesn't render anything visible, so you can use an empty fragment.
  };
  
  export default Logout;
  
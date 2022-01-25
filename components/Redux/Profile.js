import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);

  return (
    <div style={{ color: theme }}>
      <h1>profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>E-mail: {user.email}</p>
    </div>
  );
};

export default Profile;

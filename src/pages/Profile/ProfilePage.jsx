import React from "react";
import "./ProfilePage.css";
import { useAccess } from "../../hooks/useAccess";
import { CONFIG } from "../../Config";
import { useSelector } from "react-redux";
import { usePosts } from "../../hooks/usePosts";
import Posts from "../../components/post/Posts";

const ProfilePage = () => {
  useAccess();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { posts } = usePosts(CONFIG.BACK + "/userInfo?id=" + currentUser.id);

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <div className="profile-info">
        <p>Username: {currentUser?.username}</p>
        <p>Nickname: {posts[0]?.nickname }</p>
        <p>About: {posts[0]?.subtitle }</p>
      </div>
      <div>
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default ProfilePage;

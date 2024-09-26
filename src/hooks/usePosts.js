import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const usePosts = (url) => {
  const [posts, setPosts] = useState([]);
  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    if (!currentUser) return;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const userInfo = data.find((user) => user.id === currentUser.id);
        const userPosts = userInfo.posts.map((post) => ({
          ...post,
          nickname: userInfo.nickname,
          subtitle: userInfo.subtitle,
        }));

        setPosts(userPosts);
      })
      .catch((err) => console.error("Error loading users:", err));
  }, [currentUser]);

  return {
    posts,
  };
};

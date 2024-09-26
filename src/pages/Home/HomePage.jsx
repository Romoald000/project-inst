import React from "react";
import "./HomePage.css";
import { useAccess } from "../../hooks/useAccess";
import { Link } from "react-router-dom";
import { PAGES } from "../../router/router";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,

} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from "../../components/post/Posts";
import { usePosts } from "../../hooks/usePosts";
import { CONFIG } from "../../Config";


const HomePage = () => {
  useAccess();
  const {posts} = usePosts(CONFIG.BACK + '/userInfo');

  return (
    <div className="container">
      <div className="left-bar">
        <ul>
          <li>
            <h2>Instagram</h2>
          </li>
          <li>Головна</li>
          <li>Пошук</li>
          <li>Цікаве</li>
          <li>Reels</li>
          <li>Повідомлення</li>
          <li>Сповіщення</li>
          <li>Створити</li>
          <Link to={PAGES.PROFILE} className="link">
            <li>Профіль</li>
          </Link>
        </ul>
      </div>
      <div className="main">
        <div className="stories">
          <div className="storie"></div>
          <div className="storie"></div>
          <div className="storie"></div>
          <div className="storie"></div>
          <div className="storie"></div>
          <div className="storie"></div>
          <div className="storie"></div>
        </div>
          {/* <Posts posts={posts}/> */}
        </div>
    </div>
  );
};

export default HomePage;

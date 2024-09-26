import React from "react";
import {
  Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar,
  IconButton, Typography
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMore from "../Utils/Expand";

const Post = ({ post }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleExpandClick = () => setIsExpanded(!isExpanded);

  return (
    <div className="Card">
      <Card sx={{ minWidth: 345, marginBottom: 5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {post.nickname ? post.nickname[0] : "U"}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={post.nickname }

        />
        <CardMedia
          component="img"
          height="194"
          image={post.img} 
          alt={post.title}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {post.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={isExpanded}
            onClick={handleExpandClick}
            aria-expanded={isExpanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>Коментарі:</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              {post.comments }
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Post;

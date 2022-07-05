import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

export const OverlayPreview = ({ name, route, href, image }) => {
  const content = (
    <Card square={true}>
      <CardMedia
        component="img"
        height="270"
        width="270"
        image={image}
        alt={name}
        sx={{ backgroundColor: "black" }}
      />
      <CardActions sx={{ backgroundColor: "#DFFB26" }}>
        <Typography variant="h6" component="div" align="left" color="black">
          {name}
        </Typography>
      </CardActions>
    </Card>
  );

  if (href != null) {
    return (
      <a href={href} style={{ textDecoration: "none" }}>
        {content}
      </a>
    );
  }

  return (
    <Link to={route} style={{ textDecoration: "none" }}>
      {content}
    </Link>
  );
};

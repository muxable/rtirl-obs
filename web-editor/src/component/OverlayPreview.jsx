import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

export const OverlayPreview = ({ name, route, href, image }) => {
  const content = (
    <Card
      square={true}
      sx={{
        ":hover": {
          boxShadow: 20,
        },
      }}
    >
      <CardMedia
        component="img"
        height="270"
        width="270"
        image={image}
        alt={name}
        sx={{ backgroundColor: "black" }}
      />
      <CardActions>
        <Typography variant="h6" component="div" align="left">
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

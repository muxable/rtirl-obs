import { styled } from "@mui/material/styles";
import * as React from "react";
import hotdog from "../muxlabs-hotdog.png";

const Hotdog = styled("img")({
  position: "absolute",
  width: "10%",
  right: "10%",
  top: "10%",
  transform: "rotate(-20.11deg)",
  zIndex: -1,
});

const Hotdog1 = styled("img")({
  position: "absolute",
  width: "6%",
  left: "2%",
  top: "173.49px",
  transform: "rotate(92.07deg)",
  zIndex: -1,
});

const Hotdog2 = styled("img")({
  position: "absolute",
  width: "4%",
  left: "5%",
  top: "1%",
  transform: "rotate(55.06deg)",
  zIndex: -1,
});

const Hotdog3 = styled("img")({
  position: "absolute",
  width: "2%",
  left: "25%",
  top: "10%",
  transform: "rotate(43.13deg)",
  zIndex: -1,
});

export const HomeBackground = () => {
  return (
    <>
      <Hotdog src={hotdog} />
      <Hotdog1 src={hotdog} />
      <Hotdog2 src={hotdog} />
      <Hotdog3 src={hotdog} />
    </>
  );
};

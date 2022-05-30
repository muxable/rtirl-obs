import { styled } from "@mui/material/styles";
import * as React from "react";
import hotdog from "../images/muxlabs-hotdog.png";

const Hotdog = styled("img")({
  position: "absolute",
  width: "8%",
  right: "10%",
  top: "10%",
  transform: "rotate(-20.11deg)",
  zIndex: -1,
});

const Hotdog1 = styled("img")({
  position: "absolute",
  width: "6%",
  left: "2%",
  top: "25%",
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

const Hotdog4 = styled("img")({
  position: "absolute",
  width: "2%",
  left: "45%",
  bottom: "2%",
  transform: "rotate(5.71deg)",
  zIndex: -1,
});

const Hotdog5 = styled("img")({
  position: "absolute",
  width: "5%",
  right: "3%",
  bottom: "10%",
  transform: "rotate(-84.07deg)",
  zIndex: -1,
});

const Hotdog6 = styled("img")({
  position: "absolute",
  width: "5%",
  left: "-3%",
  bottom: "10%",
  transform: "rotate(26.97deg)",
  zIndex: -1,
});

const Hotdog7 = styled("img")({
  position: "absolute",
  width: "2%",
  left: "45%",
  bottom: "43%",
  transform: "rotate(87.28deg)",
  zIndex: -1,
});

export const HomeBackground = () => {
  return (
    <>
      <Hotdog src={hotdog} />
      <Hotdog1 src={hotdog} />
      <Hotdog2 src={hotdog} />
      <Hotdog3 src={hotdog} />
      <Hotdog4 src={hotdog} />
      <Hotdog5 src={hotdog} />
      <Hotdog6 src={hotdog} />
      <Hotdog7 src={hotdog} />
    </>
  );
};

import * as React from "react";

export default function useStyle() {
  const [textDivCSS, setTextDivCSS] = React.useState({
    textColor: "rgba(223, 251, 38, 1)",
    fontFamily: "Open Sans",
    rotation: 0,
    fontSize: 30,
    isBold: false,
    isItalic: false,
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0,
    borderStyle: "solid",
    padding: 0,
    border_top_left_radius: 0,
    border_top_right_radius: 0,
    border_bottom_left_radius: 0,
    border_bottom_right_radius: 0,
    textAlign: "left",
    strokeColor: "rgba(255, 255, 255, 1)",
    strokeWidth: 0,
    hShadow: 0,
    vShadow: 0,
    blurRadius: 0,
    shadowColor: "rgba(255, 255, 255, 1)",
  });

  return [textDivCSS, setTextDivCSS];
}

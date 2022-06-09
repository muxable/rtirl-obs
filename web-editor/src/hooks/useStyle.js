import * as React from "react";

export default function useStyle() {
  const [textDivCSS, setTextDivCSS] = React.useState({
    textColor: "rgba(223, 251, 38, 1)",
    fontFamily: "Open Sans",
    rotation: 0,
    fontSize: 30,
    isBold: false,
    isItalic: false,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0,
    padding: 0,
    border_top_left_radius: 0,
    border_top_right_radius: 0,
    border_bottom_left_radius: 0,
    border_bottom_right_radius: 0,
    textAlign: "left",
  });

  return [textDivCSS, setTextDivCSS];
}

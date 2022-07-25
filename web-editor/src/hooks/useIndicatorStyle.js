import * as React from "react";
import { useState } from "react";

export default function useIndicatorStyle() {
  // background-color: cyan;
  // height: 12px;
  // width: 12px;
  // position: absolute;
  // border-radius: 50%;
  // top: 119px;
  // left: 144px;
  // box-shadow: 0 0 10px cyan;

  const [indicatorStyle, setIndicatorStyle] = useState({
    height: "12px",
    width: "12px",
    borderRadius: "50%",
    backgroundColor: "rgba(253, 45, 15, 1)",
  });

  return [indicatorStyle, setIndicatorStyle];
}

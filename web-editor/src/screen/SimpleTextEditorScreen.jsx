import * as React from "react";
import Stack from "@mui/material/Stack";
import { TextSettings } from "../component/TextSettings";

export const SimpleTextEditScreen = () => {
  const [textDivCSS, setTextDivCSS] = React.useState({
    textColor: "#94fe32",
    fontFamily: "sans-serif",
    rotation: 0,
    fontSize: 30,
    isBold: false,
    isItalic: false,
    opacity: 100,
    backgroundColor: "#000000",
    borderColor: "#ffffff",
    borderWidth: 0,
    padding: 0,
    border_top_left_radius: 0,
    border_top_right_radius: 0,
    border_bottom_left_radius: 0,
    border_bottom_right_radius: 0,
    textAlign: "left",
  });
  // const [color, setColor] = React.useState("#94fe32");

  return (
    <Stack direction={"row"} spacing={2}>
      <TextSettings
        textDivCSS={textDivCSS}
        setTextDivCSS={setTextDivCSS}
      ></TextSettings>
      <div
        style={{
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            ...textDivCSS,
            color: textDivCSS.textColor,
            fontFamily: textDivCSS.fontFamily,
            borderRadius: `${textDivCSS["border_top_left_radius"]}% ${textDivCSS["border_top_right_radius"]}% ${textDivCSS["border_bottom_right_radius"]}% ${textDivCSS["border_bottom_left_radius"]}%`,
            fontSize: `${textDivCSS.fontSize}px`,
            fontWeight: textDivCSS.isBold ? "bold" : "normal",
            fontStyle: textDivCSS.isItalic ? "italic" : "normal",
            transform: `rotate(${textDivCSS.rotation}deg)`,
            opacity: textDivCSS.opacity / 100,
            borderColor: textDivCSS.borderColor,
            border: `${textDivCSS.borderWidth}px solid`,
            justifyContent: textDivCSS.justifyContent,
          }}
        >
          {" "}
          Sample Text{" "}
        </div>
      </div>
    </Stack>
  );
};

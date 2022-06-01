import * as React from "react";
import Stack from "@mui/material/Stack";
import { TextSettings } from "../component/TextSettings";
import { useEffect } from "react";

export const SimpleTextEditScreen = ({ type }) => {
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

  const [text, setText] = React.useState("Smaple Text");

  const [clockSetting, setClockSetting] = React.useState({
    format: "tt",
    lang: "en",
  });

  useEffect(() => {
    switch (type) {
      case "neighborhood":
        setText("Neighborhood");
        break;
      case "clock":
        setText("Clock");
        break;
      case "temperature":
        setText("Temperature");
        break;
      case "speed":
        setText("Speed");
        break;
      case "heading":
        setText("Heading");
        break;
      default:
        setText("Sample Text");
    }
  }, [setText, type]);

  return (
    <Stack direction={"row"} spacing={2}>
      <TextSettings
        textDivCSS={textDivCSS}
        setTextDivCSS={setTextDivCSS}
        type={type}
        setText={setText}
        clockSetting={clockSetting}
        setClockSetting={setClockSetting}
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
          {text}
        </div>
      </div>
    </Stack>
  );
};

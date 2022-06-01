import {
  Box
} from "@mui/material";
import * as React from "react";

function TextOverlayPreview({ textDivCSS, text }) {
  return (
    <Box height="75vh">
      <div
        style={{
          width: "100%",
          height: "100%",
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
    </Box>
  );
}

export default TextOverlayPreview;

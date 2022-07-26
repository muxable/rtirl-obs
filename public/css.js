const css = new URLSearchParams(window.location.search).get("css");
const font = new URLSearchParams(window.location.search).get("font");

if (font) {
  const decodedFont = atob(font);
  const importFontFamily = document.createElement("link");
  importFontFamily.href = decodedFont;
  importFontFamily.type = "text/css";
  importFontFamily.rel = "stylesheet";

  // load google font
  document.getElementsByTagName("head")[0].appendChild(importFontFamily);
} 

// migration nessessary for old users
if (css) {
  document.body.setAttribute("style", css);
  const decodedCSS = atob(css);
  document.getElementsByTagName("body")[0].style = decodedCSS;
}

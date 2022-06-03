import { CssBaseline } from "@mui/material";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { EditorAppbar } from "./component/Appbar";
import { NavigationDrawer } from "./component/NavigationDrawer";
import ClockEditor from "./screen/ClockEditor";
import GoogleMapsEditor from "./screen/GoogleMapsEditor";
import HeadingEditor from "./screen/HeadingEditor";
import { Home } from "./screen/Home";
import MapboxEditor from "./screen/MapboxEditor";
import { SimpleTextEditScreen } from "./screen/SimpleTextEditorScreen";
import SpeedEditor from "./screen/SpeedEditor";
import WeatherEditor from "./screen/WeatherEditor";
import editorTheme from "./theme/editorTheme";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [pullKey, setPullKey] = useState({ value: "", valid: false });

  return (
    <div className="App">
      <ThemeProvider theme={editorTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Stack>
            <EditorAppbar setOpenDrawer={setOpenDrawer} />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/mapbox"
                element={
                  <MapboxEditor
                    pullKey={pullKey}
                    onPullKeyChange={setPullKey}
                  />
                }
              />
              <Route
                exact
                path="/googlemap"
                element={
                  <GoogleMapsEditor
                    pullKey={pullKey}
                    onPullKeyChange={setPullKey}
                  />
                }
              />
              <Route
                exact
                path="/neighborhood"
                element={<SimpleTextEditScreen />}
              />
              <Route exact path="/clock" element={<ClockEditor />} />
              <Route exact path="/weather" element={<WeatherEditor />} />
              <Route exact path="/speed" element={<SpeedEditor />} />
              <Route exact path="/heading" element={<HeadingEditor />} />
            </Routes>
          </Stack>
          <NavigationDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

import { CssBaseline } from "@mui/material";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { EditorAppbar } from "./component/Appbar";
import { NavigationDrawer } from "./component/NavigationDrawer";
import ClockEditor from "./screen/ClockEditor";
import { EditorScreen } from "./screen/EditorScreen";
import { Home } from "./screen/Home";
import { SimpleTextEditScreen } from "./screen/SimpleTextEditorScreen";
import SpeedEditor from "./screen/SpeedEditor";
import TemperatureEditor from "./screen/TemperatureEditor";
import editorTheme from "./theme/editorTheme";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

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
                element={<EditorScreen mapProvider={"mapbox"} />}
              />
              <Route
                exact
                path="/googlemap"
                element={<EditorScreen mapProvider={"google"} />}
              />
              <Route
                exact
                path="/neighborhood"
                element={<SimpleTextEditScreen />}
              />
              <Route exact path="/clock" element={<ClockEditor />} />
              <Route
                exact
                path="/temperature"
                element={<TemperatureEditor />}
              />
              <Route exact path="/speed" element={<SpeedEditor />} />
              <Route exact path="/heading" element={<SimpleTextEditScreen />} />
            </Routes>
          </Stack>
          <NavigationDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

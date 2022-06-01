import { CssBaseline } from "@mui/material";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import editorTheme from "./theme/editorTheme";
import "./App.css";
import { EditorAppbar } from "./component/Appbar";
import { NavigationDrawer } from "./component/NavigationDrawer";
import { EditorScreen } from "./screen/EditorScreen";
import { Home } from "./screen/Home";
import { SimpleTextEditScreen } from "./screen/SimpleTextEditorScreen";

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
                element={<SimpleTextEditScreen type={"neighborhood"} />}
              />
              <Route
                exact
                path="/speed"
                element={<SimpleTextEditScreen type={"speed"} />}
              />
              <Route
                exact
                path="/clock"
                element={<SimpleTextEditScreen type={"clock"} />}
              />
              <Route
                exact
                path="/temperature"
                element={<SimpleTextEditScreen type={"temperature"} />}
              />
              <Route
                exact
                path="/heading"
                element={<SimpleTextEditScreen type={"heading"} />}
              />
            </Routes>
          </Stack>
          <NavigationDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

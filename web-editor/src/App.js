import Stack from "@mui/material/Stack";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { EditorAppbar } from "./component/Appbar";
import { NavigationDrawer } from "./component/NavigationDrawer";
import { Home } from "./screen/Home";
import { MapEditor } from "./screen/MapEditor";
import { SimpleTextEditScreen } from "./screen/SimpleTextEditorScreen";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Stack>
          <EditorAppbar setOpenDrawer={setOpenDrawer} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/mapbox"
              element={<MapEditor mapProvider={"mapbox"} />}
            />
            <Route
              exact
              path="/googlemap"
              element={<MapEditor mapProvider={"google"} />}
            />
            <Route
              exact
              path="/neighborhood"
              element={<SimpleTextEditScreen />}
            />
            <Route exact path="/speed" element={<SimpleTextEditScreen />} />
            <Route exact path="/clock" element={<SimpleTextEditScreen />} />
            <Route
              exact
              path="/temperature"
              element={<SimpleTextEditScreen />}
            />
            <Route exact path="/speed" element={<SimpleTextEditScreen />} />
            <Route exact path="/heading" element={<SimpleTextEditScreen />} />
          </Routes>
        </Stack>
        <NavigationDrawer open={openDrawer} setOpen={setOpenDrawer} />
      </BrowserRouter>
    </div>
  );
}

export default App;

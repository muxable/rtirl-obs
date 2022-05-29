import "./App.css";
import { EditorAppbar } from "./component/Appbar";
import Stack from "@mui/material/Stack";
// import { EditorScreen } from "./screen/EditorScreen";
import { useState } from "react";
import { SimpleTextEditScreen } from "./screen/SimpleTextEditorScreen";
import { NavigationDrawer } from "./component/NavigationDrawer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditorScreen } from "./screen/EditorScreen";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Stack>
          <EditorAppbar setOpenDrawer={setOpenDrawer} />
          <Routes>
            {/* <Route exact path="/home" element={<HomeScreen />} /> */}
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

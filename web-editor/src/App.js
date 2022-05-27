import "./App.css";
import { EditorAppbar } from "./component/Appbar";
import Stack from "@mui/material/Stack";
// import { EditorScreen } from "./screen/EditorScreen";
import { useState } from "react";
import { SimpleTextEditScreen } from "./screen/SimpleTextEditorScreen";

function App() {
  const [mapProvider, setMapProvider] = useState("google");

  return (
    <div className="App">
      <Stack>
        <EditorAppbar
          mapProvider={mapProvider}
          setMapProvider={setMapProvider}
        />
        {/* <EditorScreen mapProvider={mapProvider}></EditorScreen> */}
        <SimpleTextEditScreen></SimpleTextEditScreen>
      </Stack>
      {/* <HomeScreen /> */}
    </div>
  );
}

export default App;

import "./App.css";
import { EditorAppbar } from "./component/Appbar";
import Stack from "@mui/material/Stack";
import { Home } from "./screen/Home";
import { useState } from "react";

function App() {
  const [mapProvider, setMapProvider] = useState("google");

  return (
    <div className="App">
      <Home />
      {/* <HomeScreen /> */}
    </div>
  );
}

export default App;

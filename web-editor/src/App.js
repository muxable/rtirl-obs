import { CssBaseline } from "@mui/material";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { EditorAppbar } from "./component/Appbar";
import useIndicatorStyle from "./hooks/useIndicatorStyle";
import usePullKey from "./hooks/usePullKey";
import useStyle from "./hooks/useStyle";
import AltitudeEditor from "./screen/AltitudeEditor";
import ClockEditor from "./screen/ClockEditor";
import DistanceEditor from "./screen/DistanceEditor";
import GoogleMapsEditor from "./screen/GoogleMapsEditor";
import GoogleStreetViewEditor from "./screen/GoogleStreetViewEditor";
import HeadingEditor from "./screen/HeadingEditor";
import { Home } from "./screen/Home";
import InclinationEditor from "./screen/InclinationEditor";
import MapboxEditor from "./screen/MapboxEditor";
import NeighborhoodEditor from "./screen/NeighborhoodEditor";
import SpeedEditor from "./screen/SpeedEditor";
import WeatherEditor from "./screen/WeatherEditor";
import HeartRateEditor from "./screen/HeartRateEditor";
import editorTheme from "./theme/editorTheme";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
  const query = useQuery();
  const [pullKey, setPullKey] = usePullKey(
    query.get("pullKey") ?? "rm0qb5jr0qtis39f"
  );
  const [textStyle, setTextStyle] = useStyle();
  const [indicatorStyle, setIndicatorStyle] = useIndicatorStyle();

  return (
    <div className="App">
      <ThemeProvider theme={editorTheme}>
        <CssBaseline />
        <Stack>
          <EditorAppbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/mapbox"
              element={
                <MapboxEditor
                  pullKey={pullKey}
                  onPullKeyChange={setPullKey}
                  indicatorStyle={indicatorStyle}
                  setIndicatorStyle={setIndicatorStyle}
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
                  indicatorStyle={indicatorStyle}
                  setIndicatorStyle={setIndicatorStyle}
                />
              }
            />
            <Route
              exact
              path="/googlestreetview"
              element={
                <GoogleStreetViewEditor
                  pullKey={pullKey}
                  onPullKeyChange={setPullKey}
                />
              }
            />
            <Route
              exact
              path="/neighborhood"
              element={
                <NeighborhoodEditor
                  pullKey={pullKey}
                  onPullKeyChange={setPullKey}
                  textStyle={textStyle}
                  onTextStyleChange={setTextStyle}
                />
              }
            />
            <Route
              exact
              path="/clock"
              element={
                <ClockEditor
                  pullKey={pullKey}
                  onPullKeyChange={setPullKey}
                  textStyle={textStyle}
                  onTextStyleChange={setTextStyle}
                />
              }
            />
            <Route
              exact
              path="/weather"
              element={
                <WeatherEditor
                  pullKey={pullKey}
                  onPullKeyChange={setPullKey}
                  textStyle={textStyle}
                  onTextStyleChange={setTextStyle}
                />
              }
            />
            <Route
              exact
              path="/speed"
              element={
                <SpeedEditor
                  pullKey={pullKey}
                  onPullKeyChange={setPullKey}
                  textStyle={textStyle}
                  onTextStyleChange={setTextStyle}
                />
              }
            />
            <Route
              exact
              path="/heading"
              element={
                <HeadingEditor
                  pullKey={pullKey}
                  onPullKeyChange={setPullKey}
                  textStyle={textStyle}
                  onTextStyleChange={setTextStyle}
                />
              }
            />
            <Route
              exact
              path="/altitude"
              element={
                <AltitudeEditor
                  pullKey={pullKey}
                  onPullKeyChange={setPullKey}
                  textStyle={textStyle}
                  onTextStyleChange={setTextStyle}
                />
              }
            />
            <Route
              exact
              path="/distance"
              element={
                <DistanceEditor
                  pullKey={pullKey}
                  onPullKeyChange={setPullKey}
                  textStyle={textStyle}
                  onTextStyleChange={setTextStyle}
                />
              }
            />
            <Route
              exact
              path="/inclination"
              element={
                <InclinationEditor
                  pullKey={pullKey}
                  onPullKeyChange={setPullKey}
                  textStyle={textStyle}
                  onTextStyleChange={setTextStyle}
                />
              }
            />
            <Route
              exact
              path="/heart_rate"
              element={
                <HeartRateEditor
                  pullKey={pullKey}
                  onPullKeyChange={setPullKey}
                  textStyle={textStyle}
                  onTextStyleChange={setTextStyle}
                />
              }
            />
          </Routes>
        </Stack>
      </ThemeProvider>
    </div>
  );
}

export default App;

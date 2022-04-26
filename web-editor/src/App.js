import './App.css';
import { EditorAppbar } from './component/Appbar';
import { Settings } from './component/Settings';
import Stack from '@mui/material/Stack';
import { MapboxMapContainer } from './component/MapboxMapContainer';

function App() {
  return (
    <div className="App">
      <Stack>
        <EditorAppbar />
        <Stack direction="row">
          <Settings></Settings>
          <MapboxMapContainer></MapboxMapContainer>
        </Stack>
      </Stack>
      {/* <HomeScreen /> */}
    </div>
  );
}

export default App;

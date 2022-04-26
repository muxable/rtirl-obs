import logo from './logo.svg';
import './App.css';
import { EditorAppbar } from './component/Appbar';
import { Settings } from './component/Settings';
import Stack from '@mui/material/Stack';
import { HomeScreen } from './screen/HomeScreen';
import { MapboxMapContainer } from './component/MapboxMapContainer';
import { EditorScreen } from './screen/EditorScreen';

function App() {
  return (
    <div className="App">
      <Stack>
        <EditorAppbar />
        <EditorScreen></EditorScreen>
      </Stack>
      {/* <HomeScreen /> */}
    </div>
  );
}

export default App;

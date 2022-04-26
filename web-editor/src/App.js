import './App.css';
import { EditorAppbar } from './component/Appbar';
import Stack from '@mui/material/Stack';
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

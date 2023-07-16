
import './App.css';
import Homepage from './pages/homepage';
import { MantineProvider } from '@mantine/core';
function App() {
  return (
    <MantineProvider >

      <Homepage />
    </MantineProvider>

  );
}

export default App;

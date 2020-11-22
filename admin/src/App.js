import './App.css';
import Sidebar from './components/Sidebar';
import manages from './shared/__mocks__/manages';
import RoomFormPage from './pages/RoomFormPage';

function App() {
  return <Sidebar manages={manages} />;
}

export default App;

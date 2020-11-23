import './App.css';
import Sidebar from './components/Sidebar';
import manages from './shared/__mocks__/manages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RoomFormPage from './pages/RoomFormPage';
import Container from './components/Container';

function App() {
  return (
    <>
      <Router>
        <Container display='flex'>
          <Sidebar manages={manages} />
          <Switch>
            <Route path='/room' component={RoomFormPage} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;

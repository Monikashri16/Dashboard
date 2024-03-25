import {BrowserRouter,Routes , Route} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import BarchartData from './BarchartData';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/barchartdata" element={<BarchartData />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;

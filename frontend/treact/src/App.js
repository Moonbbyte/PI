import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Calculadora from './components/Calculadora';
function App() {
  return (
    //routes 
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/calc" exact element={<Calculadora/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

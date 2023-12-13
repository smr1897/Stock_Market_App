import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes , Route} from 'react-router-dom'
import BaseTemplate from './pages/BaseTemplate';
import Home from './pages/Home';
import Stock from '../src/Models/Stock';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element = {<BaseTemplate/>}/>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/stocks" element = {<Stock/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

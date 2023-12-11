import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes , Route} from 'react-router-dom'
import BaseTemplate from './pages/BaseTemplate';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element = {<BaseTemplate/>}/>
        <Route path = "/home" element = {<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

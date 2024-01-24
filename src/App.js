import logo from './logo.svg';
import './App.css';
import SecondContainer from './components/MyContainer';
import About from './components/About';
import AppBarTop from './components/Header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<><AppBarTop/> <SecondContainer/> </>}/>
        <Route path='/about' element={<><AppBarTop/><About/> </>}/>
      </Routes>
    </div>
    </Router>
  );
}



export default App;

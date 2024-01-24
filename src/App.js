import logo from './logo.svg';
import './App.css';
import SecondContainer from './components/MyContainer';
import About from './components/About';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<><Header/> <SecondContainer/> </>}/>
        <Route path='/about' element={<><Header/><About/> </>}/>
      </Routes>
    </div>
    </Router>
  );
}



export default App;

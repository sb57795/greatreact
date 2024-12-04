import React from "react";
import WordList from "./main";
import WordCardViewer from "./asdfg";
import Eror from "./error";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  
    const words = [
      { word: "Stork", translate: "Аист" },
      { word: "Cat", translate: "Кошка" },
      { word: "Dog", translate: "Собака" }
  ];
  return ( 
    <div>
      <Router>
      <div>

      <img src="photo_2024-12-04_12-39-30.jpg" alt=""></img>
        <nav>
         
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<WordList />} />
          <Route path="/game" element={<WordCardViewer  words={words}/>} />
          <Route path="*" element={<Eror/>} />
        </Routes>
      </div>
    </Router>
      </div>
 
   
      
    
      );
}

export default App;

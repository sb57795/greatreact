import React from "react";
import WordList from "./main";
import ParentComponent from "./card";
import WordCardViewer from"./asdfg"
import Eror from "./error";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import WordCard from "./cardtranslate";

function App() {
  
  return ( 
    <div>
      <Router>
        <div>
          <img src="photo_2024-12-04_12-39-30.jpg" alt="" />

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
            
            <Route path="/game" element={<ParentComponent /> } />
            <Route path="*" element={<Eror />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

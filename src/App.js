import React from "react";
import WordList from "./main";
import WordCardViewer from "./asdfg";
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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<WordList />} />
          <Route path="/game" element={<WordCardViewer  words={words}/>} />
        </Routes>
      </div>
    </Router>
      </div>
 
   
      
    
      );
}

export default App;

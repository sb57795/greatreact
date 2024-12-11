import React from "react";
import WordList from "./main";
import WordTrainer from "./card";
import ErrorBoundary from "./braub";
import Eror from "./error"; // Убедитесь, что это ваш компонент ошибки
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

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
                        <Route path="/game" element={<ErrorBoundary><WordTrainer /></ErrorBoundary>} />
                        <Route path="*" element={<Eror />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;

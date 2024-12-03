import React from "react";
import WordList from "./main";

import WordCardViewer from "./asdfg";

function App() {
  
    const words = [
      { word: "Stork", translate: "Аист" },
      { word: "Cat", translate: "Кошка" },
      { word: "Dog", translate: "Собака" }
  ];
  return ( 
    <div>
      <WordList/>
      <h1>Словарные карточки</h1>
      <WordCardViewer  words={words}/>
      </div>
 
   
      
    
      );
}

export default App;

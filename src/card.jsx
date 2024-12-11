import React, { useState } from 'react';
import WordCardViewer from './asdfg';

const WordTrainer = () => {
    const [studiedWordsCount, setStudiedWordsCount] = useState(0);
    
    const handleWordStudied = () => {
        setStudiedWordsCount(prevCount => prevCount + 1);
    };

    const words = [
        { id: 1, word: 'Hello', translation: 'Привет' },
        { id: 2, word: 'World', translation: 'Мир' },
        // ... другие слова
    ];

    return (
        <div>
            <h1>Словарь</h1>
            <h2>Изучено слов: {studiedWordsCount}</h2>
            <WordCardViewer words={words} onViewTranslation={handleWordStudied} />
        </div>
    );
};

export default WordTrainer;


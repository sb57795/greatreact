import React, { useState } from 'react';
import WordCardViewer from './asdfg';

const ParentComponent = () => {
    const [studiedWordsCount, setStudiedWordsCount] = useState(0);
    const wordsList = [
        { word: 'Привет', translate: 'Hello' },
        { word: 'Спасибо', translate: 'Thank you' },
        { word: 'До свидания', translate: 'Goodbye' },
    ];

    const handleViewTranslation = () => {
        setStudiedWordsCount(studiedWordsCount + 1);
    };

    return (
        <div>
            <h1>Изученные слова: {studiedWordsCount}</h1>
            <WordCardViewer 
                words={wordsList} 
                onViewTranslation={handleViewTranslation} // Убедитесь, что это передается правильно
            />
        </div>
    );
};

export default ParentComponent;



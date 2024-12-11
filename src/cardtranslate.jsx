
import React, { useState } from 'react';

const WordCard = ({ word, translation, onWordStudied }) => {
    const [showTranslation, setShowTranslation] = useState(false);

    const handleShowTranslation = () => {
        setShowTranslation(true);
        onWordStudied(); // Увеличиваем счетчик изученных слов
    };

    return (
        <div className="word-card">
            <h3>{word}</h3>
            <button onClick={handleShowTranslation}>
                {showTranslation ? translation : 'Посмотреть перевод'}
            </button>
        </div>
    );
};

export default WordCard;


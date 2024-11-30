
import './style.css';
import React, { useState } from 'react';

const WordCard = () => {
    const [isTranslationVisible, setIsTranslationVisible] = useState(false);

    const handleShowTranslation = () => {
        setIsTranslationVisible(true);
    };

    return (
        <div class="word-card">
            <h1>Stork</h1>
            <h2>sto:k</h2>
            
            {isTranslationVisible ? (
                <p>Аист</p>
            ) : (
                <button onClick={handleShowTranslation}>Показать перевод</button>
            )}
        </div>
    );
};

export default WordCard;

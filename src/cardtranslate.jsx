import React, { useState } from 'react';

function WordCard(props) {
    const { words, translate, onViewTranslation } = props; // Извлечение пропсов
    const [isTranslationVisible, setIsTranslationVisible] = useState(false);

    const handleShowTranslation = () => {
        setIsTranslationVisible(true);
        
    };

    return (
        <div className="word-card">
            <h2>{words}</h2>
            {isTranslationVisible ? (
                <p>{translate}</p>
            ) : (
                <button onClick={handleShowTranslation}>
                    Показать перевод
                </button>
            )}
        </div>
    );
};

export default WordCard;

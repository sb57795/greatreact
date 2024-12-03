
import React, { useState } from 'react';

function WordCard  (props) {
    const [isTranslationVisible, setIsTranslationVisible] = useState(false);

    const handleShowTranslation = () => {
        setIsTranslationVisible(true);
    };

    return ( 
        
           
        <div className="word-card">
            <h2>{props.words}</h2>
            {isTranslationVisible ? (
                <p>{props.translate}</p>
            ) : (
                <button onClick={handleShowTranslation}>Показать перевод</button>
            )}
        </div>
        
    );
};

export default WordCard;

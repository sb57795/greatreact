
import React, { useState } from 'react';

function WordCard  (props) {
    const [isTranslationVisible, setIsTranslationVisible] = useState(false);

    const handleShowTranslation = () => {
        setIsTranslationVisible(true);
    };

    return (
        <div className="word-card">
            <h2>{props.word}</h2>
            {isTranslationVisible ? (
                <p>{props.translate}</p>
            ) : (
                <button onClick={handleShowTranslation}>Показать перевод</button>
            )}
        </div>
    );
};

export default WordCard;



/*function Card(props) {



    return (
        <div className="word-card">
            
                
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.description}</p>
            
            
            </div>
    );
}
export default Card*/
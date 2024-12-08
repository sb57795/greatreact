import React, { useState } from 'react';
import WordCard from './cardtranslate';

function WordCardViewer(props) {
    const { words, onViewTranslation } = props; 
    const [currentIndex, setCurrentIndex] = useState(0);

    

    const nextWord = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    const previousWord = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + words.length) % words.length
        );
    };

    return (
        <div>
            <WordCard 
                word={words[currentIndex].word} 
                translate={words[currentIndex].translate} 
                onViewTranslation={onViewTranslation}
            />
            <div className="navigation">
                <button onClick={previousWord} disabled={currentIndex === 0}>Предыдущее</button>
                <button onClick={nextWord} disabled={currentIndex === words.length - 1}>Следующее</button>
            </div>
        </div>
    );
}

export default WordCardViewer;

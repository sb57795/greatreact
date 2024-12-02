import React from 'react'
import WordCard from './cardtranslate';

function CardList() {
    return (
        <React.Fragment>
            <WordCard
                word="Stork"    />
            <WordCard
                word="Stork"
                />
            <WordCard
              word="Stork" 
               />
        </React.Fragment>
    );
}
export default CardList
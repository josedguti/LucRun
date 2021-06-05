import React from 'react';

import CardItem from './CardItem';
import './Cardsapropos.css';
import Youtube from './Youtube';

function Cardsapropos() {
    return (
        <div className='cards'>
            <h1>Comment Luc Run peut vous aider?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor!</p>            
            <div className='help'>

                <div className='help1'>
                    <h3>Suivi personnalisé <i className='fas fa-running' /></h3>
                </div>

                <div className='help2'>
                    <h3>Appel hebdomadaire <i className='fas fa-running' /></h3>
                </div>

                <div className='help3'>
                    <h3>List Item <i className='fas fa-running' /></h3>
                </div>
            </div>

            <h1 className='youtube'>Video</h1>
                <Youtube embedId="yzSDJfHXfBw" />   
                
                 
            
            <div className="cards_container">
                <div className="cards_wrapper">
                    <h1>Quel entraînement running est pour vous?</h1>
                    
                    <ul className="cards_items">
                        <CardItem 
                        src='images/11.png'
                        text='Trail -20km'
                        label='Details'
                        path='/services'
                        />
                        <CardItem 
                        src='images/10.png'
                        text='Trail 20 à 50km'
                        label='Details'
                        path='/products'
                        />
                        <CardItem 
                        src='images/9.png'
                        text='Ultra +50km'
                        label='Details'
                        path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cardsapropos;

import React from 'react';
import CardItem from './CardItem';
import './Cardsapropos.css';

function Cardsapropos() {
    return (
        <div className='cards'>
            <h1>Comment Luc Run peut vous aider?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quisquam soluta culpa suscipit quo saepe minima. Veniam voluptate delectus unde eligendi in, corporis voluptates. Commodi doloremque ut et dolore ipsum.</p>
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

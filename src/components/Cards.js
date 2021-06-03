import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem 
                        src='images/3.png'
                        text='Apprendre à courir'
                        label='Details'
                        path='/services'
                        />
                        <CardItem 
                        src='images/4.png'
                        text='Santé - Bien être'
                        label='Details'
                        path='/services'
                        />
                        <CardItem 
                        src='images/5.png'
                        text='Groupe 3 à 5 personnes'
                        label='Details'
                        path='/sign-up'
                        />
                    </ul>
                    <ul className="cards_items">
                        <CardItem 
                        src='images/8.png'
                        text='10km'
                        label='Details'
                        path='/services'
                        />
                        <CardItem 
                        src='images/7.png'
                        text='Semi-Marathon'
                        label='Details'
                        path='/products'
                        />
                        <CardItem 
                        src='images/6.png'
                        text='Marathon'
                        label='Details'
                        path='/sign-up'
                        />
                    </ul>
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

export default Cards

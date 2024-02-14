import React from 'react';
import Card from './Card';
import './CardList.css'

const CardList = ({robots, onClickChange}) => {
    return (
        <div className='cardList'>
            {robots.map(robot => <Card robot={robot} key={robot.id} onClickChange={onClickChange}/>)}
        </div>
    )
}

export default CardList;
import React from 'react';
import './Card.css'

const Card = ( {robot, onClickChange} ) => {
        return (
            <div className='tc card' onClick={onClickChange} id={robot.id}>
                <img src={`https://robohash.org/${robot.id}`} alt='user-icon' id={robot.id}></img>
                <h3 id={robot.id}>{robot.name}</h3>
                <p className='f7' id={robot.id}>{robot.email}</p>
            </div>
        )
}

export default Card;
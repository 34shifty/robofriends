import React from "react";
import './DisplayRobot.css'

const DisplayRobot = ({robots, id, onClickChange}) => {
    const robot = robots[id-1];
    return (
        <div>
            <div className='tc displayedRobot'>
                <img src={`https://robohash.org/${robot.id}`} alt='user-icon'></img>
                <h1>Name: {robot.name}</h1>
                <p className="f5">Email: {robot.email}</p>
                <p className="f5">Username: {robot.username}</p>
                <p className="f5">Full Adress: {Object.values(robot.address ).filter(value => typeof(value)!='object').join(' ')}</p>
                <button onClick={onClickChange} className="previous round">&#8249;</button>
            </div>
        </div>
    )
}

export default DisplayRobot;
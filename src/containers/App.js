import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import SearchRobots from '../components/SearchRobots';
import DisplayRobot from '../components/DisplayRobot';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
    constructor () {
        super();
        this.state = {
            robots: [],
            searchValue: "",
            robotId: 1,
            displayRobot: false
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchValue: event.target.value});
    }

    onRobotClickChange = (event) => {
        this.setState({robotId: event.target.id, displayRobot: true})
    }

    onReturnButtonClickChange = () => {
        this.setState({displayRobot: false})
    }

    render () {
        const {robots, searchValue, robotId} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        if (robots.length === 0) {
            return (
                <h1>Loading...</h1>
            )
        } else {
            if (this.state.displayRobot === false) {
                return (
                    <div className='tc'>
                        <h1 className='f2 mb1'>RoboFriends</h1>                    
                        <SearchRobots>
                            <SearchBox onSearchChange={this.onSearchChange} searchValue={searchValue}/>
                            <Scroll>
                                <ErrorBoundary>
                                    <CardList robots={filteredRobots} onClickChange={this.onRobotClickChange}/>
                                </ErrorBoundary>
                            </Scroll>
                        </SearchRobots>
                    </div>
                )
            } else {
                return (
                    <div className='tc'>
                        <h1 className='f2'>RoboFriends</h1>                    
                        <DisplayRobot robots={robots} id={robotId} onClickChange={this.onReturnButtonClickChange}/>
                    </div>
                )
            }
        }
    }
}

export default App;
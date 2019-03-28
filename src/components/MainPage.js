import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import ErrorBoundary from '../components/ErrorBoundary';
import './MainPage.css';

class MainPage extends React.Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots.filter(robot => robot.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()));
    }

    render() {
        return this.props.isPending ? <h1>Loading</h1> : (
            <div className='tc'>
                <Header/>
                <SearchBox onSearchChange={this.props.onSearchChange} searchValue={this.props.searchTerm}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={this.filterRobots()} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );    
    }
}

export default MainPage;
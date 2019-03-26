import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

class App extends React.Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const filteredRobots = this.props.robots.filter(robot => robot.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()));
        return this.props.isPending ? <h1>Loading</h1> : (
            <div className='tc'>
                <Header/>
                <SearchBox onSearchChange={this.props.onSearchChange} searchValue={this.props.searchTerm}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );    
    }
}

const mapStateToProps = state => {
 return {
     searchTerm: state.searchRobots.searchTerm,
     robots: state.requestRobots.robots,
     isPending: state.requestRobots.isPending,
     error: state.requestRobots.error
 }
} 

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);
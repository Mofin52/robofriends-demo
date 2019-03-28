import React from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
import { setSearchField, requestRobots } from '../actions';

class App extends React.Component {
    render() {
        return <MainPage {...this.props}/>
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
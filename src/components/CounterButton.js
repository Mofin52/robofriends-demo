import React from 'react';

class CounterButton extends React.PureComponent {
    state = {
        count: 0
    }
    
    updateCount = () => {
        this.setState((state) => {
            return { count: state.count + 1}
        });
    }

    render() {
        return (
            <button id="counter" color={this.props.color} onClick={this.updateCount}>Count: {this.state.count}</button>
        );
    }
}

export default CounterButton;
import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  reset = () => {
    this.setState({ count: 0 })
  }

  render() {
    return (
      <div style={{ display: 'grid', justifyContent: 'center' }}>
        <p style={{ fontStyle: 'sans-serif', fontSize: '50px', textAlign: 'center' }}>{this.state.count}</p>
        <button onClick={this.increment} style={{ fontStyle: 'sans-serif', fontSize: '30px', margin: '15px', padding: '20px' }}>Increment</button>
        <button onClick={this.decrement} style={{ fontStyle: 'sans-serif', fontSize: '30px', margin: '15px', padding: '20px' }}>Decrement</button>
        <button onClick={this.reset} style={{ fontStyle: 'sans-serif', fontSize: '30px', margin: '15px', padding: '20px' }}>Reset</button>
      </div>
    );
  }    
}

export default App;

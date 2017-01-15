import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends React.Component {
  constructor() {
    super();
    // Get initial state
    this.state = {
      fishes: {},
      order: {}

    };
  }

  addFish(fish) {
    // Update state
    const fishes = {...this.state.fishes};
    //Set state

  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }
}

export default App;

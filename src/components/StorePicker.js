import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    console.log('You changed the URL');
    // First grab the text from the box
    const storeId = this.storeInput.value;
    // Second we are going to transition from  / to / store/:storeid
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    // Any where else
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
      {/* This is how you write a comment in JSX */}
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}}/>
        <button type="submit" >Visit Store →</button>
      </form>
    )
  }

}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;

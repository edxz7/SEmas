import React, { Component } from "react";

class ToggleSidebar extends Component {
  state = {
    on:true
  }

  toggle = () => {
    this.setState({ on: !this.state.on });
  }

  render() {
    return (
      <div >
          {this.state.on && this.props.children}
          <button onClick={this.toggle}></button>
      </div>
    );
  }
}


export default ToggleSidebar;
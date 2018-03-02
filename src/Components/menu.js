import React, { Component } from 'react';

import '../App.css'

class Menu extends Component {
  constructor(props) {
    super (props);

    this.state = {
      homeStyle: "menu-bar-element-active",
      aboutStyle: "menu-bar-element",
      contactStyle: "menu-bar-element"
    }
  }


  handleClickHome = () => {
    this.setState ({
      homeStyle: "menu-bar-element-active",
      aboutStyle: "menu-bar-element",
      contactStyle: "menu-bar-element"
    });
  }

  handleClickAbout = () => {
    this.setState ({
      homeStyle: "menu-bar-element",
      aboutStyle: "menu-bar-element-active",
      contactStyle: "menu-bar-element"
    });
  }

  handleClickContact = () => {
    this.setState ({
      homeStyle: "menu-bar-element",
      aboutStyle: "menu-bar-element",
      contactStyle: "menu-bar-element-active"
    });
  }

  render() {
    return (
      <div className="menu">
        <ul className="menu-bar">
          <div
            className={this.state.homeStyle}
            onClick={this.handleClickHome}>
              Home
          </div>

          <div
            className={this.state.aboutStyle}
            onClick={this.handleClickAbout}>
              About
          </div>
          <div
            className={this.state.contactStyle}
            onClick={this.handleClickContact}> Contact</div>
        </ul>
      </div>
    );
  }
}

export default Menu;
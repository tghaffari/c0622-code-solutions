import React from 'react';

export default class HandleNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuBarsClicked: false
    };
    this.handleMenuBarsClick = this.handleMenuBarsClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleMenuBarsClick() {
    this.setState({ menuBarsClicked: true });
  }

  closeMenu() {
    this.setState({ menuBarsClicked: false });
  }

  render() {
    if (!this.state.menuBarsClicked) {
      return (
        <i onClick={this.handleMenuBarsClick}className="fa-solid fa-bars bars"></i>
      );
    } else if (this.state.menuBarsClicked) {
      return (
        <div className="flex-container">
          <div onClick={this.closeMenu}className="background"></div>
          <div className="menu-background">
            <h1 className="menu-header">Menu</h1>
            <div onClick={this.closeMenu}>
              <p className="menu-text">About</p>
              <p className="menu-text"> Get Started</p>
              <p className="menu-text">Sign In</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

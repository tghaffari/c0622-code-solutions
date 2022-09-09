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
    const view = this.state.menuBarsClicked ? 'view' : 'hidden';
    return (
      <div className="flex-container">
        <i onClick={this.handleMenuBarsClick} className= "fa-solid fa-bars bars"></i>
        <div onClick={this.closeMenu}className={`background ${view}`}></div>
        <div className={`menu-background ${view}`}>
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

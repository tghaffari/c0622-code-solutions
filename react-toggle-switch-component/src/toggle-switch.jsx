import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.isClicked) {
      this.setState({ isClicked: true });
    } else if (this.state.isClicked) {
      this.setState({ isClicked: false });
    }
  }

  render() {
    if (!this.state.isClicked) {
      return (
          <div onClick={this.handleClick} className="row align-items-center">
            <div className="column-flex">
              <div className="background-off">
                <div className="toggle-off"></div>
              </div>
            </div>
            <div className="column-flex">
              <p className="text">OFF</p>
            </div>
          </div>
      );
    } else if (this.state.isClicked) {
      return (
        <div onClick={this.handleClick} className="row align-items-center">
          <div className="column-flex">
            <div className="background-on">
              <div className="toggle-on"></div>
            </div>
          </div>
          <div className="column-flex">
            <p className="text">ON</p>
          </div>
        </div>
      );
    }
  }
}

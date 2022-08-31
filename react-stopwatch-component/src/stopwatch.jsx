import React from 'react';

let intervalID = null;
export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      playIcon: true
    };
    this.handleSymbolClick = this.handleSymbolClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSymbolClick() {
    this.setState({ playIcon: !this.state.playIcon });
    if (this.state.playIcon) {
      intervalID = setInterval(() => {
        this.setState({ time: this.state.time + 1 });
      }, 1000);
    } else if (!this.state.playIcon) {
      clearInterval(intervalID);
    }
  }

  handleReset() {
    if (this.state.playIcon) {
      this.setState({ time: 0 });
    }
  }

  render() {
    const symbol = this.state.playIcon ? 'fa-solid fa-play symbol' : 'fa-solid fa-pause symbol';

    return (
      <div className="flex-container">
      <div className="row center">
        <div onClick={this.handleReset}className="circle">
          <div className="number">{this.state.time}</div>
        </div>
      </div>
      <div className="row center">
        <i onClick={this.handleSymbolClick}className={ symbol }></i>
      </div>
    </div>
    );
  }
}

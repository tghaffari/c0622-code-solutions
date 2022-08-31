import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numClicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ numClicks: this.state.numClicks + 1 });
  }

  render() {
    if (this.state.numClicks <= 3) {
      return <button onClick = {this.handleClick} style={{ backgroundColor: 'blue', color: 'white' }}>Hot Button</button>;
    } else if (this.state.numClicks <= 6) {
      return <button onClick={this.handleClick} style={{ backgroundColor: 'purple', color: 'white' }}>Hot Button</button>;
    } else if (this.state.numClicks <= 9) {
      return <button onClick={this.handleClick} style={{ backgroundColor: 'red', color: 'white' }}>Hot Button</button>;
    } else if (this.state.numClicks <= 12) {
      return <button onClick={this.handleClick} style={{ backgroundColor: 'orange' }}>Hot Button</button>;
    } else if (this.state.numClicks <= 15) {
      return <button onClick={this.handleClick} style={{ backgroundColor: 'yellow' }}>Hot Button</button>;
    } else if (this.state.numClicks > 15) {
      return <button onClick={this.handleClick} style={{ backgroundColor: 'white' }}>Hot Button</button>;
    }
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<CustomButton />);

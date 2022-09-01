import React from 'react';

export default class ValidatePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
  }

  handlePasswordUpdate(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const view = (this.state.password.length >= 8) ? 'hidden' : 'view';
    const symbol = (this.state.password.length >= 8) ? 'fa-solid fa-check checkmark' : 'fa-solid fa-x x';

    return (
      <form>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' placeholder='Password' value={this.state.value} onChange={this.handlePasswordUpdate}></input>
        <i className={ symbol }></i>
        <p className={`error-message ${view}`}>Your password is too short</p>
      </form>
    );
  }
}

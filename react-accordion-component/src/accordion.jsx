import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedId: null,
      open: false
    };
    this.render = this.render.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {

    this.setState({
      clickedId: event.target.getAttribute('data-id'),
      open: true
    });
    if (Number(event.target.getAttribute('data-id')) === Number(this.state.clickedId) && this.state.open) {
      this.setState({ open: false });
    }
  }

  render(props) {

    const liElements = this.props.data.map(data => {
      const classStyling = (Number(this.state.clickedId) === data.id && this.state.open) ? 'view' : 'hidden';
      return (
        < li key = { data.id } >
          <h1 className="header" data-id={data.id} onClick={this.handleClick}>{data.title}</h1>
          <p className={`description ${classStyling}`}>{data.description}</p>
        </li >
      );
    });
    return (
      <ul >
          {liElements}
      </ul>
    );
  }
}

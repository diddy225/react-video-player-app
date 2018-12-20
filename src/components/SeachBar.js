import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: '' };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.term);
    this.setState({
      term: ''
    })
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      term: value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="ui fluid input loading">
            <input
              type="text"
              placeholder="SEARCH"
              onChange={this.handleChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

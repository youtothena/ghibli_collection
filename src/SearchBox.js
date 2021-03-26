import React, { Component } from "react";

class SearchBox extends Component {
    render() {
      return (
        <input
          type="search"
          placeholder="Search..."
          onChange={this.handleChange}
        />
      );
    }
  }

export default SearchBox;
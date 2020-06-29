import React from "react";

class Searcbar extends React.Component {
  state = { term: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit}>
          <div className="fomr-group">
            <label htmlFor="video">
              <b>Search Video</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="video"
              placeholder="Search"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Searcbar;

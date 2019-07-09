import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    textInput: ""
  };
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  render() {
    return (
      <div className="home-container">
        <h4>
          Tourism in Morocco is well developed, with a strong tourist industry
          focused on the country's coast, culture, and history. Morocco has been
          one of the most politically stable countries in North Africa, which
          has allowed tourism to develop.
        </h4>
        <input
          type="text"
          name="textInput"
          placeholder="add cities"
          value={this.state.textInput}
          onChange={this.handleChange}
        />
        <button>Add Cities</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cities: state.cities
  };
};
export default connect(
  mapStateToProps,
  {}
)(Home);

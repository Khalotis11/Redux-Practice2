import React, { Component } from "react";
import { connect } from "react-redux";
import { addCities } from "../actions";

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
        <h1>Update or keep List of Cities to visit!</h1>
        <h2>{this.props.cities}</h2>
        <input
          type="text"
          name="textInput"
          placeholder="add cities"
          value={this.state.textInput}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.addCities(this.state.textInput)}>
          Add Cities
        </button>
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
  { addCities }
)(Home);

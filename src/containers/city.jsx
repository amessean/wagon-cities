import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  };

  render() {
    return (
      <div className="cities" onClick={this.handleClick} role="presentation">
        <h2>{this.props.city.name}</h2>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveCity }, dispatch);
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);

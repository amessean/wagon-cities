import React from 'react';
import { connect } from "react-redux";

const ActiveCity = (props) => {
  return (
    <div className="col-sm-7" style={{ height: "100vh" }}>
      <h2>{props.activeCity.name}</h2>
      <p>{props.activeCity.address}</p>
      <img src={props.activeCity.imageUrl} alt="" />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);

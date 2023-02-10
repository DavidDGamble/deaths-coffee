import React from "react";
import PropTypes from 'prop-types';

function Item(props) {
  return (
    <div className="item">
      <div className="details">
        <h2>{props.name}</h2>
        <h6>Origin: {props.origin}</h6>
        <h6>Price: {props.price}</h6>
        <h6>Roast: {props.roast}</h6>
        <h6><strong>Available lbs: {props.pounds}</strong></h6>
      </div>
      <button id={props.id}>Sell Pound</button>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  pounds: PropTypes.string,
  id: PropTypes.string
}

export default Item;
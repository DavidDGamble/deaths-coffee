import React from "react";
import PropTypes from 'prop-types';

function Item(props) {
  return (
    <div className="item">
      <div className="details" onClick={ () => props.whenItemClicked(props.id) }>
        <h2>{props.name}</h2>
        <h5>Origin: {props.origin}</h5>
        <h5>Roast: {props.roast}</h5>
        <h5>Price: ${props.price}/lb</h5>
        <p><strong>Available: {props.pounds}lbs</strong></p>
      </div>
      <button id={props.id}>Sell Pound</button>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.string,
  pounds: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
}

export default Item;
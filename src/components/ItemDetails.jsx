import React from "react";
import PropTypes from "prop-types";

function ItemDetails(props) {
  const { item, onClickingDelete } = props;

  return (
    <div className="item-details">
      <div className="details">
        <h2>{item.name}</h2>
        <h5>Origin: {item.origin}</h5>
        <h5>Roast: {item.roast}</h5>
        <h5>Price: ${item.price}/lb</h5>
        <p><strong>Available: {item.pounds}lbs</strong></p>
      </div>
      <button onClick={ props.onClickingEdit }>Edit Item</button>
      <button onClick={ () => onClickingDelete(item.id) }>Delete Item</button>
    </div>
  );
}

ItemDetails.propTypes = {
  item: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default ItemDetails;
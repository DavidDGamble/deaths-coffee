import React from "react";
import Item from "./Item";
import PropTypes from 'prop-types';

function ItemList(props) {
  return (
    <div className="item-list">
      {props.itemList.map((item) => 
        <Item 
          whenItemClicked={props.onItemSelection}
          whenSellPoundClicked={props.onSellPound}
          name={item.name}
          origin={item.origin}
          price={item.price}
          roast={item.roast}
          pounds={item.pounds}
          id={item.id} 
          key={item.id}/>
      )}
    </div>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func,
  onSellPound: PropTypes.func
};

export default ItemList;
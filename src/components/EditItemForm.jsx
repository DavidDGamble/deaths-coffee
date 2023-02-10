import React from "react";
import PropTypes from "prop-types";

function EditItemForm(props) {
  const { item } = props;

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      pounds: event.target.pounds.value,
      id: item.id
    });
  }

  return (
    <div className="edit-form">
      <form onSubmit={handleEditItemFormSubmission}>
        <input
          type="text"
          name="name"
          placeholder={item.name} />
        <input
          type="text"
          name="origin"
          placeholder={item.origin} />
          <input
            type="text"
            name="roast"
            placeholder={item.roast} />
        <input
          type="text"
          name="price"
          placeholder={item.price} />
        <input
          type="text"
          name="pounds"
          placeholder={item.pounds} />
        <button type="submit">Edit Item</button>
      </form>
    </div>
  );
}

EditItemForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func
}

export default EditItemForm;
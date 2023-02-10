import React from "react";
import PropTypes from "prop-types";
import Form from "./Form";
import { v4 } from "uuid";

function NewItemForm(props) {
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      pounds: "130",
      id: v4()
    });
  }
  
  return (
    <div className="new-item-form">
      <Form
        formSubmissionHandler={handleNewItemFormSubmission}
        buttonText="Add Item" />
    </div>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;
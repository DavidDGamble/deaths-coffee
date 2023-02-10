import React from "react";
import PropTypes from "prop-types";

function Form(props) {
  return (
    <div className="form">
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name" /><br/>
        <input
          type="text"
          name="origin"
          placeholder="Origin" /><br/>
          <input
            type="text"
            name="roast"
            placeholder="Roast" /><br/>
        <input
          type="text"
          name="price"
          placeholder="Price" /><br/>
        <button type="submit">{props.buttonText}</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default Form;
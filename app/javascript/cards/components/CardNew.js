import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createCard } from "../actions";

class CardNew extends React.Component {
  onSubmit = formValues => {
    this.props.createCard(formValues, () => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div>
            <label>Title</label>
            <div>
              <Field name="title" component="input" type="text" />
            </div>
          </div>
          <div>
            <label>Photo</label>
            <div>
              <Field name="photo" component="input" type="text" />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "newCardForm" })(
  connect(
    null,
    { createCard }
  )(CardNew)
);

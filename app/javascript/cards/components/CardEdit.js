import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchCard, editCard } from "../actions";

class CardEdit extends React.Component {
  componentDidMount() {
    this.props.fetchCard(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editCard(formValues);
    // this.props.history.push(`/cards/${this.props.card.id}`)
    // this.props.history.push("/")
    // this.props.editCard(formValues, () => {
    //   this.props.history.push("/");
    // });
    // this.props.editCard(formValues, () => {
    //   this.props.history.push(`/cards/${this.props.card.id}`, this.props.card)
    // })
  };

  render() {
    if (!this.props.card) {
      return null;
    }
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div>
            <label>Title</label>
            <div>
              <Field
                name="title"
                component="input"
                type="text"
                value={this.props.card.title}
              />
            </div>
          </div>
          <div>
            <label>Photo</label>
            <div>
              <Field
                name="photo"
                component="input"
                type="text"
                value={this.props.card.photos}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.cards[ownProps.match.params.id],
    initialValues: state.cards[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchCard, editCard }
)(reduxForm({ form: "editCardForm", enableReinitialize: true })(CardEdit));

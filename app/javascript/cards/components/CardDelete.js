import React from "react";
import { connect } from "react-redux";
import { fetchCard, deleteCard } from "../actions";
import Modal from "./Modal";
import { history } from "./App";

class CardDelete extends React.Component {
  componentDidMount() {
    this.props.fetchCard(this.props.match.params.id);
  }

  onClickDelete = () => {
    this.props.deleteCard(this.props.match.params.id);
    // this.props.history.push("/");
  };

  onDismiss = () => {
    history.push("/");
  };

  render() {
    const actions = (
      <React.Fragment>
        <button className="ui button" onClick={this.onDismiss}>
          Cancel
        </button>
        <button className="ui button red" onClick={this.onClickDelete}>
          Delete
        </button>
      </React.Fragment>
    );

    return (
      <div>
        <Modal
          header="Delete Card"
          body="Do you want to delete this card?"
          actions={actions}
          onDismiss={this.onDismiss}
        />
        Are you sure?
        <button onClick={this.onClickDelete} className="ui red button">
          Delete
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.cards[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchCard, deleteCard }
)(CardDelete);

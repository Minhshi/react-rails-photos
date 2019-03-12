import React from "react";
import { connect } from "react-redux";
import { fetchCard, deleteCard } from "../actions";

class CardDelete extends React.Component {
  componentDidMount() {
    this.props.fetchCard(this.props.match.params.id);
  }

  onClickDelete = () => {
    this.props.deleteCard(this.props.match.params.id);
    // this.props.history.push("/");
  };

  render() {
    console.log(this.props.card);
    return (
      <div>
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

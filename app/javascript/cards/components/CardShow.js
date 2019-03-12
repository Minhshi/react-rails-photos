import React from "react";
import { connect } from "react-redux";
import { fetchCard } from "../actions";
import Card from "./Card";
import { Link } from "react-router-dom";

class CardShow extends React.Component {
  componentDidMount() {
    this.props.fetchCard(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    if (!this.props.card) {
      return null;
    }
    return (
      <div>
        Card Edit
        <Card card={this.props.card} />
        <Link
          to={`/cards/edit/${this.props.card.id}`}
          className="ui button primary"
        >
          Edit
        </Link>
        <Link
          to={`/cards/delete/${this.props.card.id}`}
          className="ui red button"
        >
          Delete
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.cards[ownProps.match.params.id]
  };
};

// find function
// const mapStateToProps = (state, ownProps) => {
//   return {
//     card: state.cards.find(card =>
//         card.id === ownProps.match.params.id)
//   }
// }

export default connect(
  mapStateToProps,
  { fetchCard }
)(CardShow);

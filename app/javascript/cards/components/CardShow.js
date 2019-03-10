import React from "react";
import { connect } from "react-redux";
import { fetchCard } from "../actions";
import Card from "./Card";

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

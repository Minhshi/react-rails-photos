import React from "react";
import { connect } from "react-redux";
import { fetchCards } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";

class CardsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCards();
  }

  render() {
    return (
      <div>
        <div>Cards Index</div>
        <div>
          {this.props.cards.map(card => {
            return (
              <Link to={`/cards/${card.id}`} key={card.id}>
                <Card card={card} key={card.id} />;
              </Link>
            );
          })}
        </div>
        <div>
          <Link to="/cards/new" className="ui button primary">
            Add Card
          </Link>
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // cards: state.cards
    cards: Object.values(state.cards)
  };
};

export default connect(
  mapStateToProps,
  { fetchCards }
)(CardsIndex);

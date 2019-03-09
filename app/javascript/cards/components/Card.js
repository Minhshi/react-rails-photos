import React from "react";

class Card extends React.Component {
  render() {
    return <div>Title: {this.props.card.title}</div>;
  }
}

export default Card;

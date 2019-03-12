import React from "react";
import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1490380169520-0a4b88d52565?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
        <div className="content">
          <div className="header">{this.props.card.title}</div>
        </div>
      </div>
    );
  }
}

export default Card;

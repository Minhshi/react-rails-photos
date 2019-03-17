import React from "react";
import ReactDOM from "react-dom";
import { history } from "./App";

class Modal extends React.Component {
  onModalBackgroundClick = () => {
    history.push("/");
  };

  onModalClick = event => {
    event.stopPropagation();
  };

  render() {
    return ReactDOM.createPortal(
      <div
        className="ui dimmer modals visible active"
        onClick={this.onModalBackgroundClick}
      >
        <div
          className="ui standard modal visible active"
          onClick={this.onModalClick}
        >
          <div className="header">Delete Card</div>
          <div className="content">Do you want to delete this card?</div>
          <div className="actions">
            <button className="ui button">Cancel</button>
            <button className="ui button red">Delete</button>
          </div>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}

export default Modal;

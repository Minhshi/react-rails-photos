import React from "react";
import ReactDOM from "react-dom";
import { history } from "./App";

class Modal extends React.Component {
  // onModalBackgroundClick = () => {
  //   history.push("/");
  // };

  onModalClick = event => {
    event.stopPropagation();
  };

  render() {
    return ReactDOM.createPortal(
      <div
        className="ui dimmer modals visible active"
        // onClick={this.onModalBackgroundClick}
        onClick={this.props.onDismiss}
      >
        <div
          className="ui standard modal visible active"
          onClick={this.onModalClick}
        >
          <div className="header">{this.props.header}</div>
          <div className="content">{this.props.body}</div>
          <div className="actions">{this.props.actions}</div>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}

export default Modal;

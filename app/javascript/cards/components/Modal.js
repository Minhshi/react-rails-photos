import React from "react";
import ReactDOM from "react-dom";

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div className="ui dimmer modals visible active">
        <div className="ui standard modal visible active">Modal</div>
      </div>,
      document.getElementById("modal")
    );
  }
}

export default Modal;

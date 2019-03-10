import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CardsIndex from "./CardsIndex";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Route path="/" exact component={CardsIndex} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

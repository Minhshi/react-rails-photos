import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CardsIndex from "./CardsIndex";
import CardNew from "./CardNew"
import CardShow from "./CardShow"

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Route path="/" exact component={CardsIndex} />
            <Route path="/cards/new" exact component={CardNew} />
            <Route path="/cards/show" exact component={CardShow} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createHistory as history } from "history/createBrowserHistory";
import CardsIndex from "./CardsIndex";
import CardNew from "./CardNew";
import CardEdit from "./CardEdit";
import CardDelete from "./CardDelete";
import CardShow from "./CardShow";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter history={history}>
          <div>
            <Switch>
              <Route path="/" exact component={CardsIndex} />
              <Route path="/cards/new" exact component={CardNew} />
              <Route path="/cards/edit/:id" exact component={CardEdit} />
              <Route path="/cards/delete" exact component={CardDelete} />
              <Route path="/cards/:id" exact component={CardShow} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

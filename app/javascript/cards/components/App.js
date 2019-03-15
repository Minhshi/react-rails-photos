import React from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import CardsIndex from "./CardsIndex";
import CardNew from "./CardNew";
import CardEdit from "./CardEdit";
import CardDelete from "./CardDelete";
import CardShow from "./CardShow";

export const history = createHistory();

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={CardsIndex} />
            <Route path="/cards/new" exact component={CardNew} />
            <Route path="/cards/edit/:id" exact component={CardEdit} />
            <Route path="/cards/delete/:id" exact component={CardDelete} />
            <Route path="/cards/:id" exact component={CardShow} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

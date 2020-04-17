import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ShowPage from "./show-page";
import EpisodePage from "./episode-page";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <ShowPage />
      </Route>
      <Route path="/episode/:episodeID">
        <EpisodePage />
      </Route>
    </Switch>
  </Router>
);

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListGateways from "containers/gateways/list";
import ShowGateway from "containers/gateways/show";
import UpdateGateway from "containers/gateways/update";
import CreateGateway from "containers/gateways/create";
import CreatePeripheral from "containers/peripherals/create";
import UpdatePeripheral from "containers/peripherals/update";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListGateways} />
        <Route path="/gateways/create" component={CreateGateway} />
        <Route path="/gateways/:id/edit" component={UpdateGateway} />
        <Route path="/gateways/:id" component={ShowGateway} />
        <Route
          path="/gateways/:id/peripherals/create"
          component={CreatePeripheral}
        />
        <Route
          path="/gateways/:gateway_id/peripherals/:id/edit"
          component={UpdatePeripheral}
        />
      </Switch>
    </Router>
  );
}

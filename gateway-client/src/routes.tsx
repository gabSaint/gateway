import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListGateways from "containers/gateways/list";
import ShowGateway from "containers/gateways/show";
import UpdateGateway from "containers/gateways/update";
import CreateGateway from "containers/gateways/create";
import ListPeripherals from "containers/peripherals/list";
import UpdatePeripheral from "containers/peripherals/update";
import CreatePeripheral from "containers/peripherals/create";
import Layout from "containers/layouts/layout";

export default function Routes() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/api/" component={ListGateways} />
          <Route exact path="/api/peripherals" component={ListPeripherals} />
          <Route
            path="/api/gateways/:id/peripherals/create"
            component={CreatePeripheral}
          />
          <Route
            path="/api/gateways/:gateway_id/peripherals/:id/edit"
            component={UpdatePeripheral}
          />
          <Route exact path="/api/gateways" component={ListGateways} />
          <Route path="/api/gateways/create" component={CreateGateway} />
          <Route path="/api/gateways/:id/edit" component={UpdateGateway} />
          <Route path="/api/gateways/:id" component={ShowGateway} />
        </Switch>
      </Layout>
    </Router>
  );
}

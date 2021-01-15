import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListGateways from "containers/gateways/list";
import ShowGateway from "containers/gateways/show";
import UpdateGateway from "containers/gateways/update";
import CreateGateway from "containers/gateways/create";
import ListPeripherals from "containers/peripherals/list";
import UpdatePeripheral from "containers/peripherals/update";
import CreatePeripheral from "containers/peripherals/create";
import Layout from "containers/layout";
import FlexContainer from "containers/container";
import InitialSegment from "components/segment";

export default function Routes() {
  return (
    <Router>
      <Layout>
        <FlexContainer>
          <Switch>
            <Route exact path="/" component={ListGateways} />
            <Route
              exact
              path="/peripherals"
              component={() => <ListPeripherals peripherals={[]} all />}
            />
            <Route
              path="/gateways/:id/peripherals/create"
              component={CreatePeripheral}
            />
            <Route
              path="/gateways/:gateway_id/peripherals/:id/edit"
              component={UpdatePeripheral}
            />
            <Route exact path="/gateways" component={ListGateways} />
            <Route path="/gateways/create" component={CreateGateway} />
            <Route path="/gateways/:id/edit" component={UpdateGateway} />
            <Route path="/gateways/:id" component={ShowGateway} />
          </Switch>
        </FlexContainer>
      </Layout>
    </Router>
  );
}

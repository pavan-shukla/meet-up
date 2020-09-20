import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./shared/components/header-component/header";
import ErrorBoundary from "./shared/components/error-boundary-component/error-boundary";
import Register from "./components/register-component/register";

const LazyListCompoent = React.lazy(() =>
  import("./feature-components/list-component/list")
);
const LazyReportCompoent = React.lazy(() =>
  import("./feature-components/report-component/report")
);

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <ErrorBoundary>
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route path="/" exact={true}>
                <Register />
              </Route>
              <Route path="/list">
                <LazyListCompoent />
              </Route>
              <Route path="/report">
                <LazyReportCompoent />
              </Route>
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Container>
    </Router>
  );
}

export default App;

import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { Provider } from "react-redux";
import store from "./redux/store";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import Main from "./Main";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route exact path="/pricing" component={Pricing} />
              <Route path="/" component={Main} />
            </Switch>
          </Router>
        </Provider>
      </StylesProvider>
    </div>
  );
};

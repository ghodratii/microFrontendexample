import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { Provider } from "react-redux";
import {store,persistor} from "./redux/store";
// import persistor from "./redux/store";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import ProductsTable from "./components/productsTable/productsTable";
import Main from "./Main";
import { PersistGate } from 'redux-persist/integration/react';

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <Switch>
              <Route exact path="/table" component={ProductsTable} />
              <Route path="/" component={Main} />
            </Switch>
          </Router>
          </PersistGate>
        </Provider>
      </StylesProvider>
    </div>
  );
};

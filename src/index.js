import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import Mocks from './mocks';

import {
  Home,
  Menu,
  About
} from './pages';

const RootElem = ReactDOM.createRoot(document.getElementById('root'));

Mocks.setup();

RootElem.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <div>404</div>
          </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
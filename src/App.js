import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>© 2021
          <Link to="/">
            CryptoLive.com
          </Link> All Rights Reserved.
        </Typography.Title>
        <Typography.Title level={4} style={{ color: 'white', textAlign: 'center' }}>
          Explore the World of Cryptocurrency.
        </Typography.Title>
      </div>
    </div>
  </div>
);

export default App;

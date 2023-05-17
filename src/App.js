import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import store from './store'
import Layout from "./hocks/Layout";

import Home from "./containers/Home/Home";
import Profile from "./containers/Profile/Profile";


function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;

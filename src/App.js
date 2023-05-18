import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";

import Home from "./containers/Home/Home";
import Profile from "./containers/Profile/Profile";


function App() {

  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
  );
}

export default App;

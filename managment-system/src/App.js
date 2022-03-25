import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

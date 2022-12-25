import React from "react";
import { Routes, Route } from "react-router-dom";
import Routing from "./Routing";
import AuthContextProvider from "./components/contexts/authContext";
import Header from "./components/Header";
import Main from "./components/Main";
import Private from "./pages/Private";
import BookContextProvider from "./components/contexts/bookContext";
import SearchCard from "./components/pages/SearchCard";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

const App = () => {
  return (
    <>
      <BookContextProvider>
        <AuthContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/private" element={<Private />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* <Routing /> */}
          </Routes>
        </AuthContextProvider>
      </BookContextProvider>
    </>
  );
};

export default App;

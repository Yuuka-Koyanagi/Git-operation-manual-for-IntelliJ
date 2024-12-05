import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

const App = () => (
    <Router basename="/Git-operation-manual-for-IntelliJ/">
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </Router>
);

export default App;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <header style={{ backgroundColor: "#333", color: "white", padding: "20px 10px", textAlign: "center" }}>
        <h1>IntelliJでのGit、GitHubの操作手順書</h1>
        <nav>
            <Link to="/" style={{ color: "#fff", margin: "0 10px" }}>ホーム</Link>
        </nav>
    </header>
);

export default Header;

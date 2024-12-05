import React from "react";

const Step = ({ icon, title, children }) => (
    <div style={{
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "20px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
    }}>
        <h3>
            <span role="img" aria-label="icon" style={{ marginRight: "5px" }}>{icon}</span>
            {title}
        </h3>
        {children}
    </div>
);

export default Step;

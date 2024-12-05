import React from "react";

const InfoBox = ({ children }) => (
    <div style={{
        backgroundColor: "#eaf7ff",
        padding: "10px",
        borderLeft: "4px solid #3498db",
        marginTop: "10px",
        borderRadius: "4px"
    }}>
        {children}
    </div>
);

export default InfoBox;

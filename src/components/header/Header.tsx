import React from "react";
import "./Header.css";

const Header: React.FC = () => {
    return (
        <header className="header-container">
            <div className="header-logo">NUNU</div>

            {/* Nội dung chính */}
            <div className="header-content">
                <h1 className="header-title">
                    Premium Real Estate Opportunities
                </h1>
            </div>
        </header>
    );
};

export default Header;

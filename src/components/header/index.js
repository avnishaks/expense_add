import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Expense Tracker
          <i class="fi-rr-credit-card" />.
        </div>
        <div className="header-button">
          <a
            href="https://github.com/avnishaks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="devicon-github-original colored" />
            Git-Hub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

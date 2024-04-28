import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

/**
 * Header
 * Logo
 * Nav items
 * Body
 * meal of the day
 * Search /filter by country /cuisine
 * Recipe container
 * youtube tutorial video
 * ingredients list
 * footer
 * Copyright
 * Links
 * contact
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

const Applayout = () => {
  return <div className="app">//Header</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
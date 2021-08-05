import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div id="navbar">
        <a className="active" href="javascript:void(0)">
          Landkit.
        </a>
        <div>
          <a href="javascript:void(0)">Landings</a>
          <a href="javascript:void(0)">Pages</a>
          <a href="javascript:void(0)">Account</a>
          <a href="javascript:void(0)">Documentation</a>
        </div>
        <Link className="nav_button" to="/buynowpage">
          <div style={{ color: "white" }}>Buy now</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

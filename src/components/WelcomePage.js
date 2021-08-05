import React, { useEffect, useState } from "react";
import classes from "./WelcomePage.module.css";
import googleimage from "../assets/images/googleimage.png";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      <div className={classes.welcome}>
        <div>
          <h1>
            Welcome to
            <span className={classes.landkit}> Landkit.</span>
            <br /> Develop anything.
          </h1>
          <p className={classes["heading_2"]}>
            Build a beautiful, modern website with flexible
            <br />
            Bootstrap components built from scratch.
          </p>
          <div>
            <Link to="/viewpage">
              <button className={classes.viewButton}>View all Pages 🡢</button>
            </Link>

            <button className={classes.documentation}>Documentation</button>
          </div>
        </div>
        <img className={classes.imagestyle} src={googleimage} />
      </div>
    </>
  );
};

export default WelcomePage;

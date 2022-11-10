import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Good food choices are good investments. </h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum amet leo.{" "}
            </p>
            <button>Order Now</button>
            <button>Learn More</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </header>
  );
}

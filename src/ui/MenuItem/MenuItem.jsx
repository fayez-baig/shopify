import React, { Component } from "react";
// import "./menu-item.scss";

const TxMenuItem = (props) => {
  const { title, imageUrl } = props;
  return (
    <div className="jr-card pb-2">
      <div className="jr-card-thumb">
        <img
          className="card-img-top img-fluid"
          src={imageUrl}
          alt="toa-heftiba"
        />
      </div>
      <div className="jr-card-social ">
        <div className="row justify-content-center">
          <ul className="social-link">
            <li>
              <span className="jr-link align-items-center">
                {title.toUpperCase()} &nbsp;
                <i className="zmdi zmdi-shopping-cart zmdi-hc-lg" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TxMenuItem;

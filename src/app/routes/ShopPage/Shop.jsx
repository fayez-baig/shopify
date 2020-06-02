import React, { Component } from "react";
import ShopData from "./ShopData";
import CollectionPreview from "../ShopPage/CollectionPreview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData,
    };
  }
  render() {
    const { collections } = this.state;
    const heading = "shop";
    return (
      <div className="app-wrapper">
        <h1 className="heading">{heading.toUpperCase()}</h1>
        {collections.map((collection) => (
          <CollectionPreview key={collection.id} {...collection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

/* <div className="col-xl-3 col-md-4 col-sm-6 col-12">
      <div className="card product-item">
        <div className="card-header border-0 p-0">
          <div className="card-image">
            <div className="grid-thumb-equal">
              <span
                className="grid-thumb-cover jr-link"
                style={{
                  backgroundImage: `url(${props.imageUrl})`,
                }}
              ></span>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="product-details">
            <h3 className="card-title fw-regular">{props.name}</h3>
            <div className="d-flex ">
              <h3 className="card-title">{props.price}</h3>
            </div>
          </div>
          <div>
            <button
              color="primary"
              variant="contained"
              className="jr-btn jr-btn-sm "
            >
              <i className="zmdi zmdi-shopping-cart" />
            </button>
          </div>
        </div>
      </div>
    </div> */

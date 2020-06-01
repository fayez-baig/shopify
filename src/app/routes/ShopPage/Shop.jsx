import React, { Component } from "react";
import ShopData from "./ShopData";
import CollectionPreview from "./CollectionPreview";
// import './shop.scss';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShopData,
    };
  }
  render() {
    const { collections } = this.state;
    console.log("hello");
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

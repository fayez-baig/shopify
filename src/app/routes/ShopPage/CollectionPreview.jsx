import React, { Component } from "react";
import ProductGridItem from "../../../ui/product-grid/ProductGrid";
// import collectionItem from '../collection-item/collection-item'
// import './preview-collection.scss';
// import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => (
  <div className="collectionPreview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="row d-flex justify-content-around">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherprops }) => (
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 m-0">
            <ProductGridItem key={id} {...otherprops} />
          </div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;

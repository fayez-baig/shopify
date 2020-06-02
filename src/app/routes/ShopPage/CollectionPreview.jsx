import React, { Component } from "react";
import ProductGridItem from "../../../ui/product-grid/ProductGrid";
// import collectionItem from '../collection-item/collection-item'
// import './preview-collection.scss';
// import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => (
  <div className="collectionPreview">
    <h1 className="title" s>
      {title.toUpperCase()}
    </h1>
    <div className="preview d-flex justify-content-around">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherprops }) => (
          <ProductGridItem key={id} {...otherprops} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;

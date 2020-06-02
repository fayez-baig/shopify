import React from "react";

// import CollectionPreview from "app/routes/ShopPage/CollectionPreview";
// import { render } from "node-sass";
// import Button from '@material-ui/core/Button';
// import StarRatingComponent from 'react-star-rating-component';
// import IntlMessages from 'util/IntlMessages';

const ProductGridItem = ({ name, imageUrl, price }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0">
      <div className="card product-item">
        <div className="card-header border-0 p-0">
          <div className="card-image">
            <div className="grid-thumb-equal">
              <span
                className="grid-thumb-cover jr-link"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
              ></span>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="product-details">
            <h3 className="card-title fw-regular">{name}</h3>
            <div className="d-flex">
              <h3 className="card-title">${price}</h3>
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
    </div>
  );
};

export default ProductGridItem;

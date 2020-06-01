import React from "react";
import ProductImage from "components/dashboard/eCommerce/ProductImage";

import ContainerHeader from "components/ContainerHeader";
import IntlMessages from "util/IntlMessages";
import TxMenuItem from "../../../ui/MenuItem/MenuItem";

class HomePage extends React.Component {
  state = {
    sections: [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "hats",
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "shop/jackets",
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "shop/sneakers",
      },
      {
        title: "womens",
        imageUrl:
          "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        size: "large",
        id: 4,
        linkUrl: "shop/womens",
      },
      {
        title: "mens",
        imageUrl:
          "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        size: "large",
        id: 5,
        linkUrl: "shop/mens",
      },
    ],
  };
  render() {
    return (
      <div className="app-wrapper">
        {/* <ContainerHeader match={this.props.match} title="Home" /> */}
        <div className="row ">
          {this.state.sections
            .filter((item) => item.size !== "large")
            .map(({ id, ...otherprops }) => (
              <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                <TxMenuItem key={id} {...otherprops} />
              </div>
            ))}
        </div>
        <div className="row">
          {this.state.sections
            .filter((item) => item.size === "large")
            .map(({ id, ...otherprops }) => (
              <div className="col-md-6 col-lg-6 col-sm-12 col-12">
                <TxMenuItem key={id} {...otherprops} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default HomePage;

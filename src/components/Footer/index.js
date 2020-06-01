import React from "react";
import Button from "@material-ui/core/Button";
import IntlMessages from "util/IntlMessages";

const Footer = () => {
  return (
    <footer className="app-footer">
      <span className="d-inline-block">
        Amazing Company &copy; {new Date().getFullYear()}
      </span>
      {/* <Button
          href="#"
          target="_blank"
          size="small"
          color="primary"
        ><IntlMessages id="eCommerce.buyNow"/></Button> */}
    </footer>
  );
};
export default Footer;

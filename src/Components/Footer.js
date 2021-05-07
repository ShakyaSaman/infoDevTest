import React, { useState } from "react";
import Hr from "./HorizontalLine";

export default function Footer() {
  const [paymentslist, setPaymentsList] = useState([
    "//cdn.shopify.com/s/files/1/0264/5000/1980/files/icon-master-compressor_x32.png?v=1566288056",
    "//cdn.shopify.com/s/files/1/0264/5000/1980/files/icon-visa-compressor_x32.png?v=1566288037",
    "//cdn.shopify.com/s/files/1/0264/5000/1980/files/icon-america-compressor_x32.png?v=1566288047",
    "//cdn.shopify.com/s/files/1/0264/5000/1980/files/icon-cover-compressor_x32.png?v=1566288085",
  ]);
  return (
    <>
      <Hr margin="10px" />
      <div className="footer">
        <span>
          <p>
            © 2019 LUXWatches Demo. All rights reserved. Powered by Shopify.{" "}
            <br />
            <a
              href="https://www.halothemes.com/template_category/shopify-templates/"
              title="https://www.halothemes.com/template_category/shopify-templates/"
            >
              Shopify Themes
            </a>{" "}
            by{" "}
            <a href="http://halothemes.com/" title="http://halothemes.com/">
              HaloThemes.com
            </a>
          </p>
        </span>
        <ul>
          {paymentslist.map((list, index) => (
            <li key={index}>
              <img src={list} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

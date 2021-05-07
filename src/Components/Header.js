import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";

export default function Header() {
  return (
    <>
      <div className="header-top">Free Shipping on All Orders</div>
      <div className="header-bottom">
        <div className="left-items">
          <GiHamburgerMenu />
          <AiOutlineSearch />
        </div>
        <img
          data-src="//cdn.shopify.com/s/files/1/0264/5000/1980/files/lw-logo-b.png?v=1566992556"
          src="//cdn.shopify.com/s/files/1/0264/5000/1980/files/lw-logo-b.png?v=1566992556"
          alt="watches-theme"
          data-sizes="auto"
          sizes="130px"
        />

        <div className="header-items">
          <span>NEW RELEASES</span>
          <span>MENS</span>
          <span>WOMENS</span>
          <span>JEWELRY</span>
          <span>ACCESSORIES</span>
          <span>ACCESSORIES</span>
          <span>ACCESSORIES</span>
          <span>ACCESSORIES</span>
          <span>ACCESSORIES</span>
          <span>ACCESSORIES</span>
        </div>
        <div className="right-items">
          <span>ACCOUNT</span>
          <AiOutlineUser />
          <span>CART</span>

          <AiOutlineShoppingCart />
        </div>
      </div>
    </>
  );
}

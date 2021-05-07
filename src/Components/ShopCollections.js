import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Hr from "./HorizontalLine";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
];

export default function ShopCollections() {
  const [products, setProducts] = useState([
    {
      src:
        "//cdn.shopify.com/s/files/1/0264/5000/1980/collections/image-collection-1-compressor_large.jpg?v=1569935516",
      name: "MILANCELOS",
      numbers: Math.ceil(Math.random() * 100),
    },
    {
      src:
        "//cdn.shopify.com/s/files/1/0264/5000/1980/collections/image-collection-1-compressor_large.jpg?v=1569935516",
      name: "MILANCELOS",
      numbers: Math.ceil(Math.random() * 100),
    },
    {
      src:
        "//cdn.shopify.com/s/files/1/0264/5000/1980/collections/image-collection-1-compressor_large.jpg?v=1569935516",
      name: "MILANCELOS",
      numbers: Math.ceil(Math.random() * 100),
    },
    {
      src:
        "//cdn.shopify.com/s/files/1/0264/5000/1980/collections/image-collection-1-compressor_large.jpg?v=1569935516",
      name: "MILANCELOS",
      numbers: Math.ceil(Math.random() * 100),
    },
    {
      src:
        "//cdn.shopify.com/s/files/1/0264/5000/1980/collections/image-collection-1-compressor_large.jpg?v=1569935516",
      name: "MILANCELOS",
      numbers: Math.ceil(Math.random() * 100),
    },
    {
      src:
        "//cdn.shopify.com/s/files/1/0264/5000/1980/collections/image-collection-1-compressor_large.jpg?v=1569935516",
      name: "MILANCELOS",
      numbers: Math.ceil(Math.random() * 100),
    },
  ]);

  const [gridData, getgridData] = useState([
    {
      src:
        "https://cdn.shopify.com/s/files/1/0264/5000/1980/files/2_1024x.jpg?v=1569996666",
      name: "MILANCELOS",
    },
    {
      src:
        "https://cdn.shopify.com/s/files/1/0264/5000/1980/files/2_1024x.jpg?v=1569996666",
      name: "NEW RELEASES",
    },
    {
      src:
        "https://cdn.shopify.com/s/files/1/0264/5000/1980/files/2_1024x.jpg?v=1569996666",
      name: "GIFT PACKAGES",
    },
    {
      src:
        "https://cdn.shopify.com/s/files/1/0264/5000/1980/files/2_1024x.jpg?v=1569996666",
      name: "MEN",
    },
    {
      src:
        "https://cdn.shopify.com/s/files/1/0264/5000/1980/files/2_1024x.jpg?v=1569996666",
      name: "MILANCELOS",
    },
    {
      src:
        "https://cdn.shopify.com/s/files/1/0264/5000/1980/files/2_1024x.jpg?v=1569996666",
      name: "NEW RELEASES",
    },
    // {
    //   src:
    //     "https://cdn.shopify.com/s/files/1/0264/5000/1980/files/2_1024x.jpg?v=1569996666",
    //   name: "GIFT PACKAGES",
    // },
    // {
    //   src:
    //     "https://cdn.shopify.com/s/files/1/0264/5000/1980/files/2_1024x.jpg?v=1569996666",
    //   name: "MEN",
    // },
  ]);

  return (
    <>
      <div className="collection-container">
        <div className="shop-collection-paragraph">
          <span class="shop-text">Shop The Collections</span>
          <p>
            Nam tempus turpis at metus scelerisque placerat nulla deumantos
            sollicitudin delos felis. Pellentesque diam dolor an elementum et
            lobortis at mollis ut risus. Curabitur semper sagittis mi
            condimentum...
          </p>
          <span>
            <a href="#">DISCOVER</a>
          </span>
        </div>

        <div className="products-container">
          <Carousel breakPoints={breakPoints}>
            {products.map((product, index) => (
              <div className="product-container" key={index}>
                <img src={product.src} />
                <span className="product-name">{product.name}</span>
                <span className="product-numbers">
                  {product.numbers} product
                </span>
                <span className="shop-now-btn">SHOP NOW</span>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <Hr margin="60px" />

      <div className="grid-view">
        {gridData.map((data) => (
          <div className="grid-item">
            <img src={data.src} />
            <span className="grid-text">{data.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";

export default function TopImage() {
  const switchImage = () => {
    setcurrentImg((currentImg) =>
      currentImg < images.length - 1 ? currentImg + 1 : 0
    );
  };

  useEffect(() => {
    const interval = setInterval(switchImage, 5000);
    return () => clearInterval(interval);
  }, []);

  const [images, setImages] = useState([
    "https://cdn.shopify.com/s/files/1/0264/5000/1980/files/Slide2.jpg?v=1569932794",
    "https://cdn.shopify.com/s/files/1/0264/5000/1980/files/Slide1.jpg?v=1569931891",
    "https://cdn.shopify.com/s/files/1/0264/5000/1980/files/Slide3.jpg?v=1569933096",
  ]);
  const [currentImg, setcurrentImg] = useState(0);
  const [imageTitle, setImageTitle] = useState([
    "awesome",
    "very awesome",
    "good",
  ]);
  const [imageDesc, setImageDesc] = useState([
    "This is an awesome image.This is an awesome image. ",
    "very awesome.very awesome.very awesome.very awesome.",
    "Quisquemos sodales suscipit tortor ditaemcos milancelos condimentum de cosmo lacus.",
  ]);

  return (
    <div className="top-image-container">
      <img src={images[currentImg]} />
      <div className="title-over-image">{imageTitle[currentImg]}</div>
      <div className="desc-over-image">{imageDesc[currentImg]}</div>
      <div className="shop-collection-area">SHOP THIS COLLECTION</div>
    </div>
  );
}

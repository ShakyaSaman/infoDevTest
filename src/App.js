import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GoToTop from "./Components/GoToTop";
import TopImage from "./Components/TopImage";
import ShopCollections from "./Components/ShopCollections";

import { useState, useEffect } from "react";

function App() {
  const [showgoToTop, setshowgoToTop] = useState(false);

  const handleScroll = () => {
    window.pageYOffset == 0 ? setshowgoToTop(false) : setshowgoToTop(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <TopImage />
      <ShopCollections />

      <GoToTop showgoToTop={showgoToTop} setshowgoToTop={handleScroll} />
      <Footer />
    </div>
  );
}

export default App;

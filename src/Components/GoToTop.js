import React from "react";
import { FaAngleUp } from "react-icons/fa";

export default function GoToTop({ showgoToTop, setshowgoToTop }) {
  console.log(showgoToTop);
  return (
    showgoToTop && (
      <div className="go-to-top" onClick={setshowgoToTop}>
        <a href="#top" title="Back to top">
          <FaAngleUp />
        </a>
      </div>
    )
  );
}

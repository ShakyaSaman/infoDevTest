import React from "react";

export default function HorizontalLine({ margin }) {
  return (
    <hr
      style={{
        color: "grey",
        backgroundColor: "grey",
        height: "0.1px",
        opacity: 0.4,
        width: "100vw",
        margin: ` ${margin} 0`,
      }}
    />
  );
}

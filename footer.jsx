import React from "react";

function footer() {
  var currentYear = new Date().getFullYear();
  return <p className="footer">Copyrights @ {currentYear}</p>;
}

export default footer;

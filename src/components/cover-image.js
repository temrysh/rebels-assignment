import React from "react";

export default ({ src, alt }) =>
  src ? <img src={src} alt={alt} /> : "No image available";

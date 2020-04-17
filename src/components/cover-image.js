import React from "react";
import styled from "styled-components";

const Img = styled.img`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
`;

export default ({ src, alt }) =>
  src ? <Img src={src} alt={alt} /> : "No image available";

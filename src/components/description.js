import React from "react";

export default ({ children }) => (
  <article dangerouslySetInnerHTML={{ __html: children }} />
);

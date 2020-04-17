import React from "react";

export default ({ children }) => (
  <div dangerouslySetInnerHTML={{ __html: children }} />
);

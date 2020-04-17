import React from "react";

export default ({ list = [], renderItem = () => null }) => (
  <ul>
    {list.map((item) => (
      <li key={item.id}>{renderItem(item)}</li>
    ))}
  </ul>
);

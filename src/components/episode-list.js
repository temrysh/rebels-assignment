import React from "react";
import { List } from "react-virtualized";

export default ({ list = [], renderItem = () => null }) => (
  <List
    width={300}
    height={300}
    rowHeight={30}
    rowCount={list.length}
    rowRenderer={({ key, style, index }) => (
      <div key={key} style={style}>
        {renderItem(list[index])}
      </div>
    )}
  />
);

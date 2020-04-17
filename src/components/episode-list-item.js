import React from "react";
import { NavLink } from "react-router-dom";

export default ({ item = {}, to = "#" }) => (
  <NavLink to={to}>{item.name}</NavLink>
);

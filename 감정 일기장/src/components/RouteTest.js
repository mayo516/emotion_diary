import React from "react";
import { Link } from "react-router-dom";

export default function RouteTest() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/diary"}>다이어리</Link>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

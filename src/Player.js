import React from "react";
import TigerImage from "./asset/tiger.svg";

export function Player({ x, y }) {
  const size = 20;
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        left: x - size / 2,
        top: y - size / 2
      }}

    ><img alt="ant" src={TigerImage} /></div>
  );
}

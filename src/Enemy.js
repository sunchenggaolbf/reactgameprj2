import React from "react";
import WolfImage from "./asset/wolf.svg";

export function Enemy({ x, y }) {
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
    ><img alt="ant" src={WolfImage} /></div>
  );
}

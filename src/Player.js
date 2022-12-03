import React from "react";

export function Player({ x, y }) {
  const size = 20;
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        backgroundColor: "blue",
        left: x - size / 2,
        top: y - size / 2
      }}
    />
  );
}

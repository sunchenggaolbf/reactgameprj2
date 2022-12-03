import React from "react";

export function Enemy({ x, y }) {
  const size = 100;
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        backgroundColor: "red",
        left: x - size / 2,
        top: y - size / 2
      }}
    />
  );
}

import React from "react";

export const Tile = ({ name, description }) => {
  let descriptionArray = Object.values(description);
  return (
    <div className="tile-container">
      <p className="tile tile-title">{name}</p>
      {descriptionArray.map((item, index) => (
        <p className="tile" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};

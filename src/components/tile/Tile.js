import React from "react";

export const Tile = ({ name, description, handleRemove }) => {
  let descriptionArray = Object.values(description);

  function handleRemoval() {
    if (description.hasOwnProperty("date")) {
      handleRemove(
        name,
        description.contact,
        description.date,
        description.time
      );
    } else if (description.hasOwnProperty("phone")) {
      handleRemove(name);
    }
  }

  return (
    <div className="tile-container">
      <div className="info-container">
        <p className="tile tile-title">{name}</p>
        {descriptionArray.map((item, index) => (
          <p className="tile" key={index}>
            {item}
          </p>
        ))}
      </div>
      <div className="delete-button">
        <p onClick={handleRemoval}></p>
      </div>
    </div>
  );
};

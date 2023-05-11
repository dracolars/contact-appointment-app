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

  function formatDate(date) {
    let dateArray = date.split("-");
    let year = dateArray[0];
    let month = dateArray[1];
    let day = dateArray[2];
    return `${month}/${day}/${year[2] + year[3]}`;
  }

  function formatTime(time) {
    let timeArray = time.split(":");
    let timeOfDay = timeArray[0] < 12 ? "AM" : "PM";
    let standardTime = timeArray[0] % 12;
    if (timeArray[0] === 12) {
      standardTime = "12";
    }
    return `${standardTime}:${timeArray[1]} ${timeOfDay} `;
  }

  if (description.hasOwnProperty("phone")) {
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
  } else if (description.hasOwnProperty("date")) {
    let formatedDate = formatDate(description.date);
    let formatedTime = formatTime(description.time);
    return (
      <div className="tile-container">
        <div className="info-container">
          <p className="tile tile-title">{name}</p>
          <p className="tile tile-date">{description.contact}</p>
          <p className="tile tile-date">{` ${formatedDate} ${formatedTime}`}</p>
        </div>
        <div className="delete-button">
          <p onClick={handleRemoval}></p>
        </div>
      </div>
    );
  }
};

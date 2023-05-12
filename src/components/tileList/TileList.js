import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ items, handleRemove }) => {
  let itemsArray = items;

  sortAppointments();

  function sortAppointments() {
    if (items[0]?.hasOwnProperty("date")) {
      itemsArray.sort(function (a, b) {
        a = a.date.split("-").join("") + a.time.split(":").join("");
        b = b.date.split("-").join("") + b.time.split(":").join("");
        return a > b ? 1 : a < b ? -1 : 0;
      });
    }
  }

  return (
    <section className="tile-list">
      {itemsArray.map((contact, index) => {
        let { name, ...rest } = contact;
        return (
          <Tile
            name={name}
            description={rest}
            key={`tile_${index}`}
            handleRemove={handleRemove}
          />
        );
      })}
    </section>
  );
};

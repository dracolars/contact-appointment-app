import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ items }) => {
  return (
    <section className="tile-list">
      {items.map((contact, index) => {
        let { name, ...rest } = contact;
        return <Tile name={name} description={rest} key={`tile_${index}`} />;
      })}
    </section>
  );
};

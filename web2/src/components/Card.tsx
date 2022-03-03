import React from "react";
import pickCardImage from "./pickCardImage";

const Card: React.FC<{ num: number; reversed: boolean }> = ({
  num,
  reversed,
}) => {
  return (
    <figure>
      <img src={pickCardImage(num)} alt="tarot card" />
    </figure>
  );
};

export default Card;

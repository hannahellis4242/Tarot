import React from "react";
import pickCardImage from "./pickCardImage";
import classes from "./Card.module.css";

const Card: React.FC<{ num: number; reversed: boolean; name: string }> = ({
  num,
  reversed,
  name,
}) => {
  return (
    <figure>
      <img
        className={reversed ? classes.card_rev : classes.card}
        src={pickCardImage(num)}
        alt={name}
      />
    </figure>
  );
};

export default Card;

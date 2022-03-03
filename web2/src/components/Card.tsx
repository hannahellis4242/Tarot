import React from "react";
import card0 from "./Card/00.jpg";

const Card: React.FC<{ num: number; reversed: boolean }> = ({
  num,
  reversed,
}) => {
  return (
    <section>
      <figure>
        <img src={card0} alt="tarot card" />
      </figure>
    </section>
  );
};

export default Card;

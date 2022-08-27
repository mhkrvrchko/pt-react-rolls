import classes from "./index.module.css";

import { ProductItem } from "../ProductItem";
import { useEffect, useState } from "react";

export const ProductRoulette = () => {
  const [degree, setDegree] = useState(0);

  const DUMMY_DATA = [
    {
      id: 1,
      title: "Tuna Sushi 1",
    },
    {
      id: 1,
      title: "Tuna Sushi 2",
    },
    {
      id: 1,
      title: "Tuna Sushi 3",
    },
    {
      id: 1,
      title: "Tuna Sushi 4",
    },
  ];

  const handleRouletteClick = () => setDegree(degree + 90);

  return (
    <div className={classes.layout + ' ' + classes.background}>
      <div
        onClick={handleRouletteClick}
        className={classes.roulette}
        style={{ transform: `rotate(${degree}deg)` }}
      >
        {DUMMY_DATA.map((product, i) => (
          <ProductItem key={i} order={i} {...product} />
        ))}
        <div>
          
        </div>
      </div>
    </div>
  );
};

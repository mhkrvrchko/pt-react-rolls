import { useState } from "react";

import classes from "./index.module.css";

import { ProductItem } from "../ProductItem";

export const ProductRoulette = ({ products }) => {
  const [degree, setDegree] = useState(0);

  const handleRouletteClick = () => setDegree(degree + 90);

  return (
    <div className={classes.layout + " " + classes.background}>
      <div
        onClick={handleRouletteClick}
        className={classes.roulette}
        style={{ transform: `rotate(${degree}deg)` }}
      >
        {products.slice(0, 4).map((product, i) => (
          <ProductItem key={product.id} order={i} {...product} />
        ))}
      </div>
    </div>
  );
};
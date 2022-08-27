import { memo } from "react";

import classes from "./index.module.css";

const formatWord = (word) => {
  const colors = ["#ffa679", "#ea956c", "#ff766d", "#f87f79", "#f77c75"];

  return word.split("").map((letter, i) => {
    const colorIndex = Math.floor(Math.random() * (colors.length - 1)) + 1;
    const color = colors[colorIndex];

    return <span key={i} style={{ color }}>{letter}</span>;
  });
};

export const Title = memo(() => (
  <h1 className={classes.title}>
    <div>Welcome to</div>
    {formatWord("React")} Rolls
  </h1>
));
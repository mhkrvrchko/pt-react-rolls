import classes from "./index.module.css";

const formatWord = (word) => {
  const colors = ["#ffa679", "#ea956c", "#ff766d", "#f87f79", "#f77c75"];

  return word.split("").map((letter) => {
    const colorIndex = Math.floor(Math.random() * (colors.length - 1)) + 1;
    const color = colors[colorIndex];

    return <span style={{ color }}>{letter}</span>;
  });
};

export const Title = () => (
  <h1 className={classes.title}>
    <div>Welcome to</div>
    {formatWord("React")} Rolls
  </h1>
);
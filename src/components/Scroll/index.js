import classes from "./index.module.css";

export const Scroll = ({ children }) => {
  return <div className={classes.scroll}>{children}</div>;
};
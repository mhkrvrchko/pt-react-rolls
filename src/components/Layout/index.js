import classes from "./index.module.css";

export const Layout = ({ children, className }) => {
  return <div className={classes.layout + ' ' + className}>{children}</div>;
};
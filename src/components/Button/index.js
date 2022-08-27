import classes from "./index.module.css";

export const Button = ({ children, className, fixed, ...restProps }) => {
  return (
    <button
      className={
        classes.button +
        " " +
        (fixed ? classes.fixed : classes.flexible) +
        " " +
        (className || '')
      }
      {...restProps}
    >
      {children}
    </button>
  );
};
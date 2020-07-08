import React from "react";
import { PaperProps, Paper, makeStyles } from "@material-ui/core";
import { COLORS } from "./theme";
import classNames from "classnames";

const useStyles = makeStyles({
  primary: {
    borderColor: COLORS.YELLOW,
  },
});

interface ContentBoxProps extends PaperProps {
  color?: "primary";
}

export const ContentBox: React.FC<ContentBoxProps> = ({
  color,
  className,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Paper
      variant="outlined"
      className={classNames({
        [classes.primary]: color === "primary",
        className,
      })}
      {...props}
    />
  );
};

import { Box, makeStyles, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import React from "react";
import { checkAccountError } from "./utils";
import cn from "classnames";

const useRowStyles = makeStyles({
  value: {
    wordBreak: "break-all",
  },
  valueError: {
    color: red.A400,
    textAlign: "center",
  },
});

interface RowProps {
  label?: string;
  value: string;
  error?: boolean;
}

const Row: React.FC<RowProps> = ({ label, value, error }) => {
  const classes = useRowStyles();
  return (
    <Box marginBottom={1} display="flex">
      {label && (
        <Box marginRight={2}>
          <Typography>{label}:</Typography>
        </Box>
      )}

      <Typography
        className={cn(classes.value, {
          [classes.valueError]: error,
        })}
        component="span"
        color="primary"
      >
        {value}
      </Typography>
    </Box>
  );
};

interface AccountInfoProps {
  account: GAccount;
}

export const AccountInfo: React.FC<AccountInfoProps> = ({ account }) => (
  <Box mb={3}>
    {checkAccountError(account) ? (
      <Row value={account.name} error />
    ) : (
      <>
        <Row label="NAME" value={account.name} />
        <Row label="EMAIL" value={account.email} />
        <Row label="PASSWORD" value={account.password} />
      </>
    )}
  </Box>
);

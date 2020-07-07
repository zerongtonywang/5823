import { Box, Collapse, Typography } from "@material-ui/core";
import React from "react";

interface RowProps {
  label: string;
  value?: string;
}

const Row: React.FC<RowProps> = ({ label, value }) => (
  <Box marginBottom={1} display="flex">
    <Box marginRight={2}>
      <Typography>{label}:</Typography>
    </Box>

    <Typography component="span" color="primary">
      {value}
    </Typography>
  </Box>
);

interface AccountInfoProps {
  account?: Account;
}

export const AccountInfo: React.FC<AccountInfoProps> = ({ account }) => (
  <Collapse in={!!account}>
    <Box marginBottom={3}>
      <Row label="NAME" value={`${account?.firstName} ${account?.lastName}`} />
      <Row label="EMAIL" value={account?.email} />
      <Row label="PASSWORD" value={account?.password} />
    </Box>
  </Collapse>
);

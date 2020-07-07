import React from "react";
import { Box, Typography } from "@material-ui/core";

interface RowProps {
  label: string;
  value: string;
}

export const Row: React.FC<RowProps> = ({ label, value }) => (
  <Box marginBottom={1} display="flex">
    <Box width={100} textAlign="right" marginRight={2}>
      <Typography>{label}:</Typography>
    </Box>

    <Typography component="span" color="primary">
      {value}
    </Typography>
  </Box>
);

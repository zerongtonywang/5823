import { Box, Chip, ChipProps, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Clear";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import React from "react";

export const Notification: React.FC<ChipProps> = ({ label, ...chipProps }) => {
  return (
    <Chip
      variant="outlined"
      icon={
        <Box>
          <InfoIcon />
        </Box>
      }
      deleteIcon={<DeleteIcon />}
      label={<Typography variant="caption">{label}</Typography>}
      {...chipProps}
    />
  );
};

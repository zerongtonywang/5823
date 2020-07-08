import { Box, Chip, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Clear";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import React from "react";
import useLocalStorage from "react-use-localstorage";

export const Notification: React.FC = () => {
  const [hideTip, setHideTip] = useLocalStorage("hideTip", "");

  function handleDelete() {
    setHideTip("true");
  }

  if (hideTip === "true") {
    return null;
  }

  return (
    <Box marginTop={3}>
      <Chip
        variant="outlined"
        icon={<InfoIcon />}
        deleteIcon={<DeleteIcon />}
        label={
          <Typography variant="caption">
            Tip: You can "Add to Home Screen" for easy access.
          </Typography>
        }
        onDelete={handleDelete}
      />
    </Box>
  );
};

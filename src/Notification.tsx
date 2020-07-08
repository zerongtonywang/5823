import { Box, Typography } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import React from "react";
import { ContentBox } from "./ContentBox";

export const Notification: React.FC = () => {
  return (
    <Box marginTop={3}>
      <ContentBox>
        <Box display="flex" alignItems="center">
          <Box
            padding={1}
            alignSelf="stretch"
            display="flex"
            alignItems="center"
            bgcolor="#1d1d1d"
          >
            <InfoIcon color="disabled" />
          </Box>
          <Box paddingLeft={2} paddingRight={3} paddingY={1}>
            <Typography variant="caption">
              Tip: You can "Add to Home Screen" for easy access.
            </Typography>
          </Box>
        </Box>
      </ContentBox>
    </Box>
  );
};

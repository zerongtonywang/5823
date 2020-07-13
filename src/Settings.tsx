import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  Typography,
} from "@material-ui/core";
import React from "react";
import useLocalStorage from "react-use-localstorage";

interface SettingsProps {
  show: boolean;
}

export const Settings: React.FC<SettingsProps> = ({ show }) => {
  const [gender, setGender] = useLocalStorage("gender", "?");

  const choiceButton = (s: string): React.ReactNode => (
    <Button
      size="small"
      {...(s === gender ? { variant: "contained" } : {})}
      onClick={() => setGender(s)}
    >
      {s}
    </Button>
  );

  return (
    <Collapse in={show}>
      <Box mt={2}>
        <Box display="flex" alignItems="center">
          <Typography>GENDER: </Typography>
          <Box flex={1} ml={2}>
            <ButtonGroup fullWidth>
              {choiceButton("M")}
              {choiceButton("F")}
              {choiceButton("?")}
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
    </Collapse>
  );
};

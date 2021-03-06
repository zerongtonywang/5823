import {
  Box,
  Button,
  ButtonGroup,
  colors,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import useLocalStorage from "react-use-localstorage";

export const Settings: React.FC = () => {
  const [gender, setGender] = useLocalStorage("gender", "?");
  const [refcode, setRefcode] = useLocalStorage("refcode", "");
  const [hasValidRefcode] = useLocalStorage("hasValidRefcode", "");

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
    <Box>
      <Box>
        <TextField
          variant="outlined"
          label={`${refcode ? "YOUR" : "ENTER"} REFCODE`}
          fullWidth
          size="small"
          value={refcode}
          onChange={({ currentTarget: { value } }) => setRefcode(value)}
        />
      </Box>

      {hasValidRefcode && (
        <Box display="flex" alignItems="center" mt={2} color={colors.grey[700]}>
          <Typography>NAME GENDER: </Typography>
          <Box flex={1} ml={2.5}>
            <ButtonGroup fullWidth>
              {choiceButton("M")}
              {choiceButton("F")}
              {choiceButton("?")}
            </ButtonGroup>
          </Box>
        </Box>
      )}
    </Box>
  );
};

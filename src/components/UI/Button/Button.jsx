import React from "react";
import Button from "@mui/material/Button";

export default ({ children, variant, disableElevation = false, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      disableElevation={disableElevation}
    >
      {children}
    </Button>
  );
};

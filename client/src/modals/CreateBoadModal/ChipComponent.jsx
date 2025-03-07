import React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import * as style from "@mui/system";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";


const ChipComponent = (props) => {
  const { firstName, lastName, email, callback } = props;
  const classes = useStyles();
  return (
    <Tooltip
      TransitionComponent={Zoom}
      title={`${firstName} ${lastName}`}
      size="small"
      placement="top"
      arrow
    >
      <Chip
        onDelete={() => callback(email)}
        avatar={<Avatar>{firstName.toString()[0]}</Avatar>}
        label={firstName}
        size="small"
        color="secondary"
      />
    </Tooltip>
  );
};

export default ChipComponent;
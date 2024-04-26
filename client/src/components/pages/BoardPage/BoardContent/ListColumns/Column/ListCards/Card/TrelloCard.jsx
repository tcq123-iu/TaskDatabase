import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions, Typography } from "@mui/material";
const TrelloCard = ({ card }) => {
    return (
      <Card>
        <CardContent sx={{ paddingRight: 1.5, paddingLeft:2, paddingBottom: 0, "&:last-child": { paddingRight: 1.5, paddingLeft:2,paddingBottom: 0} }}>
          <Typography>{card?.title}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Share</Button>
        </CardActions>
      </Card>
    );
};
export default TrelloCard;

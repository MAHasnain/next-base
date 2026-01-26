import React from "react";
import { Card, CardDescription, CardTitle } from "../card";
import {
  Box,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from "@mui/material";
import { ReviewsCardProps } from "@/types/int";

const ReviewCard = ({ review, name, designation }: ReviewsCardProps) => {
  return (
    <>
      <Card style={{fontFamily: "poppins"}}>
        <CardHeader>
          <CardTitle>{review}</CardTitle>
        </CardHeader>
        <CardContent style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Box>
            <Typography style={{fontWeight: "bold", fontSize: "18px"}}>{name}</Typography>
            <Typography >{designation}</Typography>
          </Box>
          <Box>
            <Rating value={5} />
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ReviewCard;

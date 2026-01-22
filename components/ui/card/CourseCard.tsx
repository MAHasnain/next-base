import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card";
import { Box, Divider } from "@mui/material";
import { BookOpenText, Star, UsersRound } from "lucide-react";
type courseCardProps = {
  thumbnail: string;
  courseName: string;
  instructor: string;
  raiting: number;
  price: string;
  classesQty: number;
  studentsQty: number;
};

const CourseCard = ({
  thumbnail,
  courseName,
  instructor,
  raiting,
  price,
  classesQty,
  studentsQty,
}: courseCardProps) => {
  return (
    <>
      <Card
        style={{
          width: "350px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardHeader>
          <CardContent
            style={{ position: "relative", width: "100%", height: "200px" }}
          >
            <Image
              src={thumbnail}
              style={{ borderRadius: "10px", objectFit: "cover" }}
              alt="course"
              // height={200}
              // width={200}
              fill
              // sizes="(max-width: 768px) 100vw, 50vw"
            />
          </CardContent>
        </CardHeader>

        <CardTitle style={{ padding: "0 20px", fontSize: "1.2rem" }}>
          {courseName}
        </CardTitle>
        <CardContent style={{ padding: "0 20px", height: "80px" }}>
          <p>{instructor}</p>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px 0",
            }}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              <p style={{ fontWeight: "bold", fontSize: "20px", color: "red" }}>
                {raiting}
              </p>
              {Array.from({ length: Math.floor(raiting) }, (_, i) => (
                <Star key={i} style={{ fill: "#ffe300", stroke: "none" }} />
              ))}
            </span>
            <p style={{ fontWeight: "bold", fontSize: "25px" }}>{price}</p>
          </Box>
        </CardContent>
        <Divider />
        <CardFooter
          style={{ display: "flex", justifyContent: "space-between " }}
        >
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <BookOpenText width={15} />
            <p>
              <span>{classesQty} </span>
              Classes
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <UsersRound width={15} />
            <p>
              <span>{studentsQty} </span>
              Students
            </p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default CourseCard;

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card";
import { Box, Divider } from "@mui/material";
import { Book, BookOpenText, UsersRound } from "lucide-react";
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
          width: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardHeader>
          <CardContent>
            <Image src={thumbnail} height={100} width={130} alt="course" />
          </CardContent>
        </CardHeader>

        <CardTitle>{courseName}</CardTitle>
        <CardContent>
          <p>{instructor}</p>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <p>{raiting}</p>
            <p>{price}</p>
          </Box>
        </CardContent>
        <Divider />
        <CardFooter>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <BookOpenText />
              <p>
                <span>{classesQty}</span>
                Classes
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <UsersRound />
              <p>
                <span>{studentsQty}</span>
                Students
              </p>
            </div>
          </Box>
        </CardFooter>
      </Card>
    </>
  );
};

export default CourseCard;

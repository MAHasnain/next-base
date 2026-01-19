"use client";

import { Box, Typography } from "@mui/material";
import Card from "../card/CourseCard";
import CourseCard from "../card/CourseCard";

const Courses = () => {
  type courseType = {
    id: number;
    thumbnail: string;
    courseName: string;
    instructor: string;
    raiting: number;
    price: string;
    classesQty: number;
    studentsQty: number;
  };
  const courses: courseType[] = [
    {
      id: 1,
      thumbnail: "/courses/mern.webp",
      courseName: "(MERN) Full-Stack Development",
      instructor: "James Nolan",
      raiting: 4.4,
      price: "$20",
      classesQty: 12,
      studentsQty: 150,
    },
    {
      id: 2,
      thumbnail: "/courses/react.webp",
      courseName: "Design Systems With React",
      instructor: "Aria Kim",
      raiting: 4.6,
      price: "$20",
      classesQty: 12,
      studentsQty: 120,
    },
    {
      id: 3,
      thumbnail: "/courses/UiUx.webp",
      courseName: "Create Stunning Banners In Figma",
      instructor: "Elena Brooks",
      raiting: 4.9,
      price: "$20",
      classesQty: 12,
      studentsQty: 140,
    },
  ];
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", m: "" }}>
          <Typography variant="h3">Popular courses</Typography>
          <Typography>Browse All Courses</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flex: "wrap",
            justifyContent: "center",
          }}
        >
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              thumbnail={course.thumbnail}
              courseName={course.courseName}
              instructor={course.instructor}
              raiting={course.raiting}
              price={course.price}
              classesQty={course.classesQty}
              studentsQty={course.studentsQty}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Courses;

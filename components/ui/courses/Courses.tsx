"use client";

import { Box, Typography } from "@mui/material";
import Card from "../card/CourseCard";
import CourseCard from "../card/CourseCard";
import Link from "next/link";
import { courseType } from "@/types/int";

const Courses = () => {
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
      raiting: 2.6,
      price: "$90",
      classesQty: 12,
      studentsQty: 120,
    },
    {
      id: 3,
      thumbnail: "/courses/UiUx.webp",
      courseName: "Create Banners In Figma",
      instructor: "Elena Brooks",
      raiting: 3.9,
      price: "$50",
      classesQty: 12,
      studentsQty: 140,
    },
  ];
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            margin: "50px",
          }}
        >
          <Typography fontFamily="poppins" fontWeight={600} variant="h4">
            Popular courses
          </Typography>
          <Typography>
            <Link href="/courses">Browse All Courses</Link>
          </Typography>
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

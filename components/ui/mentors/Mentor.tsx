import { Box, Typography } from "@mui/material";
import { Card, CardHeader, CardTitle } from "../card";
import Image from "next/image";
import MentorCard from "./MentorCard";
import { mentors } from "@/types/int";

const Mentor = () => {
  const mentors: mentors[] = [
    {
      id: 1,
      avatar: "/mentors/mentor-1.webp",
      title: "Ethan Nakamura",
      designation: "UI/UX Strategy Consultant",
    },
    {
      id: 2,
      avatar: "/mentors/mentor-2.webp",
      title: "Shoo Thar Mien",
      designation: "Senior UX Designer",
    },
    {
      id: 3,
      avatar: "/mentors/mentor-3.webp",
      title: "Lina Carter",
      designation: "Product Design Lead",
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
          backgroundColor:"#D5EFFA",
          padding: "50px 50px"
        }}
      >
        <Typography fontFamily="poppins" fontWeight={600} variant="h4" >Meet Our Expert Mentors</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "start",
            gap: "20px",
            margin:"50px 0"
          }}
        >
          {mentors.map((mentor) => (
            <MentorCard
              key={mentor.id}
              avatar={mentor.avatar}
              name={mentor.title}
              job={mentor.designation}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Mentor;

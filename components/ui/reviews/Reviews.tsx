import { ReviewsCard } from "@/types/int";
import { Box, Typography } from "@mui/material";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const reviews: ReviewsCard[] = [
    {
      id: 1,
      review:
        "The courses transformed my career! The practical approach and expert mentorship made all the difference.",
      name: "Michelle Bennett",
      designation: "CEO, Parkview International Ltd",
    },
    {
      id: 2,
      review:
        "Engaging content and flexible learning schedules helped me upskill without disrupting my work.",
      name: "Leslie Alexander",
      designation: "Founder, TechWave Solutions",
    },
    {
      id: 3,
      review:
        "Highly recommend! The hands-on projects and supportive community boosted my confidence and skills.",
      name: "Cody Fisher",
      designation: "Product Manager, InnovateX",
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
          padding: "50px 50px",
        }}
      >
        <Typography fontFamily="poppins" fontWeight={600} variant="h4">
          What Our Learners Say
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            
            gap: "20px",
            margin: "50px 0",
          }}
        >
          {reviews.map((r) => (
            <ReviewCard
              key={r.id}
              review={r.review}
              name={r.name}
              designation={r.designation}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Reviews;

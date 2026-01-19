// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

import Courses from "@/components/ui/courses/Courses";
import Hero from "@/components/ui/hero/Hero";
import Mentor from "@/components/ui/mentors/Mentor";
import Reviews from "@/components/ui/reviews/Reviews";
import Contact from "@/components/ui/contactForm/ContactForm";
import Companies from "@/components/ui/companies/Companies";

export function page() {
  return (
    <>
      <Hero />
      <Companies />
      <Courses />
      <Mentor />
      <Reviews />
      <Contact />
    </>
  
  );
}

export default page;

import { ReactNode } from "react";

export interface mentors {
  id: number;
  avatar: string;
  title: string;
  designation: string;
}

export interface courseType {
  id: number;
  thumbnail: string;
  courseName: string;
  instructor: string;
  raiting: number;
  price: string;
  classesQty: number;
  studentsQty: number;
}

interface props {
  children: ReactNode;
}

interface MentorCardProps {
  avatar: string;
  name: string;
  job: string;
}

interface ReviewsCard {
  id: number;
  review: string;
  name: string;
  designation: string;
}

interface ReviewsCardProps {
  review: string;
  name: string;
  designation: string;
}

interface InputProps {
  label: string;
  placeholder: string;

}

interface ButtonProps {
  text: string;
  
  // onclick function
  // styling
  
}

interface TextAreaProps { 
 placeholder: string;
  
}
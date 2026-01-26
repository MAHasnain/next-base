import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { MentorCardProps } from "@/types/int";

const MentorCard = ({ avatar, name, job }: MentorCardProps) => {
  return (
    <>
      <Card
        style={{
          width: "350px",
          height: "400px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardHeader
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image src={avatar} width={180} height={180} />
        </CardHeader>

        <CardTitle style={{ fontSize: "25px" }}>{name}</CardTitle>
        <CardContent style={{ color: "gray" }}>{job}</CardContent>
      </Card>
    </>
  );
};

export default MentorCard;

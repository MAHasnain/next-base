"use client";

import { Card, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { motion } from "motion/react";
import Image from "next/image";

const Companies = () => {
  const logos = [
    "/logos/google.svg",
    "/logos/microsoft.svg",
    "/logos/airbnb.svg",
    "/logos/fedex.svg",
    "/logos/hubspot.svg",
    "/logos/walmart.svg",
  ];

  return (
    <>
      <Box sx={{ py: 8, overflow: "hidden" }}>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 4, color: "text.secondary" }}
        >
          Trusted by companies of all sizes
        </Typography>

        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <motion.div
            style={{
              display: "flex",
              gap: "110px",
            }}
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <Box key={index} sx={{ minWidth: 120 }}>
                <Image
                  src={logo}
                  alt="company logo"
                  width={120}
                  height={40}
                  style={{ opacity: 0.6 }}
                />
              </Box>
            ))}
          </motion.div>
        </Box>
      </Box>
    </>
  );
};

export default Companies;

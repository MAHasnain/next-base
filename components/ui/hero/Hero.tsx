"use client";

import Grid from "@mui/material/Grid";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import Image from "next/image";
import { BadgeCheck, Search, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 5 }, pt: 10, pb: 12 }}>
      <Grid container alignItems="center" maxWidth="xl" mx="auto" spacing={6}>
        {/* Left side text */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              mb: 3,
              color: "#22c55e",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            <BadgeCheck size={18} stroke="white" fill="#43C639" />
            <Typography color="#43C639" fontFamily="poppins" fontSize={13}>
              GET 30% OFF ON FIRST ENROLL
            </Typography>
          </Box>

          {/* Heading */}
          <Typography
            fontFamily="poppins"
            fontWeight={800}
            sx={{
              fontSize: { xs: 36, md: 64 },
              lineHeight: 1.1,
              mb: 3,
              color: "#0f172a",
            }}
          >
            Learn Engineering <br /> From Top Experts
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: 17,
              color: "#475569",
              maxWidth: 520,
              mb: 4,
            }}
          >
            Build skills with our courses and mentor from world-class companies.
          </Typography>

          {/* Search */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              maxWidth: 520,
              backgroundColor: "#fff",
              borderRadius: "999px",
              boxShadow: "0 10px 50px #E7EAFA",
              mb: 4,
            }}
          >
            <TextField
              placeholder="Search engineering courses..."
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: true,
                sx: { px: 3, py: 1.5 },
              }}
            />
            <IconButton
              sx={{
                m: 1,
                backgroundColor: "#1d4ed8",
                color: "#fff",
                width: 44,
                height: 44,
                "&:hover": { backgroundColor: "#1e40af" },
              }}
            >
              <Search size={20} />
            </IconButton>
          </Box>

          {/* Features */}
          <Grid container spacing={2}>
            {[
              "Flexible Schedules",
              "Guided Learning Paths",
              "Peer Support Community",
            ].map((item) => (
              <Grid item xs={12} sm={6} key={item}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircle2 color="#0ea5e9" size={20} />
                  <Typography fontFamily="poppins" fontSize={15}>
                    {item}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 520,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: "32px",
              }}
            />

            {/* Person Image */}
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                height: "100%",
              }}
            >
              <Image
                src="/mahila.webp"
                alt="student"
                width={600}
                height={520}
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;

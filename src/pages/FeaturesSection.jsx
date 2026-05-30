import React from "react";
import { Box, Typography, Container } from "@mui/material";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

const features = [
  {
    title: "Scientific Excellence",
    description:
      "Gynogenis delivers pharmaceutical solutions backed by advanced research, ensuring safety, efficacy, and innovation.",
    icon: ScienceRoundedIcon,
  },
  {
    title: "Patient-Centric Care",
    description:
      "Focused on improving women’s health with safe, reliable, and accessible treatments designed for real-world needs.",
    icon: HealthAndSafetyRoundedIcon,
  },
  {
    title: "Trusted Quality",
    description:
      "Adhering to global standards, every product reflects our commitment to quality, consistency, and trust.",
    icon: VerifiedRoundedIcon,
  },
];

const FeaturesSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(135deg, #e91e63 0%, #ff6fa5 50%, #f8b6c1 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow effect */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          background: "#ffffff30",
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* SECTION TITLE */}
        <Typography
          sx={{
            textAlign: "center",
            color: "#fff",
            fontSize: { xs: "28px", md: "40px" },
            fontWeight: 600,
            mb: 6,
          }}
        >
          Why Choose Gynogenis
        </Typography>

        {/* CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <Box
                key={item.title}
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  textAlign: "center",
                  color: "#fff",

                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.2)",

                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    background: "rgba(255,255,255,0.2)",
                  },
                }}
              >
                {/* ICON */}
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    background: "#ffffff22",
                  }}
                >
                  <Icon sx={{ fontSize: 34, color: "#fff" }} />
                </Box>

                {/* TITLE */}
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {item.title}
                </Typography>

                {/* DESC */}
                <Typography
                  sx={{
                    fontSize: "14px",
                    opacity: 0.9,
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
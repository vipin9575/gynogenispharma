import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import logoFam from "../assets/icons/logoFam.png";

const AboutSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: "#f7f8fc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🔥 Glow background */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          left: -100,
          width: 250,
          height: 250,
          background: "#e91e6330",
          filter: "blur(100px)",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          right: -100,
          width: 250,
          height: 250,
          background: "#ff6fa530",
          filter: "blur(100px)",
          borderRadius: "50%",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            alignItems: "center",
            gap: 8,
          }}
        >
          {/* LEFT CONTENT (TEXT) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontSize: { xs: "30px", md: "44px" },
                fontWeight: 700,
                mb: 2,
              }}
            >
              About{" "}
              <span style={{ color: "#e91e63" }}>
                Gynogenis
              </span>
            </Typography>

            <Typography
              sx={{
                color: "#555",
                lineHeight: 1.8,
                fontSize: "16px",
              }}
            >
              Gynogenis Pharmaceutical Pvt. Ltd. is a forward-thinking healthcare
              company dedicated to advancing women’s health through{" "}
              <strong>innovation</strong>, <strong>research</strong>, and
              high-quality pharmaceutical solutions.
            </Typography>

            <Typography
              sx={{
                color: "#555",
                lineHeight: 1.8,
                fontSize: "16px",
                mt: 2,
              }}
            >
              With a strong commitment to{" "}
              <strong>scientific excellence</strong> and{" "}
              <strong>global standards</strong>, we focus on improving quality
              of life by ensuring reliability, affordability, and trust in every
              product we offer.
            </Typography>

            {/* Tagline */}
            <Typography
              sx={{
                mt: 3,
                color: "#e91e63",
                fontWeight: 600,
                fontSize: "15px",
              }}
            >
              Trusted for Life
            </Typography>
          </motion.div>

          {/* RIGHT CONTENT (LOGO) */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {/* Glass card */}
              <Box
                sx={{
                  p: 5,
                  borderRadius: "24px",
                  background: "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                }}
              >
                <Box
                  component="img"
                  src={logoFam}
                  alt="Gynogenis"
                  sx={{
                    width: 280,
                    maxWidth: "100%",
                    transition: "0.4s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
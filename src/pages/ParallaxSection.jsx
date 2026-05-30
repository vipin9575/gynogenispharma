import React from "react";
import { Box, Typography, Container } from "@mui/material";
import heroBgImg from "../assets/images/famMainBgImg.jpg";

const ParallaxSection = () => {
  return (
    <>
      <Box
        sx={{
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          backgroundImage: `url(${heroBgImg})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        {/* DARK OVERLAY (important for readability) */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
          }}
        />

        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
          <Box
            sx={{
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(12px)",
              borderRadius: "16px",
              p: { xs: 3, md: 6 },
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            {/* Tagline */}
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                letterSpacing: 1,
                textTransform: "uppercase",
                color: "#fff",
                mb: 2,
              }}
            >
              Gynogenis Pharmaceutical Pvt. Ltd.
            </Typography>

            {/* Main Heading */}
            <Typography
              sx={{
                fontSize: { xs: "26px", md: "42px" },
                fontWeight: 600,
                color: "#fff",
                lineHeight: 1.3,
              }}
            >
              Advancing Women’s Healthcare
              <br />
              Through Science & Innovation
            </Typography>

            {/* Subtext */}
            <Typography
              sx={{
                mt: 2,
                fontSize: { xs: "14px", md: "16px" },
                color: "#f1f1f1",
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Committed to delivering safe, effective, and high-quality pharmaceutical solutions that improve lives and
              build a healthier future.
            </Typography>

            {/* Brand tagline */}
            <Typography
              sx={{
                mt: 3,
                fontSize: "16px",
                fontWeight: 500,
                color: "#e91e63",
              }}
            >
              Trusted for Life
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ParallaxSection;

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(135deg, #e91e63 0%, #ff6fa5 50%, #f8b6c1 100%)",
      }}
    >
      {/* Glow Effect */}
      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          right: -100,
          width: 300,
          height: 300,
          background: "#ffffff30",
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(14px)",
            borderRadius: "20px",
            p: { xs: 4, md: 6 },
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          {/* SMALL LABEL */}
          <Typography
            sx={{
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: 1,
              color: "#fff",
              mb: 2,
            }}
          >
            Gynogenis Pharmaceutical Pvt. Ltd.
          </Typography>

          {/* MAIN HEADING */}
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "38px" },
              fontWeight: 600,
              color: "#fff",
              mb: 3,
              lineHeight: 1.3,
            }}
          >
            Delivering Trusted Healthcare
            <br />
            Solutions for a Better Tomorrow
          </Typography>

          {/* SUBTEXT */}
          <Typography
            sx={{
              fontSize: "15px",
              color: "#f1f1f1",
              maxWidth: 500,
              mx: "auto",
              mb: 4,
            }}
          >
            Explore our range of high-quality pharmaceutical products designed
            to improve lives and support long-term well-being.
          </Typography>

          {/* BUTTONS */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              sx={{
                background: "#000",
                color: "#fff",
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                textTransform: "none",
                "&:hover": {
                  background: "#111",
                },
              }}
              onClick={() => navigate("/products")}
            >
              Explore Products →
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                textTransform: "none",
                borderColor: "#fff",
                color: "#fff",
                "&:hover": {
                  borderColor: "#fff",
                },
              }}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </Box>

          {/* TAGLINE */}
          <Typography
            sx={{
              mt: 4,
              fontSize: "14px",
              color: "#ffd1e0",
              fontWeight: 500,
            }}
          >
            Trusted for Life
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

// 👇 your assets
import heroBgImg from "../assets/images/famPinkBg.jpg";
import womanImg from "../assets/images/famPreganentLady.png";
import flowerImg from "../assets/images/famSmallflowerImg.png";

const PregnancyParallaxSection = () => {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        // 🔥 PARALLAX
        backgroundImage: `url(${heroBgImg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* CARD */}
        <Box
          sx={{
            position: "relative",
            background: "#FFFFFF82",
            borderRadius: "16px",
            px: { xs: 3, md: 10 },
            py: { xs: 5, md: 10 },
            textAlign: "center",
            overflow: "visible",
          }}
        >
          {/* 🌸 Flower */}
          <Box
            component="img"
            src={flowerImg}
            alt="flower"
            sx={{
              position: "absolute",
              top: 20,
              left: 30,
              width: { xs: 50, md: 80 },
              opacity: 0.8,
            }}
          />

          {/* TEXT */}
          <Typography
            sx={{
              fontSize: { xs: "26px", md: "48px" },
              fontFamily: "Georgia, serif",
              color: "#6a1b2e",
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Empowering Healthy Pregnancies!
          </Typography>

          <Typography
            sx={{
              color: "#333",
              mb: 4,
              fontSize: "16px",
            }}
          >
            Famynova empowers healthy pregnancies through our specialized
            medications.
          </Typography>

          {/* BUTTON */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e91e63",
              borderRadius: "30px",
              px: 5,
              py: 1.5,
              textTransform: "none",
              fontSize: "15px",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#b83272",
              },
            }}
          >
            Explore Our Solutions
          </Button>

          {/* 👩 WOMAN IMAGE (ABSOLUTE RIGHT) */}
          <Box
            component="img"
            src={womanImg}
            alt="pregnancy"
            sx={{
              position: "absolute",
              right: { xs: -20, md: -245 },
              top: 36,
              width: { xs: "180px", md: "500px" },
              height: { xs: "auto", md: "363px" },
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default PregnancyParallaxSection;
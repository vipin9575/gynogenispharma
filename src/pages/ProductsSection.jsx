import React from "react";
import { Box, Typography, Container } from "@mui/material";
import elestara from "../assets/images/elestara.jpg";
import coralreef from "../assets/images/coralreef.jpeg";
import famyjoy from "../assets/images/famyjoy.jpeg";

const products = [
  {
    title: "Elestara",
    description:
      "Estradiol Tablets USP 2mg formulated to support hormonal balance and women's health. Designed for effective hormone therapy with proven clinical benefits.",
    image: elestara,
  },
  {
    title: "Coralreef",
    description:
      "Coral Calcium & Vitamin D3 tablets that support bone strength, improve calcium absorption, and promote overall wellness for women.",
    image: coralreef,
  },
  {
    title: "Famyjoy",
    description:
      "Nutraceutical formulation with Cranberry, D-Mannose & Potassium Magnesium Citrate to support urinary health with a refreshing orange flavor.",
    image: famyjoy,
  },
];

const ProductsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background: "#f8f9fb",
      }}
    >
      <Container maxWidth="lg">
        {/* TITLE */}
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "42px" },
            fontWeight: 600,
            textAlign: "center",
            mb: 1,
          }}
        >
          Featured Products
        </Typography>

        {/* SUBTEXT */}
        <Typography
          sx={{
            textAlign: "center",
            color: "#666",
            mb: 6,
          }}
        >
          Discover our range of scientifically formulated products designed to
          support women's health
        </Typography>

        {/* CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {products.map((item, index) => (
            <Box
              key={index}
              sx={{
                background: "#fff",
                borderRadius: "20px",
                p: 3,
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-6px)",
                },
              }}
            >
              {/* TITLE */}
              <Typography
                sx={{
                  color: "#e91e63",
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              {/* DESC */}
              <Typography
                sx={{
                  color: "#555",
                  fontSize: "14px",
                  mb: 3,
                }}
              >
                {item.description}
              </Typography>

              {/* IMAGE (ALWAYS AT BOTTOM ✅) */}
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  borderRadius: "14px",
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductsSection;
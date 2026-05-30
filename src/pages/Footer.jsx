import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/icons/logoFam.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        color: "#fff",
        pt: { xs: 8, md: 10 },
        pb: 4,
        overflow: "hidden",

        // 🔥 Gradient background
        background:
          "linear-gradient(135deg, #e91e63 0%, #ff6fa5 50%, #d81b60 100%)",
      }}
    >
      {/* ✨ Glow layers */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          left: -100,
          width: 250,
          height: 250,
          background: "#ffffff30",
          filter: "blur(120px)",
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
          background: "#ffffff20",
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.2fr 1fr 1fr",
            },
            gap: { xs: 5, md: 8 },
          }}
        >
          {/* LEFT */}
          <Box>
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{
                width: "110px",
                mb: 2,
              }}
            />

            <Typography
              sx={{
                fontSize: "14px",
                opacity: 0.9,
                maxWidth: 300,
                mb: 3,
                lineHeight: 1.6,
              }}
            >
              Advancing women’s healthcare through innovation,
              precision science, and trusted pharmaceutical solutions.
            </Typography>

            {/* SOCIAL */}
            <Box sx={{ display: "flex", gap: 2 }}>
              {[faFacebookF, faInstagram].map((icon, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                      background: "#fff",
                      color: "#e91e63",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <FontAwesomeIcon icon={icon} />
                </Box>
              ))}
            </Box>
          </Box>

          {/* CENTER */}
          <Box>
            <Typography sx={{ fontSize: "18px", mb: 2, fontWeight: 600 }}>
              Quick Links
            </Typography>

            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Products", to: "/products" },
              { label: "Contact", to: "/contact" },
            ].map((item, i) => (
              <Typography
                key={i}
                component={Link}
                to={item.to}
                sx={{
                  display: "block",
                  mb: 1,
                  textDecoration: "none",
                  color: "#fff",
                  opacity: 0.85,
                  transition: "0.3s",
                  "&:hover": {
                    opacity: 1,
                    transform: "translateX(4px)",
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* RIGHT */}
          <Box>
            <Typography sx={{ fontSize: "18px", mb: 2, fontWeight: 600 }}>
              Contact
            </Typography>

            <Typography sx={{ mb: 2, lineHeight: 1.6, opacity: 0.9 }}>
              GYNOGENIS PHARMACEUTICALS PVT. LTD. <br/> F17A, Mitra Garden, Yani Sarani, <br/> Kolkata, Bishnupur-I (West Bengal) <br/> 700104
            </Typography>

            <Typography sx={{ mb: 1, opacity: 0.9 }}>
              Email: gynogenispharmaceuticals@gmail.com
            </Typography>

            <Typography sx={{ opacity: 0.9 }}>
              +91 8084185102
            </Typography>

            <Typography sx={{ opacity: 0.9 }}>
             Website: www.gynogenis.com
            </Typography>
          </Box>
        </Box>

        {/* DIVIDER */}
        <Box
          sx={{
            height: "1px",
            background: "rgba(255,255,255,0.2)",
            my: 5,
          }}
        />

        {/* BOTTOM */}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "14px",
            opacity: 0.8,
          }}
        >
          © {new Date().getFullYear()} Gynogenis Life Sciences • All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
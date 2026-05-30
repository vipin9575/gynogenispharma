import React from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const ContactSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        overflow: "hidden",

        // 🔥 RADIAL GRADIENT BG
        background: `
          radial-gradient(circle at 20% 20%, #ff6fa540 0%, transparent 40%),
          radial-gradient(circle at 80% 80%, #e91e6340 0%, transparent 40%),
          #f7f8fc
        `,
      }}
    >
      {/* ✨ Glow layers */}
      <Box
        sx={{
          position: "absolute",
          top: -120,
          left: -120,
          width: 300,
          height: 300,
          background: "#ff6fa540",
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -120,
          right: -120,
          width: 300,
          height: 300,
          background: "#e91e6340",
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* HEADER */}
        <Box sx={{ mb: 6 }}>
          <Typography
            sx={{
              display: "inline-block",
              background: "#ffd1e0",
              color: "#e91e63",
              px: 2,
              py: 0.5,
              borderRadius: "20px",
              fontSize: "14px",
              mb: 2,
            }}
          >
            Contact
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: 700,
            }}
          >
            Let’s <span style={{ color: "#e91e63" }}>talk</span>
          </Typography>
        </Box>

        {/* MAIN GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" },
            gap: 5,
          }}
        >
          {/* LEFT SIDE */}
          <Box>
            {/* IMAGE */}
            <Box
              component="img"
              src="https://plus.unsplash.com/premium_photo-1661286686818-5823db33959d"
              sx={{
                width: "100%",
                height: 220,
                objectFit: "cover",
                borderRadius: "20px",
                mb: 3,
                transition: "0.4s",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />

            {/* CONTACT CARDS */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                {
                  icon: <LocationOnOutlinedIcon />,
                  text: "Kolkata, West Bengal, India",
                },
                {
                  icon: <PhoneOutlinedIcon />,
                  text: "+91 8084185102",
                },
                {
                  icon: <EmailOutlinedIcon />,
                  text: "gynogenispharmaceuticals@gmail.com",
                },
              ].map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    borderRadius: "16px",

                    background: "rgba(255,255,255,0.6)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.3)",

                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Box sx={{ color: "#e91e63" }}>{item.icon}</Box>
                  <Typography sx={{ color: "#444" }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* RIGHT SIDE - FORM */}
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: "24px",

              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.3)",

              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
            }}
          >
            <Box component="form">
              <Typography sx={{ mb: 1 }}>Name</Typography>
              <TextField
                fullWidth
                placeholder="Your name"
                sx={{ mb: 3 }}
              />

              <Typography sx={{ mb: 1 }}>Email</Typography>
              <TextField
                fullWidth
                placeholder="your.email@example.com"
                sx={{ mb: 3 }}
              />

              <Typography sx={{ mb: 1 }}>Message</Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                sx={{ mb: 4 }}
              />

              <Button
                fullWidth
                variant="contained"
                sx={{
                  background: "#e91e63",
                  borderRadius: "30px",
                  py: 1.5,
                  textTransform: "none",
                  fontSize: "16px",
                  "&:hover": {
                    background: "#d81b60",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
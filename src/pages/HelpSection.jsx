import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

const HelpSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e91e63",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ flex: 1, minWidth: "280px", textAlign: { xs: "center", md: "left" } }}>
            <Typography
              sx={{
                fontSize: { xs: "32px", md: "64px" },
                color: "#fff",
                lineHeight: 1.1,
              }}
            >
              We are here to
              <br />
              help you.
            </Typography>
          </Box>

          {/* RIGHT SIDE */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              flex: 1,
              minWidth: "280px",
              pl: { md: 4 },
              borderLeft: {
                md: "1px solid rgba(255,255,255,0.5)",
              },
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "16px", md: "18px" },
                mb: 3,
                lineHeight: 1.6,
              }}
            >
              Embark on a transformative path towards improved well-being with
              Famynova’s trusted healthcare solutions
            </Typography>

            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "#fff",
                borderRadius: "30px",
                px: 4,
                py: 1.2,
                textTransform: "none",
                fontSize: "16px",
                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HelpSection;
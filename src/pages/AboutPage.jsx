import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import { useNavigate } from "react-router-dom";

const fade = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutPage = () => {
  const navigate  = useNavigate();
  return (
    <Box sx={{ background: "#f7f8fc" }}>
      
      {/* 🔥 HERO (Premium Layered) */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 12, md: 18 },
          textAlign: "center",
          color: "#fff",
          background:
            "linear-gradient(135deg, #e91e63 0%, #ff6fa5 50%, #ffc1d6 100%)",
          overflow: "hidden",
        }}
      >
        {/* Glow blobs */}
        <Box
          sx={{
            position: "absolute",
            width: 400,
            height: 400,
            background: "#ffffff40",
            filter: "blur(120px)",
            borderRadius: "50%",
            top: -120,
            left: -120,
          }}
        />

        <motion.div initial="hidden" animate="show" variants={fade}>
          <Typography fontSize={{ xs: 38, md: 64 }} fontWeight={800}>
            About Gynogenis
          </Typography>

          <Typography sx={{ mt: 2, maxWidth: 600, mx: "auto", opacity: 0.9 }}>
            Building the future of women’s healthcare through precision science,
            innovation, and trust.
          </Typography>
        </motion.div>

        {/* Glass card overlay */}
        <Box
          sx={{
            mt: 6,
            mx: "auto",
            maxWidth: 700,
            p: 4,
            borderRadius: "20px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography fontSize={18}>
            We don’t just create products — we create solutions that impact lives.
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 80,
            background: "#f7f8fc",
            borderTopLeftRadius: "50% 100%",
            borderTopRightRadius: "50% 100%",
          }}
        />       
      </Box>

      {/* 🚀 WHY WE EXIST */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <motion.div variants={fade} initial="hidden" whileInView="show">
          <Typography fontSize={36} fontWeight={700} mb={3}>
            Why We Exist
          </Typography>

          <Typography color="#555" lineHeight={1.8}>
            Women’s healthcare has long been underserved and overlooked.
            Gynogenis exists to bridge that gap by delivering scientifically
            backed, accessible, and high-quality pharmaceutical solutions.
          </Typography>
        </motion.div>
      </Container>

      {/* 📊 STATS (STRONG VISUAL IMPACT) */}
      {/* <Box sx={{ py: 10, background: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} textAlign="center">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "50+", label: "Products Developed" },
              { value: "100K+", label: "Lives Impacted" },
            ].map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Typography
                    fontSize={48}
                    fontWeight={800}
                    color="#e91e63"
                  >
                    {item.value}
                  </Typography>
                  <Typography color="#666">{item.label}</Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      {/* 🧠 VALUES (UPGRADED CARDS) */}
      <Box
        sx={{
          py: 12,
          background:
            "linear-gradient(135deg, #e91e63 0%, #ff6fa5 100%)",
          color: "#fff",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            textAlign="center"
            fontSize={40}
            fontWeight={700}
            mb={8}
          >
            What Drives Us
          </Typography>

          <Grid container spacing={2}>
            {[
              {
                title: "Science First",
                icon: ScienceRoundedIcon,
                desc: "Every solution is backed by rigorous research.",
              },
              {
                title: "Human Focus",
                icon: FavoriteRoundedIcon,
                desc: "We prioritize real patient needs over everything.",
              },
              {
                title: "Global Quality",
                icon: PublicRoundedIcon,
                desc: "We meet and exceed international standards.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Grid size={{xs: 12, md: 4}} key={i}>
                  <motion.div whileHover={{ y: -10 }}>
                    <Box
                      sx={{
                        p: 4,
                        borderRadius: "20px",
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <Icon sx={{ fontSize: 40, mb: 2 }} />
                      <Typography fontWeight={600} mb={1}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ opacity: 0.9 }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* 📍 TIMELINE (CLEAN + MODERN) */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography textAlign="center" fontSize={36} fontWeight={700} mb={6}>
          Our Journey
        </Typography>

        {[
          "Founded with a vision",
          "Expanded research capabilities",
          "Reached global markets",
        ].map((step, i) => (
          <motion.div key={i} variants={fade} initial="hidden" whileInView="show">
            <Box
              sx={{
                mb: 4,
                borderLeft: "3px solid #e91e63",
                pl: 3,
              }}
            >
              <Typography fontWeight={600} color="#e91e63">
                {step}
              </Typography>
              <Typography color="#666">
                Milestone achieved in our growth journey.
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Container>

      {/* 🚀 CTA (STRONG CLOSE) */}
      <Box
        sx={{
          py: 12,
          textAlign: "center",
          background: "#fff",
        }}
      >
        <Typography fontSize={40} fontWeight={700}>
          Let’s Build the Future Together
        </Typography>

        <Typography color="#666" mt={2}>
          Explore our innovations and be part of the journey
        </Typography>

        <Button
          sx={{
            mt: 4,
            background: "#e91e63",
            color: "#fff",
            borderRadius: "30px",
            px: 5,
            py: 1.5,
            textTransform: "none",
          }}
          onClick={() => navigate("/products")}
        >
          Explore Products →
        </Button>
      </Box>
    </Box>
  );
};

export default AboutPage;
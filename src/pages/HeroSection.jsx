import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import heroImg from "../assets/images/family.jpg";
import tabletImg from "../assets/images/tabletImg.jpg";
import docImg from "../assets/images/docImg.avif";
import docImg1 from "../assets/images/docImg1.png";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const HeroSection = () => {
  const navigate = useNavigate();

  const carouselImages = [
    heroImg,
    tabletImg,
    docImg,
    docImg1
  ];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #f6c6d0 0%, #f3d9b1 100%)",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* 🔥 Glow blobs */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          left: -100,
          width: 300,
          height: 300,
          background: "#ffffff40",
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />
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

      {/* GRID BACKGROUND (softened) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(circle at center, black 65%, transparent 100%)",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          py: 10,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            alignItems: "center",
            gap: 8,
          }}
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <Box
              sx={{
                display: "inline-block",
                background: "#f4b400",
                px: 2.5,
                py: 0.7,
                borderRadius: "30px",
                fontSize: "13px",
                mb: 3,
                fontWeight: 600,
              }}
            >
              Trusted Pharmaceutical Innovation
            </Box>

            {/* Heading */}
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "38px", md: "60px" },
                lineHeight: 1.15,
              }}
            >
              <span style={{ color: "#e91e63" }}>
                Advancing Global
              </span>
              <br />
              Health Through
              <br />
              <span style={{ color: "#333" }}>
                Scientific Innovation
              </span>
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                mt: 3,
                color: "#555",
                maxWidth: 520,
                fontSize: "16px",
                lineHeight: 1.7,
              }}
            >
              Delivering high-quality pharmaceutical solutions through
              advanced research, innovation, and a commitment to improving
              global healthcare outcomes.
            </Typography>

            {/* CTA BUTTONS */}
            <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                sx={{
                  background: "#e91e63",
                  borderRadius: "30px",
                  px: 4,
                  py: 1.2,
                  textTransform: "none",
                  "&:hover": {
                    background: "#d81b60",
                  },
                }}
                onClick={() => navigate("/products")}
              >
                Explore Products →
              </Button>

              <Button
                sx={{
                  borderRadius: "30px",
                  px: 4,
                  py: 1.2,
                  border: "1px solid #e91e63",
                  color: "#e91e63",
                  textTransform: "none",
                }}
              >
                Learn More
              </Button>
            </Box>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{ minWidth: 0, width: "100%" }}
          >
            <Box sx={{ position: "relative", minWidth: 0, width: "100%" }}>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: "300px", sm: "350px", md: "350px" },
                  borderRadius: "10px",
                  overflow: "hidden",
                  "& .swiper": {
                    width: "100%",
                    height: "100%",
                  },
                }}
              >
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  loop={true}
                  slidesPerView={1}
                >
                  {carouselImages.map((src, index) => (
                    <SwiperSlide key={index}>
                      <Box
                        component="img"
                        src={src}
                        alt={`hero-slide-${index}`}
                        sx={{
                          width: "100%",
                          height: "100%",
                          // objectFit: "cover",
                          // objectPosition: "center",
                          transition: "0.5s",
                          "&:hover": {
                            transform: "scale(1.03)",
                          },
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>

              {/* Gradient overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "24px",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.15), transparent)",
                }}
              />

              {/* Floating Card */}
              {/* <Box
                sx={{
                  position: "absolute",
                  bottom: 30,
                  left: 30,
                  background: "rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "16px",
                  p: 2.5,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                }}
              >
                <Typography variant="body2">
                  Our Trusted Collaborators
                </Typography>

                <Typography
                  variant="h4"
                  sx={{ fontWeight: 800 }}
                >
                  21K+
                </Typography>

                <Typography variant="body2">
                  Global Research Partnerships
                </Typography>
              </Box> */}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
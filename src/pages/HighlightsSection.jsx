import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const highlightItems = [
  {
    title: "Research Driven",
    description:
      "Innovating through advanced scientific research and precision-driven pharmaceutical solutions.",
    icon: ScienceRoundedIcon,
  },
  {
    title: "Patient First",
    description:
      "Prioritizing patient well-being with safe, effective, and trusted healthcare products.",
    icon: FavoriteRoundedIcon,
  },
  {
    title: "Global Standards",
    description:
      "Delivering world-class quality aligned with international healthcare standards.",
    icon: PublicRoundedIcon,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const HighlightsSection = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #e91e63 0%, #ff6fa5 50%, #f8b6c1 100%)",
        py: { xs: 10, md: 14 },
      }}
    >
      {/* 🔥 Glow Effects */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          left: -100,
          width: 300,
          height: 300,
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
          width: 300,
          height: 300,
          background: "#ffffff20",
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 2 }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            textAlign="center"
            sx={{
              color: "#fff",
              fontSize: { xs: "30px", md: "44px" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Our Core Strengths
          </Typography>

          <Typography
            textAlign="center"
            sx={{
              color: "#ffe3ec",
              maxWidth: 600,
              mx: "auto",
              mb: 8,
            }}
          >
            Built on science, trust, and global excellence to deliver meaningful healthcare solutions.
          </Typography>
        </motion.div>

        {/* Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {highlightItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: "24px",
                    textAlign: "center",
                    color: "#fff",

                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(255,255,255,0.2)",

                    transition: "0.4s",
                    cursor: "pointer",

                    "&:hover": {
                      transform: "translateY(-12px) scale(1.02)",
                      boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
                      background: "rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  {/* Icon circle */}
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      background: "rgba(255,255,255,0.2)",
                    }}
                  >
                    <Icon sx={{ fontSize: 32, color: "#fff" }} />
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: "14px",
                      opacity: 0.9,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default HighlightsSection;
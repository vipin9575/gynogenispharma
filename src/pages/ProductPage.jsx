import React, { useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import elestara from "../assets/images/elestara.jpg";
import coralreef from "../assets/images/coralreef.jpeg";
import famyjoy from "../assets/images/famyjoy.jpeg";
import intimora from "../assets/images/intimora.jpeg";
import mylq from "../assets/images/mylq.jpeg";

const products = [

  {
    title: "Elestara",
    desc: "Estradiol Tablets USP 2mg for hormonal therapy.",
    details: [
      "Supports estrogen hormone replacement therapy",
      "Helps manage menopausal symptoms effectively",
      "Clinically approved estradiol formulation",
      "Improves bone density and hormonal balance",
      "Trusted pharmaceutical-grade quality",
    ],
    img: elestara,
  },
  {
    title: "Coralreef",
    desc: "Coral Calcium & Vitamin D3 tablets.",
    details: [
      "Enhances calcium absorption with Vitamin D3",
      "Strengthens bones and teeth",
      "Supports muscle and nerve function",
      "Helps prevent calcium deficiency",
      "Ideal for daily bone health maintenance",
    ],
    img: coralreef,
  },
  {
    title: "Famyjoy",
    desc: "Urinary health nutraceutical suspension.",
    details: [
      "Contains Cranberry & D-Mannose for UTI support",
      "Promotes urinary tract health",
      "Sugar-free with orange flavor",
      "Suitable for both men and women",
      "Backed by nutraceutical research",
    ],
    img: famyjoy,
  },
  {
    title: "Intimora Attiva",
    desc: "Advanced intimate care system for daily feminine hygiene and pH balance support.",
    details: [
      "Maintains optimal intimate pH balance (3.5)",
      "Helps prevent irritation, dryness & discomfort",
      "Soap-free and paraben-free formulation",
      "Provides long-lasting freshness and daily hygiene support",
      "Safe during pregnancy and suitable for sensitive skin",
    ],
    img: intimora,
  },
  {
    title: "MyLQ",
    desc: "Mitochondrial energizer supplement supporting male reproductive wellness and vitality.",
    details: [
      "Supports sperm health and vitality",
      "Contains CoQ10, L-Carnitine & Resveratrol",
      "Enriched with Ashwagandha and Astaxanthin",
      "Includes Selenium, Lycopene & Zinc for antioxidant support",
      "Helps improve cellular energy and reproductive wellness",
    ],
    img: mylq,
  },
  // {
  //   title: "Hormo Balance",
  //   desc: "Supports hormonal balance and wellness.",
  //   details: [
  //     "Regulates hormonal imbalance naturally",
  //     "Supports menstrual health and comfort",
  //     "Improves energy and mood stability",
  //     "Clinically tested formulation",
  //     "Safe for long-term use",
  //   ],
  //   img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
  // },
  // {
  //   title: "GyneHealth",
  //   desc: "Advanced gynecological support.",
  //   details: [
  //     "Supports reproductive system health",
  //     "Helps maintain hormonal equilibrium",
  //     "Improves overall wellness",
  //     "Doctor-recommended formulation",
  //     "Backed by clinical research",
  //   ],
  //   img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  // },
  // {
  //   title: "Prenatal Care+",
  //   desc: "Pregnancy nutrition support.",
  //   details: [
  //     "Rich in folic acid and iron",
  //     "Supports fetal brain development",
  //     "Enhances maternal immunity",
  //     "Promotes healthy pregnancy",
  //     "Safe and effective formulation",
  //   ],
  //   img: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2",
  // },
  // {
  //   title: "Iron Boost",
  //   desc: "Improves iron levels.",
  //   details: [
  //     "Helps prevent iron deficiency",
  //     "Boosts hemoglobin levels",
  //     "Reduces fatigue and weakness",
  //     "Improves oxygen circulation",
  //     "Suitable for daily use",
  //   ],
  //   img: "https://images.unsplash.com/photo-1544829885-9a58b457fd5a",
  // },
  // {
  //   title: "Calcium Plus",
  //   desc: "Bone strength formula.",
  //   details: [
  //     "Strengthens bones and joints",
  //     "Improves calcium absorption",
  //     "Supports muscle function",
  //     "Reduces risk of osteoporosis",
  //     "Ideal for all age groups",
  //   ],
  //   img: "https://images.unsplash.com/photo-1626697556426-8a55a8af4999",
  // },
  // {
  //   title: "Vitamin Care",
  //   desc: "Daily essential vitamins.",
  //   details: [
  //     "Boosts immune system",
  //     "Supports daily energy levels",
  //     "Improves overall wellness",
  //     "Rich in essential nutrients",
  //     "Suitable for everyday use",
  //   ],
  //   img: "https://images.unsplash.com/photo-1707129785947-ddc627a8bab9",
  // },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ProductPage = () => {
  const [flipped, setFlipped] = useState({});
  const [rotate, setRotate] = useState({});

  const handleFlip = (index) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleMouseMove = (e, index) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;

    setRotate((prev) => ({
      ...prev,
      [index]: { x: -y, y: x },
    }));
  };

  const resetTilt = (index) => {
    setRotate((prev) => ({
      ...prev,
      [index]: { x: 0, y: 0 },
    }));
  };

  return (
    <Box sx={{ background: "#f7f8fc" }}>
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(135deg, #e91e63 0%, #ff6fa5 50%, #ffc1d6 100%)",
          py: { xs: 12, md: 16 },
          textAlign: "center",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        {/* 🔥 Glow blobs */}
        <Box
          sx={{
            position: "absolute",
            width: 350,
            height: 350,
            background: "#ffffff30",
            filter: "blur(120px)",
            borderRadius: "50%",
            top: -100,
            left: -100,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 300,
            height: 300,
            background: "#ffffff20",
            filter: "blur(100px)",
            borderRadius: "50%",
            bottom: -80,
            right: -80,
          }}
        />

        {/* ✨ Content */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Typography fontSize={{ xs: 34, md: 60 }} fontWeight={800}>
            Our <span style={{ color: "#ffe3ec" }}>Products</span>
          </Typography>

          <Typography
            sx={{
              maxWidth: "850px",
              mx: "auto",
              mt: 3,
              fontSize: { xs: "14px", md: "17px" },
              lineHeight: 1.9,
              opacity: 0.95,
            }}
          >
            At <span style={{ fontWeight: 600 }}>Gynogenis Pharmaceutical Pvt. Ltd.</span>, our product portfolio is
            thoughtfully designed to address the diverse and evolving healthcare needs of women. We combine{" "}
            <span style={{ fontWeight: 600 }}>scientific research</span>
            , clinical expertise, and advanced formulation techniques to develop solutions that are safe, effective, and
            accessible.
            <br />
            <br />
            Our range includes solutions for <span style={{ fontWeight: 600 }}>hormonal balance</span>, reproductive
            health, nutritional support, and overall wellness. Each product is developed with a commitment to{" "}
            <span style={{ fontWeight: 600 }}>innovation, quality, and trust</span>.
          </Typography>
        </motion.div>

        {/* 🎯 Bottom glass highlight */}
        <Box
          sx={{
            mt: 6,
            mx: "auto",
            maxWidth: 600,
            p: 3,
            borderRadius: "16px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography fontSize={15}>
            Delivering healthcare solutions that improve lives — <strong>Trusted for Life</strong>
          </Typography>
        </Box>

        {/* 🌊 Bottom divider (curve effect) */}
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

      <Container maxWidth={false} sx={{ py: 10, px: { xs: 3, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 4, md: 6 },
          }}
        >
          {products.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ perspective: "1200px" }}
            >
              <Box
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => resetTilt(index)}
                sx={{
                  transform: `rotateX(${rotate[index]?.x || 0}deg) rotateY(${rotate[index]?.y || 0}deg)`,
                  transition: "transform 0.2s ease",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: 460,
                    transformStyle: "preserve-3d",
                    transition: "transform 0.8s cubic-bezier(0.4,0.2,0.2,1)",
                    transform: flipped[index] ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* FRONT */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      borderRadius: "24px",
                      overflow: "hidden",
                      background: "rgba(255,255,255,0.7)",
                      backdropFilter: "blur(12px)",
                      boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-12px)",
                        boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={item.img}
                      sx={{
                        width: "100%",
                        height: 250,
                        objectFit: "cover",
                        transition: "0.5s",
                        "&:hover": {
                          transform: "scale(1.08)",
                        },
                      }}
                    />

                    <Box sx={{ p: 3 }}>
                      <Typography
                        sx={{
                          color: "#e91e63",
                          fontWeight: 700,
                          fontSize: "18px",
                          mb: 1,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography color="#555" mb={3}>
                        {item.desc}
                      </Typography>

                      <Button
                        fullWidth
                        onClick={() => handleFlip(index)}
                        sx={{
                          borderRadius: "30px",
                          border: "1px solid #e91e63",
                          color: "#e91e63",
                          textTransform: "none",
                        }}
                      >
                        View Details →
                      </Button>
                    </Box>
                  </Box>

                  {/* BACK */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      borderRadius: "24px",
                      background: "#e91e63",
                      color: "#fff",
                      p: 3,
                    }}
                  >
                    <Typography fontWeight={700}>{item.title}</Typography>

                    <Box mt={2}>
                      {item.details.map((point, i) => (
                        <Typography key={i} fontSize="14px" mb={1}>
                          • {point}
                        </Typography>
                      ))}
                    </Box>

                    <Button
                      onClick={() => handleFlip(index)}
                      sx={{
                        mt: 3,
                        background: "#fff",
                        color: "#e91e63",
                        borderRadius: "30px",
                      }}
                    >
                      Back
                    </Button>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductPage;

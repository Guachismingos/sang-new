import { Box, Container, Stack } from "@mui/material";
import { useEffect } from "react";

import banner_img from "../assets/images/splash_image.png";
import ContactSection from "../components/about/ContactSection";
import InfoSection from "../components/about/InfoSection";
import LocationSection from "../components/about/LocationSection";
import SocialSection from "../components/about/SocialSection";

const About = ({ name, setTitle }) => {
  useEffect(() => {
    setTitle(name);
  }, []);
  return (
    <Container
      maxWidth="sm"
      className="view-container animate__animated animate__fadeIn animate__faster"
    >
      <Stack width="100%" gap={2} pb={15} className="top-center-container">
        <img width="100%" src={banner_img} loading="lazy" />
        <InfoSection />
        <SocialSection />
        <ContactSection />
        <LocationSection />
      </Stack>
    </Container>
  );
};

export default About;

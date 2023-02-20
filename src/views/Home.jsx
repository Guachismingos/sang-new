import { Container, Stack } from "@mui/material";
import { useEffect } from "react";
import IconGrid from "../components/home/IconGrid";
import ImagesSwiper from "../components/home/ImagesSwiper";

const Home = ({ name, setTitle }) => {
  useEffect(() => {
    setTitle(name);
  }, []);

  return (
    <Container
      maxWidth="sm"
      className="view-container animate__animated animate__fadeIn animate__faster"
    >
      <Stack gap={2} pt={3} width="100%" className="top-center-container">
        <ImagesSwiper />
        <IconGrid />
      </Stack>
    </Container>
  );
};

export default Home;

import { Box, Container } from "@mui/material";
import IconGrid from "../components/home/IconGrid";

const Home = () => {
  return (
    <Container
      className="view-container"
      maxWidth="xs"
      sx={{ display: "flex" }}
    >
      <Box className="center-container">
        <IconGrid />
      </Box>
    </Container>
  );
};

export default Home;

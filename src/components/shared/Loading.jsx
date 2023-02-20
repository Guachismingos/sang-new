import { Box, CircularProgress, Container, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Container
      className="view-container"
      maxWidth="xs"
      sx={{ display: "flex" }}
    >
      <Box className="center-container">
        <CircularProgress />
        <Typography>Cargando...</Typography>
      </Box>
    </Container>
  );
};

export default Loading;

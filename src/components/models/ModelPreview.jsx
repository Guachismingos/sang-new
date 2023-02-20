import { Collections } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import bonos_images from "../../assets/images/bonos";
import ModelPreviewList from "./ModelPreviewList";

const ModelPreview = ({ name, setTitle }) => {
  const { id } = useParams();
  const bono = bonos_images[id - 1];

  useEffect(() => {
    setTitle(name);
  }, []);
  return (
    <Container
      maxWidth="sm"
      className="view-container animate__animated animate__fadeIn animate__faster"
    >
      <Stack
        gap={2}
        pt={3}
        pb={15}
        width="100%"
        className="center-container"
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Collections fontSize="large" color="primary" />
          <Typography
            fontWeight="bold"
            className="text-outlined"
            color="white"
            variant="h5"
          >
            {bono?.name}
          </Typography>
        </Box>
        <ModelPreviewList bono={bono}/>
      </Stack>
    </Container>
  );
};

export default ModelPreview;

import { Container, Stack } from "@mui/material";
import { useEffect } from "react";
import ModelsList from "../components/models/ModelsList";
import TopBanner from "../components/models/TopBanner";

const Models = ({ name, setTitle }) => {
  useEffect(() => {
    setTitle(name);
  }, []);
  return (
    <Container
      maxWidth="sm"
      className="view-container animate__animated animate__fadeIn animate__faster"
    >
      <Stack gap={2} pt={3} pb={15} width="100%" className="top-center-container">
        <TopBanner/>
        <ModelsList/>
      </Stack>
    </Container>
  );
};

export default Models;

import { ExpandMore } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

const InfoSection = () => {
  return (
    <Box>
      <Typography textAlign="justify">
        <b>Nosotros:</b>{" "}
        <small>
          Grupo Sang, es una empresa joven conformada por un equipo de
          profesionales enfocados en las necesidades de nuestros clientes y en
          la calidad de nuestros servicios. En un corto tiempo hemos
          desarrollado un conjunto de obras importantes en el sector privado y
          público cumpliendo con los costos y tiempos de ejecución.
        </small>
      </Typography>
      <Divider sx={{ my: 2 }}>
        <ExpandMore color="action" />
      </Divider>
      <Typography textAlign="justify">
        <b>Misión:</b>{" "}
        <small>
          Nuestra misión es satisfacer a nuestros clientes y poner nuestros
          servicios profesionaes a la orden para que logren sus objetivos de la
          manera más óptima e integral posible.
        </small>
      </Typography>
      <Divider sx={{ my: 2 }}>
        <ExpandMore color="action" />
      </Divider>
      <Typography textAlign="justify">
        <b>Vision:</b>{" "}
        <small>
          Ser líderes en la prestación de servicios de ingeniería civil,
          arquitectura y construcción, a nivel regional y nacional.
        </small>
      </Typography>
    </Box>
  );
};

export default InfoSection;

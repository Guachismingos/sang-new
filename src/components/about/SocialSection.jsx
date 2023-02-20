import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

const SocialSection = () => {
  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Typography variant="h6" fontWeight="bold" textAlign="center">
        Nuetras Redes
      </Typography>
      <Box
        justifyContent="space-around"
        alignItems="stretch"
        display="flex"
        width="100%"
      >
        <IconButton
          href="https://www.facebook.com/GrupoSang.SA/"
          sx={{ bgcolor: "white" }}
        >
          <Facebook color="primary" sx={{ fontSize: 60 }} />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/gruposang.sa/?igshid=YmMyMTA2M2Y%3D/"
          sx={{ bgcolor: "white" }}
        >
          <Instagram color="primary" sx={{ fontSize: 60 }} />
        </IconButton>
        <IconButton href="https://wa.me/50684281470/" sx={{ bgcolor: "white" }}>
          <WhatsApp color="primary" sx={{ fontSize: 60 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SocialSection;

import { Box, Typography } from "@mui/material";
import models_img from "../../assets/images/bonos/BONOS.jpg";

const TopBanner = () => {
  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <img
        width="100%"
        src={models_img}
        style={{ borderRadius: "15px", filter: "brightness(65%)" }}
      />
      <Typography
        className="text-outlined"
        position="absolute"
        color="white"
        variant="h4"
        fontWeight="bold"
      >
        Bonos
      </Typography>
    </Box>
  );
};

export default TopBanner;

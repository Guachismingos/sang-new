import { Phone } from "@mui/icons-material";
import { Box, List, ListItemButton, Typography } from "@mui/material";

const ContactSection = () => {
  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Typography variant="h6" fontWeight="bold" textAlign="center">
        Contáctenos
      </Typography>
      <List dense>
        <ListItemButton
          href="tel:8428-1470"
          divider
          sx={{ width: "100%", justifyContent: "space-between" }}
        >
          Teléfono 1: 8428-1470
          <Phone />
        </ListItemButton>
        <ListItemButton
          href="tel:6188-5469"
          divider
          sx={{ width: "100%", justifyContent: "space-between" }}
        >
          <Typography>Teléfono 2: 6188-5469</Typography>
          <Phone />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default ContactSection;

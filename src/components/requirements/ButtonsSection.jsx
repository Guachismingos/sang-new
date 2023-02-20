import { Grid, Paper, Typography } from "@mui/material";

import requirements_icon from "../../assets/images/requirements_icon.png";
import about_icon from "../../assets/images/about_icon.png";

const ButtonsSection = ({ setShowForm, setShowStatus }) => {
  const buttons = [
    {
      icon: requirements_icon,
      text: "Formulario aquí",
      setAction: setShowForm,
    },
    {
      icon: about_icon,
      text: "Verifique su solicitud",
      setAction: setShowStatus,
    },
  ];

  return (
    <Grid container spacing={1.9}>
      {buttons.map(({ icon, text, setAction }) => (
        <Grid key={text} item xs={6} onClick={() => setAction(true)}>
          <Paper
            elevation={3}
            sx={{
              borderRadius: 4,
              aspectRatio: "1",
              border: "5px solid",
              borderColor: "primary.main",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={icon} width="60%" loading="lazy" />
            <Typography fontWeight="bold" variant="body1" textAlign="center">
              {text}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ButtonsSection;

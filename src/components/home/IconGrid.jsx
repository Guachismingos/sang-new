import { Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";

const IconGrid = () => {
  const navigate = useNavigate();

  const Icon = ({ name, path, icon }) => {
    return (
      <Grid item xs={6} onClick={() => navigate(path)}>
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
          <img src={icon} width="60%" />
          <Typography fontWeight="bold" variant="body1" textAlign="center">
            {name}
          </Typography>
        </Paper>
      </Grid>
    );
  };

  return (
    <Grid container spacing={1.9}>
      {routes.slice(1).map(({ name, path, icon }) => (
        <Icon key={name} name={name} path={path} icon={icon} />
      ))}
    </Grid>
  );
};

export default IconGrid;

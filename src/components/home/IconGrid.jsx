import { Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";

const IconGrid = () => {
  const navigate = useNavigate();

  const Icon = ({ name, path, icon }) => {
    const first = name === "Requerimientos";

    return (
      <Grid item xs={first ? 12 : 6} onClick={() => navigate(path)}>
        <Paper
          elevation={3}
          sx={{
            borderRadius: 4,
            aspectRatio: first ? "2.3" : "1",
            border: "5px solid",
            borderColor: "primary.main",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={icon} width={first ? "25%" : "60%"} loading="lazy" />
          <Typography fontWeight="bold" variant="body1" textAlign="center">
            {name}
          </Typography>
        </Paper>
      </Grid>
    );
  };

  return (
    <Grid container spacing={1.9}>
      {routes
        .slice(1)
        .map(
          ({ name, path, icon }, idx) =>
            idx != 1 && <Icon key={name} name={name} path={path} icon={icon} />
        )}
    </Grid>
  );
};

export default IconGrid;

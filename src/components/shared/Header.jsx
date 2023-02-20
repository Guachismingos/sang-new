import { ArrowBack } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Fragment, useRef } from "react";
import { useNavigate } from "react-router-dom";

import img_logo from "../../assets/images/white_logo.png";

const Header = ({ title }) => {
  const navigate = useNavigate();

  const titleRef = useRef();

  return (
    <Fragment>
      <AppBar color="primary">
        <Toolbar sx={{ pl: 0, pr: 1 }}>
          <IconButton
            disabled={title === "Inicio"}
            onClick={() => navigate(-1)}
          >
            <ArrowBack />
          </IconButton>
          <Box flex={1} ref={titleRef}>
            <Typography>{title}</Typography>
          </Box>
          <img src={img_logo} width="95px" loading="lazy" />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
};

export default Header;

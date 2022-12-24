import { AppBar, Box, Toolbar } from "@mui/material";
import { Fragment } from "react";

import img_logo from "../../assets/images/white_logo.png";

const Header = () => {
  return (
    <Fragment>
      <AppBar color="primary">
        <Toolbar>
          <Box flex={1} />
          <img src={img_logo} width="95px" />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
};

export default Header;

import { Fragment, useEffect, useReducer } from "react";
import Header from "./shared/Header";
import Content from "./shared/Content";
import { usePlugins } from "../context/PluginsContext";

const Layout = () => {
  const { hideSplashScreen } = usePlugins();

  const [title, setTitle] = useReducer((_, newValue) => newValue, "");

  useEffect(() => {
    hideSplashScreen();
  }, []);

  return (
    <Fragment>
      <Header title={title} />
      <Content setTitle={setTitle} />
    </Fragment>
  );
};

export default Layout;

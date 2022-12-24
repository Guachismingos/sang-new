import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../../routes";
import { Suspense } from "react";
import Loading from "./Loading";

const Content = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routes.map(({ path, Component, name }) => (
          <Route key={name} path={path} element={<Component />} />
        ))}
        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Suspense>
  );
};

export default Content;

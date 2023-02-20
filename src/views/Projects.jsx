import { useEffect } from "react";

const Projects = ({ name, setTitle }) => {
  useEffect(() => {
    setTitle(name);
  }, []);
  return <div>Projects</div>;
};

export default Projects;

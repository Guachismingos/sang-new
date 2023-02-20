import { Collections } from "@mui/icons-material";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import bonos_images from "../../assets/images/bonos";

const ModelsList = () => {
  const navigate = useNavigate();

  const Item = ({ image, name, amount, path }) => {
    return (
      <ImageListItem sx={{ borderRadius: "12px", overflow: "hidden" }}>
        <img src={image} onClick={() => navigate(path)} />
        <ImageListItemBar
          onClick={() => navigate(path)}
          sx={{ height: "35%" }}
          title={
            <Typography
              className="text-outlined"
              fontWeight="bold"
              variant="subtitle1"
            >
              {name}
            </Typography>
          }
          subtitle={
            <Typography className="text-outlined" variant="caption">
              {amount} imágenes disponibles.
            </Typography>
          }
          actionIcon={
            <Collections fontSize="large" color="primary" sx={{ p: 2 }} />
          }
        />
      </ImageListItem>
    );
  };

  return (
    <ImageList cols={1}>
      {bonos_images.map(({ name, images, path }) => (
        <Item
          key={name}
          image={images[0]}
          name={name}
          amount={images.length}
          path={path}
        />
      ))}
    </ImageList>
  );
};

export default ModelsList;

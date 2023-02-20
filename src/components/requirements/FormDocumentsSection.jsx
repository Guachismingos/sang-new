import { Toast } from "@capacitor/toast";
import {
  Close,
  FilePresentOutlined,
  PermMediaOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  ListItemButton,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { useState } from "react";
import { usePlugins } from "../../context/PluginsContext";

const FormDocumentsSection = ({ inputChange, values, errors }) => {
  const { takePicture } = usePlugins();

  const [showingImage, setShowingImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleSetDocument = async (name) => {
    await takePicture()
      .then((res) => inputChange(name, res?.dataUrl))
      .catch(() => Toast.show({ text: "Sin selección!" }));
  };

  const imagePreview = (image) => {
    setShowingImage(image);
    setShowPreview(true);
  };

  return (
    <Box flex={1} gap display="flex" flexDirection="column" pt={1.5}>
      <Divider>
        <Box display="flex" alignItems="center">
          <PermMediaOutlined sx={{ pr: 0.5 }} color="action" />
          Documentos
        </Box>
      </Divider>
      {/* Cédula */}
      <Box display="flex" gap={1}>
        <ListItemButton divider onClick={() => imagePreview(values?.fileId)}>
          <Typography>Cédula *</Typography>
          {values?.fileId ? ": ver imagen" : ""}
          {errors?.fileId ? (
            <Typography color="error.main" pl={1}>
              Requerido!!
            </Typography>
          ) : null}
        </ListItemButton>
        <Button
          name="fileId"
          variant="outlined"
          color="info"
          sx={{ bgcolor: lightBlue[50] }}
          onClick={() => handleSetDocument("fileId")}
        >
          <FilePresentOutlined />
        </Button>
      </Box>
      {/* Déposito */}
      <Box display="flex" gap={1}>
        <ListItemButton
          divider
          onClick={() => imagePreview(values?.fileDeposit)}
        >
          <Typography>Déposito *</Typography>
          {values?.fileDeposit ? ": ver imagen" : ""}
          {errors?.fileDeposit ? (
            <Typography color="error.main" pl={1}>
              Requerido!!
            </Typography>
          ) : null}
        </ListItemButton>
        <Button
          name="fileDeposit"
          variant="outlined"
          color="info"
          sx={{ bgcolor: lightBlue[50] }}
          onClick={() => handleSetDocument("fileDeposit")}
        >
          <FilePresentOutlined />
        </Button>
      </Box>
      {/* Agua */}
      <Box display="flex" gap={1}>
        <ListItemButton divider onClick={() => imagePreview(values?.fileWater)}>
          <Typography>Disponibilidad de agua *</Typography>
          {values?.fileWater ? ": ver imagen" : ""}
          {errors?.fileWater ? (
            <Typography color="error.main" pl={1}>
              Requerido!!
            </Typography>
          ) : null}
        </ListItemButton>
        <Button
          name="fileWater"
          variant="outlined"
          color="info"
          sx={{ bgcolor: lightBlue[50] }}
          onClick={() => handleSetDocument("fileWater")}
        >
          <FilePresentOutlined />
        </Button>
      </Box>
      {/* Luz */}
      <Box display="flex" gap={1}>
        <ListItemButton divider onClick={() => imagePreview(values?.fileLight)}>
          <Typography>Disponibilidad de luz *</Typography>
          {values?.fileLight ? ": ver imagen" : ""}
          {errors?.fileLight ? (
            <Typography color="error.main" pl={1}>
              Requerido!!
            </Typography>
          ) : null}
        </ListItemButton>
        <Button
          name="fileLight"
          variant="outlined"
          color="info"
          sx={{ bgcolor: lightBlue[50] }}
          onClick={() => handleSetDocument("fileLight")}
        >
          <FilePresentOutlined />
        </Button>
      </Box>
      {/* Impuestos */}
      <Box display="flex" gap={1}>
        <ListItemButton divider onClick={() => imagePreview(values?.fileTaxes)}>
          <Typography>Certificado de impuestos *</Typography>
          {values?.fileTaxes ? ": ver imagen" : ""}
          {errors?.fileTaxes ? (
            <Typography color="error.main" pl={1}>
              Requerido!!
            </Typography>
          ) : null}
        </ListItemButton>
        <Button
          name="fileTaxes"
          variant="outlined"
          color="info"
          sx={{ bgcolor: lightBlue[50] }}
          onClick={() => handleSetDocument("fileTaxes")}
        >
          <FilePresentOutlined />
        </Button>
      </Box>
      <Modal
        onClose={() => setShowingImage(null)}
        open={showPreview && !!showingImage}
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 0,
        }}
      >
        <Paper
          square
          sx={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            display: "flex",
          }}
        >
          <IconButton
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={() => setShowPreview(false)}
          >
            <Close />
          </IconButton>
          <img
            width="100%"
            style={{
              objectFit: "contain",
              aspectRatio: 1,
              border: "5px solid #eca440",
            }}
            src={`${showingImage}`}
            loading="lazy"
          />
        </Paper>
      </Modal>
    </Box>
  );
};

export default FormDocumentsSection;

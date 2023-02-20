import { InfoOutlined } from "@mui/icons-material";
import { Box, Divider, TextField } from "@mui/material";

const FormInfoSection = ({ values, handleInputChange }) => {
  return (
    <Box flex={1} gap display="flex" flexDirection="column" pt={1.5}>
      <Divider>
        <Box display="flex" alignItems="center">
          <InfoOutlined sx={{ pr: 0.5 }} color="action" />
          Información
        </Box>
      </Divider>
      <TextField
        required
        type="text"
        size="small"
        label="Apellidos"
        name="lastNames"
        value={values.lastNames}
        onChange={handleInputChange}
      />
      <TextField
        required
        type="email"
        size="small"
        label="Correo"
        name="email"
        value={values.email}
        onChange={handleInputChange}
      />
      <TextField
        required
        type="text"
        size="small"
        label="Dirección"
        name="address"
        value={values.address}
        onChange={handleInputChange}
      />
      <TextField
        required
        type="tel"
        size="small"
        label="Teléfono celular"
        name="primaryPhone"
        value={values.primaryPhone}
        onChange={handleInputChange}
      />
      <TextField
        required
        type="tel"
        size="small"
        label="Teléfono secundario"
        name="secondaryPhone"
        value={values.secondaryPhone}
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default FormInfoSection;

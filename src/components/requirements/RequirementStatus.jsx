import {
  Close,
  ContentPasteSearchOutlined,
  SendOutlined,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useCRUD } from "../../context/CRUDContext";

const RequirementStatus = ({ open, setOpen, resetValues }) => {
  const { loadRequirementById } = useCRUD();
  const [ticket, setTicket] = useState("");
  const [requirementResult, setRequirementResult] = useState({});

  const handleClose = () => {
    setOpen(false);
    resetValues();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await loadRequirementById(ticket).then((res) =>
      res.forEach((doc) => {
        console.log(doc.data(), res.length, res);
      })
    );
  };
  return (
    <Modal
      open={open}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      disableAutoFocus
      onClose={handleClose}
    >
      <Container maxWidth="sm" sx={{ px: 2 }}>
        <Paper sx={{ flex: 1, p: 1, py: 2, position: "relative" }}>
          <IconButton
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <Stack gap={1} component="form" onSubmit={handleSubmit}>
            <Typography variant="h6" fontWeight="bold">
              Estado del requerimiento
            </Typography>
            <Divider>
              <Box display="flex" alignItems="center">
                <ContentPasteSearchOutlined sx={{ pr: 0.5 }} color="action" />
                Ingrese el codigo del ticket
              </Box>
            </Divider>
            <TextField
              label="Ticket"
              required
              type="text"
              value={ticket}
              onChange={({ target }) => setTicket(target.value)}
            />
            <Button variant="contained" type="submit">
              Verificar
              <SendOutlined color="action" sx={{ pl: 1 }} />
            </Button>
            <Divider />
            <Alert severity="info">Esperando el código del ticket...</Alert>
          </Stack>
        </Paper>
      </Container>
    </Modal>
  );
};

export default RequirementStatus;

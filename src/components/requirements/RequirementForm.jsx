import { ArrowBack, ArrowForward, Check, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Controller, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import FormDocumentsSection from "./FormDocumentsSection";
import FormInfoSection from "./FormInfoSection";

const RequirementForm = ({
  open,
  values,
  errors,
  setOpen,
  inputChange,
  resetValues,
  handleSubmit,
  handleInputChange,
}) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClose = () => {
    setOpen(false);
    resetValues();
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
              {`Formulario ${
                values?.type === 1 ? "bono ordinario" : "bono crédito"
              }`}
            </Typography>
            <Swiper
              modules={[Navigation, Pagination, Controller]}
              pagination={{
                type: "progressbar",
              }}
              slidesPerView={1}
              spaceBetween={5}
              onSwiper={setControlledSwiper}
              onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              style={{
                flex: 1,
                margin: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <SwiperSlide>
                <FormInfoSection
                  values={values}
                  inputChange={inputChange}
                  handleInputChange={handleInputChange}
                />
              </SwiperSlide>
              <SwiperSlide>
                <FormDocumentsSection
                  values={values}
                  errors={errors}
                  inputChange={inputChange}
                />
              </SwiperSlide>
            </Swiper>

            <Box display="flex" justifyContent="space-between" gap={1}>
              <Button
                onClick={() => controlledSwiper.slidePrev()}
                variant="outlined"
                sx={{ flex: 1 }}
              >
                <ArrowBack sx={{ pr: 1 }} /> Atrás
              </Button>
              <Button
                onClick={() => controlledSwiper.slideNext()}
                variant="outlined"
                sx={{ flex: 1 }}
              >
                Siguiente <ArrowForward sx={{ pl: 1 }} />
              </Button>
            </Box>
            <Divider />
            <Button variant="contained" type="submit">
              Solicitar <Check color="action" />
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Modal>
  );
};

export default RequirementForm;

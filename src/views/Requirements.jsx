import {
  ContactEmergency,
  ContactPage,
  InvertColors,
  PriceCheck,
  RequestPage,
} from "@mui/icons-material";
import { Backdrop, CircularProgress, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ButtonsSection from "../components/requirements/ButtonsSection";
import RequirementForm from "../components/requirements/RequirementForm";
import RequirementsSection from "../components/requirements/RequirementsSection";
import RequirementStatus from "../components/requirements/RequirementStatus";
import TypeSection from "../components/requirements/TypeSection";
import { useCRUD } from "../context/CRUDContext";
import { usePlugins } from "../context/PluginsContext";
import useForm from "../hooks/useForm";

const info_requirements = [
  { Icon: ContactPage, text: "Hoja de contizante o no cotizante." },
  { Icon: PriceCheck, text: "Constancia de ingreso salarial." },
  { Icon: InvertColors, text: "Disponibilidad de agua y luz." },
  { Icon: RequestPage, text: "Certificación de impuestos." },
  { Icon: ContactEmergency, text: "Copia de cédula." },
];

const Requirements = ({ name, setTitle }) => {
  const { newRequirement } = useCRUD();
  const { showDialog } = usePlugins();

  const [values, handleInputChange, inputChange, resetValues, setValues] =
    useForm({
      lastNames: "",
      email: "",
      address: "",
      primaryPhone: "",
      secondaryPhone: "",
      fileId: "",
      fileDeposit: "",
      fileWater: "",
      fileLight: "",
      fileTaxes: "",
      type: 1,
      date: new Date().toDateString(),
      status: 0,
    });

  const errorsInitialValue = {
    fileId: false,
    fileDeposit: false,
    fileWater: false,
    fileLight: false,
    fileTaxes: false,
  };

  const [errors, setErrors] = useState(errorsInitialValue);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    let canInsert = true;
    let refErrors = errors;
    Object.keys(refErrors).forEach((element) => {
      if (!values[element]) {
        refErrors = { ...refErrors, [element]: true };
        canInsert = false;
      }
    });
    setErrors(refErrors);
    if (!canInsert) {
      setLoading(false);
      showDialog("Error!", "Datos Pendientes!");
      return;
    }
    try {
      const result = await newRequirement(values);
      resetValues();
      setShowForm(false);
      showDialog("Listo!", `Código de Consulta: ${result}`);
    } catch (error) {
      showDialog("Error!", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setErrors(errorsInitialValue);
  }, [values]);

  useEffect(() => {
    setTitle(name);
  }, []);

  return (
    <Container
      maxWidth="sm"
      className="view-container animate__animated animate__fadeIn animate__faster"
    >
      <Stack width="100%" gap={2} pt={3} className="top-center-container">
        <TypeSection values={values} inputChange={inputChange} />
        <RequirementsSection info_requirements={info_requirements} />
        <ButtonsSection
          setShowForm={setShowForm}
          setShowStatus={setShowStatus}
        />
      </Stack>
      <RequirementForm
        open={showForm}
        errors={errors}
        values={values}
        setOpen={setShowForm}
        resetValues={resetValues}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        inputChange={inputChange}
      />
      <RequirementStatus
        open={showStatus}
        setOpen={setShowStatus}
        resetValues={resetValues}
      />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 10000 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
};

export default Requirements;

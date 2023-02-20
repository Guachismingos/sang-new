import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const TypeSection = ({ values, inputChange }) => {
  return (
    <ToggleButtonGroup
      color="primary"
      value={values?.type}
      exclusive
      onChange={(_, selectedType) => {
        if (!!selectedType) {
          inputChange("type", selectedType);
        }
      }}
    >
      <ToggleButton value={1}>
        <b>Bono ordinario</b>
      </ToggleButton>
      <ToggleButton value={2}>
        <b>Bono crédito</b>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TypeSection;

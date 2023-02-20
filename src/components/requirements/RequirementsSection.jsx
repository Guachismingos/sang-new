import { List, ListItem, Typography } from "@mui/material";

const RequirementsSection = ({ info_requirements }) => {
  return (
    <List sx={{ width: "100%" }}>
      {info_requirements.map(({ Icon, text }) => (
        <ListItem key={text} divider sx={{ gap: 1 }}>
          <Icon color="action" />
          <Typography>{text}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default RequirementsSection;

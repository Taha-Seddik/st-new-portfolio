"use client";

import { styled, useTheme } from "@mui/material/styles";
import { HomeSections, contentMaxWidth } from "@/utils/constants";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import React from "react";
import { EductionDataArr, ExperienceDataArr } from "@/utils/data";

const CustomSection = styled("section")(({ theme }) => ({
  margin: "0px auto",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    marginTop: theme.spacing(5),
  },
  [theme.breakpoints.up("sm")]: {
    width: "60%",
    maxWidth: contentMaxWidth,
    marginTop: theme.spacing(5),
  },
}));

export const EducationExperienceComponent: React.FC<{}> = ({}) => {
  return (
    <CustomSection id={HomeSections.EducationAndExperience} className="section">
      {/* Section title  */}
      <Box display="flex" flexDirection="column" gap={1} mb={2}>
        <Typography variant="h5" fontWeight={500}>
          Education & Experience
        </Typography>
        <Divider orientation="horizontal"></Divider>
      </Box>
      <Grid container spacing={4}>
        <Grid size={{ lg: 5, md: 12 }} width="100%">
          <EducationBlock />
        </Grid>
        <Grid size={{ lg: 7, md: 12 }} width="100%">
          <ExperienceBlock />
        </Grid>
      </Grid>
    </CustomSection>
  );
};

const EducationBlock: React.FC<{}> = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <Paper>
      <Typography variant="h6" fontWeight={500} p={2} pb={0}>
        Education
      </Typography>
      <List dense>
        {EductionDataArr.map((educationObj, i) => (
          <React.Fragment key={educationObj.label}>
            <ListItem alignItems="flex-start" sx={{ py: 1.5 }}>
              <ListItemAvatar>
                <Avatar alt="educationImg" src={educationObj.imgPath} />
              </ListItemAvatar>
              <Box flex="1">
                <Typography
                  variant="body2"
                  color="text.primary"
                  fontWeight={500}
                >
                  {educationObj.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {educationObj.place}
                </Typography>
                <Chip
                  color="primary"
                  variant={isDark ? "filled" : "outlined"}
                  label={educationObj.fromTo}
                  size="small"
                />
              </Box>
            </ListItem>
            {ExperienceDataArr.length - 1 !== i ? <Divider /> : null}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

const ExperienceBlock: React.FC<{}> = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <Paper>
      <Typography variant="h6" fontWeight={500} p={2} pb={0}>
        Experience
      </Typography>
      <List dense>
        {ExperienceDataArr.map((expObj, i) => (
          <React.Fragment key={expObj.key}>
            <ListItem alignItems="flex-start" sx={{ py: 1.5 }}>
              <ListItemAvatar>
                <Avatar
                  alt="CompanyLogo"
                  src={expObj.imgPath}
                  variant="rounded"
                  sx={{ border: "1px solid lightgray" }}
                />
              </ListItemAvatar>
              <Box flex="1">
                <Typography
                  variant="body2"
                  color="text.primary"
                  fontWeight={500}
                >
                  {expObj.workLabel}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {expObj.companyName}
                </Typography>
                <Chip
                  color="primary"
                  variant={isDark ? "filled" : "outlined"}
                  label={expObj.fromTo}
                  size="small"
                />
              </Box>
            </ListItem>
            {ExperienceDataArr.length - 1 !== i ? <Divider /> : null}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

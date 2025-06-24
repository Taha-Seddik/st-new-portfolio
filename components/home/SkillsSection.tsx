"use client";

import { styled } from "@mui/material/styles";
import { HomeSections, contentMaxWidth } from "@/utils/constants";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import React from "react";
import { Chip } from "@mui/material";
import {
  BackendSkillsDataArr,
  DatabasesSkillsDataArr,
  FrontendSkillsDataArr,
  LanguagesSkillsDataArr,
  ToolsSkillsDataArr,
} from "@/utils/data";

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

export const SkillsComponent: React.FC<{}> = ({}) => {
  return (
    <CustomSection id={HomeSections.Skills} className="section">
      {/* Section title  */}
      <Box display="flex" flexDirection="column" gap={1} mb={2}>
        <Typography variant="h5" fontWeight={500}>
          Skills
        </Typography>
        <Divider orientation="horizontal"></Divider>
      </Box>

      {/* Languages skills */}
      <Typography variant="subtitle1" fontWeight={500} mt={2} mb={1}>
        Programming Languages :
      </Typography>
      <Box display="flex" flexWrap="wrap">
        {LanguagesSkillsDataArr.map((skill) => (
          <Chip key={skill} label={skill} sx={{ ml: 1, mt: 1 }} />
        ))}
      </Box>

      {/* Frontend skills  */}
      <Typography variant="subtitle1" fontWeight={500} mt={2} mb={1}>
        Frontend Technologies :
      </Typography>
      <Box display="flex" flexWrap="wrap">
        {FrontendSkillsDataArr.map((skill) => (
          <Chip key={skill} label={skill} sx={{ ml: 1, mt: 1 }} />
        ))}
      </Box>

      {/* Backend skills  */}
      <Typography variant="subtitle1" fontWeight={500} mt={2} mb={1}>
        Backend Technologies :
      </Typography>
      <Box display="flex" flexWrap="wrap">
        {BackendSkillsDataArr.map((skill) => (
          <Chip key={skill} label={skill} sx={{ ml: 1, mt: 1 }} />
        ))}
      </Box>

      {/* Tools skills  */}
      <Typography variant="subtitle1" fontWeight={500} mt={2} mb={1}>
        Tools :
      </Typography>
      <Box display="flex" flexWrap="wrap">
        {ToolsSkillsDataArr.map((skill) => (
          <Chip key={skill} label={skill} sx={{ ml: 1, mt: 1 }} />
        ))}
      </Box>

      {/* Databases skills  */}
      <Typography variant="subtitle1" fontWeight={500} mt={2} mb={1}>
        Databases :
      </Typography>
      <Box display="flex" flexWrap="wrap">
        {DatabasesSkillsDataArr.map((skill) => (
          <Chip key={skill} label={skill} sx={{ ml: 1, mt: 1 }} />
        ))}
      </Box>
    </CustomSection>
  );
};

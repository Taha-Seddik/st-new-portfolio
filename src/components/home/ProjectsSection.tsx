"use client";

import { styled } from "@mui/material/styles";
import { HomeSections, contentMaxWidth } from "@/utils/constants";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import React from "react";
import { ProjectsData } from "@/utils/data";
import { ProjectBlock } from "../etc/ProjectBlock";

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

export const ProjectsSectionComponent: React.FC<{}> = ({}) => {
  return (
    <CustomSection id={HomeSections.Projects} className="section">
      {/* Section title  */}
      <Box display="flex" flexDirection="column" gap={1} mb={2}>
        <Typography variant="h5" fontWeight={500}>
          Projects
        </Typography>
        <Divider orientation="horizontal"></Divider>
      </Box>

      {ProjectsData.map((p, i) => (
        <React.Fragment key={p.title}>
          <ProjectBlock project={p} />
          {i < ProjectsData.length - 1 ? <Divider sx={{ my: 2, borderStyle: "dashed" }} /> : null}
        </React.Fragment>
      ))}
    </CustomSection>
  );
};

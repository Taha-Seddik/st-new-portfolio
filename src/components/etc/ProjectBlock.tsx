"use client";

import { ProjectDetails } from "@/models/projectDetails";
import { Box, Button, Chip, Grid, Paper, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ImageGallery, { ReactImageGalleryProps } from "react-image-gallery";
import { useRef, useState } from "react";
import {
  RightNavRendrer,
  LeftNavRendrer,
  makeGalleryItems,
} from "./ProjectBlock.utils";

type IProps = {
  project: ProjectDetails;
};

export const ProjectBlock: React.FC<IProps> = ({ project }) => {
  const handleOpenCodeLink = () => {
    window.open(project.githubLink, "_blank");
  };
  const handleOpenDemoLink = () => {
    window.open(project.demoLink, "_blank");
  };

  return (
    <Paper className="flexColumn" sx={{ width: "100%", px: 2, py: 2 }}>
      <Grid container spacing={2} className="productItemInListForMobile">
        <Grid item sm={12} md={6} className="imgZone" width="100%">
          <ProjectMediaComponent project={project} />
        </Grid>
        <Grid item sm={12} md={6} p={2} display="flex" flexDirection="column">
          <Typography
            sx={{ typography: { xs: "button", md: "h6" } }}
            component="div"
            noWrap
            gutterBottom
          >
            {project.title}
          </Typography>
          <Typography
            sx={{ typography: { xs: "body2", md: "body1" } }}
            component="div"
            gutterBottom
          >
            {project.description}
          </Typography>
          <Box display="flex" alignItems="center" mb={2}>
            {project.techStack.map((techX, i) => (
              <Chip
                key={techX}
                label={techX}
                sx={{ ml: i > 0 ? 1 : 0, mt: 1 }}
              />
            ))}
          </Box>
          <Box display="flex" alignItems="center" mt={2}>
            {project.githubLink ? (
              <Button variant="text" onClick={handleOpenCodeLink}>
                Code
                <GitHubIcon sx={{ ml: 1 }} />
              </Button>
            ) : null}
            {project.demoLink ? (
              <Button
                variant="text"
                sx={{ ml: project.githubLink ? 2 : 0 }}
                onClick={handleOpenDemoLink}
              >
                Live Demo
                <OpenInNewIcon sx={{ ml: 1 }} />
              </Button>
            ) : null}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

const ProjectMediaComponent: React.FC<IProps> = (props) => {
  const galleryRef = useRef<any>();
  const [showVideo, setShowVideo] = useState(false);

  const toggleShowVideo = () => {
    setShowVideo(!showVideo);
  };

  const itemsForGallery = makeGalleryItems(
    props.project,
    showVideo,
    toggleShowVideo
  );

  return (
    <ImageGallery
      ref={galleryRef}
      items={itemsForGallery}
      showBullets={false}
      showPlayButton={false}
      thumbnailPosition="bottom"
      showNav={true}
      renderRightNav={(onClick, disabled) => (
        <RightNavRendrer onClick={onClick} disabled={disabled} />
      )}
      renderLeftNav={(onClick, disabled) => (
        <LeftNavRendrer onClick={onClick} disabled={disabled} />
      )}
    />
  );
};

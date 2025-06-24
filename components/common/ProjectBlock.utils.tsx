import { MediaType, ProjectDetails } from "@/models/projectDetails";
import IconButton from "@mui/material/IconButton";
import { ReactImageGalleryItem } from "react-image-gallery";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box, Tooltip } from "@mui/material";
import { previewSizes } from "@/utils/constants";
import CloseIcon from "@mui/icons-material/Close";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeft";
import Image from "next/image";

export const makeGalleryItems = (project: ProjectDetails, showVideo: boolean, toggleShowVideo: () => void) => {
  const result: (ReactImageGalleryItem & any)[] = [];
  const medias = project?.medias || [];
  medias.forEach((x) => {
    switch (x.type) {
      case "image": {
        result.push({
          original: `${x.src}`,
          thumbnail: `${x.src}`,
        });
        break;
      }
      case "video": {
        result.push({
          original: `${x.src}`,
          thumbnail: `${x.src}`,
          embedUrl: `${x.embedUrl}`,
          renderItem: (item: MediaType) => (
            <VideoSlideRendrer
              project={project}
              itemDetails={item}
              showVideo={showVideo}
              toggleShowVideo={toggleShowVideo}
            />
          ),
        });
        break;
      }
    }
  });
  return result;
};

const PlayButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  margin: "0 auto",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));

const StopButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  margin: "0 auto",
  top: "2%",
  right: "2.5%",
  zIndex: 9999,
}));

type VideoRendrerProps = {
  project: ProjectDetails;
  itemDetails: ReactImageGalleryItem & any;
  showVideo: boolean;
  toggleShowVideo: () => void;
};

const VideoSlideRendrer: React.FC<VideoRendrerProps> = (props) => {
  return (
    <Box sx={{ height: previewSizes.h }}>
      {props.showVideo ? (
        <>
          {/* <button className="close-video" onClick={props.toggleShowVideo} /> */}
          {/* <iframe title="sample video" width="560" height="315" src={props.itemDetails?.embedUrl} style={{ border: "none" }} allowFullScreen /> */}
          <Tooltip title="stop video" placement="top">
            <StopButton aria-label="stop" onClick={props.toggleShowVideo}>
              <CloseIcon />
            </StopButton>
          </Tooltip>
          <video width={previewSizes.w} height={previewSizes.h} controls autoPlay>
            <source src={props.itemDetails?.embedUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      ) : (
        <>
          <Tooltip title="play video" placement="top">
            <PlayButton variant="contained" color="error" aria-label="play" onClick={props.toggleShowVideo}>
              <PlayArrowIcon />
            </PlayButton>
          </Tooltip>
          {/* <button className="play-button" onClick={props.toggleShowVideo} /> */}
          <img
            alt="sample video cover"
            className="image-gallery-image"
            src={props.itemDetails?.original}
            width={previewSizes.w}
            height={previewSizes.h}
          />
        </>
      )}
    </Box>
  );
};

const NavButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  zIndex: 4,
  color: "gray",
}));

export const RightNavRendrer: React.FC<{
  onClick: React.MouseEventHandler<HTMLElement>;
  disabled: boolean;
}> = (props) => {
  return (
    <NavButton sx={{ right: "6%" }} aria-label="right" onClick={props.onClick} disabled={props.disabled}>
      <ArrowCircleRightIcon />
    </NavButton>
  );
};

export const LeftNavRendrer: React.FC<{
  onClick: React.MouseEventHandler<HTMLElement>;
  disabled: boolean;
}> = (props) => {
  return (
    <NavButton sx={{ left: "6%" }} aria-label="left" onClick={props.onClick} disabled={props.disabled}>
      <ArrowCircleLeft />
    </NavButton>
  );
};

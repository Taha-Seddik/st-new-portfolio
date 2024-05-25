"use client";

import { HomeSections, contentMaxWidth, myEmail } from "@/utils/constants";
import { useIsUpLg, useIsUpMd } from "@/utils/responsive.utils";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import TypeIt from "typeit-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const CustomSection = styled("section")(({ theme }) => ({
  margin: "0px auto",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    marginTop: theme.spacing(5),
  },
  [theme.breakpoints.up("sm")]: {
    width: "60%",
    maxWidth: contentMaxWidth,
    marginTop: theme.spacing(10),
  },
}));

const CustomAvatar = styled(Avatar)(() => ({
  width: 200,
  height: 200,
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top",
  },
}));

export const IntroSectionComponent: React.FC<{}> = ({}) => {
  const isOnMd = useIsUpMd();

  const handleOpenResumeInNewTab = () => {
    const fileUrl = `/resume/Taha-Fullstack-EN.pdf`;
    window.open(fileUrl, "_blank");
  };

  const handleGoToGithubProfile = () => {
    window.open("https://github.com/Taha-Seddik", "_blank");
  };

  const handleOpenSendMailPanel = () => {
    // Replace the email address, subject, and body with your desired values
    const email = myEmail;
    const subject = "New opportuniy!";
    const body = "Opportuniy body";

    // Construct the mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's default default email client
    window.location.href = mailtoLink;
  };

  return (
    <CustomSection id={HomeSections.Intro} className="section">
      <Grid
        container
        spacing={4}
        display="flex"
        alignItems="center"
        flexDirection="column-reverse"
        sx={{ flexDirection: isOnMd ? "row" : "column-reverse" }}
      >
        <Grid item md={8} xs={12}>
          <Typography variant={"h5"} fontWeight={500}>
            Hi, I&apos;m
          </Typography>
          <Typography variant={"h3"} fontWeight={700}>
            Seddik Taha
          </Typography>
          <Typography variant={"h5"} fontWeight={500} mb={1}>
            <TypeIt options={{ loop: true }}>A Full-stack developer</TypeIt>
          </Typography>
          <Typography variant="subtitle1" mb={1}>
            With 7 years of experience, Equipped with great coding, debugging and project management abilities.
          </Typography>
          <IntroButtonsFor
            handleOpenResumeInNewTab={handleOpenResumeInNewTab}
            handleGoToGithubProfile={handleGoToGithubProfile}
            handleOpenSendMailPanel={handleOpenSendMailPanel}
          />
        </Grid>
        <Grid item md={4} xs={12} display="flex">
          <span style={{ flexGrow: 1 }} />
          <CustomAvatar sizes="" alt="taha seddik" src="/tahaImg3.png" variant="circular" />
        </Grid>
      </Grid>
    </CustomSection>
  );
};

type IntroBTNsProps = {
  handleOpenResumeInNewTab: () => void;
  handleGoToGithubProfile: () => void;
  handleOpenSendMailPanel: () => void;
};

const IntroButtonsFor: React.FC<IntroBTNsProps> = (props) => {
  const isMd = useIsUpLg();
  if (!isMd) {
    return (
      <>
        <Button variant="contained" onClick={props.handleOpenResumeInNewTab}>
          <PictureAsPdfIcon sx={{ mr: 1 }} />R<span className="loweredTxt">esume</span>
        </Button>
        <Button variant="contained" onClick={props.handleGoToGithubProfile} sx={{ ml: 1 }}>
          <GitHubIcon sx={{ mr: 1 }} />G<span className="loweredTxt">ithub</span>
        </Button>
        <Button variant="contained" onClick={props.handleOpenSendMailPanel} sx={{ ml: 1 }}>
          <MailIcon sx={{ mr: 1 }} />E<span className="loweredTxt">mail</span>
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Button variant="contained" color="primary" onClick={props.handleOpenResumeInNewTab}>
          <PictureAsPdfIcon sx={{ mr: 1 }} />D<span className="loweredTxt">ownload Resume</span>
        </Button>
        <Button variant="contained" color="primary" onClick={props.handleGoToGithubProfile} sx={{ ml: 1 }}>
          <GitHubIcon sx={{ mr: 1 }} />G<span className="loweredTxt">ithub</span>
        </Button>
        <Button variant="contained" color="primary" onClick={props.handleOpenSendMailPanel} sx={{ ml: 1 }}>
          <MailIcon sx={{ mr: 1 }} />
          <span className="loweredTxt">{myEmail}</span>
        </Button>
      </>
    );
  }
};

"use client";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { myEmail } from "@/utils/constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";

const Container = styled("footer")(({ theme }) => ({
  marginTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
}));

const InnerContent = styled("div")(() => ({
  width: "fit-content",
  margin: "0 auto",
  textAlign: "center",
}));

const CustomIconBtn = styled(IconButton)(() => ({
  fontSize: 30,
}));

export const AppFooter: React.FC<{}> = ({}) => {
  const handleGoToLinkeinProfile = () => {
    window.open("https://www.linkedin.com/in/taha-seddik-7437b812b/", "_blank");
  };

  const handleGoToGithubProfile = () => {
    window.open("https://github.com/Taha-Seddik", "_blank");
  };

  return (
    <Container>
      <InnerContent>
        <Box display="flex" justifyContent="center">
          <CustomIconBtn aria-label="linkedin" onClick={handleGoToLinkeinProfile}>
            <LinkedInIcon color="primary" fontSize="large" />
          </CustomIconBtn>
          <CustomIconBtn aria-label="github" onClick={handleGoToGithubProfile}>
            <GitHubIcon color="action" fontSize="large" />
          </CustomIconBtn>
        </Box>
        <Typography variant="caption">Copyright © {new Date().getFullYear()} All rights reserved</Typography>
      </InnerContent>
    </Container>
  );
};

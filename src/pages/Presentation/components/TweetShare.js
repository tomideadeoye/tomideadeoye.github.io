import React from "react";
import MKSocialButton from "components/MKSocialButton";
import { Box } from "@mui/material";

const data = {
  twitterShare: "www.twitter.com/rhodetails",
  facebookShare: "www.facebook.com/rhodetails",
  pinterestShare: "www.linkedin.com/rhodetails",
};

export default function TweetShare() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem",
      }}
    >
      <MKSocialButton
        component="a"
        href={data.twitterShare}
        target="_blank"
        color="twitter"
        sx={{ mr: 1 }}
      >
        <i className="fab fa-twitter" />
        &nbsp;Tweet
      </MKSocialButton>
      <MKSocialButton
        component="a"
        href={data.facebookShare}
        target="_blank"
        color="facebook"
        sx={{ mr: 1 }}
      >
        <i className="fab fa-facebook" />
        &nbsp;Share
      </MKSocialButton>
      <MKSocialButton component="a" href={data.pinterestShare} target="_blank" color="pinterest">
        <i className="fab fa-pinterest" />
        &nbsp;Pin it
      </MKSocialButton>
    </Box>
  );
}

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  sendMoney: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  sectionBox: {
    display: "flex",
    width: "100%",
    // height: "50vw",
    // background: "linear-gradient(258.71deg, #f4f6ff, rgba(255, 255, 255, 0.87))",
    background: "#fff",
    padding: "3.9375vw 5.6875vw",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: ".8vw solid  #14243b",
  },

  textsBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: "3.125vw",
    width: "60%",
    textAlign: "justify",
    padding: "1rem",

    "& > h1": {
      fontSize: "2.5vw",
      fontWeight: "600",
      textAlign: "left",
      color: "#000",
      marginBottom: "1vw",
    },

    "& > p": {
      color: "#000",
      fontSize: "1.4vw",
      lineHeight: "2.5vw",
      fontWeight: "300",
      width: "100%",
    },
  },
  sectionImage: {
    margin: "1rem",
    padding: "1rem",
    width: "40%",
    // height: "100%",
    objectFit: "contain",
    borderRadius: "5rem",
  },

  sendMoneyBox: {
    display: "flex",
    boxSizing: "border-box",
    width: "100%",
    backgroundColor: "#fff",
    padding: "3.9375vw 5.6875vw",
    flexDirection: "row",
    height: "50vw",
  },
  sendMoneyImage: {
    padding: "5%",
    width: "45%",
  },

  onboardingVideoContainer: {
    border: "0.625vw solid #14243b",
    padding: "0.625vw",
    overflow: "hidden",
    marginTop: "1.5vw",
    borderRadius: "3.125vw",
    backgroundColor: "#14243b",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  videoResponsive: {
    overflow: "hidden",
    "& iframe": {
      height: "40vh",
      width: "600vw",
      borderRadius: "3.125vw",
    },
  },

  onboardingVideo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    fontWeight: "600",
    color: "#14243b",
    textAlign: "center",
    fontSize: "1.25vw",

    "& > img": {
      width: "20%",
    },
  },
}));

export default function DashMarketPlace() {
  const classes = useStyles();

  const elements = [
    {
      id: 1,
      title: "Research and Analysis Phase",
      image: "https://media.giphy.com/media/0IAPszdB8MMjPxNhFL/giphy.gif",
      child: ``,
      content: (
        <p>
          Smart business decisions are rooted in facts – about your market, about your audiences and
          about your organization. During this phase, we will collect as much background
          information, market data, etc. This is purposed to identify the demographics of your
          customers, their psychographic profile, what they want and how they organize information
          and trends in your industry. Armed with a deep understanding of your position, we
          deconstruct the elements that truly define your organization and the experience it
          provides, then reconstruct your brand around a framework of Purpose, Promise, Values,
          Optics and Voice. This framework becomes the bedrock for crafting or evolving each and
          every touch points to reinforce your brand, enhance customer experience and deliver
          against your business metrics.
        </p>
      ),
    },
    {
      id: 2,
      image: "https://media.giphy.com/media/Ed99GVhmVJtL5y7FxZ/giphy.gif",
      child: "",
      title: "Marketing Strategy and Planning Phase",
      content: (
        <p>
          Building an adaptive and charismatic brand doesn’t happen by chance. It is a purposeful
          endeavour that is rooted in the fusion of disciplined, strategic thinking and creativity.
          The result is a strategy, story and experience that is elegantly simple, unexpectedly
          fresh, and an asset that drives your business forward. Our approach will ensure that your
          brand shines through loud and clear—on touchpoints large and small, strategic and
          functional—throughout the customer journey.
        </p>
      ),
    },
    {
      id: 3,
      image: "https://media.giphy.com/media/MZG5aHlXaZDRSWjwEC/giphy.gif",
      title: "Creative Execution",
      child: ``,
      content: (
        <p>
          Once all key marketing strategies have been defined, we will execute the following: <br />
          <br />
          <b>Web content Video Content Social Media Content</b>: Facebook, Instagram, Twitter,
          YouTube, LinkedIn and WhatsApp
          <br />
          <br />
          <b>Advertising content</b>: Viral Video, Print, Tv <br />
          Public Relations: Press releases
        </p>
      ),
    },
    {
      id: 4,
      image: "https://media.giphy.com/media/pVh0vHh38erZXzdvgF/giphy.gif",
      title: "Metric to measure Objectives",
      child: ``,
      content: (
        <p>
          Impressions to measure and reach brand awareness Website Clicks and subscriptions for
          conversion rates Records of impressions and conversions in the recent past will be
          highlighted and juxtaposed with the result obtained at the end of the campaign.
        </p>
      ),
    },
    {
      id: 5,
      image: "https://media.giphy.com/media/AzW7DHt27Vz4ZggvjC/giphy.gif",
      title: "Proposal Content",
      child: ``,
      content: (
        <p>
          <b> Messaging Strategy</b> Every organization has multiple audiences—internal and
          external. We help you systematically address each group’s specific interests and tell your
          story to the right people in the right way. <br /> <br />
          <b>Content Strategy </b> Telling your story, promoting your offerings, providing real
          customer service—across multiple media channels—requires a solid framework. We align
          message, medium and process to make sure your content is on target, and efficiently
          delivered. <br /> <br />
          <b>Social media Strategy </b> With genuine, consistent, and appropriate voice, social
          media is a great way to create a dialogue and build customer base and loyalty. We take a
          sustainable approach, establishing multiple paths for you and your customers to connect.
        </p>
      ),
    },
  ];
  return (
    <Box className={classes.container}>
      {elements.map((element) => (
        <Box className={classes.sectionBox} key={element.id}>
          {element.id % 2 === 0 && (
            <img className={classes.sectionImage} alt="" src={element.image} />
          )}
          <Box className={classes.textsBox}>
            <h1>{element.title}</h1>
            {element.content}
            <Box>{element.child}</Box>
          </Box>
          {element.id % 2 !== 0 && (
            <img className={classes.sectionImage} alt="" src={element.image} />
          )}
        </Box>
      ))}

      <Box className={classes.onboardingVideoContainer}>
        <VideoEmbedComponent source="https://www.youtube.com/embed/JI7CinNzosk" />
      </Box>
    </Box>
  );
}

export function VideoEmbedComponent({ source }) {
  const classes = useStyles();
  // const [play, setPlay] = useState(false);
  // const vidRef = useRef(null);

  // const handlePlay = () => {
  //   vidRef.current.play();
  //   setPlay(true);
  // };

  return (
    <>
      <Box className={classes.videoResponsive}>
        <iframe
          src={source}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
      {/* 
      {!play && (
        <div
          role="button"
          onClick={handlePlay}
          // onKeyDown={handlePlay}
          // tabIndex={0}
          className={classes.onboardingVideo}
        >
          <img alt="" src="playbutton.svg" />
          Onboarding video
        </div>
      )} */}
    </>
  );
}

// const modalStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };
// const MarketingPop = () => {
//   const [open, setOpen] = React.useState(true);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={modalStyle}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

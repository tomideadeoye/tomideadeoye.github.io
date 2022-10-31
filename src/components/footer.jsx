/* eslint-disable react/no-array-index-key */
import React from "react";
// import styles from "../css/Home.module.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box, IconButton, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DateRangeIcon from "@mui/icons-material/DateRange";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import personality from "personality-config";
import colors from "assets/theme/base/colors";

// const footerNav = [
//      {
//              id: "Products",
//              link: "/products",
//      },
//      {
//              id: "Careers",
//              link: "/products",
//      },
//      {
//              id: "Blog",
//              link: "/products",
//      },
//      {
//              id: "Legal",
//              link: "/Help",
//      },
// ];

// const content = {
//      receiveMoney: {
//              receiveMoney:
//                      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam eaque ipsa,  quae ab illo inventore veritatis et quasi architecto beatae vitae  d icta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas    sit, aspernatur aut odit",
//      },
//      appStoreLink: {
//              link: "/xxxx",
//      },
//      googlePlayLink: {
//              link: "/sfdfhgjhkjnd",
//      },

//      noteToYoungLinkPaystack: "https://paystack.com/pay/rhodetails",
//      noteToYoungLinkEpok: "",
// };

const useStyles = makeStyles((theme) => ({
	footerContainer: {
		color: "#fff",
		width: "100%",
		padding: "3vw",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.info.main ?? "#1A73E8",
		marginTop: "2rem",

		"& > hr": {
			backgroundColor: "#f4f6ff",
			width: "100%",
			margin: "2vw 0",
		},
	},
	downloadBox: {
		border: "0.5vw solid #fff",
		borderRadius: "3vw",
		width: "60vw",
		margin: "-10vw 0 1vw 0",
		backgroundColor: colors.info.focus ?? "#1662C4",
		padding: "2vw",

		"& > *": {
			fontSize: "2vw",
		},
	},

	downloadIconBox: {
		cursor: "pointer",
		flexDirection: "column",
		// width: "11vw",
		height: "3vw",
		backgroundColor: "#fff",
		borderRadius: "0.9vw",
		margin: "2vw",
		padding: "2vw",
		"&  > img": { width: "90vw" },
		"& > *": {
			color: "#14243b",
			fontSize: "0.8vw",
			fontWeight: "300",
		},
	},

	downloadLogo: {
		height: "3.75vw",
		margin: "0vw 2vw",
		borderRadius: "10rem",
	},

	footerLineBreak: {
		height: "1px",
		width: "100%",
		backgroundColor: "#F4F6FF",
		margin: "2vw 0",
	},

	helpDocuments: {
		marginTop: "-3vw",
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		margin: "1vw 0",
		alignItems: "flex-end",

		"& > img": {
			width: "7vw",
		},
	},

	faqBox: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-end",
		fontSize: "1.5vw",
		"& > img": { width: "5vw", marginBottom: "2vw" },
	},

	footerNav: {
		display: "flex",
		flexDirection: "row",

		"& > li": {
			listStyleType: "none",
			fontSize: "1vw",
			margin: "0 2vw",
			cursor: "pointer",

			"&:hover": {
				borderBottom: "1px solid #f1962c",
			},
		},
	},

	socialAndFooter: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",

		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
	},

	socialIconsBox: {
		margin: "1vw 0",
		[theme.breakpoints.down("md")]: {
			margin: "2vw 0",
		},
		"& *": {
			fontSize: "2vw",
			color: "#fff",
		},
		"& > a": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
			margin: "0 1vw",

			"& > div": {
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				height: "2.3vw",
				width: "2.3vw",

				borderRadius: "100%",
				border: "0.1vw solid white",
				padding: "0.5vw",

				"& > img": { width: "100%", height: "100%" },
			},
		},
	},

	storeDetails: {
		"& > p": {
			color: "#14243b",
			margin: "0 0.5vw",
		},

		"& img": {
			width: "1.5vw",
			padding: ".1vw",
		},
	},

	copyright: {
		display: "flex",
		flexDirection: "row",
		margin: "4vw 0",
		justifyContent: "space-between",
		width: "100%",

		"& > p": { fontSize: "1vw", fontWeight: "400" },
	},
}));

export default function Footer() {
	const classes = useStyles();

	const socialIcons = [
		{
			link: personality.socials.linkedIn.link,
			icon: <LinkedInIcon />,
		},
		{
			link: personality.socials.github.link,
			icon: <GitHubIcon />,
		},
		{
			link: personality.socials.twitter.link,
			icon: <TwitterIcon />,
		},
		{
			link: personality.socials.instagram.link,
			icon: <InstagramIcon />,
		},
		{
			link: personality.socials.youtube.link,
			icon: <YouTubeIcon />,
		},
		{
			link: personality.socials.facebook.link,
			icon: <FacebookIcon />,
		},
		{
			link: personality.socials.blog.link,
			icon: <RssFeedIcon />,
		},
		{
			link: personality.socials.wikipedia.link,
			icon: <LibraryBooksIcon />,
		},
		{
			link: personality.socials.calendly.link,
			icon: <DateRangeIcon />,
		},
	];

	const rowBoxStyling = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	};

	// const colBoxStyling = {
	//      display: "flex",
	//      flexDirection: "column",
	//      justifyContent: "center",
	//      alignItems: "center",
	// };

	return (
		<div className={classes.footerContainer}>
			{/* <div className={classes.downloadBox}> */}
			{/* <Box sx={rowBoxStyling}>
                                        <img
                                                src={personality.images.logo ?? personality.images.casual}
                                                alt={personality.businessName ?? personality.name}
                                                className={classes.downloadLogo}
                                        />
                                </Box>
                                <Box sx={rowBoxStyling}>
                                        <a
                                                href={content.noteToYoungLinkPaystack}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                        >
                                                <Box sx={colBoxStyling} className={classes.downloadIconBox}>
                                                        <p>Download Book</p>
                                                        <Box sx={rowBoxStyling} className={classes.storeDetails}
>
                                                                <AutoStoriesIcon /> <p>Note to younger self</p>
                                                        </Box>
                                                </Box>
                                        </a> */}
			{/* <Link to={content.googlePlayLink}>
            <Box sx={colBoxStyling} className={classes.downloadIconBox}>
              <p>Download from</p>
              <Box sx={rowBoxStyling} className={classes.storeDetails}>
                <Box component="img" src="/vectors/playstore-dark.svg" /> <p>Play Store</p>
              </Box>
            </Box>
          </Link> */}
			{/* </Box> */}
			{/* </div> */}

			<Box sx={rowBoxStyling} className={classes.socialIconsBox}>
				{Object.keys(socialIcons).map(
					(key, index) =>
						socialIcons[key].link && (
							<Box
								component={Link}
								key={index}
								onClick={() => {
									window.open(socialIcons[key].link, "_blank");
								}}
								to={socialIcons[key].link}
								target="_blank"
								rel="noreferrer"
							>
								<Tooltip title={socialIcons[key].link}>
									<IconButton>{socialIcons[key].icon}</IconButton>
								</Tooltip>
							</Box>
						)
				)}
			</Box>

			<Box className={classes.footerLineBreak} />

			{/* <Box className={classes.socialAndFooter}>
                                <nav className={classes.footerNav}>
                                        {footerNav.map((item, index) => (
                                                <li key={index} id={item.id}>
                                                        {item.id}
                                                </li>
                                        ))}
                                </nav>
                        </Box> */}

			<Box className={classes.copyright}>
				{personality.businessName ? (
					<p>
						{personality.businessName} © {new Date().getFullYear()}. <br />
					</p>
				) : (
					<p>
						{personality.name} © {new Date().getFullYear()}. <br />
					</p>
				)}
				<p>{personality.bio.vision}</p>
			</Box>
		</div>
	);
}

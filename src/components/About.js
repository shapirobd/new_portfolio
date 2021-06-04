import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/bs_logo.png";

const useStyles = makeStyles(() => ({
	about: {
		height: "100vh",
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		// backgroundColor: "#161C23",
	},
	gridItem: {
		height: "50%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly",
		// border: "1px solid white",
	},
}));

const About = () => {
	const classes = useStyles();
	return (
		<Grid item container className={classes.about} cols={2}>
			<Grid item xs={4} className={classes.gridItem}>
				<Typography variant="h2">About me</Typography>
			</Grid>
			<Grid item xs={7} className={classes.gridItem}>
				<Typography>
					I love learning. Throughout my time as a business development
					associate at Gold's Gym, I gained a wealth of knowledge on sales best
					practices, building relationships, Salesforce tools & interface and
					ways for businesses to generate revenue. However, the most valuable
					thing I learned is that the only constant is change.{" "}
				</Typography>
				<Typography>
					Software development is certainly no exception - technology advances
					at such a rapid pace that we as developers must always be ready to
					learn how to use new tools, languages and best practices. My passion
					for learning paired with the software development skills that I
					already have under my belt allows me to take on new projects and
					challenges with confidence and excitement.
				</Typography>
			</Grid>
		</Grid>
	);
};

export default About;

import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/bs_logo.png";

const useStyles = makeStyles(() => ({
	title: {
		height: "100vh",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		// backgroundColor: "#161C23",
	},
	logo: {
		height: "25%",
	},
}));

const Title = () => {
	const classes = useStyles();
	return (
		<Grid item container className={classes.title}>
			<img className={classes.logo} src={logo} />
			<Typography variant="h2">Brian Shapiro</Typography>
			<Typography variant="h3">Software Developer</Typography>
		</Grid>
	);
};

export default Title;

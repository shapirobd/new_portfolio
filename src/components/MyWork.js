import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	myWork: {
		height: "100vh",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		// backgroundColor: "#44bbee",
	},
	portfolio: {
		height: "50%",
		display: "flex",
		justifyContent: "space-evenly",
	},
	portfolioPiece: {
		transitionDuration: "0.3s",
		height: "100%",
		borderRadius: "1em",
		border: "1px solid white",
		"&:hover": {
			transitionDuration: "0.3s",
			backgroundColor: "#fff",
		},
	},
}));

const MyWork = () => {
	const classes = useStyles();
	return (
		<Grid item container className={classes.myWork}>
			<Typography variant="h2">My Work</Typography>
			<Grid item container cols={3} className={classes.portfolio}>
				<Grid item className={classes.portfolioPiece} xs={3}></Grid>
				<Grid item className={classes.portfolioPiece} xs={3}></Grid>
				<Grid item className={classes.portfolioPiece} xs={3}></Grid>
			</Grid>
		</Grid>
	);
};

export default MyWork;

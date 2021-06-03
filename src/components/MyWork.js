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
		backgroundColor: "#44bbee",
	},
}));

const MyWork = () => {
	const classes = useStyles();
	return (
		<Grid item container className={classes.myWork}>
			<Typography>My Work</Typography>
		</Grid>
	);
};

export default MyWork;

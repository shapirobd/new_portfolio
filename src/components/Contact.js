import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	contact: {
		height: "100vh",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#161C23",
	},
}));

const Contact = () => {
	const classes = useStyles();
	return (
		<Grid item container className={classes.contact}>
			<Typography>Contact Me</Typography>
		</Grid>
	);
};

export default Contact;

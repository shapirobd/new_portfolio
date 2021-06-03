import "./App.css";
import { About, MyWork, Contact } from "./components";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	app: {
		textAlign: "center",
		backgroundColor: "#0e1218",
		height: "100vh",
		width: "100vw",
		overflow: "scroll",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}));

function App() {
	const classes = useStyles();
	return (
		<Grid container className={classes.app}>
			<Grid item container xs={10}>
				<About />
				<MyWork />
				<Contact />
			</Grid>
		</Grid>
	);
}

export default App;

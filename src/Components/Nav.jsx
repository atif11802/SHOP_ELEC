import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import StoreIcon from "@material-ui/icons/Store";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

function Nav({total}) {
	const classes = useStyles();
	return (
		<>
			<div className={classes.root}>
				<AppBar color="inherit" position="fixed" >
					<Toolbar>
						
						<IconButton
							edge="start"
							className={
								classes.menuButton
							}
							color="inherit"
							aria-label="menu"
						>
							<Link to="/">
							<StoreIcon color="primary" />
							</Link>
						</IconButton>
						<Typography
							variant="h6"
							className={
								classes.title
							}
						>
							Ratul
						</Typography>
						
						<Link to="/cart"  color="primary" >
						<Button color="inherit">
							
							<ShoppingCartIcon />
							<Typography
							variant="h6"
						>
							{total}
						</Typography>

						</Button>
						</Link>
						

						
					</Toolbar>
				</AppBar>
			</div>
		</>
	);
}

export default Nav;

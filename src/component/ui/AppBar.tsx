import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function DenseAppBar(props: any) {
	const { state, toggleDrawer } = props;
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="primary">
				<Toolbar variant="dense">
					<IconButton
						onClick={() => toggleDrawer(!state.isDrawerOpen)}
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" color="inherit" component="div">
						Pierantonio
					</Typography>
					<Box
						id="draggable-area"
						sx={{
							width: "100%",
							height: "100%",
						}}
					>
						<br />
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

import * as React from "react";
import { default as AppBar } from "./AppBar";
import { default as Drawer } from "./MenuDrawer";

export default function Dashboard() {
	const [state, setState] = React.useState({
		isDrawerOpen: false,
	});

	const toggleDrawer = (open: boolean) => {
		setState({ ...state, isDrawerOpen: open });
	};

	return (
		<>
			<AppBar
				state={state}
				toggleDrawer={(open: boolean) => toggleDrawer(open)}
			/>
			<Drawer
				isOpen={state.isDrawerOpen}
				toggleDrawer={(open: boolean) => toggleDrawer(open)}
			/>
		</>
	);
}

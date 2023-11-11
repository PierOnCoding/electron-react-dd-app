import * as React from "react";
import { default as AppBar } from "./AppBar";
import { default as Drawer } from "./MenuDrawer";

export default function Dashboard() {
	const [state, setState] = React.useState({
		isDrawerOpen: false,
	});

	const toggleDrawer = (
		event: React.KeyboardEvent | React.MouseEvent,
		open: boolean
	) => {
		if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" ||
				(event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		setState({ ...state, isDrawerOpen: open });
	};

	return (
		<>
			<AppBar
				state={state}
				toggleDrawer={(
					e: React.KeyboardEvent | React.MouseEvent,
					open: boolean
				) => toggleDrawer(e, open)}
			/>
			<Drawer
				isOpen={state.isDrawerOpen}
				toggleDrawer={(
					e: React.KeyboardEvent | React.MouseEvent,
					open: boolean
				) => toggleDrawer(e, open)}
			/>
		</>
	);
}

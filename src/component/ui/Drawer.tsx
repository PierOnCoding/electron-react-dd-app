import * as React from "react";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

export default function Drawer(props: any) {
	const { isOpen, toggleDrawer } = props;

	const list = (toggleDrawer: any) => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={(e: React.KeyboardEvent | React.MouseEvent) =>
				toggleDrawer(e, false)
			}
			onKeyDown={(e: React.KeyboardEvent | React.MouseEvent) =>
				toggleDrawer(e, false)
			}
		>
			<List>
				{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{["All mail", "Trash", "Spam"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<React.Fragment key="left">
				<MuiDrawer
					variant="persistent"
					anchor="left"
					open={isOpen}
					onClose={() => toggleDrawer(false)}
				>
					<Toolbar>
						<IconButton onClick={toggleDrawer}>
							<ChevronLeftIcon />
						</IconButton>
					</Toolbar>
					<Divider />
					{list((e: React.KeyboardEvent | React.MouseEvent, open: boolean) =>
						toggleDrawer(e, open)
					)}
				</MuiDrawer>
			</React.Fragment>
		</div>
	);
}

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function MenuDrawer(props: any) {
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
				<Drawer anchor="left" open={isOpen} onClose={() => toggleDrawer(false)}>
					{list((e: React.KeyboardEvent | React.MouseEvent, open: boolean) =>
						toggleDrawer(e, open)
					)}
				</Drawer>
			</React.Fragment>
		</div>
	);
}

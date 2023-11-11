import * as React from "react";
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import { useTheme } from "@mui/material/styles";

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

	const theme = useTheme();

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
			{
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam aliquam sem et. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Sit amet tellus cras adipiscing enim. Amet nisl purus in mollis nunc sed. Vivamus at augue eget arcu dictum varius duis. At auctor urna nunc id cursus metus. At risus viverra adipiscing at in tellus. Lacus vestibulum sed arcu non odio euismod. Phasellus vestibulum lorem sed risus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Velit dignissim sodales ut eu sem integer vitae. Lectus proin nibh nisl condimentum id venenatis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Fermentum odio eu feugiat pretium nibh ipsum. Dui sapien eget mi proin sed. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Nulla porttitor massa id neque aliquam. Justo nec ultrices dui sapien eget mi. Nisi porta lorem mollis aliquam ut porttitor leo. Viverra ipsum nunc aliquet bibendum enim facilisis. Nunc aliquet bibendum enim facilisis. Nisl rhoncus mattis rhoncus urna neque viverra. Ut placerat orci nulla pellentesque dignissim. Viverra vitae congue eu consequat ac felis donec et odio. Proin sagittis nisl rhoncus mattis. Sem viverra aliquet eget sit amet. Tempor orci eu lobortis elementum nibh tellus molestie. Risus feugiat in ante metus dictum at. In fermentum et sollicitudin ac orci phasellus egestas. Neque ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Quis viverra nibh cras pulvinar mattis. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. A scelerisque purus semper eget duis at tellus at. Cum sociis natoque penatibus et magnis.Venenatis urna cursus eget nunc scelerisque viverra mauris. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Eu facilisis sed odio morbi quis commodo odio aenean sed. Eget nullam non nisi est sit amet facilisis magna etiam. Egestas sed sed risus pretium. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Venenatis lectus magna fringilla urna. Massa sapien faucibus et molestie. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Nisl purus in mollis nunc. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Justo donec enim diam vulputate ut pharetra sit amet. Morbi non arcu risus quis. Praesent semper feugiat nibh sed. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Id aliquet risus feugiat in ante.Amet commodo nulla facilisi nullam vehicula ipsum a. Aliquam nulla facilisi cras fermentum odio eu. Orci eu lobortis elementum nibh. Nunc faucibus a pellentesque sit amet porttitor eget. Suspendisse in est ante in nibh mauris cursus. Sit amet tellus cras adipiscing. Vehicula ipsum a arcu cursus. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Risus in hendrerit gravida rutrum quisque non. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Sit amet mauris commodo quis imperdiet massa. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. A pellentesque sit amet porttitor. Tempor orci eu lobortis elementum.Amet cursus sit amet dictum sit amet justo. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Volutpat ac tincidunt vitae semper quis. Commodo elit at imperdiet dui accumsan sit amet nulla. At imperdiet dui accumsan sit amet nulla. Donec enim diam vulputate ut pharetra sit amet. Felis eget velit aliquet sagittis id consectetur purus ut. Proin sed libero enim sed faucibus turpis in. Diam quam nulla porttitor massa id. Non quam lacus suspendisse faucibus. Volutpat ac tincidunt vitae semper quis lectus nulla. Neque gravida in fermentum et sollicitudin ac orci phasellus. Integer vitae justo eget magna. At urna condimentum mattis pellentesque id nibh. Lectus sit amet est placerat in egestas. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Nunc eget lorem dolor sed viverra. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet.Dui vivamus arcu felis bibendum ut tristique et. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Nunc sed id semper risus in hendrerit gravida. Lorem mollis aliquam ut porttitor leo. In iaculis nunc sed augue lacus viverra vitae congue eu. Dui sapien eget mi proin. Neque aliquam vestibulum morbi blandit cursus. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Egestas pretium aenean pharetra magna. Nec dui nunc mattis enim ut tellus.Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Lectus arcu bibendum at varius vel pharetra. In ante metus dictum at. Tempor commodo ullamcorper a lacus vestibulum. Nec ullamcorper sit amet risus nullam eget felis eget. Viverra justo nec ultrices dui. Vitae et leo duis ut diam quam. Tincidunt lobortis feugiat vivamus at. In eu mi bibendum neque egestas congue. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis.Ante metus dictum at tempor commodo. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Laoreet suspendisse interdum consectetur libero. Ipsum faucibus vitae aliquet nec ullamcorper. Morbi tristique senectus et netus et malesuada. In tellus integer feugiat scelerisque varius morbi enim. Eget gravida cum sociis natoque penatibus et. Mauris nunc congue nisi vitae suscipit tellus mauris a. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Nam libero justo laoreet sit amet cursus sit amet dictum. Proin gravida hendrerit lectus a. Est ullamcorper eget nulla facilisi etiam dignissim diam. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet cursus sit.Eget lorem dolor sed viverra ipsum. Enim diam vulputate ut pharetra sit amet. Odio euismod lacinia at quis risus. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Enim sed faucibus turpis in eu mi bibendum. Ut enim blandit volutpat maecenas. Sed pulvinar proin gravida hendrerit lectus. Nibh tellus molestie nunc non blandit. Molestie at elementum eu facilisis sed. Arcu felis bibendum ut tristique et. Habitant morbi tristique senectus et. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Ridiculus mus mauris vitae ultricies leo integer. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Sem integer vitae justo eget. Egestas pretium aenean pharetra magna ac. Dignissim enim sit amet venenatis urna cursus eget.Augue interdum velit euismod in pellentesque massa. Pharetra vel turpis nunc eget lorem dolor. Malesuada fames ac turpis egestas sed tempus urna. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Odio pellentesque diam volutpat commodo. Porttitor rhoncus dolor purus non enim. Facilisis leo vel fringilla est ullamcorper. Libero enim sed faucibus turpis. Cras fermentum odio eu feugiat. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Velit scelerisque in dictum non. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Consequat id porta nibh venenatis cras sed. Netus et malesuada fames ac turpis egestas sed tempus. Placerat in egestas erat imperdiet sed euismod nisi. Dui id ornare arcu odio ut sem nulla. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Ipsum faucibus vitae aliquet nec ullamcorper. Amet facilisis magna etiam tempor orci eu lobortis elementum. Nunc mattis enim ut tellus elementum sagittis vitae."
			}
		</>
	);
}

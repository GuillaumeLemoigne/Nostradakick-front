import "./404.scss";
import logo from "../../assets/smartselect_20250227_094441_video_player_360.gif";
import Header_desktop from "../Headers/Header_desktop/Header_desktop";

export const NotFoundPage = () => {
	return (
		<>
			<Header_desktop />
			<div className="NotFoundPage404">
				<div className="NotFoundPage404__text">
					<h1 className="NotFoundPage404__text__404">404</h1>
					<h2 className="NotFoundPage404__text__h2">Page Not Found</h2>
				</div>

				<img src={logo} alt="Logo" className="logo" />
			</div>
		</>
	);
};

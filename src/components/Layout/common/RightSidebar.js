import React from "react";
import { Link } from "react-router-dom";
import "./../common/rightbar.scss";

const RightSidebar = props => {
  
	const onCloseRightBar = () => {
		const { onClose } = props;
		if (onClose) {
			onClose();
		}
	};
	return (
		<React.Fragment>
			<div data-simplebar className="h-100">
				<div className="rightbar-title px-3 py-4">
					<Link
						to="#"
						onClick={e => {
							onCloseRightBar();
						}}
						className="right-bar-toggle float-end"
					>
						<i className="mdi mdi-close noti-icon" />
					</Link>
					<h5 className="m-0">Settings</h5>
				</div>
			</div>
		</React.Fragment>
	);
};

export default RightSidebar;

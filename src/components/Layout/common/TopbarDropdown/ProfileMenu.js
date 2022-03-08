import React, { useState, useEffect } from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import { withRouter, NavLink ,useHistory} from "react-router-dom";
import { useStateValue } from "./../../../../StateProvider";
import User from "./../../../../api/User";
import ConstantImages from "../../../../constants/constantImages";

const ProfileMenu = () => {

	let history = useHistory();

	const [menu, setMenu] = useState(false);
	const [username, setUsername] = useState("Test");
	const [branchname, setBranchName] = useState("Head Office");
	const [, dispatch] = useStateValue();

	const logout = () => {
		localStorage.removeItem("authUser");
		history.replace("/");
		history.go(0);
	};

	useEffect(() => {
		User.getProfile().then((response) => {
			if (response.status == 200) {
				setUsername(response.data.user.user_name);
				setBranchName(response.data.name);
				localStorage.setItem("branchId", response.data.user.branch_id);
			}
		})
			.catch((error) => {
				if (error.response.status == 401) setError("Please re-login!!");
			});
	},[]);

	return (
		<React.Fragment>
			<Dropdown
				isOpen={menu}
				toggle={() => setMenu(!menu)}
				className="d-inline-block"
			>
				<DropdownToggle
					className="btn header-item "
					id="page-header-user-dropdown"
					tag="button"
				>
					<img
						className="rounded-circle header-profile-user"
						src={ConstantImages.User}
						alt="Header Avatar"
					/>
					<span className="d-none d-xl-inline-block ms-2 me-1">{username} [ {branchname} ]</span>
					<i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
				</DropdownToggle>
				<DropdownMenu className="dropdown-menu-end">
					<DropdownItem tag="a" href="#">
						<i className="bx bx-user font-size-16 align-middle me-1" />
						<span>Profile</span>
					</DropdownItem>
					<DropdownItem tag="a" href="#">
						<span className="badge bg-success float-end">0</span>
						<i className="bx bx-wrench font-size-16 align-middle me-1" />
						<span>Settings</span>
					</DropdownItem>
					<div className="dropdown-divider" />
					<NavLink to="#" className="dropdown-item" onClick={() => { logout(); }}>
						<i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
						<span>Logout</span>
					</NavLink>
				</DropdownMenu>
			</Dropdown>
		</React.Fragment>
	);
};

export default withRouter(ProfileMenu);
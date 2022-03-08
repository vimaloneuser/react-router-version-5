import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";

const NotificationDropdown = props => {
	// Declare a new state variable, which we'll call "menu"
	const [menu, setMenu] = useState(false);

	return (
		<React.Fragment>
			<Dropdown
				isOpen={menu}
				toggle={() => setMenu(!menu)}
				className="dropdown d-inline-block"
				tag="li"
			>
				<DropdownToggle
					className="btn header-item noti-icon "
					tag="button"
					id="page-header-notifications-dropdown"
				>
					<i className="bx bx-bell bx-tada" />
					<span className="badge bg-danger rounded-pill">3</span>
				</DropdownToggle>

				<DropdownMenu className="dropdown-menu dropdown-menu-lg p-0 dropdown-menu-end">
					<div className="p-3">
						<Row className="align-items-center">
							<Col>
								<h6 className="m-0"> Notifications </h6>
							</Col>
							<div className="col-auto">
								<a href="#!" className="small">
									{" "}
                  View All
								</a>
							</div>
						</Row>
					</div>

					<div>
						<Link to="" className="text-reset notification-item">
							<div className="media">
								<div className="avatar-xs me-3">
									<span className="avatar-title bg-primary rounded-circle font-size-16">
										<i className="bx bx-cart" />
									</span>
								</div>
								<div className="media-body">
									<h6 className="mt-0 mb-1">
                    Your order is placed
									</h6>
									<div className="font-size-12 text-muted">
										<p className="mb-1">
                      If several languages coalesce the grammar
										</p>
										<p className="mb-0">
											<i className="mdi mdi-clock-outline" />{" "}
                      3 min ago
										</p>
									</div>
								</div>
							</div>
						</Link>
						<Link to="" className="text-reset notification-item">
							<div className="media">
								<div className="avatar-xs me-3">
									<span className="avatar-title bg-success rounded-circle font-size-16">
										<i className="bx bx-badge-check" />
									</span>
								</div>
								<div className="media-body">
									<h6 className="mt-0 mb-1">
                    Your item is shipped
									</h6>
									<div className="font-size-12 text-muted">
										<p className="mb-1">
                      If several languages coalesce the grammar
										</p>
										<p className="mb-0">
											<i className="mdi mdi-clock-outline" />{" "}
                        3 min ago
										</p>
									</div>
								</div>
							</div>
						</Link>
					</div>
					<div className="p-2 border-top d-grid">
						<Link
							className="btn btn-sm btn-link font-size-14 btn-block text-center"
							to="#"
						>
							<i className="mdi mdi-arrow-right-circle me-1"></i>
              View all
						</Link>
					</div>
				</DropdownMenu>
			</Dropdown>
		</React.Fragment>
	);
};

export default NotificationDropdown;
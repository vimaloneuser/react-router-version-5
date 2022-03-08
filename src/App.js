import React from "react";
import Layout from "./components/Layout";
import { Switch, BrowserRouter as Router, Route} from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./routes";
import AuthRoutes from "./routes/AuthRoutes";
import "./../public/assets/scss/theme.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "flatpickr/dist/themes/material_blue.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "toastr/build/toastr.min.css";

function App() {
	let isAuth = localStorage.getItem("authUser");
	return (
		<React.Fragment>
			<Router>
				<Switch>
					{
						(isAuth) ?
							authProtectedRoutes.map((route, idx) => (
								<AuthRoutes
									path={route.path}
									layout={Layout}
									component={route.component}
									key={idx}
									isAuthProtected={true}
									exact
								/>
							)) : 
							publicRoutes.map((route, idx) => (
								<Route path={route.path} component={route.component} key={idx} exact/>
							))}
				</Switch>
			</Router>
	  </React.Fragment>
	);
}

export default App;
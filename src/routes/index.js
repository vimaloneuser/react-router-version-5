import Login from "./../components/Lead/Login";
import Dashboard from "./../components/Lead/Dashboard";
import LeadList from "./../components/Lead/List";

const authProtectedRoutes = [
	{ path: "/", component: Dashboard },
	{ path: "/lead", component: LeadList },
];
const publicRoutes = [
	{ path: "/", component: Login }
];

export { authProtectedRoutes, publicRoutes };
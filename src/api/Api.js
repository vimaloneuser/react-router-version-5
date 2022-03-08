import axios from "axios";

let Api = axios.create({
	baseURL: process.env.REACT_APP_API_URL
});

/*
   * Add a request interceptor
   @param config
  */
Api.interceptors.request.use(
	(config) => {
		let token = localStorage.getItem("authUser");
		if (token != null)
			config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => {
		return Promise.reject(error.response);
	}
);

/*
   * Add a response interceptor
   */
Api.interceptors.response.use(
	response => {
		return response;
	},
	(error) => {
		if (error.response.status === 401) {
			localStorage.removeItem("authUser");
			window.location.href = "/";
		}
		return Promise.reject(error.response);
	}
);

export default Api;
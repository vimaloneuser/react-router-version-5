import Api from "./Api";

export default {
	login(form){
		return Api.post("/login",{}, {
			auth: {
			  username: form.user_name,
			  password: form.password
			}
		});
	},
	getUserList(data){
		return Api.get("/getAllUser",data);
	},
	getProfile(){
		return Api.get("/userInfo");
	}
};
import Api from "./Api";

export default {
	createLead(form) {
		return Api.post("/createLead", form);
	},
	getBranchList() {
		return Api.get("/getBranchList");
	},
	getLeadList(param) {
		return Api.get("/getAllLeads", { params: param });
	},
	getSBUList() {
		return Api.get("/getAllSbu");
	},
	getClientList() {
		return Api.get("/getAllClient");
	},
	deleteLeadFile(data) {
		return Api.post("/deleteFiles", data);
	},
	updateLead(data, param) {
		return Api.post("/updateLead", data, { params: param });
	},
	getLeadById(param) {
		return Api.get("/getLeadById", { params: param });
	},
	reassignLead(body, params) {
		return Api.post("/reassignLead", body, { params });
	}
};
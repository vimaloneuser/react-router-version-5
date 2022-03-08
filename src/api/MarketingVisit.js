import Api from "./Api";

export default {
	createMarketingVisit(body) {
		return Api.post("/createMarketingVisit", body);
	},
	editMarketingVisit(body, queryParam) {
		return Api.post("/updateMarketingVisit", body, { params: queryParam });
	},
	deleteMarketingVisit(body) {
		return Api.post("/deleteMarketingVisit", body);
	},
	getMarketingVisit(param) {
		return Api.get("/getMarketingVisit", { params: param });
	},
	getLeadById(param) {
		return Api.get("/getLeadById", { params: param });
	},
	postMarketVisit(data, param) {
		return Api.post("/postVisitEdit", data, { params: param });
	},
	preVisitDetail(body, param) {
		return Api.post("/preVisitEdit", body, { params: param });
	},
	createAdditionalVisit(body) {
		return Api.post("/createAdditionalVisit", body);
	},
	createLostOpportunity(body) {
		return Api.post("/createLostOpportunity", body);
	}
};
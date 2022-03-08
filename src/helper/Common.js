import toastr from "toastr";
import moment from "moment";
import momenttime from "moment-timezone";

export const getLeadStatusColor = (status) => {
	if (status == "OPEN")
		return "theme_primary";
	if (status == "CLOSED")
		return "success";
	if (status == "NO OPPORTUNITY")
		return "warning";
	if (status == "LOST OPPORTUNITY")
		return "danger";
};

export const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const showToast = ({ success = true, message }) => {
	if (success)
		toastr.success(message);
	else
		toastr.error(message);
};

export const getBrowserTimeZone = () => {
	return moment.tz.guess();
};

export const convertUTCToLocalTime = (date,time) => {
	if(date && time){
		let browserTime = moment.tz.guess();
		let dateFormat = moment(date).format("YYYY-MM-DD");
		return  momenttime.tz(dateFormat+" "+time,browserTime).format("HH:mm");
	 }
};
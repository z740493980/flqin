import sideBox from "../++sideBox/cmpt";

export default angular
	.module("rExperience", [
		sideBox
	])
	.component("resumeExperience", {
		templateUrl : "components/+rExperience/cmpt.html",
		controller  : ResumeExperienceCtrl
	})
	.name;

function ResumeExperienceCtrl() {
	console.log("footer");
}
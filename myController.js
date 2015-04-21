var mainApp = angular.module("mainApp", []);

mainApp.controller("MyCtrl", function($scope){

  $scope.styleSet={
		"Blue font with Red background": "blueFont redBg",
		"Blue font with Green background": "blueFont greenBg",
		"Blue font with Grey background": "blueFont greyBg"
	};

	/*=======================================================================
	List of students and their marks
	=========================================================================*/
	$scope.studentList = [
	{
		name: "Michael",
		marks: 97			
	},
	{
		name: "Doherty",
		marks: 21			
	},
	{
		name: "Toshish",
		marks: 84			
	},
	{
		name: "Tim",
		marks: 32			
	},
	{
		name: "Anirudh",
		marks: 59			
	},
	{
		name: "Joseph",
		marks: 91			
	},		
	{
		name: "Jenny",
		marks: 99			
	},
	{
		name: "Igor",
		marks: 52			
	},
	{
		name: "Ian",
		marks: 66			
	},
	{
		name: "Lee",
		marks: 87			
	}
	];
})
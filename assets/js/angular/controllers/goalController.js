app.controller("goalController",function($scope, Restangular){
	$scope.goals=[];
	var milestoneAPI = Restangular.all('Goals');
	var refreshMilestones = function () {
		milestoneAPI.getList()  // GET: /Goals
			.then(function(data) {
				// returns a list of Goals
				$scope.goals = data;
				console.log($scope.goals);
			});
	};
	refreshMilestones();
	$scope.submitMilestone = function (milestone){
		milestoneAPI.post(
			{
				goalName: milestone,
				active: true,
				completed: false,
				tasks:[]
			}
		);
		refreshMilestones();
	};
	$scope.deleteMilestone = function (goal){
		goal.remove().then(function(){refreshMilestones();});
	};
	$scope.updateMilestone = function(milestone, newName){
		milestone.goalName = newName;
		milestone.put().then(function(){
			refreshMilestones();
		});

	};
////////////// Tasks ///////////////////////////////   could probably modify these and the goals functions to have 1 set work for both later
	$scope.tasks=[];
	var taskAPI = Restangular.all('Tasks');
	var refreshTasks = function () {
		taskAPI.getList()  // GET: /Tasks
			.then(function(data) {
				// returns a list of Tasks
				$scope.tasks = data;
				console.log($scope.tasks);
			});
	};
	refreshTasks();

	// $scope.$apply();
});
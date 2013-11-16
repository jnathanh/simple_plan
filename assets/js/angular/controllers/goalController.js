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
////////////// Multi-Use ///////////////////////////////
	$scope.toggleCompletion = function(goalTask){
		goalTask.completed = !goalTask.completed;
		goalTask.put().then(function(){
			refreshMilestones();
			refreshTasks();
		});
	};
////////////// Tasks ///////////////////////////////   could probably modify these and the goals functions to have 1 set work for both later
	$scope.currentWeek = 1;
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
	$scope.submitTask = function (newTaskName,goal){
		taskAPI.post(
			{
				goalID: goal.id,
				taskName: newTaskName,
				completed: false,
				week: $scope.currentWeek
			}
		);
		refreshTasks();
	};
	$scope.deleteTask = function (task){
		task.remove().then(function(){refreshTasks();});
	};
	$scope.updateTask = function(task, newName){
		task.taskName = newName;
		task.put().then(function(){
			refreshTasks();
		});
	};
	$scope.completeTask = function(task){
		task.completed = true;
		task.put().then(function(){
			refreshTasks();
		});
	};


	// $scope.$apply();
});
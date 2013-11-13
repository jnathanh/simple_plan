app.controller("goalController",function($scope, Restangular){
	$scope.goals=[];
	$scope.add = false;
	var milestoneAPI = Restangular.all('Goals');
	var refreshMilestones = function () {
		milestoneAPI.getList()  // GET: /Goals
			.then(function(data) {
				// returns a list of Goals
				$scope.goals = data;   // first Restangular obj in list: { id: 123 }
			});
	};
	refreshMilestones();
	$scope.addMilestone = function(){
		$scope.add = true;
	};
	$scope.submitMilestone = function (milestone){
		milestoneAPI.post(
			{
				goalName: milestone,
				active: true
			}
		);
		$scope.add = false;
		refreshMilestones();
	};
	// $scope.$apply();
});
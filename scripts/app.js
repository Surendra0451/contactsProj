var app = angular.module("contactsApp", []);

app.controller('mainCtrl', function($scope, $http){
	$scope.contacts={};
	
	$scope.editRecord = function(id){
		
	}
	$scope.deleteRecord = function(id){
		
	}
	$http({
		method: 'GET',
		url: 'https://run.mocky.io/v3/756d0e19-daee-4acd-9c9e-84fb108e2b04'
	}).then(function successCallback(response) {
		console.log(response);
		$scope.contacts = response.data;
		
		// this callback will be called asynchronously
		// when the response is available
	}, function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});
})

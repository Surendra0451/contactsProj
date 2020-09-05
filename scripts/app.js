var app = angular.module("contactsApp", []);

app.controller('mainCtrl', function($scope, $http){
	$scope.showModal = false;
	$scope.contacts=[];
	$scope.newObj = {}
	var element = angular.element('#edit_modal');
	
	$scope.editRecord = function(idx){
		element.modal('show');
		$scope.newObj.idx = idx;
		$scope.newObj = $scope.contacts[idx];
	}
	$scope.updateRecord = function(){
		element.modal('hide');
		$scope.contacts[$scope.newObj.idx].name = $scope.newObj.name;
		$scope.contacts[$scope.newObj.idx].email = $scope.newObj.email;
		$scope.contacts[$scope.newObj.idx].phone = $scope.newObj.phone;
	}
	$scope.deleteRecord = function(id){
		$scope.contacts.forEach(function(itm, index){
			if(itm.id === id){
				$scope.contacts.splice(index, 1)
			}
		})
	}
	$http({
		method: 'GET',
		url: 'https://run.mocky.io/v3/756d0e19-daee-4acd-9c9e-84fb108e2b04'
	}).then(function successCallback(response) {
		console.log(response);
		$scope.contacts = response.data.contacts;
		//localStorage.setItem('contacts', JSON.stringify(response.data.contacts));
		// this callback will be called asynchronously
		// when the response is available
	}, function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});
})

'use strict';

angular.module('contactApp.controller', ['contactApp.services'])

.controller('AppCtrl', ['$scope', 'ContactsService', function($scope, ContactsService){
	$scope.appName = 'Contact Manager';
	$scope.description = 'Simple Angular.js example application.';
}])

.controller('ContactsCtrl', ['$scope', 'ContactsService', function($scope, ContactsService){
	$scope.getContacts = function(){
		return ContactsService.getContacts();
	};
}])

.controller('NewContactCtrl', ['$scope', 'ContactsService', '$state', function($scope, ContactsService, $state){
	$scope.contact = {};
	$scope.title = "New Contact";
	$scope.addContact = function(valid){
		if(valid){
			ContactsService.addContact($scope.contact);
			$state.go('home');
		}else{
			alert("Please fill valid values");
		}
	};
}])

.controller('EditContactCtrl', ['$scope', 'ContactsService', '$stateParams', '$state', function($scope, ContactsService, $stateParams, $state){
	$scope.contact = ContactsService.getContact($stateParams.id);
	$scope.title = "Edit Contact";
	$scope.addContact = function(valid){
		if(valid) {
			ContactsService.editContact($scope.contact);
			$state.go('home');	
		}else{
			alert("Please fill valid values");
		}
	};
}])

.controller('DeleteContactCtrl', ['$scope', 'ContactsService', '$stateParams', '$state', function($scope, ContactsService, $stateParams, $state){
	ContactsService.deleteContact($stateParams.id);
	$state.go('home');
}]);



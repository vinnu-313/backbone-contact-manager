'use strict';


describe('Controllers Test : ', function(){
	beforeEach(module('contactApp'));

	describe('Testing AppCtrl', function(){
		var ctrl, scope;
		beforeEach(inject(function($controller, $rootScope){
			scope = $rootScope.$new();
			ctrl = $controller('AppCtrl', {
				$scope : scope
			});
		}));

		it('Should have appName', function(){
			expect(scope.appName).toBeDefined();
			expect(scope.appName).toEqual('Contact Manager');
		});

		it('Should have description', function(){
			expect(scope.description).toBeDefined();
			expect(scope.description).toEqual('Simple Angular.js example application.');
		});
	});

	describe('Testing ContactsCtrl', function(){
		var ctrl, scope;
		beforeEach(inject(function($controller, $rootScope){
			scope = $rootScope.$new();
			ctrl = $controller('ContactsCtrl', {
				$scope:scope
			});
		}));

		it('Should have getContacts', inject(function(ContactsService){
			expect(scope.getContacts).toBeDefined();
			expect(scope.getContacts).toEqual(jasmine.any(Function));
			expect(scope.getContacts()).toEqual(ContactsService.getContacts());
		}));
	});

	describe('Testing NewContactCtrl', function(){
		var ctrl, scope, service, state;
		beforeEach(inject(function($controller, $rootScope, ContactsService, $state){
			scope = $rootScope.$new();
			ctrl = $controller('NewContactCtrl', {
				$scope : scope
			});
			service = ContactsService;
			state = $state;
		}));

		it('Should have title', function(){
			expect(scope.title).toBeDefined();
			expect(scope.title).toEqual('New Contact');
		});	

		it('Should have contact', function(){
			expect(scope.contact).toBeDefined();
			expect(scope.contact).toEqual({});
		});

		it('Should have addContact', function(){
			expect(scope.addContact).toBeDefined();
			expect(scope.addContact).toEqual(jasmine.any(Function));
			spyOn(service, 'addContact');
			spyOn(state, 'go');
			scope.addContact(false);
			expect(service.addContact).not.toHaveBeenCalled();
			scope.addContact(true);
			expect(service.addContact).toHaveBeenCalled();
			expect(state.go).toHaveBeenCalledWith('home');
		});
	});


	describe('Testing EditContactCtrl', function(){
		var ctrl, scope, service, state;
		beforeEach(inject(function($controller, $rootScope, ContactsService, $state){
			scope = $rootScope.$new();
			ctrl = $controller('EditContactCtrl', {
				$scope : scope
			});
			service = ContactsService;
			state = $state;
		}));

		it('Should have title', function(){
			expect(scope.title).toBeDefined();
			expect(scope.title).toEqual('Edit Contact');
		});	

		it('Should have contact', function(){
			expect(scope.contact).toBeDefined();
			expect(scope.contact).toEqual({});
		});

		it('Should have addContact', function(){
			expect(scope.addContact).toBeDefined();
			expect(scope.addContact).toEqual(jasmine.any(Function));
			spyOn(service, 'editContact');
			spyOn(state, 'go');
			scope.addContact(false);
			expect(service.editContact).not.toHaveBeenCalled();
			scope.addContact(true);
			expect(service.editContact).toHaveBeenCalled();
			expect(state.go).toHaveBeenCalledWith('home');
		});
	});


	describe('Testing DeleteContactCtrl', function(){

		it('Should call deleteContact and go', inject(function($controller, $rootScope, ContactsService, $state){
			var scope = $rootScope.$new();
			spyOn(ContactsService, 'deleteContact');
			spyOn($state, 'go');
			var ctrl = $controller('DeleteContactCtrl', {
				$scope : scope
			});
			expect(ContactsService.deleteContact).toHaveBeenCalled();
			expect($state.go).toHaveBeenCalledWith('home');
		}));

	});

});
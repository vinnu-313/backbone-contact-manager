'use strict';


describe('Services test ', function(){
	var service;
	beforeEach(module('contactApp.services'));
	beforeEach(inject(function(ContactsService){
		service = ContactsService;
	}));

	it("Should have ContactsService", function(){
		expect(service).toBeDefined();
	});

	it('Should have getContacts', function(){
		expect(service.getContacts).toBeDefined();
		expect(service.getContacts).toEqual(jasmine.any(Function));
		expect(service.getContacts().length).toEqual(6);
	});

	it('Should have getContact', function(){
		expect(service.getContact).toBeDefined();
		expect(service.getContact).toEqual(jasmine.any(Function));
		expect(service.getContact(0)).toEqual({});
		expect(service.getContact(1)).toEqual({
              id: 1,
              avatar: 1,
              name : 'Terrence S. Hatfield',
              tel: '651-603-1723',
              email: 'TerrenceSHatfield@rhyta.com'
            });
	});

	it('Should have addContact', function(){
		expect(service.addContact).toBeDefined();
		expect(service.addContact).toEqual(jasmine.any(Function));
		var contact = {};
		var count = service.getContacts().length;
		service.addContact(contact);
		expect(contact.avatar).toBeDefined();
		expect(contact.id).toEqual(service.findMaxId());
		expect(service.getContacts().length).toEqual(count+1);
	});

	it('Should have editContact', function(){
		expect(service.editContact).toBeDefined();
		expect(service.editContact).toEqual(jasmine.any(Function));
		var contact = {
			id : 1
		};
		service.editContact(contact);
		expect(service.getContact(1)).toEqual(contact);
	});

	it('Should have deleteContact', function(){
		expect(service.deleteContact).toBeDefined();
		expect(service.deleteContact).toEqual(jasmine.any(Function));
		service.deleteContact(1);
		expect(service.getContact(1)).toEqual({});
		var count = service.getContacts().length;
		service.deleteContact(10);
		expect(count).toEqual(service.getContacts().length);
	});

	if('Should have findMaxId', function(){
		expect(service.findMaxId).toBeDefined();
		expect(service.findMaxId).toEqual(jasmine.any(Function));
		var contacts = service.getContacts();
		contacts.forEach(function(c){
			service.deleteContact(c.id);
		});
		expect(service.findMaxId()).toEqual(-1);
		service.addContact({
			id: 10
		});
		expect(service.findMaxId()).toEqual(10);
	});
});

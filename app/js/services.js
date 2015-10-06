'use strict';

angular.module('contactApp.services', [])

.factory('ContactsService', ['$http', function($http){
	var contacts = [
            {
              id: 1,
              avatar: 1,
              name : 'Terrence S. Hatfield',
              tel: '651-603-1723',
              email: 'TerrenceSHatfield@rhyta.com'
            },
            {
              id: 2,
              avatar: 2,
              name : 'Chris M. Manning',
              tel: '513-307-5859',
              email: 'ChrisMManning@dayrep.com'
            },
            {
              id: 3,
              avatar: 3,
              name : 'Ricky M. Digiacomo',
              tel: '918-774-0199',
              email: 'RickyMDigiacomo@teleworm.us'
            },
            {
              id: 4,
              avatar: 4,
              name : 'Michael K. Bayne',
              tel: '702-989-5145',
              email: 'MichaelKBayne@rhyta.com'
            },
            {
              id: 5,
              avatar: 5,
              name : 'John I. Wilson',
              tel: '318-292-6700',
              email: 'JohnIWilson@dayrep.com'
            },
            {
              id: 6,
              avatar: 6,
              name : 'Rodolfo P. Robinett',
              tel: '803-557-9815',
              email: 'RodolfoPRobinett@jourrapide.com'
            }
          ];
	return {
		getContacts : function () {
			return contacts;
		},
		getContact: function(id){
			for (var i = 0; i<contacts.length; ++i ){
				if(contacts[i].id == id){
					return contacts [i];
				}
			}
			return {};
		},
		addContact: function(contact){
			contact['avatar'] = Math.floor(Math.random() * 15) + 1;
			contact['id'] = this.findMaxId() + 1;
			contacts.push(contact);
		},
		findMaxId: function() {
			var id = -1;
			contacts.forEach(function(c) {
				if(c.id > id){
					id = c.id;
				}
			});
			return id;
		},
		editContact: function(contact) {
			contacts[contacts.indexOf(this.getContact(contact.id))] = contact;
		},
		deleteContact: function(id){
			contacts.splice(contacts.indexOf(this.getContact(id)), 1);
		}
	};
}]);
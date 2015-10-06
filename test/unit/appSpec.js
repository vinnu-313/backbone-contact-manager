'use strict';

describe("Application Test : ", function() {

	var module;
	beforeEach(function() {
		module = angular.module('contactApp');
	});

	it("Is contactApp module exists ??", function() {
		expect(module).not.toBeNull();
	});

	describe("Testing dependecies : ", function() {
		var deps;
		var hasModule = function(m) {
			return deps.indexOf(m) >= 0;
		};

		beforeEach(function() {
			deps = module.value("contactApp").requires;
		});

		it("Should have contactApp.controller", function() {
			expect(hasModule("contactApp.controller")).toBeTruthy();
		});

		it("Should have contactApp.services", function() {
			expect(hasModule("contactApp.services")).toBeTruthy();
		});

		it("Should have ui.router", function() {
			expect(hasModule("ui.router")).toBeTruthy();
		});
	});
});
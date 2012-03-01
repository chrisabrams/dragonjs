var Dragon = require("../deploy/dragon.js");

describe("Dragon.View", function() {

	describe("constructor.el", function() {
		
		var testView = new Dragon.View({
			el: "#someelement"
		});

		it("should have an element assigned to the view", function() {
			
			testView.should.have.property("el");
			
			var el = testView.el;
			el.should.be.a("string");
		});
	});

	describe("constructor.init", function() {
		
		var testView = new Dragon.View({
			el: "#someelement",
			init: function() {
				
			}
		});
		
		it("should initialize a function when provided", function() {
			testView.should.have.property("init");
			testView.init.should.be.a("function");
		});
	});

	describe("constructor.template", function() {

		it("should have a valid default template", function() {
			
			var testView = new Dragon.View({
				el: "#someelement"
			});

			testView.template.should.be.a("object");

			var source = testView.template.source;
			source.should.be.a("string");
		});

		it("should be able to detect & fetch an embedded source", function() {
			
			var testView = new Dragon.View({
				el: "#someelement",
				template: {
					source: "embedded"
				}
			});

			testView.template.should.be.a("object");

			var source = testView.template.source;
			source.should.be.a("string");
		});

		it("should be able to detect & fetch a local source", function() {
			
			var testView = new Dragon.View({
				el: "#someelement",
				template: {
					source: "../examples/template.html"
				}
			});

			testView.template.should.be.a("object");

			var source = testView.template.source;
			source.should.be.a("string");
		});

		it("should be able to detect & fetch a remote source", function() {

			var testView = new Dragon.View({
				el: "#someelement",
				template: {
					source: "http://githublink/template.html"
				}
			});

			testView.template.should.be.a("object");

			var source = testView.template.source;
			source.should.be.a("string");
		});

		it("should be able to pass data", function () {

			var testView = new Dragon.View({
				el: "#someelement",
				template: {
					data: {
						mytestvar: "hello there!"
					},
					source: "../examples/template.html"
				}
			});

			testView.template.should.be.a("object");

			var data = testView.template.data;
			data.should.be.a("object");

			var source = testView.template.source;
			source.should.be.a("string");
		});

		it("should be able to append a parent element", function () {

			var testView = new Dragon.View({
				el: "#someelement",
				parent: "#someparentelement",
				template: {
					source: "../examples/template.html"
				}
			});

			var parent = testView.parent;
			parent.should.be.a("string");

			testView.template.should.be.a("object");

			var source = testView.template.source;
			source.should.be.a("string");
		});
	});

	describe("events", function() {

		it("should be able to accept an action and function without a selector", function() {

			var fn = function() {};
			var testView = new Dragon.View({
				el: "#someelement",
				events: {
					click: fn
				}
			});

			testView.should.have.property("events");
			
			var events = testView.events;
			events.should.be.a("object");

			events.foreach(function(key, val) {
				var action = key,
					result = val;

				action.should.a("string");
				result.should.be.a("function");
			});
		});

		it("should be able to accept an action with a selector and function", function() {

			var fn = function() {};
			var testView = new Dragon.View({
				el: "#someelement",
				events: {
					click: {
						".selector": fn
					}
				}
			});

			testView.should.have.property("events");
			
			var events = testView.events;
			events.should.be.a("object");

			events.foreach(function(key, val) {
				var opt = val;

				opt.foreach(function(key, val) {
					
					var sel = key,
						act = val;

					sel.should.be.a("string");
					act.should.be.a("function");
				});
			});
		});

		it("should be able to accept an action with multiple sub-events and functions", function() {

			var fn = function() {};
			var testView = new Dragon.View({
				el: "#someelement",
				events: {
					hover: {
						".selector": {
							start: fn,
							stop: fn
						}
					}
				}
			});

			testView.should.have.property("events");
			
			var events = testView.events;
			events.should.be.a("object");

			//Loop through events
			events.foreach(function(key, val) {
				var act = val;

				act.should.be.a("object");

				//Loops through actions
				act.foreach(function(key, val) {
					
					var sel = key,
						evts = val;

					sel.should.be.a("string");
					evts.should.be.a("object");

					//Look through selector sub-events
					evts.foreach(function(key, val) {
						key.should.be.a("string");
						val.should.be.a("function");
					});
				});
			});
		});
	});
});
var Dragon = require("../deploy/dragon.js");

var testView = new Dragon.View({
	el: "#someelement",
	init: function() {
		
	},
	/*template: {
		source: "http://mydomain.com/template.html"
	}*/
});

describe("Dragon.View", function() {
	
	describe("constructor", function() {
		
		it("should have an element assigned to the view", function() {
			
			testView.should.have.property("el");
			
			var el = testView.el;
			el.should.be.a("string");
		});
		
		it("should initialize a function when provided", function() {
			
			testView.init.should.be.a("function");
		});
		
		it("should have a valid template", function() {
			
			testView.template.should.be.a("object");

			var source = testView.template.source;
			source.should.be.a("string");
		});
	});
});
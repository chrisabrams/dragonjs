Dragon.Controller = function() {
	
};

Dragon.Controller.prototype.render = function(o) {
	this.data = o.data || {};
	this.view = o.view || function() {};
};
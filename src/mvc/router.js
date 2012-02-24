Dragon.Router = function(o) {
	
};

/**
 * Dragon.Router.prototype.override
 *
 * param {path} is Array
 */

Dragon.Router.prototype.override = function(path) {
	this.overrides.push(path);
};

Dragon.Router.prototype.overrides = [];

/**
 * (void)
 */

Dragon.Router.prototype.push = function(path) {
	window.location.href = window.location.origin + "/" + path;
};

Dragon.Router.prototype.request = function() {
	var parts         = Dragon.Url.pathparts();
	var uricontroller = parts[0] || false;
	var urimethod     = parts[1] || "index";
	var path = uricontroller + "/" + urimethod;

	//Route override?
	_.find(this.overrides, function(ite) {
		var requested = ite[0]; //route requested
		var override  = ite[1]; //override route with this

		if(requested == path) {
			var to        = override.splice("/");
			uricontroller = to[0];
			urimethod     = to[1];
			return;
		}
	});

	parts = parts.remove(0,1); //Remove the controller and method from parts

	if(uricontroller) {
		var controller = new Dragon.Controller(uricontroller);
		var method = window["Dragon"]["Controller"][urimethod]({
			parts: parts
		});
	}

	return false;
};
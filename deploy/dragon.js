var Dragon = Dragon || {};
/**
 * Dragon.Class()
 * Does cool class stuff
 */
var Dragon.Class = function(o) {
	var constructor = o.constructor || function() {};
	var parent = o.extend || false;

	//If extending another Class
	try {
		this.extend(parent);
	} catch(e) {
		console.log(e.message);
	}
};

/**
 * Dragon.Class.getParentClass()
 * Extends a Class to the defined parent
 */
Dragon.Class.prototype.getParentClass = function(parent) {
	var parentClass = window[parent] || false;

	//Make sure parent exists and is a function
	if(parentClass == "undefined" || typeof parentClass != "function") {
		throw {
			name: "ClassNonexistent",
			message: "The class " + parent + " does not exist"
		}};
	}
	
	//do extending stuff here
};

/**
 * Class.getParentClassConstructor()
 * Extends a Class to the defined parent
 */

Dragon.Class.prototype.getParentClassConstructor = function(parent) {
	var parentClass = window[parent] || false;

	//Make sure parent exists and is a function
	if(parentClass == "undefined" || typeof parentClass != "function") {
		throw {
			name: "ClassNonexistent",
			message: "The class " + parent + " does not exist"
		}};
	}

	return this.prototype.constructor = parentClass.prototype.constructor;
};
/**
 * Dragon.View()
 * Does cool view stuff
 */
Dragon.View = function(o) {
	this.el = o.el || return; //If you don't define the element, what is the point of a view?

	var events = this.events;
	//If events are defined
	if(events != null) {
		//Loop through events
		for(var index in events) {
			var selector = events[index];
		}
	}
};

/**
 * Dragon.events
 * Does cool events stuff
 *
 * Example usage
 * events: {
 *   "#selector": click(fn),
 *   ".selector": hover({
 *     start: fn,
 *     stop: fn	
 *   }),
 * }
 *
 */
Dragon.View.prototype.events = {};

Dragon.View.prototype.getEvents = function() {

};

Dragon.View.prototype.template = function(o) {
	this.data     = o.data || {};
	this.path     = o.path || false;
	this.selector = o.selector || false;
};
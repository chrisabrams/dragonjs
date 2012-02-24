// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
/** 
 * Object.foreach() by Chris Abrams
 * Loop through an object and return key & (optional) value
 * 
 * MIT License //gist link here
 */
Object.prototype.foreach = function(callback) {
	var obj = this;

	for(var key in obj) {
		var val = obj[key];
		
		//Skip properties in prototype
		if(!Object.prototype.hasOwnProperty(key.toString())) {
			callback(key, val);
		}
	}
};
String.prototype.startsWith = function(str) {
    return ( str === this.substr( 0, str.length ) );
}
var Dragon = Dragon || {};
/**
 * Dragon.Class()
 * Does cool class stuff
 */
Dragon.Class = function(o) {
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
		};
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
		events.foreach(function(sel, act) {
			var selector = sel.toString();

			if(selector.startsWith("#")) {
				console.log(act());
			}
		});
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
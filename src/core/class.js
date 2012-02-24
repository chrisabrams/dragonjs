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
		}};
	}

	return this.prototype.constructor = parentClass.prototype.constructor;
};
var Dragon = Dragon || {};

Dragon.Version = "0.0.1";

if(typeof window === "undefined") {
	exports = module.exports = Dragon; //We're in node woohoo!
}
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
		};
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
 * @class Dragon.View
 * @desc Represents the events and optionally the rendering of an element
 */
Dragon.View = function(o) {
	
	//Assign objects respective to their instance
	this.el = o.el || false;
	if(o.events) {this.events = o.events}
	if(o.init) {this.init = o.init}
	if(o.template) {this.template = o.template} else {this.template == false;}
	
	//Run initialization, if there is anything there
	this.init();

	//If template was defined by user
	if(typeof this.template == "object") {
		this.renderTemplate(this.template);
	}
	//Look for template on the page
	else {
		//If template is embedded to page
		/*var el = document.getElementById(this.el);
		if(el == null) {
			throw {
				name: "ElementNonexistent",
				message: "The element " + this.el + " does not exist on the page"
			};
		}*/
	}
};

/**
 * @object Dragon.View.events
 * @desc Holds all events respective to view.
 * @type {Object}
 *
 * @example
 *     events: {
 *       "#selector": click(fn),
 *       ".selector": hover({
 *         start: fn,
 *         stop: fn	
 *       }),
 *     }
 */
Dragon.View.prototype.events = {};

/**
 * @method Dragon.View.delegateEvents
 * @desc Assign event handlers to selectors
 * @type {Function}
 */
Dragon.View.prototype.delegateEvents = function() {
	var events = this.events;

	//If events are defined
	if(events != null) {
		
		//Loop through events
		events.foreach(function(sel, act) {
			var selector = sel.toString();

			//Figure out what type of selector the event is
			switch(selector) {
				
				//Selector is ID
				case this.startsWith("#"):

					if(act == "click") {
						console.log("OK we're getting somewhere");
					}
					
					break;

				//Selector is Class
				case this.startsWith("."):
					
					break;

				//Selector is Attribute
				case this.starsWith("["):

					break;

				//Selector is element and (optionally) has an ID, Class, &/or Attribute
			}
		});
	}
};

/**
 * @method Dragon.View.init
 * @desc   Optional method that runs at creation of view
 * @usage  Optional
 * @type   {Function}
 */
Dragon.View.prototype.init = function() {};

/**
 * @method Dragon.View.renderTemplate
 * @desc   Renders the HTML for the view
 * @usage  None; called by constructor
 * @type   {Function}
 * 
 * @param  {Object} o [required]
 *     @prop {Object} data [optional]
 *     @prop {String} string [required]
 *
 * @return {Object} Rendered template
 */
Dragon.View.prototype.renderTemplate = function(o) {

	//Does the tempalte have a source (ajax)?
	switch(o.source) {
		
		//Source is on the page

		//Local source
		case "path is local":
			break;
		
		//Remote source
		case "path is remote":
			break;

		//No source
		case false:
			throw {
				name: "SourceNonexistent",
				message: "Source is not defined"
			};
			break;

		//Not sure yet what goes here
		default:

	}
};

/**
 * @method Dragon.View.template
 * @desc   Holds options for template
 * @usage  Required
 * @type   {Object}
 *
 * @example
 *     template: {
 *       source: "http://mydomain.com/template.html"
 *     }
 */
Dragon.View.prototype.template = {
	source: "embedded"
};
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
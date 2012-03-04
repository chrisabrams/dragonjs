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
	
	var _this = this;

	//Assign objects respective to their instance
	if(o.el) {
		
		//If there isn't a template, the element should be embedded on the page
		if(!o.template) {
			_this.el = document.getElementById(o.el);
		}	
	}
	
	if(o.events) {
		_this.events = o.events;
	}
	if(o.height) {
		switch(o.height) {
			case "window":
				_this.height = window.innerHeight;
				_this.el.style.height = _this.height + "px";
				break;

			default:
				if(typeof o.height == "number") {
					_this.height = o.height;
					_this.el.style.height = _this.height + "px";
				}
		}
	} else {
		_this.height = _this.el.offsetHeight;
		//_this.el.style.height = _this.height + "px";
	}
	if(o.init) {
		_this.init = o.init;
	}
	if(o.parent) {_this.parent = o.parent}
	if(o.template) {
		_this.template = o.template;
	} else {
		_this.template == false;
	}
	if(o.width) {
		switch(o.width) {
			case "window":
				_this.width = window.innerWidth;
				_this.el.style.width = _this.width + "px";
				break;

			default:
				if(typeof o.width ==  "number") {
					_this.width = o.width;
					_this.el.style.width = _this.width + "px";
				}
		}		
	} else {
		_this.width = _this.el.offsetWidth;
		//_this.el.style.width = _this.width + "px";
	}
	
	//Run initialization, if there is anything there
	_this.init();

	//If template was defined by user
	if(typeof _this.template == "object") {
		_this.renderTemplate(_this.template);
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
 *       click: {
 *	       ".selector": fn
 *       },
 *       hover: {
 *         ".selector": {
 *	         start: fn,
 *           stop: fn
 *         }
 *       },
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
 * @object Dragon.View.parent
 * @desc Where view is to be appened. Serves as parent element to view.
 * @type {String} if supplied or {Boolean} if not
 *
 * @example
 *     parent: "#someparentelement"
 */
Dragon.View.prototype.parent = false;

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

	var _this = this;

	//Does the tempalte have a source (ajax)?
	if(o.source) {
		//Make ajax request
		if (window.XMLHttpRequest) {
			var request = new XMLHttpRequest();

			xmlhttp.onreadystatechange = function() {
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {

					var render = document.createElement("div"); //Un-used element to contain templates
					render.innerHTML = xmlhttp.responseText; //Put templates inside <div> so that they are now HTML
					var templates = render.getElementsByTagName("script"); //Grab all templates

					//Loop through and find template
					_.find(templates, function(el, i) {
						if(el.id == o.id) {

							//Insert template into view
							_this.el.innerHTML = el;

							return;
						}
					});
    			}
  			}
			xmlhttp.open("GET", o.source, true);
			xmlhttp.send();
		}
	}
	/*switch(o.source) {
		
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

	}*/
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
	data: {},
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

		//Check for property or else prototype properties will get thrown in the mix
		if(obj.hasOwnProperty(key)) {
			callback(key, val);
		}
	}
};
String.prototype.startsWith = function(str) {
    return ( str === this.substr( 0, str.length ) );
}
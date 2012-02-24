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
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
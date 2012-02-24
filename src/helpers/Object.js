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
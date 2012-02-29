var Dragon = Dragon || {};

Dragon.Version = "0.0.1";

if(typeof window === "undefined") {
	exports = module.exports = Dragon; //We're in node woohoo!
}
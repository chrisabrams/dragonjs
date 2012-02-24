var Todo.Controller = new Dragon.Controller();

Todo.Controller.Index = function() {
	var latestEntries = new Dragon.Model("latestEntries");
	var newEntry = new Dragon.View("newEntry");
};
var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal", function(req, res){
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof!",
		car: "Meeu",
		goldfish: "..."
	}
	
	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];
	
	res.send("The "+animal + " says '" +sound+ "'");
});


app.get("/repeat/:message/:times", function(req, res){
	var message = req.params.message;
	var times = Number(req.params.times);
	var results = "";
	
	for(var i = 0; i < times; i++){
		results += message + " ";	
	}
	
	
	res.send(results);
});
app.listen(3000, function(){
	console.log("Now serving the app");
});
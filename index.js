//console.log("I love JS");

const cool = require("cool-ascii-faces");

//console.log(cool());

const express = require("express");

app.get("/cool", (request, response) => {
	response.send("<html>"+cool()+"</html>");
})

app.listen(80);

console.log("server ready");


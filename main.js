// Vi kallar fram express. Först för att indikera att vi använder den i detta projekt. Sedan för att skapa en app som använder den (det går att skapa 2 eller fler appar i en server).
var express = require('express');
var app = express();


// Varje kallelse hanteras via en .get (eller .post)
// funktionen i argumentet kallas för Callback function, och är något som körs när ".get" är klar att lyssna. I detta fall använder det två argument: request, för det som finns i kallelsen, och response för det som ska skickas tillbaka.
app.get("/", function(request,response){
    console.log("Someone is visiting us!");
    // man kan svara med text eller ra information med .send
    response.send("Welcome to my boring site. This is not even html, just text");
s});


app.get("/about", function(request,response){
    console.log("Someone is visiting us in about!");
    //man kan svara med en fil, som t.ex. en html fil
    response.status(200).sendFile("about.html");
});


app.get("/lbs", function(request,response){
    console.log("Someone is visiting us in lbs!");
    // man kan också svara med element av en html
    response.send("<h1> LBS is a nice school! </h1><p>Den bästa med LBS är:</p><ul><li>Lärare</li><li>Vänner</li></ul>");
});


//Servern startas och hanteras så enkelt som den följande:
app.listen(3000, function(){
    console.log("Server started on port 3000. Press Ctrl+C to close it.")
});

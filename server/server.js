var myVersion = "0.40", myProductName = "betterWebSocketsDemo"; 
var ws = require ("nodejs-websocket");
var myPort = 1337; 
var myConnection;
var ctMessages = 0;

function everySecond () {
	if (myConnection !== undefined) {
		var theMsg = "Hello there #" + ctMessages++;
		console.log ("everySecond: sending \"" + theMsg + "\"");
		myConnection.sendText (theMsg);
		}
	}
function handleConnection (conn) { 
	conn.on ("text", function (s) {
		myConnection = conn;
		console.log ("'text' message received. Sending a message to the socket every second.");
		});
	conn.on ("close", function () {
		console.log ("'close' message received.");
		if (myConnection !== undefined) {
			console.log ("Closing the connection.");
			myConnection = undefined;
			}
		});
	conn.on ("error", function () {
		console.log ("'error' message received.");
		});
	}
console.log ("\n" + myProductName + " v" + myVersion + "\n");
ws.createServer (handleConnection).listen (myPort);
setInterval (everySecond, 1000); 

var myVersion = "0.40", myProductName = "betterWebSocketsDemo"; 
var ws = require ("nodejs-websocket");
var myPort = 1337; 
var myConnection;
var ctMessages = 0;

function everySecond () {
	if (myConnection !== undefined) {
		var theMsg = "Hello there #" + ctMessages++;
		myConnection.sendText (theMsg);
		}
	}
function handleConnection (conn) { 
	conn.on ("text", function (s) {
		myConnection = conn;
		console.log ("The connection is open. Get ready for some interesting messages!");
		});
	conn.on ("close", function () {
		myConnection = undefined;
		console.log ("The connection is closed.");
		});
	conn.on ("error", function () {
		myConnection = undefined;
		console.log ("There was an error. The connection is closed.");
		});
	}
ws.createServer (handleConnection).listen (myPort);
setInterval (everySecond, 1000); 

var myVersion = "0.41", myProductName = "betterWebSocketsDemo"; 
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
	myConnection = conn;
	console.log ("New connection received. Text messages will now commence.");
	conn.on ("text", function (s) {
		console.log ("'text' message received.");
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

var myVersion = "0.43", myProductName = "betterWebSocketsDemo", myPort = 1337; 
var ws = require ("nodejs-websocket");
var theWsServer;

function everySecond () {
	for (var i = 0; i < theWsServer.connections.length; i++) {
		var theConnection = theWsServer.connections [i];
		var theMsg = "Hello there #" + theConnection.ctMessages++;
		console.log ("sending \"" + theMsg + "\" to socket #" + i);
		theConnection.sendText (theMsg);
		}
	}
function handleConnection (conn) { 
	conn.ctMessages = 0;
	console.log ("New connection received.");
	conn.on ("close", function () {
		console.log ("'close' message received.");
		});
	conn.on ("error", function () {
		console.log ("'error' message received.");
		});
	}

console.log ("\n" + myProductName + " v" + myVersion + " is running on port " + myPort + "\n");
theWsServer = ws.createServer (handleConnection);
theWsServer.listen (myPort);
setInterval (everySecond, 1000); 

var myVersion = "0.42", myProductName = "betterWebSocketsDemo", myPort = 1337; 
var ws = require ("nodejs-websocket");
var waitingWebSocketCalls = new Array ();

function addSocketToArray (wsConnection) {
	waitingWebSocketCalls [waitingWebSocketCalls.length] = {
		ctMessages: 0,
		theConnection: wsConnection
		}
	}
function deleteSocketFromArray (wsConnection) {
	for (var i = 0; i < waitingWebSocketCalls.length; i++) {
		var theSocket = waitingWebSocketCalls [i];
		if (theSocket.theConnection === wsConnection) {
			console.log ("deleting socket #" + i);
			waitingWebSocketCalls.splice (i, 1);
			}
		}
	}
function everySecond () {
	for (var i = 0; i < waitingWebSocketCalls.length; i++) {
		var theSocket = waitingWebSocketCalls [i];
		var theMsg = "Hello there #" + theSocket.ctMessages++;
		console.log ("sending \"" + theMsg + "\" to the app on socket #" + i);
		theSocket.theConnection.sendText (theMsg);
		}
	}
function handleConnection (conn) { 
	addSocketToArray (conn);
	console.log ("New connection received.");
	conn.on ("close", function () {
		console.log ("'close' message received.");
		deleteSocketFromArray (conn);
		});
	conn.on ("error", function () {
		console.log ("'error' message received.");
		});
	}

console.log ("\n" + myProductName + " v" + myVersion + " is running on port " + myPort + "\n");
ws.createServer (handleConnection).listen (myPort);
setInterval (everySecond, 1000); 

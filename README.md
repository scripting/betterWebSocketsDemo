#### betterWebSocketsDemo

After a few weeks experience with WebSockets in JavaScript, I've put together a better demo that shows how they are used in a real application.

All the demos I found left out an important part, how to know, from the client, if the server disappeared, and more commonly how to know from the server if the client disappeared. Once you have both these under control you can achieve the promise of WebSockets, with an always-open connection and the server piping data back to the client as soon as it's available. 

#### What it does

The client opens a socket with the server, and the server posts a message to the socket every second.

#### How to test

1. In your terminal app, <code>cd</code> to the server folder.

2. Enter <code>npm install</code>. 

3. Enter <code>node server.js</code> to launch the server app.

4. Open the client app in a WebSockets-compatible browser such as Chrome, Safari, MSIE 10.

5. Open the JavaScript console in the browser so you can see what's coming into the browser app.

6. Close the browser tab and watch what happens in the server. It should notice that the connection has closed and stops sending messages.

7. Open client.html. The server should resume sending messages to the client. 

8. Quit the server by pressing Cmd-C in the terminal window. The client should get a <i>close</i> message. It will try to reconnect with the server once a second. Restart the server (step #3). The messages on both the client and server should resume. 

9. You can launch multiple copies of client.html. The server will send messages to all of them every second. Try opening several of instances each in their own browser tab, and then close them one by one and observe that the server deletes the socket from the array and continues to communicate with the remaining clients.

#### Updates

v0.41 -- Eliminated the need to prime the process with a text message. 

v0.42 -- We now maintain an array of connections, so the server can talk with more than one client at a time.

v0.43 -- Use the nodejs-websockets array of connections instead of maintaining our own.

#### Code review please

If you have experience working in WebSockets and you think there's a problem, please post a <a href="https://github.com/scripting/betterWebSocketsDemo/issues">comment here</a>. 

I want to be sure I'm using WebSockets correctly and in the most efficient way.

<a href="http://scripting.com/liveblog/users/davewiner/2015/11/27/0476.html">Dave Winer</a>


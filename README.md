#### betterWebSocketsDemo

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

You can launch multiple copies of client.html, but the server will only talk to one at a time. It would be easy to extend it to manage multiple open sockets, but this is just a demo. 

#### Code review please

If you have experience working in WebSockets and you think there's a problem, please post a <a href="https://github.com/scripting/betterWebSocketsDemo/issues">comment here</a>. 

I want to be sure I'm using WebSockets correctly and in the most efficient way.

<a href="http://scripting.com/liveblog/users/davewiner/2015/11/27/0476.html">Dave Winer</a>


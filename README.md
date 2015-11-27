#### betterWebSocketsDemo

The client opens a socket with the server, and the server posts a message to the socket every second.

#### How to test

1. In your terminal app, cd to the server folder.

2. Enter <code>npm install</code>. 

3. Enter <code>node server.js</code> to launch the server app.

4. Open the client app in a WebSockets-compatible browser.

5. Open the JavaScript console so you can see what's coming into the browser app.

6. Close the browser tab and watch what happens in the server. (It notices the connection has closed and stops sending messages.)

7. You can open two or more instances of client.html, they should all work.

#### Code review please

If you have experience working in WebSockets and you think there's a problem, please post a comment here. 

I'm not only posting this to help others, but also to be sure I'm using WebSockets correctly and in the most efficient way.


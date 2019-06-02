# Base Setup | Node.js + Express + Socket.io

This is a skeleton of a socket communication established between a client and a server, using Express (a Node.js web-server) and Socket.io (a socket library).

The base Express package can be generated using the following commands:

```
npm install -g express-generator
express <project-name> --view=ejs
```

EJS is used as the view-engine, but others can be chosen as well. The default is 'Jade', with 'Pug' being a very used option. This view-engine can be altered after the initial setup, by altering the following line of the `app.js` file (usually line 11).

```
app.set('view engine', 'ejs');
```

 The main files of the Express server are:

* `app.js` - Handles routing and some of the app's core components.
* `/bin/www` - Handles the webserver part.
* `package.json` - NPM package management.

The initial, most obvious file to integrate Socket.IO with Express is the `/bin/www` file, since the `server` variable is necessarily accessible.

------

Some useful references are:

* [Socket.IO Chat](https://socket.io/get-started/chat/)
* [Socket.IO NPM reference](https://www.npmjs.com/package/socket.io)
* [Build a simple chat app with node.js and socket.io – Noufel Gouirhate – Medium](https://medium.com/@noufel.gouirhate/build-a-simple-chat-app-with-node-js-and-socket-io-ea716c093088)
* [Socket.io for simple chatting app - DEV Community](https://dev.to/moz5691/socketio-for-simple-chatting---1k8n)
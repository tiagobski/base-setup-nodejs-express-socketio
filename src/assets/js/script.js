$(function() {
    // Establish socket connection
    var socket = io.connect('http://localhost:3000');

    // Handle connection errors
    socket.io.on('connect_error', (err) => {
        console.warn('Error connecting to server.');
        console.log(err);
        socket.disconnect(true);
    });
    
    // Listen on 'msg-welcome'
    socket.on('msg-welcome', (data) => {
        console.log('Message received.');
        console.log(data);
    });

    // Listen on 'msg-client-list'
    socket.on('msg-client-list', (data) => {
        console.log('Message received.');
        console.log(data);
    });

    // Send message to server
    $('#msg-send').on('click', () => {
        socket.emit('msg-test', { message: 'This is a test message from a client.' });
    });
});
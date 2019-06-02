$(function() {
    // Establish socket connection
    var socket = io.connect('http://localhost:3000');

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
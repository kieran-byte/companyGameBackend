module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('New client connected');

        socket.on('playerAction', (actionData) => {
            // Handle player actions and update game state
            io.emit('update', { /* updated game state */ });









        });

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
};

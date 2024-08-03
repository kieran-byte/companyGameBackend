module.exports = (wss) => {
    wss.on('connection', (socket) => {
        console.log('New client connected');

        socket.on('playerAction', (actionData) => {
            // Handle player actions and update game state
            wss.emit('update', { /* updated game state */ });


            // Then you can handle actions and broadcast updates
            wss.clients.forEach((client) => {
                if (client.readyState === client.OPEN) {
                    client.send(JSON.stringify({ /* updated game state */ }));
                }
            });
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
};
const socketController = (socket) => {

    console.log('Cliente conectado S', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado S', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {
        console.log('desde el server');
        // se comenta io.emit para utilizar el callback adicionado
        // como segundo parámetro de entrada
        //this.io.emit('enviar-mensaje', payload);

        // esto se hace para retroalimentar al cliente con cualquier respuesta
        // puede ser un ok de alguna acción en la base de datos
        const id = 123456;
        callback(id);

        socket.broadcast.emit('enviar-mensaje', payload);
    });
}



module.exports = {
    socketController
}
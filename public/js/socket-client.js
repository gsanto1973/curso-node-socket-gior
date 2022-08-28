const lblOnLine = document.querySelector('#lblOnLine');
const lblOffLine = document.querySelector('#lblOffLine');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();


socket.on('connect', () => {
    console.log('Conectado C');

    lblOnLine.style.display = '';
    lblOffLine.style.display = 'none';
});



socket.on('disconnect', () => {
    console.log('Desconectado C');

    lblOnLine.style.display = 'none';
    lblOffLine.style.display = '';
});



socket.on('enviar-mensaje', (payload) => {
    // escucha el mensaje enviar-mensaje desde el servidor
    console.log(payload);
});



btnEnviar.addEventListener('click', () => {
    // al hacer clic se emite el mensaje enviar-mensaje hacía el servidor
    const mensaje = txtMensaje.value;

    const payload = {
        mensaje,
        id: '123abc',
        fecha: new Date().getTime()
    };
    // se adiciona parámetro callback, para recibir el id desde el servidor
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server Id:', id);
    });
})

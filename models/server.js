const express = require('express');
const cors = require('cors');
const { Socket } = require('socket.io');
const { socketController } = require('../sockets/controller');



class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {};

        // middlewares -> dan funcionalidades adicionales
        this.middlewares();

        // rutas de la aplicación
        this.routes();

        // Sockets
        this.sockets();
    }



    middlewares() {
        // CORS
        this.app.use(cors());

        // Directorio público
        this.app.use(express.static("public"));
    }



    routes() {
        // Utiliza todas las rutas
        //this.app.use(this.paths.auth, require("../routes/auth"));
    }



    sockets() {

        this.io.on('connection', socketController);
    }



    listen() {

        // Lee el valor del puerto configurado en el archivo de variables de ambiente .env
        this.server.listen(this.port, () => {
            console.log(`App listening on port: ${this.port}`)
        })
    }
}



module.exports = Server;
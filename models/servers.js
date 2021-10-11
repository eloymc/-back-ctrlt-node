
const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.pathBase = '/api';
        this.pathUsuarios = '/usuarios';

        //Middleware
        this.middlewares();

        //Rutas de la aplicacion
        this.routes();
    }

    middlewares(){
        //Cors
        this.app.use(cors());
        //Lectura y paseo de body
        this.app.use(express.json());
        //Directorio Public
        this.app.use( express.static('public') )
    }

    routes(){
        this.app.use(this.pathBase+this.pathUsuarios, require('../routes'+this.pathUsuarios));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
          })
    }
}

module.exports = Server;
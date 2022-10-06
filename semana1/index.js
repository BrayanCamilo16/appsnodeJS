/*const op = require('./ejercicio1')
escoja= 1
switch (escoja) {
    case 1:
        op.suma(10, 98)
        console.log(op)
        break;
    case 2:
        op.resta(10, 98)
        console.log(op)
        break;
    case 3:
        op.potencia(2, 4)
        console.log(op)
        break;
    case 4:
        op.radicacion(4)
        console.log(op)
        break;
    default:
        console.log("no hay nada")
}*/
//1.requerir el modulo http
const http=require('http')
//2.funcion callback para manejar el servidor
function handleServer(req, res){
    res.writeHead(404,{"Content-type":'text-html'})
    res.write('<h1>Esta es la respuesta del servidor OK</h1>')
    res.end()
}
//3.en esta linea de codigo se crea el servidor, este servidor va a esatr manejado por handleServer
const server=http.createServer(handleServer).listen(5000)
// Crea código HTML para servir una página web clásica (Home| ¿Quiénes somos? | ¿Dónde Estamos? | ¿Qué hacemos? | Contacto... etc...)
// Ahora sirve respuesta a la petición de cada ruta (endpoint) los ficheros HTML correspondientes: home.html, contact.html, about.html...
// Realiza las modificaciones necesarias para que nuestro script se ejecute con npm start.

const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer((req, res) => {
const q = url.parse(req.url, true);
const filename = "." + q.pathname;
fs.readFile(filename, (err, data) => {
try {
res.writeHead(200, { "Content-Type": "text/html" });
res.write(data);
return res.end();
} catch (error) {
res.writeHead(404, { "Content-Type": "text/html" });
console.error(error);
return res.end("404 Not Found");
}
});
}).listen(8080);
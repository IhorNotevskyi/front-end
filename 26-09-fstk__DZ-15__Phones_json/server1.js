var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.', {
    cache: 0
});

function accept(req, res) {

    if (req.url == '/phones.json') {
        // искуственная задержка при наглядности
        setTimeout(function () {
            file.serve(req, res);
        }, 2000);
    } else {
        file.serve(req, res);
    }
}

if (!module.parent) {
    http.createServer(accept).listen(8080);
} else {
    exports.accept = accept;
}

// --- Запустить сервер ---
http.createServer(function(req, res) {
    file.serve(req, res);
}).listen(8080);
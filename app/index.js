var http = require('http');
var url = require('url');

function isPremier(nombre) { // Renvoie true si le nombre est premier, false sinon
	i = 0;
	for(i=2;i<=nombre;i++) {
		if(nombre%i==0&&i!=nombre) {
			return false;
		}
		else if(i==nombre) {
			return true;
		}
		else {
			
		}
	}
}


var server = http.createServer(function (requete, reponse) {
		var urlpage = url.parse(requete.url).pathname;
		reponse.writeHead(200,{"Content-Type": "text/plain; charset=utf-8"});
		urlpage = urlpage.substring(1); // Retire le / au début de la chaine de l'url
		reponse.end(urlpage);
});

server.listen(8888);

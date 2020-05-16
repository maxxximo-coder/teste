

var urlBase = "https://www.nike.com.br/Pedido/Status/";
var urlFirst = 6180064
var stop = false;
var arraySize = ["Sizes:"];

async function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function chama(url){
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (req.readyState === 4) {			
			if(req.status == 200){				
				if(req.responseText.includes("1936581253"))//Adiciona os outros codigos de size
				{
					var elemento = req.responseText.indexOf("1936581253");					
					var xablau =  req.responseText.substr(elemento-29, 2);
					arraySize.push(xablau);
				}							
			}
			else if(req.status == 403)
			{
				console.log(" BUSTED!");
				stop = true;
			}	
		}			
	};
	req.open('GET',url);
	req.send(null);		
}

async function BuscaURL(url) {
	console.log("começou");
	var contador = urlFirst;
	for (i =0; i < 20; i++){		
		url = urlBase + contador;
		chama(url);
		contador = contador +1;
		if(stop == true){ break;}	
	}
	console.log("acabou");
}
BuscaURL(urlBase);
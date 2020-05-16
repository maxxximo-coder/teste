



function monitor(){
	sendMessage("iniciando monitor");
	contador = 0;
	var url  ="https://www.nike.com.br/Snkrs/Produto/Air-Max-720-OBJ-Slip/153-169-211-223004";
	var procurado = ">Adicionar ao Carrinho</button>";
	setInterval(() => {
	  /////////
		contador ++
		var req = new XMLHttpRequest();
		req.onreadystatechange = function() {
				if (req.readyState === 4) {
					var reqResponseText = req.responseText;
					var json = reqResponseText;
					console.log('dsdsd: ', json);				
					if(json.includes(procurado))
					{					
						sendMessage(url);
					}
					else
					{
						//console.log("lixo")
					}				
				}
			};
			req.open('GET',url);
			req.send(null);
		////////
		if(contador == 900)
		{
			sendMessage("desligando monitor");
			break;
		}
	}, 500);

}
monitor();
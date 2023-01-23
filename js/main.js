
function getDadosEnderecoPorCEP(cep){
	let url = 'https://viacep.com.br/ws/'+cep+'/json/';
	let endereco = document.getElementById('endereco');
	let bairro = document.getElementById('bairro');
	let cidade = document.getElementById('cidade');
	let uf = document.getElementById('uf');

	let xmlHttp = new XMLHttpRequest();
	xmlHttp.open('GET', url);

	xmlHttp.onreadystatechange = () => {
		if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
			let dataJSON = xmlHttp.responseText;
			let dataJSONObj = JSON.parse(dataJSON);

			endereco.value = dataJSONObj.logradouro;
			bairro.value = dataJSONObj.bairro;
			cidade.value = dataJSONObj.localidade;
			uf.value = dataJSONObj.uf;
		}
	}

	xmlHttp.send();
}
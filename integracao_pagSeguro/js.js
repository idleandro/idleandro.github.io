execute();


function execute() {
	console.log("entrou");
	testIntegracao("POST", "https://ws.sandbox.pagseguro.uol.com.br/v2/checkout?91C7F554E27F4F0C972E66E1652ACFDD")
	.then(function (datums) {
		console.log(datums);
		console.log("entrou aqui no sucesso");
	})
	.catch(function (err) {
		console.log("entrou aqui no erro");
		console.log(err);
	});
}

function testIntegracao(method, url) {
	
	var formData = new FormData();

	formData.append("currency", "BRL");
	formData.append("itemId1", "0001");
	formData.append("itemDescription1=Produto", "PagSeguroI");
	formData.append("itemAmount1=99999", "99");
	formData.append("itemQuantity1", "1");
	formData.append("itemWeight1", "1000");
	formData.append("itemId2", "0002");
	formData.append("itemDescription2=Produto", "PagSeguroII");
	formData.append("itemAmount2=99999", "98");
	formData.append("itemQuantity2", "2");
	formData.append("itemWeight2", "750");
	formData.append("reference", "REF1234");
	formData.append("senderName=Jose", "Comprador");
	formData.append("senderAreaCode", "99");
	formData.append("senderPhone", "999999999");
	formData.append("senderEmail=comprador@uol.com", "br");
	formData.append("shippingType", "1");
	formData.append("shippingAddressRequired", "true");
	formData.append("shippingAddressStreet=Av",  "PagSeguro");
	formData.append("shippingAddressNumber", "9999");
	formData.append("shippingAddressComplement=99o", "andar");
	formData.append("shippingAddressDistrict=Jardim", "Internet");
	formData.append("shippingAddressPostalCode", "99999999");
	formData.append("shippingAddressCity=Cidade", "Exemplo");
	formData.append("shippingAddressState", "SP");
	formData.append("shippingAddressCountry", "BRA");
	formData.append("timeout", "25");
	formData.append("enableRecover", "false");

	return new Promise(function (resolve, reject) {
		
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.setRequestHeader("Access-Control-Allow-Origin", "https://sandbox.pagseguro.uol.com.br");
		//xhr.setRequestHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");

		xhr.onload = function() {

			var response = JSON.parse(xhr.responseText);
	        if (this.status >= 200 && this.status < 300) {
			 	resolve(xhr.response);	
			} else {
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			}
		};
		xhr.onerror = function () {
			reject({
				status: this.status,
				statusText: xhr.statusText
			});
		};
		console.log(formData);
		xhr.send(formData);
	});
}
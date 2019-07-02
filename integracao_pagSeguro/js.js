execute();


function execute() {
	console.log("entrou");
	//testIntegracao("POST", "https://ws.sandbox.pagseguro.uol.com.br/v2/checkout?email=leandrofdx@gmail.com&token=91C7F554E27F4F0C972E66E1652ACFDD")
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

function xtestIntegracao(method, url) {
	
	var formData = new FormData();

	formData.append("currency", "BRL");
	formData.append("itemId1", "0001");
	formData.append("itemDescription1=Produto", "PagSeguroI");
	formData.append("itemAmount1", "9999999");
	formData.append("itemQuantity1", "1");
	formData.append("itemWeight1", "1000");
	formData.append("reference", "REF1234");
	formData.append("senderName", "Comprador");
	formData.append("senderAreaCode", "99");
	formData.append("senderPhone", "999999999");
	formData.append("senderEmail", "comprador@uol.com");
	formData.append("shippingType", "1");
	formData.append("shippingAddressRequired", "true");
	formData.append("shippingAddressStreet",  "PagSeguro");
	formData.append("shippingAddressNumber", "9999");
	formData.append("shippingAddressComplement", "andar");
	formData.append("shippingAddressDistrict", "Internet");
	formData.append("shippingAddressPostalCode", "99999999");
	formData.append("shippingAddressCity", "Exemplo");
	formData.append("shippingAddressState", "SP");
	formData.append("shippingAddressCountry", "BRA");
	formData.append("timeout", "25");
	formData.append("enableRecover", "false");

	return new Promise(function (resolve, reject) {
		
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.setRequestHeader("Content-Type", "application/*");
		xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

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

function testIntegracao(method, url) {

	return new Promise(function (resolve, reject) {

var xhr = new XMLHttpRequest();
var url = url;
xhr.open("POST", url);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Access-Control-Allow-Origin", "https://idleandro.github.io");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log("ok");
        resolve(xhr.response);	
    }
};

var data = JSON.stringify({"currency" : "BRL",
"itemId1" : "0001",
"itemDescription1" : "Produto PagSeguroI",
"itemAmount1:99999" : "99",
"itemQuantity1" : "1",
"itemWeight1" : "1000",
"itemId2" : "0002",
"itemDescription2" : "Produto PagSeguroII",
"itemAmount2:99999" : "98",
"itemQuantity2" : "2",
"itemWeight2" : "750",
"reference" : "REF1234",
"senderName" : "Comprador",
"senderAreaCode" : "99",
"senderPhone" : "999999999",
"senderEmail" : "comprador@uol.com.br",
"shippingType" : "1",
"shippingAddressRequired" : "true",
"shippingAddressStreet" : "PagSeguro",
"shippingAddressNumber" : "9999",
"shippingAddressComplemento" :  "andar",
"shippingAddressDistrict" : "Internet",
"shippingAddressPostalCode" : "99999999",
"shippingAddressCity" :  "Cidade Exemplo",
"shippingAddressState" : "SP",
"shippingAddressCountry" : "BRA",
"timeout" : "25",
"enableRecover" : "false"});

	xhr.send(data);
	});
}


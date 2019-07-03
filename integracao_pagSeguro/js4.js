//execute();


// function execute() {
// 	console.log("entrou");
// 	//testIntegracao("POST", "https://ws.sandbox.pagseguro.uol.com.br/v2/checkout?email=leandrofdx@gmail.com&token=91C7F554E27F4F0C972E66E1652ACFDD")
// 	testIntegracao("POST", "https://ws.sandbox.pagseguro.uol.com.br/v2/checkout")
// 	.then(function (datums) {
// 		console.log(datums);
// 		console.log("entrou aqui no sucesso");
// 	})
// 	.catch(function (err) {
// 		console.log("entrou aqui no erro");
// 		console.log(err);
// 	});
// }

// function testIntegracao(method, url) {
	
// 	var formData = new FormData();
// 	formData.append("email", "leandrofdx@gmail.com");
// 	formData.append("token", "91C7F554E27F4F0C972E66E1652ACFDD");
// 	formData.append("currency", "BRL");
// 	formData.append("itemId1", "0001");
// 	formData.append("itemDescription1", "PagSeguroI");
// 	formData.append("itemAmount1", "9999999");
// 	formData.append("itemQuantity1", "1");
// 	formData.append("itemWeight1", "1000");
// 	formData.append("reference", "REF1234");
// 	formData.append("senderName", "Comprador");
// 	formData.append("senderAreaCode", "99");
// 	formData.append("senderPhone", "999999999");
// 	formData.append("senderEmail", "comprador@uol.com");
// 	formData.append("shippingType", "1");
// 	formData.append("shippingAddressRequired", "true");
// 	formData.append("shippingAddressStreet",  "PagSeguro");
// 	formData.append("shippingAddressNumber", "9999");
// 	formData.append("shippingAddressComplement", "andar");
// 	formData.append("shippingAddressDistrict", "Internet");
// 	formData.append("shippingAddressPostalCode", "99999999");
// 	formData.append("shippingAddressCity", "Exemplo");
// 	formData.append("shippingAddressState", "SP");
// 	formData.append("shippingAddressCountry", "BRA");
// 	formData.append("timeout", "25");
// 	formData.append("enableRecover", "false");

// 	return new Promise(function (resolve, reject) {
		
// 		var xhr = new XMLHttpRequest();
// 		xhr.open(method, url, true);
// 		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=ISO-8859-1");
// 		xhr.setRequestHeader("Access-Control-Allow-Origin", "https://idleandro.github.io");

// 		xhr.onload = function() {

// 			var response = JSON.parse(xhr.responseText);
// 	        if (this.status >= 200 && this.status < 300) {
// 			 	resolve(xhr.response);	
// 			} else {
// 				reject({
// 					status: this.status,
// 					statusText: xhr.statusText
// 				});
// 			}
// 		};
// 		xhr.onerror = function () {
// 			reject({
// 				status: this.status,
// 				statusText: xhr.statusText
// 			});
// 		};
// 		console.log(formData);
// 		xhr.send(formData);
// 	});
// }

// 	var formData = new FormData();
// 	formData.append("email", "leandrofdx@gmail.com");
// 	formData.append("token", "91C7F554E27F4F0C972E66E1652ACFDD");
// 	formData.append("currency", "BRL");
// 	formData.append("itemId1", "0001");
// 	formData.append("itemDescription1", "PagSeguroI");
// 	formData.append("itemAmount1", "9999999");
// 	formData.append("itemQuantity1", "1");
// 	formData.append("itemWeight1", "1000");
// 	formData.append("reference", "REF1234");
// 	formData.append("senderName", "Comprador");
// 	formData.append("senderAreaCode", "99");
// 	formData.append("senderPhone", "999999999");
// 	formData.append("senderEmail", "comprador@uol.com");
// 	formData.append("shippingType", "1");
// 	formData.append("shippingAddressRequired", "true");
// 	formData.append("shippingAddressStreet",  "PagSeguro");
// 	formData.append("shippingAddressNumber", "9999");
// 	formData.append("shippingAddressComplement", "andar");
// 	formData.append("shippingAddressDistrict", "Internet");
// 	formData.append("shippingAddressPostalCode", "99999999");
// 	formData.append("shippingAddressCity", "Exemplo");
// 	formData.append("shippingAddressState", "SP");
// 	formData.append("shippingAddressCountry", "BRA");
// 	formData.append("timeout", "25");
// 	formData.append("enableRecover", "false");

// $.ajax({
//     url: "https://ws.sandbox.pagseguro.uol.com.br/v2/checkout",
//     beforeSend: function(xhr) { 
//        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
//     },
//     type: 'POST',
//     dataType: 'x-www-form-urlencoded; charset=ISO-8859-1',
//     contentType: 'application/x-www-form-urlencoded; charset=ISO-8859-1',
//     processData: false,
//     data: formData,
//     xhrFields: {
//         withCredentials: true
//     },
//     crossDomain: true,
//     success: function (data) {
//       console.log(JSON.stringify(data));
//     },
//     error: function(){
//       console.log("Cannot get data");
//     }
// });

var ajax = new XMLHttpRequest();
// Seta tipo de requisição: Post e a URL da API
ajax.open("POST", "https://ws.sandbox.pagseguro.uol.com.br/v2/checkout", true);
ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=ISO-8859-1");
					   
var formData = new FormData();
formData.append("email", "leandrofdx@gmail.com");
formData.append("token", "91C7F554E27F4F0C972E66E1652ACFDD");
formData.append("currency", "BRL");
formData.append("itemId1", "0001");
formData.append("itemDescription1", "Produto PagSeguroI");
formData.append("itemAmount1", "99999.99");
formData.append("itemQuantity1", "1");
formData.append("itemWeight1", "1000");
formData.append("itemId2", "0002");
formData.append("itemDescription2", "Produto PagSeguroII");
formData.append("itemAmount2", "99999.98");
formData.append("itemQuantity2", "2");
formData.append("itemWeight2", "750");
formData.append("reference", "REF1234");
formData.append("senderName", "Jose Comprador");
formData.append("senderAreaCode", "99");
formData.append("senderPhone", "999999999");
formData.append("senderEmail", "comprador@uol.com.br");
formData.append("shippingType", "1");
formData.append("shippingAddressRequired", "true");
formData.append("shippingAddressStreet", "Av. PagSeguro");
formData.append("shippingAddressNumber", "9999");
formData.append("shippingAddressComplement", "99o andar");
formData.append("shippingAddressDistrict", "Jardim Internet");
formData.append("shippingAddressPostalCode", "99999999");
formData.append("shippingAddressCity", "Cidade Exemplo");
formData.append("shippingAddressState", "SP");
formData.append("shippingAddressCountry", "BRA");
formData.append("timeout", "25");
formData.append("enableRecover", "false");

console.log(formData);

// Seta paramêtros da requisição e envia a requisição
ajax.send(formData);

// Cria um evento para receber o retorno.
ajax.onreadystatechange = function() {
  
  // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
	if (ajax.readyState == 4 && ajax.status == 200) {
		console.log("oi");
    
		var data = ajax.responseText;
		
    // Retorno do Ajax
		console.log(data);
	}
}



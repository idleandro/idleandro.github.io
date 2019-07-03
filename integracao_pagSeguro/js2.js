execute();
function execute(){

var params = {
	"email": "leandrofdx@gmail.com",
	"token": "91C7F554E27F4F0C972E66E1652ACFDD",
	"currency": "BRL",
	"itemId1": "0001",
	"itemDescription1": "Produto PagSeguroI",
	"itemAmount1": "99999.99",
	"itemQuantity1": "1",
	"itemWeight1": "1000",
	"itemId2": "0002",
	"itemDescription2": "Produto PagSeguroII",
	"itemAmount2": "99999.98",
	"itemQuantity2": "2",
	"itemWeight2": "750",
	"reference": "REF1234",
	"senderName": "Jose Comprador",
	"senderAreaCode": "99",
	"senderPhone": "999999999",
	"senderEmail": "comprador@uol.com.br",
	"shippingType": "1",
	"shippingAddressRequired": "true",
	"shippingAddressStreet": "Av. PagSeguro",
	"shippingAddressNumber": "9999",
	"shippingAddressComplement": "99o andar",
	"shippingAddressDistrict": "Jardim Internet",
	"shippingAddressPostalCode": "99999999",
	"shippingAddressCity": "Cidade Exemplo",
	"shippingAddressState": "SP",
	"shippingAddressCountry": "BRA",
	"timeout": "25",
	"enableRecover": "false"
};
var str = jQuery.param( params );

var ajax = new XMLHttpRequest();
ajax.open("POST", "https://ws.sandbox.pagseguro.uol.com.br/v2/checkout", false);
ajax.setRequestHeader("Content-type", "application/json;charset=ISO-8859-1");
ajax.setRequestHeader('Accept', 'Content-type: application/json;charset=ISO-8859-1'); 
ajax.setRequestHeader("Access-Control-Allow-Origin", "https://sandbox.pagseguro.uol.com.br");
ajax.send(JSON.stringify(str));				   
};
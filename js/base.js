var name;
var numberWords;
var typeTranslation;
var from;
var to;
var deliveryTerm;
var qtdWords;
var date;
var valueWord = 0.027;
var urgencyRate;
var txtUrgencyRate;
var itemUrgencyRate;
var total;

$("#form-budget").on('change keydown paste input', function(){
	capturesFields();
	calculateWordValue();
	insertsValueIntoFields();
});

function capturesFields(){
	this.typeTranslation = document.querySelector("#typeTranslation").value;
	this.from = document.querySelector("#from").value;
	this.to = document.querySelector("#for").value;
	this.date = document.querySelector("#date").value;
	this.numberWords = document.querySelector("#qtdWords").value;
	this.txtUrgencyRate = document.querySelector("#txtUrgencyRate");
	this.itemUrgencyRate = document.getElementById("itemUrgencyRate");
}

function calculateWordValue(){

	var today = new Date();
	var submittedDate = formatDate();
	var timeDiff = Math.abs(submittedDate.getTime() - today.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

	if(submittedDate <= today) {
		addMsg("Essa data será desconsiderada", "block", "none");
		setTotal(this.numberWords * this.valueWord);

	} else if (diffDays <= 5 && today < submittedDate) {
		addMsg("Será acrescentado taxa de urgência para esse prazo.", "block", "block");

		switch (diffDays) {
			case 1:
				setTotal(this.numberWords * (this.valueWord + 0.027));
				this.urgencyRate = 0.027;
			break;
			case 2:
				setTotal(this.numberWords * (this.valueWord + 0.026));
				this.urgencyRate = 0.026;
			break;
			case 3:
				setTotal(this.numberWords * (this.valueWord + 0.025));
				this.urgencyRate = 0.025;
			break;
			case 4:
				setTotal(this.numberWords * (this.valueWord + 0.024));
				this.urgencyRate = 0.024;
			break;
			case 5:
				setTotal(this.numberWords * (this.valueWord + 0.023));
				this.urgencyRate = 0.023;
			break;
		}
	} else if (diffDays > 5 && today < submittedDate) {
		addMsg("", "none", "none")
		setTotal(this.numberWords * this.valueWord);
	}
}

function insertsValueIntoFields(){
	document.querySelector("#type-translation").innerText = this.typeTranslation;
	document.querySelector("#fromItem").innerText = this.from;
	document.querySelector("#forItem").innerText = this.to;
	document.querySelector("#delivery-term").innerText = this.date;
	setNumberWords();
	document.querySelector("#urgency-rate").innerText = this.urgencyRate;
	document.querySelector("#total").innerText = this.total;
}

function setNumberWords(){
	var elements = document.getElementsByClassName('number-words');
	for (var i = 0; i < elements.length; i++) {
		elements[i].innerText = this.numberWords;
	}
}

function setTotal(total){
	this.total =  formatPtBr(total);
}

function formatPtBr(value){
	var result = ((Math.round(value*100))/100);
	return result.toLocaleString('pt-BR');
}

function addMsg(txt, txtVisibility, itemVisibility){
	this.txtUrgencyRate.innerText =  txt;
	this.txtUrgencyRate.style.display = txtVisibility;
	this.itemUrgencyRate.style.display = itemVisibility;
}

function formatDate(){
	var newDate = this.date.split('/');
	var nDate = newDate[1] + '-' + newDate[0] + '-' + newDate[2];
	return new Date(nDate);
}

function alter(idFrom, idTo){
  var aux = document.getElementById(idFrom).value;
  document.getElementById(idFrom).value = document.getElementById(idTo).value;
  document.getElementById(idTo).value = aux;
}
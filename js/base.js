var name;
var numberWords;
var typeTranslation;
var from;
var to;
var deliveryTerm;
var qtdWords;
var date;
var urgencyRate;
var txtUrgencyRate;
var itemUrgencyRate;
var total;
var deliveryDate = "xxxxx";
var deliveryExpress = "yyyy";

$("#form-budget").on('change keydown paste input', function(){

	 capturesFields();
	// calculateWordValue();
	// insertsValueIntoFields();
	deliveryData();
 });

function deliveryData() {
	var date = increaseDay(moment(), 3);
	var expressDelivery = decrementDay(date, 1);

	if (checkedHoliday(date)) {
		date = increaseDay(date, 1);
		var holidayDate = checkedHoliday(expressDelivery);
	}

	if (checkedHoliday(expressDelivery)) {
		expressDelivery = increaseDay(expressDelivery, 1);
		var holidayExpress = checkedHoliday(expressDelivery);
	}

	this.deliveryDate.value = moment(date).format('DD/MM/YYYY');
	this.deliveryExpress.value = moment(expressDelivery).format('DD/MM/YYYY');

	this.deliveryDate.innerText = moment(date).format('DD/MM/YYYY');
	this.deliveryExpress.innerText = moment(expressDelivery).format('DD/MM/YYYY');
}

function increaseDay(date, days) {
  var date = moment(date);
  while (days > 0) {
    date = date.add(1, 'days');
    if (date.isoWeekday() !== 6 && date.isoWeekday() !== 7) {
      days -= 1;
    }
  }
  return date;
}

function decrementDay(date, days) {
  var date = moment(date);
  while (days > 0) {
    date = date.subtract(1, 'days')
    if (date.isoWeekday() !== 6 && date.isoWeekday() !== 7) {
      days -= 1;
    }
  }
  return date;
}

function checkedHoliday(data){
	var consultar = moment(data).format('DD/MM/YYYY');
	var feriados = [];
	var ano = moment(consultar, 'DD/MM/YYYY').year();
	var pascoa = moment(ano + Easter(ano));

	feriados.push({
		data: moment(ano + '0101').format('DD/MM/YYYY'),
		descricao: 'Confraternização Universal'
	})
	feriados.push({
		data: moment(pascoa).subtract(48, 'days').format('DD/MM/YYYY'),
		descricao: '2º feria de Carnaval'
	})
	feriados.push({
		data: moment(pascoa).subtract(47, 'days').format('DD/MM/YYYY'),
		descricao: 'Carnaval'
	})
	feriados.push({
		data: moment(pascoa).format('DD/MM/YYYY'),
		descricao: 'Páscoa'
	})
	feriados.push({
		data: moment(pascoa).subtract(2, 'days').format('DD/MM/YYYY'),
		descricao: '6º Feira Santa'
	})
	feriados.push({
		data: moment(pascoa).add(60, 'days').format('DD/MM/YYYY'),
		descricao: 'Corpus Christi'
	})
	feriados.push({
		data: moment(ano + '0621').format('DD/MM/YYYY'),
		descricao: 'Tiradentes'
	})
	feriados.push({
		data: moment(ano + '0501').format('DD/MM/YYYY'),
		descricao: 'Dia do Trabalhador'
	})
	feriados.push({
		data: moment(ano + '0907').format('DD/MM/YYYY'),
		descricao: 'Dia da Independência'
	})
	feriados.push({
		data: moment(ano + '1012').format('DD/MM/YYYY'),
		descricao: 'N. S. Aparecida'
	})
	feriados.push({
		data: moment(ano + '1102').format('DD/MM/YYYY'),
		descricao: 'Todos os Santos'
	})
	feriados.push({
		data: moment(ano + '1225').format('DD/MM/YYYY'),
		descricao: 'Natal'
	})

	existeFeriado = jQuery.grep(feriados, function(n, i) {
		return (n.data == consultar);
	});

	if (existeFeriado.length) {
		return existeFeriado[0].descricao;
	} else {
		return false;
	}
}

function Easter(Y) {
  var C = Math.floor(Y / 100);
  var N = Y - 19 * Math.floor(Y / 19);
  var K = Math.floor((C - 17) / 25);
  var I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;
  I = I - 30 * Math.floor((I / 30));
  I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));
  var J = Y + Math.floor(Y / 4) + I + 2 - C + Math.floor(C / 4);
  J = J - 7 * Math.floor(J / 7);
  var L = I - J;
  var M = 3 + Math.floor((L + 40) / 44);
  var D = L + 28 - 31 * Math.floor(M / 4);

  return padout(M) + '' + padout(D);
}

function padout(number) {
  return (number < 10) ? '0' + number : number;
}

































function capturesFields(){
	this.typeTranslation = document.querySelector("#typeTranslation").value;
	this.from = document.querySelector("#from").value;
	this.to = document.querySelector("#for").value;
	this.deliveryDate = document.querySelector("#deliveryDate");
	this.deliveryExpress = document.querySelector("#deliveryExpress");
	this.numberWords = document.querySelector("#qtdWords").value;
	this.txtUrgencyRate = document.querySelector("#txtUrgencyRate");
	this.itemUrgencyRate = document.getElementById("itemUrgencyRate");
}

function calculateEnForPt(){
	var valueWord = 0.028;
}

function calculatePtForEn(){
	var valueWord = 0.044;
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

function alter(idFrom, idTo){
  var aux = document.getElementById(idFrom).value;
  document.getElementById(idFrom).value = document.getElementById(idTo).value;
  document.getElementById(idTo).value = aux;
}
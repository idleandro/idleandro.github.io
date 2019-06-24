deliveryData();

$("#documents").ready(function(){
    $("input[type=file]").click(function(){
       var files = $(this).files;
       console.log("estou acima" + files);
    });

    $("input[type=file]").change(function(){
       var files = document.querySelector("#documents").files;
       uploadMultipleFiles(files);

    });
});

function uploadMultipleFiles(files) {
    var formData = new FormData();

    for(var index = 0; index < files.length; index++) {
        formData.append("files", files[index]);
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/uploadMultipleFiles");
   // xhr.setRequestHeader("Content-type","application/form-data")
  //  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
   
    xhr.onload = function() {
        console.log(xhr.responseText);
        var response = JSON.parse(xhr.responseText);
        if(xhr.status == 200) {
          //  multipleFileUploadError.style.display = "none";
            var content = "<p>All Files Uploaded Successfully</p>";
            for(var i = 0; i < response.length; i++) {
                content += "<p>DownloadUrl : <a href='" + response[i].fileDownloadUri + "' target='_blank'>" + response[i].fileDownloadUri + "</a></p>";
            }
            // multipleFileUploadSuccess.innerHTML = content;
            // multipleFileUploadSuccess.style.display = "block";
        } else {
            // multipleFileUploadSuccess.style.display = "none";
            // multipleFileUploadError.innerHTML = (response && response.message) || "Some Error Occurred";
        }
    }
    console.log(formData);
    xhr.send(formData);
}

function deliveryData() {
	var deliveryDate = document.querySelector("#deliveryDate");
	var deliveryExpress = document.querySelector("#deliveryExpress");
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

	this.deliveryDate.innerText = moment(date).format('DD/MM/YYYY') + " - Normal";
	this.deliveryExpress.innerText = moment(expressDelivery).format('DD/MM/YYYY') + " - Expresso";
}

function alter(idFrom, idTo){
  var aux = document.getElementById(idFrom).value;
  document.getElementById(idFrom).value = document.getElementById(idTo).value;
  document.getElementById(idTo).value = aux;
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
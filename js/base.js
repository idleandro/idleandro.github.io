$("#form-budget").on('change keydown paste input', function(){
	var name = document.querySelector("#first_name").value;
	var numberWords = document.querySelector("#qtdWords").value;
	document.querySelector("#type-translation").innerText = document.querySelector("#typeTranslation").value;
	document.querySelector("#from").innerText = document.querySelector("#from").value;
	document.querySelector("#for").innerText = document.querySelector("#for").value;
	document.querySelector("#delivery-term").innerText = document.querySelector("#date").value;
	document.querySelector("#number-words").innerText = numberWords;
	document.querySelector("#qtdWordsDetail").innerText = numberWords;
	calculation(numberWords)
});


function calculation(numberWords){
	return numberWords * 0.027;
}

function alter(idFrom, idTo){
  var aux = document.getElementById(idFrom).value;
  document.getElementById(idFrom).value = document.getElementById(idTo).value;
  document.getElementById(idTo).value = aux;
}


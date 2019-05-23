function alter(idFrom, idTo){
  var aux = document.getElementById(idFrom).value;
  document.getElementById(idFrom).value = document.getElementById(idTo).value;
  document.getElementById(idTo).value = aux;
}

$('#logo').on('change', function() { 
	console.log("Olá algo mudou");
   // let fileName = $(this).val().split('\\').pop(); 
   // $(this).next('.custom-file-label').addClass("selected").html(fileName); 
});
function trocar(idFrom, idTo){
  var aux = document.getElementById(idFrom).value;
  document.getElementById(idFrom).value = document.getElementById(idTo).value;
  document.getElementById(idTo).value = aux;
}

$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
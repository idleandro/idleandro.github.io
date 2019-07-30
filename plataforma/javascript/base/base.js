$(function () {

	$('.select2').select2()

	$('#tableOrders').DataTable({
		'paging'      : true,
		'lengthChange': true,
		'searching'   : true,
		'ordering'    : true,
		'info'        : true,
		'autoWidth'   : true
	});

	// $( ".btn-send-text-user" ).click(function() {
	// 	$( ".send-text-user" ).toggle();
	// });
});

var doc = new jsPDF();
var specialElementHandlers = {
	'#editor': function (element, renderer) {
		return true;
	}
};

(function($){
	$.fn.createPdf = function(parametros) {

		var config = {              
			'fileName':'html-to-pdf'
		};

		if (parametros){
			$.extend(config, parametros);
		}                            
		var quotes = document.getElementById($(this).attr('id'));
		html2canvas(quotes, {
			onrendered: function(canvas) {
				var pdf = new jsPDF('p', 'pt', 'letter');
				for (var i = 0; i <= quotes.clientHeight/980; i++) {
					var srcImg  = canvas;
					var sX      = 0;
					var sY      = 980*i;
					var sWidth  = 900;
					var sHeight = 980;
					var dX      = 0;
					var dY      = 0;
					var dWidth  = 900;
					var dHeight = 980;
					window.onePageCanvas = document.createElement("canvas");
					onePageCanvas.setAttribute('width', 2000);
					onePageCanvas.setAttribute('height', 4000);
					var ctx = onePageCanvas.getContext('2d');
					ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);
					var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);
					var width         = onePageCanvas.width;
					var height        = onePageCanvas.clientHeight;
					if (i > 0) {
						pdf.addPage(612, 791);
					}
					pdf.setPage(i+1);
					pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width*.62), (height*.62));
				}
				pdf.save(config.fileName);
			}
		});
	};
})(jQuery);

function createPDF() {
	$('#renderPDF').createPdf({
		'fileName' : 'detalhamento'
	});
}

$(function () {
	$('#reservation').daterangepicker({
	    "locale": {
	        "format": "DD/MM/YYYY",
	        "separator": " - ",
	        "applyLabel": "Aplicar",
	        "cancelLabel": "Cancelar",
	        "fromLabel": "De",
	        "toLabel": "Até",
	        "customRangeLabel": "Custom",
	        "daysOfWeek": [
	            "Dom",
	            "Seg",
	            "Ter",
	            "Qua",
	            "Qui",
	            "Sex",
	            "Sáb"
	        ],
	        "monthNames": [
	            "Janeiro",
	            "Fevereiro",
	            "Março",
	            "Abril",
	            "Maio",
	            "Junho",
	            "Julho",
	            "Agosto",
	            "Setembro",
	            "Outubro",
	            "Novembro",
	            "Dezembro"
	        ],
	        "firstDay": 0
	    }
	});
});
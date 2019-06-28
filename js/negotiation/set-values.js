var formDudget, typeTranslation, typeSubtitling, from, to, qtdCaracteres, qtdMinutes, dateSelected, documents, url, nameClient, email, phone, nCaracteres;

this.formDudget = document.querySelector('#form-budget');

var Values = {
	capturesFieldsForm: function(){
		this.typeTranslation = document.querySelector("#typeTranslation");
		this.typeSubtitling = document.querySelectorAll('input[name="typeSubtitling"]:checked');
		this.from = document.querySelector("#from");
		this.to = document.querySelector("#for");
		this.dateSelected = document.querySelector("#deliveryDateOption");
		this.deliveryDate = document.querySelector("#deliveryDate");
		this.deliveryExpress = document.querySelector("#deliveryExpress");
		this.qtdCaracteres = document.querySelector("#qtdCaracteres");
		this.qtdMinutes = document.querySelector("#qtdMinutes");
		this.nCaracteres = document.querySelectorAll(".nCaracteres");
		this.documents = document.querySelector("#documents");
		this.url = document.querySelector("#url");
		this.nameClient = document.querySelector("#name");
		this.email = document.querySelector("#email");
		this.phone = document.querySelector("#phone");
	},
	setValuesCard: function(){
		document.querySelector("#type-translation").innerText = this.typeTranslation.value;
		document.querySelector("#fromItem").innerText = this.from.value;
		document.querySelector("#forItem").innerText = this.to.value;
		document.querySelector("#delivery-term").innerText = this.dateSelected.value;
	},
	setNumberCharactersOrMinutes: function(){
		var characters = document.getElementsByClassName('number-characters');
		var nCaracteres = document.getElementsByClassName('nCaracteres');
		var minutes = document.getElementsByClassName('number-minutes');

		if (this.typeTranslation.value == "Legendagem") {
				$("#qtdCaracteres").val("");
				$(".item-caracteres").hide();
				$(".item-minutes").show();

			for (var i = 0; i < minutes.length; i++) {
				minutes[i].innerText = this.qtdMinutes.value;
			}

		} else {
			$("#qtdMinutes").val("");
			$(".item-minutes").hide();
			$(".item-caracteres").show();

			if (document.querySelector("#first_toggle").checked) {
				for (var i = 0; i < characters.length; i++) {
					characters[i].innerText = this.qtdCaracteres.value;
				}	
			} else {
				for (var i = 0; i < characters.length; i++) {
					characters[i].innerText = getTotalCaracteres();
				}
			}
		}
	}
};

this.formDudget.addEventListener('click', (event) => {
	console.log("clicou");
	var obj = Object.create(Values);
	obj.capturesFieldsForm();
	obj.setValuesCard();
	obj.setNumberCharactersOrMinutes();
});

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
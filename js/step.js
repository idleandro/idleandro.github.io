(function($) {

    var form = $("#form-budget");
    form.validate({
        errorPlacement: function errorPlacement(error, element) {
             element.before(error); 
        },
        messages: {},
        rules: {
            name : {
                required: true,
                minlength: 3,
            },
            email : {
                required: true,
            },
            phone : {
                required: true,
                minlength: 11,
            },
            typeTranslation: {
                required: true,
            },
            deliveryDateOption : {
                required: true
            },
            qtdCaracteres: {
                required: true,
                minlength: 2,
                number: true
            },
            qtdMinutes: {
                required: true,
                minlength: 2,
                number: true
            },
            documents: {
                required: true,
            },
            typeSubtitling: {
              required: true,  
            }
        },
        onfocusout: function(element) {
            $(element).valid();
        },
        highlight : function(element, errorClass, validClass) {
            $(element.form).find('.actions').addClass('form-error');
            $(element).removeClass('valid');
            $(element).addClass('error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element.form).find('.actions').removeClass('form-error');
            $(element).removeClass('error');
            $(element).addClass('valid');
        }
    });
    form.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        labels: {
            previous : 'Anterior',
            next : 'Próximo',
            finish : 'Enviar',
            current : ''
        },
        titleTemplate : '<span class="title">#title#</span>',
        onStepChanging: function (event, currentIndex, newIndex)
        {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function (event, currentIndex)
        {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex)
        {
            alert('Sumited');
        },
        // onInit : function (event, currentIndex) {
        //     event.append('demo');
        // }
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        email: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });

    $('#gender').parent().append('<ul class="list-item" id="newgender" name="gender"></ul>');
    $('#gender option').each(function(){
        $('#newgender').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#gender').remove();
    $('#newgender').attr('id', 'gender');
    $('#gender li').first().addClass('init');
    $("#gender").on("click", ".init", function() {
        $(this).closest("#gender").children('li:not(.init)').toggle();
    });
    
    var allOptions = $("#gender").children('li:not(.init)');
    $("#gender").on("click", "li:not(.init)", function() {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#gender").children('.init').html($(this).html());
        allOptions.toggle();
    });

    $('#country').parent().append('<ul class="list-item" id="newcountry" name="country"></ul>');
    $('#country option').each(function(){
        $('#newcountry').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#country').remove();
    $('#newcountry').attr('id', 'country');
    $('#country li').first().addClass('init');
    $("#country").on("click", ".init", function() {
        $(this).closest("#country").children('li:not(.init)').toggle();
    });
    
    var CountryOptions = $("#country").children('li:not(.init)');
    $("#country").on("click", "li:not(.init)", function() {
        CountryOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#country").children('.init').html($(this).html());
        CountryOptions.toggle();
    });

    $('#payment_type').parent().append('<ul  class="list-item" id="newpayment_type" name="payment_type"></ul>');
    $('#payment_type option').each(function(){
        $('#newpayment_type').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#payment_type').remove();
    $('#newpayment_type').attr('id', 'payment_type');
    $('#payment_type li').first().addClass('init');
    $("#payment_type").on("click", ".init", function() {
        $(this).closest("#payment_type").children('li:not(.init)').toggle();
    });
    
    var PaymentsOptions = $("#payment_type").children('li:not(.init)');
    $("#payment_type").on("click", "li:not(.init)", function() {
        PaymentsOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#payment_type").children('.init').html($(this).html());
        PaymentsOptions.toggle();
    });

    $.dobPicker({
        daySelector: '#birth_date',
        monthSelector: '#birth_month',
        yearSelector: '#birth_year',
        dayDefault: 'Day',
        monthDefault: 'Month',
        yearDefault: 'Year',
        minimumAge: 0,
        maximumAge: 120
    });

    $.dobPicker({
        daySelector: '#expiry_date',
        monthSelector: '#expiry_month',
        yearSelector: '#expiry_year',
        dayDefault: 'Day',
        monthDefault: 'Month',
        yearDefault: 'Year',
        minimumAge: 0,
        maximumAge: 120
    });

    $( ".toggle_option" ).click(function(e) { 
           if ($(this).is("#first_toggle")) {
                $("#block-documents").fadeOut("fast", function(){
                 $("#block-url").fadeIn( "fast");
                });
        } else if ($(this).is("#second_toggle")) {
            $("#block-url").fadeOut( "fast" , function(){
                 $("#block-documents").fadeIn( "fast");
            });
        };
   });

   $("#documents").on('change keydown paste input', function(){
        if($("#documents").val() == null || $("#documents").val() ==""){
            clearTable();
        } else {
            var spinner = document.querySelector(".spinner");
            spinner.style.display = "block"
        }
    });

   $("#btn-clear").on('click', function(){
       clearTable();
   });

     function clearTable() {
        document.querySelector("#documents").value = "";
        var table = document.querySelector("#tableDetail");
        var tbody = document.querySelector("#tableDetail > tbody");
        table.style.display = "none";
        tbody.innerHTML = "";
        document.querySelector(".msg-error-server").innerHTML = " ";
   };

    // var upload = document.getElementById("documents");
    // upload.addEventListener("change", function(e) {
    //     var size = upload.files[0].size;
    //     if(size < 21048576) { //1MB         
          
    //     } else {           
    //       upload.value = ""; //Limpa o campo          
    //     }
    //     e.preventDefault();
    // });

    $('#phone').mask('00 00000-0000');
    $('#date').mask('00/00/0000');
    $( "#first" ).rules( "remove", "min max" );

    $("#typeTranslation").on('change keydown paste input', function(){
        var value = document.querySelector("#typeTranslation").value;
        if(value == "Legendagem"){
            $("#block-caracteres").hide();
            $("#block-minutes").show();
            $(".subtitle").show("fast"); 
        } else {
            $("#block-caracteres").show();
            $("#block-minutes").hide();
            $(".subtitle").hide("fast"); 
        }
    });
        
})(jQuery);
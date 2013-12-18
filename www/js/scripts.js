
var country_code = "CR";
$(document).ready(function(){	

	//console.log('in the event of an error, have you considered that CodeKit is not configured properly?');
	//------ global variables begin here
	var containerWidth;
	var noteKey = 0;
	var maxKey = 2;
	var marginRight;

	var country;
	var currency;
	var country_Code;








//------ Functions begin here.

	var countrySelector = function() {
		$.getJSON( "countries/countries.json", function( countries ) {
			//console.log("yo");

			countries = countries.countries;

			for (var i = 0; i < countries.length; i++) {
				$(".countrySelector").append("<option value='"+countries[i].countryCode+"'>"+countries[i].name+"</option>");

			}

		});
	}


		//resizes the container for the currency based on the width of the page container
	var resizeCurency = function() {

		containerWidth = $("#notessection").width();
		$(".notegroup").width(containerWidth);

		marginRight = 160;

		$(".notegroup").css( "margin-right", "marginRight");

		
	
	}
		//calculates and posistions notes based on which note key should be shown
	var positionNotes = function() {

		var notePos = noteKey * (containerWidth + marginRight);

		notePos = notePos + "px";

		$('.noteposition').css('right', notePos);

		console.log($('.noteposition').css('right'));


		$(".currentNoteIndicator").removeClass("currentNoteIndicator");
		$(".noteselect li a[data-key="+noteKey+"]").addClass("currentNoteIndicator");
		
	}
		//hides controls if less than 1 bill is available

	var toggleControls = function() {

		if(maxKey<1){
			$(".noteselect").slideUp();
			$("#notearrows").slideUp();
		}
		if(maxKey<0){
			$(".noteselect").slideDown();
			$("#notearrows").slideDown();

		}

	}


	window.getCurrency = function(country_code) {
		console.log(country_code);

		$.getJSON( "countries/countries.json", function( countries ) {
			console.log(country_code);
			countries = countries.countries;

			for (var i = 0; i < countries.length; i++) {

				//console.log(countries[i].countryCode);
				if(countries[i].countryCode.toString() == country_code){
					console.log("ssususdfeufnasdjnf");
					country=countries[i];
					console.log("yep get currencty is getting " + country_code);
					console.log(country);


					$.getJSON( "currency/"+country.currencyCode+"/"+country.currencyCode+".json", function( currency ) {
					
						//console.log(currency);
						
						$("#countryName").html(country.name);

						$(".noteselect").empty();
						for (var b = 0; b < currency.notes.length; b++) {
							//console.log(currency.notes[b]);
							$(".noteselect").append("<li><a data-key='"+b+"' href='#'>"+ currency.symbol + currency.notes[b].shortname+ "</a></li>");

						}

						$(".notes").empty();
						for (var b = 0; b < currency.notes.length; b++) {
							console.log(currency.notes[b].front.image);
							var notegroup = "<li class='notegroup' data-key="+b+">\
						                        <div class ='note notefront'>\
						                            <img class='money' src='currency/"+country.currencyCode+"/"+currency.notes[b].front.image+"'>\
						                            <h5>"+currency.notes[b].front.heading+"</h5>\
						                            <h6>"+currency.notes[b].front.copy+"</h6>\
						                        </div>\
						                        <div class ='note noteback'>\
						                            <img class='money' src='currency/"+country.currencyCode+"/"+currency.notes[b].back.image+"'>\
						                            <h5>"+currency.notes[b].back.heading+"</h5>\
						                            <h6>"+currency.notes[b].back.copy+"</h6>\
						                        </div>\
						                    </li>"
						    $(".notes").append(notegroup);
						}

						$(".currencyname").html(currency.currencyName);
						$(".currencySymbol").html(currency.symbol);
						$(".flag").attr("src", "countries/"+country.countryCode+".png");
						$(".notebio").html(currency.bio);



						//updates to global data
						maxKey = currency.notes.length-1;
						noteKey = 0;
						positionNotes();
					});


				}
			}

		});



	}






//----- Fuctions to be run at the beginning of code execution
	getCurrency('AM');
	countrySelector();
	
	//console.log("say what");
	toggleControls();
	resizeCurency();

	$(document).click(function(e){

		//console.log(e);

	});



//------ fucntions run on window resize event
	$( window ).resize(function() {

		resizeCurency();

	});

// ------  click events for Currency Viewer
	$(".nextbutton").click(function(e){
		e.preventDefault();

		if(noteKey<maxKey){
			noteKey++;
			positionNotes();
		}

	});
	$(".prevbutton").click(function(e){
		e.preventDefault();

		if(noteKey>0){
			noteKey--;
			positionNotes();
		}
		
	});

	$(".noteselect").on('click', 'li a', function(e){
		e.preventDefault();
		console.log("iwasclickded");


		noteKey = $(this).attr('data-key');
		console.log(noteKey);
		positionNotes();

	});

	$("h1").click(function(){

		getCurrency("CR");

	});





//---- code for currency selection and queries 

$(document).on('change', '.countrySelector', function(){
	
		country_Code = $(this).val();
		console.log(country_Code);
		getCurrency(country_Code);
	
	});

   






});
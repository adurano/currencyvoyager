
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


function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}




//------ Functions begin here.

	var countrySelector = function() {
		$.getJSON( "countries/countries.json", function( countries ) {
			//console.log("yo");

			var countrylist = ["US", "RU", "JP", "NZ", "AT", "MX", "AU", "AW", "CR", "FR", "ES", "SE"];
			countrylist.sort();


			countries = countries.countries;

			for (var n = 0; n < countrylist.length; n++){

				for (var i = 0; i < countries.length; i++) {
					if (countries[i].countryCode==countrylist[n]){

						$(".countrySelector").append("<li class='countryselectitem' data-country-code='"+countries[i].countryCode+"'>"+countries[i].name+"</li>");
					}
				}

			}

			

		});
	}


		//resizes the container for the currency based on the width of the page container
	var resizeCurency = function() {

		containerWidth = $("#notescontrolls").width();
		$(".notegroup").width(containerWidth);
		var padleft = $("#notescontrolls").css("margin-left");

		marginRight = parseInt(padleft, 10);

		//$(".notegroup").css( "margin-right", "marginRight");

		$(".notegroup").css( "padding-left", padleft);
		$(".notegroup").css( "padding-right", padleft);
	
	}
		//calculates and posistions notes based on which note key should be shown
	var positionNotes = function() {

		var notePos = noteKey * (containerWidth + (marginRight*2));

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
						var countryName = toTitleCase(country.name);
						$("#countryName").html(countryName);

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
						$(".infaltionValue").html(currency.inflationRate);
						$(".debtValue").html(country.GDP);




						$.getJSON( "http://openexchangerates.org//api/latest.json?app_id=593018fa7c1944e285e2a4097c5040b8", function( exchange ) {

							//var thisthing = ;
							var rates = exchange.rates[country.currencyCode];
							$(".exchangeValue").html(exchange.rates[country.currencyCode]);
							
							//console.log(country.currencyCode + " " + rates);


							var multirates = [exchange.rates[country.currencyCode], exchange.rates["USD"], exchange.rates["EUR"]];
							
							multirates.sort();
							console.log(multirates);


						});



						//updates to global data
						maxKey = currency.notes.length-1;
						noteKey = 0;
						resizeCurency();
						positionNotes();
						resizeCurency();

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
		positionNotes();
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
/*
	$("h1").click(function(){

		getCurrency("CR");

	});


*/


//---- code for currency selection and queries 

$(".select").click(function(){

	$(".countrySelector").addClass("openmenu");

});




$(".countrySelector").on("click", ".countryselectitem", function(){
		//alert("thisngid");
		country_Code = $(this).attr("data-country-code");
		console.log(country_Code);
		getCurrency(country_Code);
	
	});

  

$("#fixedbar").mouseleave(function(){

	$(".countrySelector").removeClass("openmenu");

});




});
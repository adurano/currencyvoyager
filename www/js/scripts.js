$(document).ready(function(){
	console.log('in the event of an error, have you considered that CodeKit is not configured properly?');
//------ global variables begin here
	var containerWidth;
	var noteKey = 0;
	var maxKey = 2;
	var marginRight;

//------ Functions begin here.

		//resizes the container for the currency based on the width of the page container
	var resizeCurency = function() {

		containerWidth = $("#notessection").width();
		$(".notegroup").width(containerWidth);

		marginRight = 160;

		$(".notegroup").css( "margin-right", "marginRight");

		console.log($(".notegroup").css("margin-right") + "tacos");
	
	}

	var positionNotes = function() {

		var notePos = noteKey * (containerWidth + marginRight);

		notePos = notePos + "px";

		$('.noteposition').css('right', notePos);

		console.log($('.noteposition').css('right'));


		$(".currentNoteIndicator").removeClass("currentNoteIndicator");
		$(".noteselect li a[data-key="+noteKey+"]").addClass("currentNoteIndicator");
		
	}

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

//----- Fuctions to be run at the beginning of code execution

	toggleControls();
	resizeCurency();



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

	$(".noteselect li a").click(function(e){
		e.preventDefault();


		noteKey = $(this).attr('data-key');
		console.log(noteKey);
		positionNotes();

	});




});
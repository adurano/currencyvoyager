$(document).ready(function(){

	$("#cur_code_enter").click(function(){
		var cur_code = $("#cur_code").val();
		
		console.log(cur_code);
		
		$.post("addcurrency.php", { currency_code: cur_code}, function(data){
		
			if(data == "Folder does not exist.") {
				alert(data);
					
			}
			else{
			
				$(".contents").html(data);
			
			}

			
		});
			
		}
	);
	
	$(".countrySelect").change(function(){
	
		var country_Code = $(this).val();
		
		$.post("getcurrency.php", {countryCode: country_Code}, function(data){
			
			$(".contents").html(data);
			
		});
	
	});
	
	
	
	 $(function(){
      $('#world-map').vectorMap();
    });

});
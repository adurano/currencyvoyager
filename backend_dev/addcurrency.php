<?

	$cur_code = $_POST[ "currency_code" ];
	
	
	
		
	
		if(is_dir('currency/' . $cur_code)){
		
			if(file_exists('currency/' . $cur_code . '/')){
				
				
							
			} else {
			
			
			}
		
			//echo("everybody is awesome, " . $cur_code);
			$files = scandir('currency/'. $cur_code);
			
			foreach($files as $filename) {
				
				if (strpos($filename, '.jpg') !== false || strpos($filename, '.png') !== false){
    				//echo 'true';
    				echo "<img src='currency/".$cur_code."/".$filename."'>";
				}
			}
			
			
			
			
			//print_r($files);
			
			
			
			
		}
		else{
		
			echo("Folder does not exist.");

			
		}
	
	
		
?>
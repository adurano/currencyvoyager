<?

	function getCountries($className){
	
		$countries = file_get_contents('countries/countries.json');
		$countries = json_decode($countries, true);
		
			//var_dump($countries);
			echo "<select class='". $className . "'>";
			foreach($countries["countries"] as $country) {
				
				echo "<option value='". $country["countryCode"] ."'>" . $country["name"] . "</option>";
			
			}
			echo "</select>";
			
		}
		
	
	
		
	

?>

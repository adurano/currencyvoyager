<?
	//queries country code found in scripts.js
	$country_code = $_POST[ "countryCode" ];
	
	//reads countries list and converts it to php array
	$countries = file_get_contents('countries/countries.json');
	$countries = json_decode($countries, true);

	//searches country list for country by country code
	foreach($countries["countries"] as $country) {
		if($country["countryCode"]==$country_code){
			
			//assigns all country data to variables
			$countryName =	$country["name"];
			$countryCode =	$country["countryCode"];
			$currencyCode = $country["currencyCode"];
			$gdp = 			$country["GDP"];
			$debt = 		$country["debt"];
			$bigmac = 		$country["bigmac"];
			
			//gathers currency data
			$currency = file_get_contents('currency/'.$currencyCode.'/'.$currencyCode.'.json');
		
			$currency = json_decode($currency, true);
			
			//var_dump($currency);
			//assigns variables from json object
			$currencyName = 	$currency['currencyName'];
			$inflationRate = 	$currency['inflationRate'];
			$fraction = 		$currency['fraction'];
			$bio = 				$currency['bio'];
			
			$countries = 		$currency['countries'];
			$notes = 			$currency['notes'];
			
			
			foreach($notes as $note){
				
				$noteName = 	$note["name"];
				$frontImg =		$note["front"]["image"];
				$frontInfo =	$note["front"]["info"];
				
				$backImg =		$note["back"]["image"];
				$backInfo =		$note["back"]["info"];
				
				
				?>
					<div class="note">
						<img src="currency/<?echo $currencyCode; ?>/<?echo $frontImg; ?>"class="notefront">
						<ul>
						<?
							foreach($frontInfo as $info){
							
								echo "<li>" . $info . "</li>";
								
							
							}
						?>
						</ul>
					
						<img src="currency/<?echo $currencyCode; ?>/<?echo $backImg; ?>"class="noteback">
						<ul id="scrollto">
						<?
							foreach($backInfo as $info){
							
								echo "<li>" . $info . "</li>";
								
							
							}
						?>
						</ul>
						
						
						
					</div>
				
				<?
				
			}
			
			//https://openexchangerates.org//api/latest.json?app_id=593018fa7c1944e285e2a4097c5040b8
			
			$exchangerate = 0;
			
			$rates = file_get_contents('http://openexchangerates.org//api/latest.json?app_id=593018fa7c1944e285e2a4097c5040b8'); 
			$rates = json_decode($rates, true);
			$exchangerate = $rates['rates'][$currencyCode];
			
			//echo "exchange rate is " . $exchangerate;			
			
			
			
				if(isset($countryName)){
					?>
					<h3>Country:</h3>
					<p><? echo $countryName ?></p>
					<?
				}
				if($gdp!=""){
					?>					
					<h3>GDP:</h3>
					<p><? echo "$" . $gdp ." Billion USD" ?></p>
					<?
				}
				if($debt!=""){
					?>					
					<h3>Debt:</h3>
					<p><? echo $debt ?></p>
					<?
				}
				if(isset($exchangerate)){
					?>
					<h3>Exchange Rate:</h3>
					<p><? echo "$" . $exchangerate ." USD"?></p>
					<?
				}
				if($bigmac!=""){
					?>
					<h3>Big Mac Index:</h3>
					<p><? echo $bigmac ?></p>
					<?
				}
				if($currencyCode!=""){
					?>
					<h3>Currency Code:</h3>
					<p><? echo $currencyCode ?></p>
					<?
				}
				if($currencyName!=""){
					?>
				<h3>Currency Name:</h3>
				<p><? echo $currencyName ?></p>
					<?
				}
				if($inflationRate!=""){
					?>
				<h3>Inflation Rate:</h3>
				<p><? echo $inflationRate ?></p>
					<?
				}
				if($bio!=""){
					?>
				<h3>Currency Bio:</h3>
				<p><? echo $bio ?></p>
					<?
				}
		
		}	
	}
	

?>
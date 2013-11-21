<?  //require_once("dbconnect.php"); 
    require_once("functions.php");
   
?>
<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><? echo $pageTitle ?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="css/style.css">

        <script src="js/libs/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <nav>
        	<div class="Logo"><h1>Currency Voyager</h1></div>
        
        	<? 
        	//this function creates drop down of countries, put the class name in the parens 
        	getCountries(countrySelect); ?>
        	
        </nav>

<? 

require_once("functions.php");
 
      
?>
<!DOCTYPE html>
<html class="no-js">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>CV MAP</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <link href='http://fonts.googleapis.com/css?family=Lato|Gilda+Display' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/style.css">

    <link href='http://fonts.googleapis.com/css?family=Rationale' rel='stylesheet' type='text/css'>
    
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <script src="js/Chart.js"></script>

    <script>
        $(document).ready(function(){

            $("#graph").click(function(e){
                console.log(e);
            });

        });

    </script>

    <script type="text/javascript" src="js/scripts.js"></script>
    <script type="text/javascript" src="deps.js"></script>
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.6.4/leaflet.css" />
    <script src="http://cdn.leafletjs.com/leaflet-0.6.4/leaflet.js"></script>

     <style type="text/css">

                body {
                        margin:0;
                }

                #map { 
                        height: 500px; 
                        margin-top: 30px;
                        border-top: 2px #666 solid;
                        border-bottom: 2px #666 solid;
                }

                #container {
                        max-width: 100%;
                        margin-left: 0px;
                        margin-right: 0;
                        margin-top: -10px;
                        padding-left: 0;
                        padding-right: 0;
                        height: 100%;
                        position: relative;
                        z-index: 20;
                }

                .leaflet-left .leaflet-control {
                        display: none;
                }

                .leaflet-container .leaflet-control-attribution, .leaflet-container .leaflet-control-scale {
                        display: none;
                }

                .money {
                        box-shadow: 4px 4px 1px #ccc;
                        -webkit-box-shadow: 4px 4px 1px #ccc;
                        -moz-box-shadow: 4px 4px 1px #ccc;
                }

        </style>


</head>

        <!-- ***********             OPEN                   ***********-->


<body>
    <header>

        <h1>logo</h1><!--Use the background tag on this element for logo-->
        <nav>
            <ul>
                <li><a href="#"></a></li>
            </ul>
            <? 
            //this function creates drop down of countries, put the class name in the parens 
            getCountries(countrySelect); ?>
        </nav>
    </header>
    <div class="contents"></div>
    <section class="container">
        <!-- this is the intro -->
        <h2>Welcome to Currency Voyager!</h2>
        <p>We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.</p>
    </section>
    <section>
        <div class="container" id="notessection">
        <!-- this section is for the notes -->
            <h3>Costa Rica</h3><!--country name-->
            <ul class="noteselect">
                <li><a class = "currentNoteIndicator"data-key="0" href="#">&#8353;2Mil</a></li>
                <li><a data-key="1" href="#">&#8353;4Mil</a></li>
                <li><a data-key="2" href="#">&#8353;10Mil</a></li>
            </ul>
            <div id="notearrows">
                <a href="#" class="prevbutton notearrow"><</a>
                <a href="#" class="nextbutton notearrow">></a>
            </div>
        </div>
        <div class="noteholder">
            <div class="noteposition container">
                <ul class="notes">
                    <li class='notegroup' data-key="0">
                        <div class ="note notefront">
                            <img class="money" src="img/2costa2.png">
                            <h5>Mauro Fernández Acuña</h5>
                            <h6>Director of the Bank of Costa Rica</h6>
                        </div>
                        <div class ="note noteback">
                            <img class="money" src="img/2costa.png">
                            <h5>Bull Shark</h5>
                            <h6>Bull sharks are typically solitary hunters</h6>
                        </div>
                        
                    </li>
                    <li class='notegroup' data-key="1">
                        <div class ="note notefront">
                            <img class="money" src="img/2costa2.png">
                            <h5>Mauro Fernández Acuña</h5>
                            <h6>Director of the Bank of Costa Rica</h6>
                        </div>
                        <div class ="note noteback">
                            <img class="money" src="img/2costa.png">
                            <h5>Bull Shark</h5>
                            <h6>Bull sharks are typically solitary hunters</h6>
                        </div>
                        
                    </li>
                     <li class='notegroup' data-key="2">
                        <div class ="note notefront">
                            <img class="money" src="img/2costa2.png">
                            <h5>Mauro Fernández Acuña</h5>
                            <h6>Director of the Bank of Costa Rica</h6>
                        </div>
                        <div class ="note noteback">
                            <img class="money" src="img/2costa.png">
                            <h5>Bull Shark</h5>
                            <h6>Bull sharks are typically solitary hunters</h6>
                        </div>
                        
                    </li>

                </ul>
            </div>
        </div>
    </section>
    <section class="container">
        <!-- this section is for the info -->
        <h3>The Colon</h3>
        <div class="infocol">
          
                <img class ="flag" src="img/costaflag.png">
                <h3 class="icon"> &#8353 </h3>
                <p class="notebio">Named after Christopher Columbus, known as Cristóbal Colón in Spanish, is the currency of Costa Rica.</p>  
        </div>
        <div class="infocol">
            <div id="exchangerate">
                <h5 class = "infolabel">Exchange Rate: </h5>
                <div class="chart">

                    <div class="bar" id="bar1"><p>USD</p></div>
                    <div class="bar" id="bar2"><p>EUR</p></div>
                    <div class="bar" id="bar3"><p>CRN</p></div>
                    <div class="bar" id="bar4"><p>AUS</p></div>

                </div>
            </div>
            <h5 class = "infolabel">GDP: </h5>
            <h6 class ="inforesult">$66 Trillion</h6>
            <h5 class = "infolabel">Inflation Rate: </h5>
            <h6 class ="inforesult">3%</h6>
        </div>
        <div class="infocol">
             <div id="bigmacindex">
                <h5 class = "infolabel">Big Mac Index: </h5>
                <div class="chart"></div>
            </div>
            <h5 class = "infolabel">National Debt: </h5>
            <h6 class ="inforesult">$303 Trillion</h6>
            <h5 class = "infolabel">In circulation: </h5>
            <h6 class ="inforesult">$938 Million</h6>

        </div>
    </section>

    <div id="map"></div>


    <script type="text/javascript">


                //var map = L.map('map', {zoom: 13}).setView([20, 100], 13);
                var map = L.map('map', {
                        center: [30, 0],
                        zoom: 3,
                        maxZoom: 5,
                        scrollWheelZoom: false,
                        bounceAtZoomLimits: true,
                });


                L.tileLayer('http://{s}.tile.cloudmade.com/4a0739b848834b26bf3b825b8244fd18/115036/256/{z}/{x}/{y}.png', {                

                }).addTo(map);

                var circle1 = L.circle([40, -4], 300000, {
                        color: "rgba(250,0,0,0.7)",
                        fillColor: "rgba(250,0,0,0.7)",
                        fillOpacity: 0.5,
                        strokeWidth: 5000,
                }).addTo(map);

                circle1.bindPopup("Spain");

                var circle2 = L.circle([9, -82], 300000, {
                        color: "rgba(250,0,0,0.7)",
                        fillColor: "rgba(250,0,0,0.7)",
                        fillOpacity: 0.5,
                        strokeWidth: 5000,
                }).addTo(map);

                circle2.bindPopup("Costa Rica");


                n = 2 ^ zoom
                xtile = ((lon_deg + 180) / 360) * n
                ytile = (1 - (ln(tan(lat_rad) + sec(lat_rad)) / Pi)) / 2 * n

                n = 2 ^ zoom
                lon_deg = xtile / n * 360.0 - 180.0
                lat_rad = arctan(sinh( Pi * (1 - 2 * ytile / n)))
                lat_deg = lat_rad * 180.0 / Pi



    </script>
 
    <footer>
        <p>Some things about who we are and why we're aweseom</p>

    </footer>

</body>
</html>


















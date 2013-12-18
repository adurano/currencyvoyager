$(function(){

	
	// Example #6
	$(".maparea").mapael({
		map : {
			name : "world_countries",
			defaultArea: {
				attrs : {
					stroke : "#666", 
					"stroke-width" : 0
				}
			}
		},
		legend : {
			area : {
				display : true,
				title :"Nominal GDP in Billions of USD", 
				slices : [
					{
						max :5000000, 
						attrs : {
							fill : "#262626"
						},
						label :"10,000+"
					},
					{
						min :5000000, 
						max :10000000, 
						attrs : {
							fill : "#363636"
						},
						label :"5,000 - 10,000"
					},
					{
						min :10000000, 
						max :50000000, 
						attrs : {
							fill : "#555555"
						},
						label :"2,000 - 5,000"
					},
					{
						min :50000000, 
						attrs : {
							fill : "#707070"
						},
						label :"1,000 - 2,000"
					},
					{
						min :10000000, 
						max :50000000, 
						attrs : {
							fill : "#898989"
						},
						label :"500 - 1,000"
					},
					{
						min :10000000, 
						max :50000000, 
						attrs : {
							fill : "#959595"
						},
						label :"200 - 500"
					},
					{
						min :10000000, 
						max :50000000, 
						attrs : {
							fill : "#ACACAC"
						},
						label :"100 - 200"
					},
					{
						min :10000000, 
						max :50000000, 
						attrs : {
							fill : "#C2C2C2"
						},
						label :"50 - 100"
					},
					{
						min :10000000, 
						max :50000000, 
						attrs : {
							fill : "#D7D7D7"
						},
						label :"0 - 50"
					},
				]
			},
			plot :{
				display : false,
				title: "Some cities ..."
				, slices : [
					{
						max :500000, 
						attrs : {
							fill : "#f99200"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 0
						}, 
						label :"less than 500 000 inhabitants", 
						size : 10
					},
					{
						min :500000, 
						max :1000000, 
						attrs : {
							fill : "#f99200"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 0
						}, 
						label :"Between 500 000 and 1 000 000 inhabitants", 
						size : 20
					},
					{
						min :1000000, 
						attrs : {
							fill : "#f99200"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 0
						}, 
						label :"More than 1 million inhabitants", 
						size : 30
					}
				]
			}
		},
		/*plots : {
			'paris' : {
				latitude :48.86, 
				longitude :2.3444, 
				value : 500000000, 
				tooltip: {content : "Paris<br />Population: 500000000"}
			},
			'newyork' : {
				latitude :40.667, 
				longitude :-73.833, 
				value : 200001, 
				tooltip: {content : "New york<br />Population: 200001"}
			},
			'sydney' : {
				latitude :-33.917, 
				longitude :151.167, 
				value : 600000, 
				tooltip: {content : "Sydney<br />Population: 600000"}
			},
			'brasilia' : {
				latitude :-15.781682, 
				longitude :-47.924195, 
				value : 200000001, 
				tooltip: {content : "Brasilia<br />Population: 200000001"}
			},
			'tokyo': {
				latitude :35.687418, 
				longitude :139.692306, 
				value : 200001, 
				tooltip: {content : "Tokyo<br />Population: 200001"}
			}
		},*/
		areas: {
			"AF": {
				"value": "35320445",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Afghanistan<\/span><br \/>GDP: 35320445"
				}
			},
			"ZA": {
				"value": "50586757",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">South Africa<\/span><br \/>GDP: 50586757"
				}
			},
			"AL": {
				"value": "3215988",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Albania<\/span><br \/>GDP: 3215988"
				}
			},
			"DZ": {
				"value": "35980193",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Algeria<\/span><br \/>GDP: 35980193"
				}
			},
			"DE": {
				"value": "81726000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Germany<\/span><br \/>GDP: 81726000"
				}
			},
			"AD": {
				"value": "86165",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Andorra<\/span><br \/>GDP: 86165"
				}
			},
			"AO": {
				"value": "19618432",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Angola<\/span><br \/>GDP: 19618432"
				}
			},
			"AG": {
				"value": "89612",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Antigua And Barbuda<\/span><br \/>GDP: 89612"
				}
			},
			"SA": {
				"value": "28082541",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Saudi Arabia<\/span><br \/>GDP: 28082541"
				}
			},
			"AR": {
				"value": "40764561",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Argentina<\/span><br \/>GDP: 40764561"
				}
			},
			"AM": {
				"value": "3100236",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Armenia<\/span><br \/>GDP: 3100236"
				}
			},
			"AU": {
				"value": "22620600",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Australia<\/span><br \/>GDP: 22620600"
				}
			},
			"AT": {
				"value": "8419000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Austria<\/span><br \/>GDP: 8419000"
				}
			},
			"AZ": {
				"value": "9168000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Azerbaijan<\/span><br \/>GDP: 9168000"
				}
			},
			"BS": {
				"value": "347176",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Bahamas<\/span><br \/>GDP: 347176"
				}
			},
			"BH": {
				"value": "1323535",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Bahrain<\/span><br \/>GDP: 1323535"
				}
			},
			"BD": {
				"value": "150493658",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Bangladesh<\/span><br \/>GDP: 150493658"
				}
			},
			"BB": {
				"value": "273925",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Barbados<\/span><br \/>GDP: 273925"
				}
			},
			"BE": {
				"value": "11008000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Belgium<\/span><br \/>GDP: 11008000"
				}
			},
			"BZ": {
				"value": "356600",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Belize<\/span><br \/>GDP: 356600"
				}
			},
			"BJ": {
				"value": "9099922",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Benin<\/span><br \/>GDP: 9099922"
				}
			},
			"BT": {
				"value": "738267",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Bhutan<\/span><br \/>GDP: 738267"
				}
			},
			"BY": {
				"value": "9473000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Belarus<\/span><br \/>GDP: 9473000"
				}
			},
			"MM": {
				"value": "48336763",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Myanmar<\/span><br \/>GDP: 48336763"
				}
			},
			"BO": {
				"value": "10088108",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of<\/span><br \/>GDP: 10088108"
				}
			},
			"BA": {
				"value": "3752228",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina<\/span><br \/>GDP: 3752228"
				}
			},
			"BW": {
				"value": "2030738",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Botswana<\/span><br \/>GDP: 2030738"
				}
			},
			"BR": {
				"value": "196655014",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Brazil<\/span><br \/>GDP: 196655014"
				}
			},
			"BN": {
				"value": "405938",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Brunei Darussalam<\/span><br \/>GDP: 405938"
				}
			},
			"BG": {
				"value": "7476000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Bulgaria<\/span><br \/>GDP: 7476000"
				}
			},
			"BF": {
				"value": "16967845",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Burkina Faso<\/span><br \/>GDP: 16967845"
				}
			},
			"BI": {
				"value": "8575172",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Burundi<\/span><br \/>GDP: 8575172"
				}
			},
			"KH": {
				"value": "14305183",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Cambodia<\/span><br \/>GDP: 14305183"
				}
			},
			"CM": {
				"value": "20030362",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Cameroon<\/span><br \/>GDP: 20030362"
				}
			},
			"CA": {
				"value": "34482779",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Canada<\/span><br \/>GDP: 34482779"
				}
			},
			"CV": {
				"value": "500585",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Cape Verde<\/span><br \/>GDP: 500585"
				}
			},
			"CF": {
				"value": "4486837",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Central African Republic<\/span><br \/>GDP: 4486837"
				}
			},
			"CL": {
				"value": "17269525",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Chile<\/span><br \/>GDP: 17269525"
				}
			},
			"CN": {
				"value": "1344130000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">China<\/span><br \/>GDP: 1344130000"
				}
			},
			"CY": {
				"value": "1116564",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Cyprus<\/span><br \/>GDP: 1116564"
				}
			},
			"CO": {
				"value": "46927125",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Colombia<\/span><br \/>GDP: 46927125"
				}
			},
			"KM": {
				"value": "753943",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Comoros<\/span><br \/>GDP: 753943"
				}
			},
			"CG": {
				"value": "4139748",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Congo<\/span><br \/>GDP: 4139748"
				}
			},
			"CD": {
				"value": "67757577",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The<\/span><br \/>GDP: 67757577"
				}
			},
			"KP": {
				"value": "24451285",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of<\/span><br \/>GDP: 24451285"
				}
			},
			"KR": {
				"value": "49779000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Korea, Republic Of<\/span><br \/>GDP: 49779000"
				}
			},
			"CR": {
				"value": "4726575",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Costa Rica<\/span><br \/>GDP: 4726575"
				}
			},
			"CI": {
				"value": "20152894",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire<\/span><br \/>GDP: 20152894"
				}
			},
			"HR": {
				"value": "4407000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Croatia<\/span><br \/>GDP: 4407000"
				}
			},
			"CU": {
				"value": "11253665",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Cuba<\/span><br \/>GDP: 11253665"
				}
			},
			"DK": {
				"value": "5574000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Denmark<\/span><br \/>GDP: 5574000"
				}
			},
			"DJ": {
				"value": "905564",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Djibouti<\/span><br \/>GDP: 905564"
				}
			},
			"DM": {
				"value": "67675",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Dominica<\/span><br \/>GDP: 67675"
				}
			},
			"EG": {
				"value": "82536770",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Egypt<\/span><br \/>GDP: 82536770"
				}
			},
			"AE": {
				"value": "7890924",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">United Arab Emirates<\/span><br \/>GDP: 7890924"
				}
			},
			"EC": {
				"value": "14666055",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Ecuador<\/span><br \/>GDP: 14666055"
				}
			},
			"ER": {
				"value": "5415280",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Eritrea<\/span><br \/>GDP: 5415280"
				}
			},
			"ES": {
				"value": "46235000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Spain<\/span><br \/>GDP: 46235000"
				}
			},
			"EE": {
				"value": "1340000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Estonia<\/span><br \/>GDP: 1340000"
				}
			},
			"US": {
				"value": "311591917",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">United States<\/span><br \/>GDP: 16,244,600"
				}
			},
			"ET": {
				"value": "84734262",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Ethiopia<\/span><br \/>GDP: 84734262"
				}
			},
			"FJ": {
				"value": "868406",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Fiji<\/span><br \/>GDP: 868406"
				}
			},
			"FI": {
				"value": "5387000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Finland<\/span><br \/>GDP: 5387000"
				}
			},
			"FR": {
				"value": "65436552",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">France<\/span><br \/>GDP: 65436552"
				}
			},
			"GA": {
				"value": "1534262",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Gabon<\/span><br \/>GDP: 1534262"
				}
			},
			"GM": {
				"value": "1776103",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Gambia<\/span><br \/>GDP: 1776103"
				}
			},
			"GE": {
				"value": "4486000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Georgia<\/span><br \/>GDP: 4486000"
				}
			},
			"GH": {
				"value": "24965816",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Ghana<\/span><br \/>GDP: 24965816"
				}
			},
			"GR": {
				"value": "11304000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Greece<\/span><br \/>GDP: 11304000"
				}
			},
			"GD": {
				"value": "104890",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Grenada<\/span><br \/>GDP: 104890"
				}
			},
			"GT": {
				"value": "14757316",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Guatemala<\/span><br \/>GDP: 14757316"
				}
			},
			"GN": {
				"value": "10221808",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Guinea<\/span><br \/>GDP: 10221808"
				}
			},
			"GQ": {
				"value": "720213",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Equatorial Guinea<\/span><br \/>GDP: 720213"
				}
			},
			"GW": {
				"value": "1547061",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Guinea-bissau<\/span><br \/>GDP: 1547061"
				}
			},
			"GY": {
				"value": "756040",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Guyana<\/span><br \/>GDP: 756040"
				}
			},
			"HT": {
				"value": "10123787",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Haiti<\/span><br \/>GDP: 10123787"
				}
			},
			"HN": {
				"value": "7754687",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Honduras<\/span><br \/>GDP: 7754687"
				}
			},
			"HU": {
				"value": "9971000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Hungary<\/span><br \/>GDP: 9971000"
				}
			},
			"JM": {
				"value": "2709300",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Jamaica<\/span><br \/>GDP: 2709300"
				}
			},
			"JP": {
				"value": "127817277",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Japan<\/span><br \/>GDP: 127817277"
				}
			},
			"MH": {
				"value": "54816",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Marshall Islands<\/span><br \/>GDP: 54816"
				}
			},
			"PW": {
				"value": "20609",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Palau<\/span><br \/>GDP: 20609"
				}
			},
			"SB": {
				"value": "552267",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Solomon Islands<\/span><br \/>GDP: 552267"
				}
			},
			"IN": {
				"value": "1241491960",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">India<\/span><br \/>GDP: 1241491960"
				}
			},
			"ID": {
				"value": "242325638",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Indonesia<\/span><br \/>GDP: 242325638"
				}
			},
			"JO": {
				"value": "6181000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Jordan<\/span><br \/>GDP: 6181000"
				}
			},
			"IR": {
				"value": "74798599",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of<\/span><br \/>GDP: 74798599"
				}
			},
			"IQ": {
				"value": "32961959",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Iraq<\/span><br \/>GDP: 32961959"
				}
			},
			"IE": {
				"value": "4487000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Ireland<\/span><br \/>GDP: 4487000"
				}
			},
			"IS": {
				"value": "319000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Iceland<\/span><br \/>GDP: 319000"
				}
			},
			"IL": {
				"value": "7765700",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Israel<\/span><br \/>GDP: 7765700"
				}
			},
			"IT": {
				"value": "60770000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Italy<\/span><br \/>GDP: 60770000"
				}
			},
			"KZ": {
				"value": "16558459",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Kazakhstan<\/span><br \/>GDP: 16558459"
				}
			},
			"KE": {
				"value": "41609728",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Kenya<\/span><br \/>GDP: 41609728"
				}
			},
			"KG": {
				"value": "5507000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Kyrgyzstan<\/span><br \/>GDP: 5507000"
				}
			},
			"KI": {
				"value": "101093",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Kiribati<\/span><br \/>GDP: 101093"
				}
			},
			"KW": {
				"value": "2818042",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Kuwait<\/span><br \/>GDP: 2818042"
				}
			},
			"LA": {
				"value": "6288037",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic<\/span><br \/>GDP: 6288037"
				}
			},
			"LS": {
				"value": "2193843",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Lesotho<\/span><br \/>GDP: 2193843"
				}
			},
			"LV": {
				"value": "2220000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Latvia<\/span><br \/>GDP: 2220000"
				}
			},
			"LB": {
				"value": "4259405",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Lebanon<\/span><br \/>GDP: 4259405"
				}
			},
			"LR": {
				"value": "4128572",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Liberia<\/span><br \/>GDP: 4128572"
				}
			},
			"LY": {
				"value": "6422772",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Libya<\/span><br \/>GDP: 6422772"
				}
			},
			"LI": {
				"value": "36304",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Liechtenstein<\/span><br \/>GDP: 36304"
				}
			},
			"LT": {
				"value": "3203000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Lithuania<\/span><br \/>GDP: 3203000"
				}
			},
			"LU": {
				"value": "517000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Luxembourg<\/span><br \/>GDP: 517000"
				}
			},
			"MK": {
				"value": "2063893",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of<\/span><br \/>GDP: 2063893"
				}
			},
			"MG": {
				"value": "21315135",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Madagascar<\/span><br \/>GDP: 21315135"
				}
			},
			"MY": {
				"value": "28859154",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Malaysia<\/span><br \/>GDP: 28859154"
				}
			},
			"MW": {
				"value": "15380888",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Malawi<\/span><br \/>GDP: 15380888"
				}
			},
			"MV": {
				"value": "320081",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Maldives<\/span><br \/>GDP: 320081"
				}
			},
			"ML": {
				"value": "15839538",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Mali<\/span><br \/>GDP: 15839538"
				}
			},
			"MT": {
				"value": "419000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Malta<\/span><br \/>GDP: 419000"
				}
			},
			"MA": {
				"value": "32272974",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Morocco<\/span><br \/>GDP: 32272974"
				}
			},
			"MU": {
				"value": "1286051",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Mauritius<\/span><br \/>GDP: 1286051"
				}
			},
			"MR": {
				"value": "3541540",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Mauritania<\/span><br \/>GDP: 3541540"
				}
			},
			"MX": {
				"value": "114793341",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Mexico<\/span><br \/>GDP: 114793341"
				}
			},
			"FM": {
				"value": "111542",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of<\/span><br \/>GDP: 111542"
				}
			},
			"MD": {
				"value": "3559000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Moldova, Republic Of<\/span><br \/>GDP: 3559000"
				}
			},
			"MC": {
				"value": "35427",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Monaco<\/span><br \/>GDP: 35427"
				}
			},
			"MN": {
				"value": "2800114",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Mongolia<\/span><br \/>GDP: 2800114"
				}
			},
			"ME": {
				"value": "632261",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Montenegro<\/span><br \/>GDP: 632261"
				}
			},
			"MZ": {
				"value": "23929708",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Mozambique<\/span><br \/>GDP: 23929708"
				}
			},
			"NA": {
				"value": "2324004",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Namibia<\/span><br \/>GDP: 2324004"
				}
			},
			"NP": {
				"value": "30485798",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Nepal<\/span><br \/>GDP: 30485798"
				}
			},
			"NI": {
				"value": "5869859",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Nicaragua<\/span><br \/>GDP: 5869859"
				}
			},
			"NE": {
				"value": "16068994",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Niger<\/span><br \/>GDP: 16068994"
				}
			},
			"NG": {
				"value": "162470737",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Nigeria<\/span><br \/>GDP: 162470737"
				}
			},
			"NO": {
				"value": "4952000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Norway<\/span><br \/>GDP: 4952000"
				}
			},
			"NZ": {
				"value": "4405200",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">New Zealand<\/span><br \/>GDP: 4405200"
				}
			},
			"OM": {
				"value": "2846145",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Oman<\/span><br \/>GDP: 2846145"
				}
			},
			"UG": {
				"value": "34509205",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Uganda<\/span><br \/>GDP: 34509205"
				}
			},
			"UZ": {
				"value": "29341200",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Uzbekistan<\/span><br \/>GDP: 29341200"
				}
			},
			"PK": {
				"value": "176745364",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Pakistan<\/span><br \/>GDP: 176745364"
				}
			},
			"PS": {
				"value": "4019433",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Palestine, State Of<\/span><br \/>GDP: 4019433"
				}
			},
			"PA": {
				"value": "3571185",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Panama<\/span><br \/>GDP: 3571185"
				}
			},
			"PG": {
				"value": "7013829",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Papua New Guinea<\/span><br \/>GDP: 7013829"
				}
			},
			"PY": {
				"value": "6568290",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Paraguay<\/span><br \/>GDP: 6568290"
				}
			},
			"NL": {
				"value": "16696000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Netherlands<\/span><br \/>GDP: 16696000"
				}
			},
			"PE": {
				"value": "29399817",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Peru<\/span><br \/>GDP: 29399817"
				}
			},
			"PH": {
				"value": "94852030",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Philippines<\/span><br \/>GDP: 94852030"
				}
			},
			"PL": {
				"value": "38216000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Poland<\/span><br \/>GDP: 38216000"
				}
			},
			"PT": {
				"value": "10637000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Portugal<\/span><br \/>GDP: 10637000"
				}
			},
			"QA": {
				"value": "1870041",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Qatar<\/span><br \/>GDP: 1870041"
				}
			},
			"DO": {
				"value": "10056181",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Dominican Republic<\/span><br \/>GDP: 10056181"
				}
			},
			"RO": {
				"value": "21390000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Romania<\/span><br \/>GDP: 21390000"
				}
			},
			"GB": {
				"value": "62641000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">United Kingdom<\/span><br \/>GDP: 62641000"
				}
			},
			"RU": {
				"value": "141930000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Russian Federation<\/span><br \/>GDP: 141930000"
				}
			},
			"RW": {
				"value": "10942950",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Rwanda<\/span><br \/>GDP: 10942950"
				}
			},
			"KN": {
				"value": "53051",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis<\/span><br \/>GDP: 53051"
				}
			},
			"SM": {
				"value": "31735",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">San Marino<\/span><br \/>GDP: 31735"
				}
			},
			"VC": {
				"value": "109365",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines<\/span><br \/>GDP: 109365"
				}
			},
			"LC": {
				"value": "176000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Saint Lucia<\/span><br \/>GDP: 176000"
				}
			},
			"SV": {
				"value": "6227491",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">El Salvador<\/span><br \/>GDP: 6227491"
				}
			},
			"WS": {
				"value": "183874",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Samoa<\/span><br \/>GDP: 183874"
				}
			},
			"ST": {
				"value": "168526",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sao Tome And Principe<\/span><br \/>GDP: 168526"
				}
			},
			"SN": {
				"value": "12767556",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Senegal<\/span><br \/>GDP: 12767556"
				}
			},
			"RS": {
				"value": "7261000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Serbia<\/span><br \/>GDP: 7261000"
				}
			},
			"SC": {
				"value": "86000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Seychelles<\/span><br \/>GDP: 86000"
				}
			},
			"SL": {
				"value": "5997486",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sierra Leone<\/span><br \/>GDP: 5997486"
				}
			},
			"SG": {
				"value": "5183700",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Singapore<\/span><br \/>GDP: 5183700"
				}
			},
			"SK": {
				"value": "5440000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Slovakia<\/span><br \/>GDP: 5440000"
				}
			},
			"SI": {
				"value": "2052000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Slovenia<\/span><br \/>GDP: 2052000"
				}
			},
			"SO": {
				"value": "9556873",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Somalia<\/span><br \/>GDP: 9556873"
				}
			},
			"SD": {
				"value": "34318385",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sudan<\/span><br \/>GDP: 34318385"
				}
			},
			"SS": {
				"value": "10314021",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">South Sudan<\/span><br \/>GDP: 10314021"
				}
			},
			"LK": {
				"value": "20869000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sri Lanka<\/span><br \/>GDP: 20869000"
				}
			},
			"SE": {
				"value": "9453000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sweden<\/span><br \/>GDP: 9453000"
				}
			},
			"CH": {
				"value": "7907000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Switzerland<\/span><br \/>GDP: 7907000"
				}
			},
			"SR": {
				"value": "529419",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Suriname<\/span><br \/>GDP: 529419"
				}
			},
			"SZ": {
				"value": "1067773",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Swaziland<\/span><br \/>GDP: 1067773"
				}
			},
			"SY": {
				"value": "20820311",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Syrian Arab Republic<\/span><br \/>GDP: 20820311"
				}
			},
			"TJ": {
				"value": "6976958",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Tajikistan<\/span><br \/>GDP: 6976958"
				}
			},
			"TZ": {
				"value": "46218486",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of<\/span><br \/>GDP: 46218486"
				}
			},
			"TD": {
				"value": "11525496",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Chad<\/span><br \/>GDP: 11525496"
				}
			},
			"CZ": {
				"value": "10546000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Czech Republic<\/span><br \/>GDP: 10546000"
				}
			},
			"TH": {
				"value": "69518555",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Thailand<\/span><br \/>GDP: 69518555"
				}
			},
			"TL": {
				"value": "1175880",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Timor-leste<\/span><br \/>GDP: 1175880"
				}
			},
			"TG": {
				"value": "6154813",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Togo<\/span><br \/>GDP: 6154813"
				}
			},
			"TO": {
				"value": "104509",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Tonga<\/span><br \/>GDP: 104509"
				}
			},
			"TT": {
				"value": "1346350",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Trinidad And Tobago<\/span><br \/>GDP: 1346350"
				}
			},
			"TN": {
				"value": "10673800",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Tunisia<\/span><br \/>GDP: 10673800"
				}
			},
			"TM": {
				"value": "5105301",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Turkmenistan<\/span><br \/>GDP: 5105301"
				}
			},
			"TR": {
				"value": "73639596",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Turkey<\/span><br \/>GDP: 73639596"
				}
			},
			"TV": {
				"value": "9847",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Tuvalu<\/span><br \/>GDP: 9847"
				}
			},
			"VU": {
				"value": "245619",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Vanuatu<\/span><br \/>GDP: 245619"
				}
			},
			"VE": {
				"value": "29278000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of<\/span><br \/>GDP: 29278000"
				}
			},
			"VN": {
				"value": "87840000",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Viet Nam<\/span><br \/>GDP: 87840000"
				}
			},
			"UA": {
				"value": "45706100",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Ukraine<\/span><br \/>GDP: 45706100"
				}
			},
			"UY": {
				"value": "3368595",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Uruguay<\/span><br \/>GDP: 3368595"
				}
			},
			"YE": {
				"value": "24799880",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Yemen<\/span><br \/>GDP: 24799880"
				}
			},
			"ZM": {
				"value": "13474959",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Zambia<\/span><br \/>GDP: 13474959"
				}
			},
			"ZW": {
				"value": "12754378",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Zimbabwe<\/span><br \/>GDP: 12754378"
				}
			}
		}
	});
	
	
});
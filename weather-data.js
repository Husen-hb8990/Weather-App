var jsonString = '';

function test(lat,longi){

	var xhttp = new XMLHttpRequest();
	
	var url = "Hello.php?"+"lat="+lat+"&longi="+longi; 	
	
	console.log(url); 
	
	xhttp.open("GET",url , true);
	xhttp.send();
	
	xhttp.onreadystatechange = function() {
	
		if (this.readyState == 4 && this.status == 200) {
	
		var  data = this.responseText;
			
			console.log(data);
			
			var jsonString = JSON.parse(data);
			var x="";
			x = x+ "<b>Coordinate</b> <br><br>	Longitude: "+jsonString.coord.lon+"<br><br>Lattitude :"+jsonString.coord.lat+"<br><br>";
			for(var i=0;i<jsonString.weather.length;i++){
			x = x+ "<b>Weather</b> <br><br> Id: "+jsonString.weather[i].id+"<br><br>"+"Main	: "+jsonString.weather[i].main+"<br><br>Description    :"+jsonString.weather[i].description+"<br><br>";
			
			}
			x =x+ "Base : "+jsonString.base+"<br><br>"+"<b>Main</b> <br><br> Temp:"+jsonString.main.temp+"<br><br>"+"Pressure:" +jsonString.main.pressure+"<br><br>"+"Humidity: "+jsonString.main.humidity+"<br><br>"+"Temp_min:"+jsonString.main.temp_min+"<br><br>"+"Temp_max: "+jsonString.main.temp_max+"<br><br>"+"Visibility: "+jsonString.visibility+"<br><br>"+"<b>Wind</b> <br><br> Speed:"+jsonString.wind.speed+"<br><br>"+"Deg:"+jsonString.wind.deg+"<br><br>"+"<b>Clouds</b> <br><br> All: "+jsonString.clouds.all+"<br><br>"+"Dt: "+jsonString.dt+"<br><br>"+"<b>Sys</b> <br><br> Type: "+jsonString.sys.type+"<br><br>"+"Id: "+jsonString.sys.id+"<br><br>"+"Message: "+jsonString.sys.message+"<br><br>"+"Country: "+jsonString.sys.country+"<br><br>"+"Sunrise: "+jsonString.sys.sunrise+"<br><br>"+"Sunset: "+jsonString.sys.sunset+"<br><br>"+"Id: "+jsonString.id+"<br><br>"+"Name: "+jsonString.name+"<br><br>"+"Cod: "+jsonString.cod;
			document.getElementById("demo").innerHTML=x;
		}
  }
  
}	

function inIt(){

var xhttp = new XMLHttpRequest();
	
	xhttp.open("GET","CoorFetcher.php" , true);
	xhttp.send();
	
	xhttp.onreadystatechange = function() {
	
		if (this.readyState == 4 && this.status == 200) {
			
			var lat = 0; 
			var longi = 0; 
			
			
			var jsonObject = JSON.parse(this.responseText); 
			lat = jsonObject.latitude; 
			longi = jsonObject.longitude; 
			console.log(lat+" "+longi); 
			
			test(lat,longi);
			
		}
  }
}

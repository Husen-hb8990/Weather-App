var x = 'tmep'; 
function getLocation() {


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 

	console.log(x); 
	
	}

	getLocation();

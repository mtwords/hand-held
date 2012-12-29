function init() {
	// Wait for Cordova to connect with the device
	//
	document.addEventListener("deviceready",onDeviceReady,false);
	document.addEventListener("orientationchange", orientationChange, true);
	document.addEventListener("onSizeChanged", orientationChange, true);
}

/*
* Listeners
*/

// Cordova is ready to be used!
//
function onDeviceReady() {
	pictureSource=navigator.camera.PictureSourceType;
	destinationType=navigator.camera.DestinationType;
}

function orientationChange(event) {
	var orientation="portrait";
	if(window.orientation == -90 || window.orientation == 90) orientation = "landscape";
	alert('orientation: ' + orientation);
	//document.getElementById("status").innerHTML+=orientation+"<br>";
}

function onSizeChanged() {
	alert('Size changed');
}

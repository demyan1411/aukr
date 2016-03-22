function initialize() {
  var myLatlng = new google.maps.LatLng(54.991955, 82.845115);
  var myOptions = {
    zoom: 12,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map"), myOptions);

  var marker = new google.maps.Marker({
  	position: myLatlng,
  	map: map,
    icon: "../img/marker.png"
  });
}

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

// input[type="file"] - вывод названия картинки
var getNameForImg = (function() {

	var _fieldForName,
		change = function(id) {
			_fieldForName = $('#' + id).siblings('div').attr('id');
			$('#' + id).on('change', function() {
				_getName($(this).val());
			});
		},
		_getName = function(str) {
	    if (str.lastIndexOf('\\')){
	        var i = str.lastIndexOf('\\')+1;
	    }
	    else{
	        var i = str.lastIndexOf('/')+1;
	    }
	    var filename = str.slice(i);
	    var uploaded = $('#' + _fieldForName);
	    uploaded.text(filename);
		}
	return {
    init: function(id) {
        change(id);
    }
	}
}());

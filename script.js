function initMap() {
  var myLatLng = {lat: 50.070857499999995, lng: 19.925147};
  var myLatLng2 = {lat: 50.062143, lng: 50.062143};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Tu jestem!'
  });
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(50.064708, 19.916431),
    map: map,
    title: 'Park Jordana od ul. Reymonta'
  });
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(50.062143, 19.937548),
    map: map,
    title: 'Rynek Główny'
  });
  
}

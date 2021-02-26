let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 19.3453690674623, lng: -99.14807292069703 },
    zoom: 8,
  });
}
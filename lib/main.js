var map;
var libs = [];

function sizeWindow() {
  $('#map').height($(window).height() - 100);
  $('#map').width($(window).width() - 250);
}

function setupMap() {
  // initialize map
  map = new L.Map('map');
  const layer = new L.TileLayer('http://mt1.google.com/vt/lyrs=m@121,transit|vm:1&hl=en&opts=r&x={x}&y={y}&z={z}'
  , {
    attribution: 'Maps &copy; Google',
    // maxZoom: 12
  });
  const center = new L.LatLng(41.981370, -87.716560);
  map.setView(center, 12).addLayer(layer);

  // add markers
  addStopMarkers();
}

function addStopMarkers() {
  const libMarker = L.Icon.extend({
    options: {
      iconUrl: 'assets/images/book.png',
      iconSize: new L.Point(20, 20),
      iconAnchor: new L.Point(10, 10),
      popupAnchor: new L.Point(0, -3)
    }
  });

  const libIcon = new libMarker();

  //add libs
  $.each(littleLibs, (i, lib) => {
    let marker = new L.Marker(new L.LatLng(lib.lat, lib.lon), {
      icon: libIcon,
      zIndexOffset:-10
    });

    // add lib info popup
    let markerText = `<div class='marker'>
                        <div class='markerText'>
                          <div class='markerTitle'>
                            <b>${lib.name}</b><br>
                          </div>
                          ${lib.info}<br>
                        </div>
                        <img src="${lib.imageUrl}" id='libImage'/>
                      </div>`;
    marker.bindPopup(markerText);
    map.addLayer(marker);
  });
}

$(document).ready(() => {
  sizeWindow();
  window.onResize = sizeWindow;
  setupMap();
});

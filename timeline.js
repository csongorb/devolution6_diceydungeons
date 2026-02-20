var southWest = L.latLng(-84.75, -179.99),
    northEast = L.latLng(85.05, 559.69),
    bounds = L.latLngBounds(southWest, northEast);

var map = L.map('map', {
    //maxBounds: bounds,
    maxBoundsViscosity: 0.9
}).setView([-1.71, 185.06], 1);

L.tileLayer('Leaflet_Tiles/{z}/{x}/{y}.png', {
  maxZoom: 9,
  minZoom: 1,
  zoomSnap: 0.2,
  noWrap: true,
  errorTileUrl: 'Leaflet_Tiles/empty.png',
  bounds: bounds
  //attribution: '&copy; Devolution'
}).addTo(map);


// Copy the coordinates of a clicked point to the clipboard (for debugging purposes)
map.on('click', async (e) => {
  const x = e.latlng.lng;
  const y = e.latlng.lat;

  const text = `${y.toFixed(2)}, ${x.toFixed(2)}`;

  try {
    await navigator.clipboard.writeText(text);
    console.log('Copied:', text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    console.log('Copied (fallback):', text);
  }
});


// remove original Leaflet attribution (will be added to Credits)
map.attributionControl.setPrefix(false);
// add individual attribution
map.attributionControl.addAttribution(`<a onclick="sidebar.open('privacy')" href="#">Privacy Policy</a> &VerticalLine; <a onclick="sidebar.open('imprint')" href="#">Imprint</a>`);

// L.control.mousePosition().addTo(map);

//var sidebar = L.control.sidebar('sidebar').addTo(map);
var sidebar = L.control.sidebar({
    autopan: true,       // whether to maintain the centered map point when opening the sidebar
    closeButton: true,    // whether t add a close button to the panes
    container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
    position: 'left',     // left or right
}).addTo(map);

// auto-open sidebar at start
sidebar.open(('devolution'));
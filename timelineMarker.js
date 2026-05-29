/* ==========================================================================================
   MARKER ICON CONFIGURATION
   ========================================================================================== */
var customIcon = L.icon({
    iconUrl: 'images/ArrowPin.svg',
    iconSize: [16, 40], // Multiply the desired height with 0.378 to calculate the width (16 [round off] = 40 * 0.378)
    iconAnchor: [8, 40],
    popupAnchor: [0, -30]
});

/* ==========================================================================================
   MARKER LIST CONFIGURATION AREA
   ========================================================================================== 
   Add new markers by copying an existing block inside the list below.
   - coordinates: The [latitude, longitude] where the marker will be placed. Click on the map to get the coordinates of a point (It will automatically be copied to your clipboard in "Lat, Lng" format).
   - popupHTML:   The HTML content that shows up inside the popup when the marker is clicked.
========================================================================================== */
var markerList = [
    {
        coordinates: [-65430.51, 22114.74],
        popupHTML: `<div align="center">
                      <big><b>First Version</b></big><br />
                      <img src="images/demo.png" width="150" alt="demo"></img><br />
                      <br />
                      <a onclick="sidebar.open('versions')" href="#"><big><i class="fa-solid fa-download"></i> Download</big></a><br />
                      <small><a onclick="sidebar.open('versions')" href="#">Disclaimer & more</a></small>
                    </div>`
    },
    {
        coordinates: [-65270.43, 28533.04],
        popupHTML: `<div align="center">
                      <big><b>Second Version</b></big><br />
                      <img src="images/demo.png" width="150" alt="demo"></img><br />
                      <br />
                      <a onclick="sidebar.open('versions')" href="#"><big><i class="fa-solid fa-download"></i> Download</big></a><br />
                      <small><a onclick="sidebar.open('versions')" href="#">Disclaimer & more</a></small>
                    </div>`
    }
];

/* ==========================================================================================
   LOGIC AREA - DO NOT EDIT BELOW THIS LINE
   ========================================================================================== */

var markersArray = markerList.map(function(markerData) {
    return L.marker(markerData.coordinates, {icon: customIcon})
            .bindPopup(markerData.popupHTML);
});

var timelineMarkers = L.layerGroup(markersArray).addTo(map);

var overlayMaps = {
    "Show Playable Versions": timelineMarkers
};

var layerControl = L.control.layers(null, overlayMaps, {hideSingleBase: true, collapsed: false})
.addTo(map);
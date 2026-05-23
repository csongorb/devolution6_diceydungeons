/* ==========================================================================================
   GIF CONFIGURATION AREA
   ========================================================================================== 
   Add new GIFs by copying an existing block inside the list below.
   - url:     The file path to the GIF.
   - bounds:  The [southwest, northeast] coordinates. Click on the map to get the coordinates of a point (It will automatically be copied to your clipboard in "Lat, Lng" format).
   - minZoom: The minimum zoom level required for the GIF to appear.
========================================================================================== */

var gifList = [
    {
        url: 'Timeline-content/gifs/day7.gif',
        bounds: [[-41.58, -136.77], [-38.15, -128.81]],
        minZoom: 5
    },
    {
        url: 'Timeline-content/gifs/day7.gif',
        bounds: [[-39.67, -87.72], [-38.58, -85.20]],
        minZoom: 7
    },
    {
        url: 'Timeline-content/gifs/newcontent.gif',
        bounds: [[-12.82, -8.90], [-6.14, 3.16]],
        minZoom: 5
    },
    {
        url: 'Timeline-content/gifs/ratking.gif',
        bounds: [[-12.83, 4.36], [-6.16, 16.40]],
        minZoom: 5
    }
];


/* ==========================================================================================
   LOGIC AREA - DO NOT EDIT BELOW THIS LINE
   ========================================================================================== */

var activeGifs = gifList.map(function(gifData) {
    return {
        layer: L.imageOverlay(gifData.url, gifData.bounds),
        bounds: L.latLngBounds(gifData.bounds),
        minZoom: gifData.minZoom
    };
});

function updateGifsVisibility() {
    var currentZoom = map.getZoom();
    var mapBounds = map.getBounds();

    activeGifs.forEach(function(gif) {
        var isZoomLevelValid = currentZoom >= gif.minZoom;
        
        var isVisibleOnScreen = mapBounds.intersects(gif.bounds);

        if (isZoomLevelValid && isVisibleOnScreen) {
            if (!map.hasLayer(gif.layer)) {
                gif.layer.addTo(map);
            }
        } 
        else {
            if (map.hasLayer(gif.layer)) {
                gif.layer.remove();
            }
        }
    });
}

map.on('moveend', updateGifsVisibility);

updateGifsVisibility();

/* ==========================================================================================
   IMAGE CONFIGURATION AREA
   ========================================================================================== 
   Add new Images by copying an existing block inside the list below.
   - url:     The file path to the Image.
   - bounds:  The [southwest, northeast] coordinates. Click on the map to get the coordinates of a point (It will automatically be copied to your clipboard in "Lat, Lng" format).
========================================================================================== */

var imageList = [
    // Example:
    // {
    //     url: 'Timeline-content/images/example.png',
    //     bounds: [[-41.58, -136.77], [-38.15, -128.81]]
    // }
];


/* ==========================================================================================
   LOGIC AREA - DO NOT EDIT BELOW THIS LINE
   ========================================================================================== */

var activeImages = imageList.map(function(imageData) {
    return L.imageOverlay(imageData.url, imageData.bounds).addTo(map);
});

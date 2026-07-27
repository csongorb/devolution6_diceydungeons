/* ==========================================================================================
   IMAGE CONFIGURATION AREA
   ========================================================================================== 
   Add new Images by copying an existing block inside the list below.
   - url:     The file path to the Image.
   - bounds:  The [southwest, northeast] coordinates. Click on the map to get the coordinates of a point (It will automatically be copied to your clipboard in "Lat, Lng" format).
========================================================================================== */

var imageList = [
    {
        url: 'Timeline-content/images/7drl-fix1.jpg',
        bounds: [[-14.65, -104.94], [-5.73, -84.64]]
    },
    {
        url: 'Timeline-content/images/03-fix1.jpg',
        bounds: [[22.62, 68.40], [25.92, 74.30]]
    },
    {
        url: 'Timeline-content/images/03-fix2.jpg',
        bounds: [[22.59, 75.38], [25.96, 81.15]]
    },
    {
        url: 'Timeline-content/images/03-fix3.jpg',
        bounds: [[21.83, 77.84], [22.14, 79.82]]
    },
    {
        url: 'Timeline-content/images/03-fix3.jpg',
        bounds: [[23.83, 106.14], [23.98, 107.21]]
    },
    {
        url: 'Timeline-content/images/08-fix1.jpg',
        bounds: [[-15.71, 106.02], [-14.05, 114.54]]
    },
    {
        url: 'Timeline-content/images/016-fix1.jpg',
        bounds: [[-28.69, 312.67], [-26.01, 325.54]]
    },
    {
        url: 'Timeline-content/images/016-fix2.jpg',
        bounds: [[-40.92, 329.96], [-37.67, 339.14]]
    },
    {
        url: 'Timeline-content/images/182-fix1.jpg',
        bounds: [[-20.88, 508.26], [-16.58, 522.23]]
    },
    {
        url: 'Timeline-content/images/furtherreading-fix1.jpg',
        bounds: [[67.44, 405.18], [80.42, 539.27]]
    }
];


/* ==========================================================================================
   LOGIC AREA - DO NOT EDIT BELOW THIS LINE
   ========================================================================================== */

var activeImages = imageList.map(function(imageData) {
    return L.imageOverlay(imageData.url, imageData.bounds).addTo(map);
});

/* ==========================================================================================
   LINE CONFIGURATION AREA
   ========================================================================================== 
   Add new lines by copying an existing block inside the list below.
   - coordinates: An array of [latitude, longitude] points that make up the line. Click on the map to get the coordinates of a point (It will automatically be copied to your clipboard in "Lat, Lng" format).
   - options:     Styling options for the line (e.g., color, weight, dashArray). 
========================================================================================== */

var lineList = [
    {
        coordinates: [
            [-46662.69, 28131.70],
            [-49848.88, 28131.70]
        ],
        options: {
            color: 'black',
            weight: 3,
            interactive: false,
            dashArray: '8, 5',
            lineCap: 'butt'
        }
    },
    {
        coordinates: [
            [-45600.70, 31720.92],
            [-37205.10, 31720.92],
            [-37162.87, 39502.10],
            [-34905.17, 39529.96]
        ],
        options: {
            color: 'black',
            weight: 3,
            interactive: false,
            lineCap: 'butt'
        }
    }
];

/* ==========================================================================================
   LOGIC AREA - DO NOT EDIT BELOW THIS LINE
   ========================================================================================== */

// Loop through the lineList and create polylines on the map
var activeLines = lineList.map(function(lineData) {
    return L.polyline(lineData.coordinates, lineData.options).addTo(map);
});


//Youtube: Dicey Dungeons Teaser 
var southWestCord = L.latLng(16.58, 131.70);
var northEatCord = L.latLng(33.87, 157.68);
var bounds = [southWestCord, northEatCord];
var rectangle = L.rectangle(bounds, {
    color: "#66000000"
}).addTo(map).on('click', function(e) {
    L.DomEvent.stopPropagation(e);
    openOverlayPane('youtube-ddteaser');
});

//Youtube: The Evolution of Dicey Dungeons 
var southWestCord = L.latLng(36.54, -121.04);
var northEatCord = L.latLng(40.36, -114.51);
var bounds = [southWestCord, northEatCord];
var rectangle = L.rectangle(bounds, {
    color: "#66000000"
}).addTo(map).on('click', function(e) {
    L.DomEvent.stopPropagation(e);
    openOverlayPane('youtube-evolution');
});

//Youtube: Dicey Dungeons Steam Launch
var southWestCord = L.latLng(15.94, 365.89);
var northEatCord = L.latLng(33.64, 392.34);
var bounds = [southWestCord, northEatCord];
var rectangle = L.rectangle(bounds, {
    color: "#66000000"
}).addTo(map).on('click', function(e) {
    L.DomEvent.stopPropagation(e);
    openOverlayPane('youtube-steam-launch');
});
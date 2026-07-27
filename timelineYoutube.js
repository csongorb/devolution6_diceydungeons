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

//Youtube: Beta Music
var southWestCord = L.latLng(-28.73, 221.62);
var northEatCord = L.latLng(-23.64, 229.15);
var bounds = [southWestCord, northEatCord];
var rectangle = L.rectangle(bounds, {
    color: "#66000000"
}).addTo(map).on('click', function(e) {
    L.DomEvent.stopPropagation(e);
    openOverlayPane('youtube-beta-music');
});

//Youtube: New Music
var southWestCord = L.latLng(-28.75, 329.15);
var northEatCord = L.latLng(-23.16, 337.50);
var bounds = [southWestCord, northEatCord];
var rectangle = L.rectangle(bounds, {
    color: "#66000000"
}).addTo(map).on('click', function(e) {
    L.DomEvent.stopPropagation(e);
    openOverlayPane('youtube-new-music');
});

//Youtube: Megaquest
var southWestCord = L.latLng(-14.90, 507.70);
var northEatCord = L.latLng(-4.25, 522.29);
var bounds = [southWestCord, northEatCord];
var rectangle = L.rectangle(bounds, {
    color: "#66000000"
}).addTo(map).on('click', function(e) {
    L.DomEvent.stopPropagation(e);
    openOverlayPane('youtube-megaquest');
});
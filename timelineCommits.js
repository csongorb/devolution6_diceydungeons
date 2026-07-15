var southWestCord = L.latLng(32.86, -112.35);
var northEatCord = L.latLng(44.33, -106.92);
var linkBounds = [southWestCord, northEatCord];
var rectangle = L.rectangle(linkBounds, {
    color: "#ff6600",           // border color
    weight: 2,
    fillColor: "#ff6600",
    fillOpacity: 0,
    opacity: 0,
    interactive: true,
    className: 'commit-rectangle'
}).addTo(map).on('click', function(e) {
    L.DomEvent.stopPropagation(e);
    openOverlayPane('commit');
});
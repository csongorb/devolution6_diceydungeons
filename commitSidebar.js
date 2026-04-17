// Add a clickable area on the map where the commit is located.
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


var tabId;

function openOverlayPane(id) {
    tabId = id;
    if (typeof sidebar !== 'undefined') {
        try {
            sidebar.open(id);
        } catch (error) {
            console.error('Error opening overlay pane:', error.message);
            var overlayTab = document.querySelector('a[href="#' + id + '"]');
            if (overlayTab) {
                overlayTab.parentElement.click();
            }
        }
    } else {
        console.error('sidebar object not defined');
    }
}

function closeOverlayPane() {
    if (typeof sidebar !== 'undefined') {
        sidebar.close();
        var sidebarEl = document.getElementById('sidebar');
        if (sidebarEl) {
            sidebarEl.classList.remove('overlay-active');
        }
    }
}

if (typeof sidebar !== 'undefined' && sidebar.on) {
    sidebar.on('content', function(e) {
        var sidebarEl = document.getElementById('sidebar');
        if (!sidebarEl) return;
        
        if (e.id === tabId) {
            sidebarEl.classList.add('overlay-active');
        } else {
            sidebarEl.classList.remove('overlay-active');
        }
    });
    
    sidebar.on('closing', function() {
        var sidebarEl = document.getElementById('sidebar');
        if (sidebarEl) {
            sidebarEl.classList.remove('overlay-active');
        }
    });
}

function navigateToMapPosition(lat, lng, zoom) {
    if (typeof map !== 'undefined') {
        map.setView([lat, lng], zoom, {
            animate: true,
            duration: 1.0
        });

        if (window.innerWidth < 768) {
            closeOverlayPane();
        }
    } else {
        console.error('Map object not found');
    }
}

window.addEventListener('message', function(event) {
    if (event.origin !== 'https://devolution.online') {
        return;
    }
    
    if (event.data && event.data.type === 'navigateToPosition') {
        const { lat, lng, zoom } = event.data;
        
        if (lat !== undefined && lng !== undefined && zoom !== undefined) {
            navigateToMapPosition(lat, lng, zoom);
        } else {
            console.error('Invalid navigation data:', event.data);
        }
    }
    
    if (event.data && event.data.type === 'closeSidebar') {
        closeOverlayPane();
    }
});

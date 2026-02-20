// Add a clickable area on the map where the commit is located.
var southWestCord = L.latLng(32.86, -112.35);
var northEatCord = L.latLng(44.33, -106.92);
var linkBounds = [southWestCord, northEatCord];
var rectangle = L.rectangle(linkBounds, {
    color: "#ff6600",           // Orange border
    weight: 2,                   // Visible border width
    fillColor: "#ff6600",        // Fill color
    fillOpacity: 0,            // Semi-transparent fill
    opacity: 0,                // Semi-transparent border
    interactive: true,
    className: 'commit-rectangle'
}).addTo(map).on('click', function(e) {
    // Prevent map click handlers from immediately closing the sidebar again.
    L.DomEvent.stopPropagation(e);
    openCommitPane();
});



function openCommitPane() {
    if (typeof sidebar !== 'undefined') {
        try {
            sidebar.open('commit');
        } catch (error) {
            console.error('Error opening commit pane:', error.message);
            // Fallback: try to open by triggering the tab directly
            var commitTab = document.querySelector('a[href="#commit"]');
            if (commitTab) {
                commitTab.parentElement.click();
            }
        }
    } else {
        console.error('sidebar object not defined');
    }
}

function closeCommitPane() {
    if (typeof sidebar !== 'undefined') {
        sidebar.close();
        // Remove the commit-active class to show sidebar tabs again
        var sidebarEl = document.getElementById('sidebar');
        if (sidebarEl) {
            sidebarEl.classList.remove('commit-active');
        }
    }
}

// Listen to sidebar pane changes - handle when visiting different panes
if (typeof sidebar !== 'undefined' && sidebar.on) {
    sidebar.on('content', function(e) {
        var sidebarEl = document.getElementById('sidebar');
        if (!sidebarEl) return;
        
        if (e.id === 'commit') {
            // Add class to hide sidebar tabs when commit pane is active
            sidebarEl.classList.add('commit-active');
        } else {
            // Remove class to show sidebar tabs for other panes
            sidebarEl.classList.remove('commit-active');
        }
    });
    
    // Handle when sidebar is closed by clicking the close button
    sidebar.on('closing', function() {
        var sidebarEl = document.getElementById('sidebar');
        if (sidebarEl) {
            sidebarEl.classList.remove('commit-active');
        }
    });
}

// Navigate map to specific coordinates and zoom level
function navigateToMapPosition(lat, lng, zoom) {
    if (typeof map !== 'undefined') {
        map.setView([lat, lng], zoom, {
            animate: true,
            duration: 1.0
        });

        // Auto-close sidebar on mobile after navigation
        if (window.innerWidth < 768) {
            closeCommitPane();
        }
    } else {
        console.error('Map object not found');
    }
}

// Listen for messages from the commit iframe
window.addEventListener('message', function(event) {
    // Security: Verify the origin of the message
    // Only accept messages from your domain
    if (event.origin !== 'https://devolution.online') {
        return;
    }
    
    // Handle navigation messages
    if (event.data && event.data.type === 'navigateToPosition') {
        const { lat, lng, zoom } = event.data;
        
        if (lat !== undefined && lng !== undefined && zoom !== undefined) {
            navigateToMapPosition(lat, lng, zoom);
        } else {
            console.error('Invalid navigation data:', event.data);
        }
    }
    
    if (event.data && event.data.type === 'closeSidebar') {
        closeCommitPane();
    }
});

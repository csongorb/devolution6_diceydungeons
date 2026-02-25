document.addEventListener('DOMContentLoaded', function () {
    var tabId;
    // Function to open tab with expanded width and scroll to specific video
    window.openTabWithVideo = function (videoElementId, sidebarTabID) {
        // Ensure sidebar exists
        if (typeof sidebar === 'undefined') {
            console.error("Sidebar not found!");
            return;
        }

        // Add expanded width class to sidebar container
        var sidebarContainer = document.getElementById('sidebar');
        if (sidebarContainer) {
            sidebarContainer.classList.add('expanded-width');
        }

        tabId = sidebarTabID;

        // Open the sidebar tab
        sidebar.open(sidebarTabID);

        // Wait a moment for the sidebar to be fully visible, then scroll to the video
        setTimeout(() => {
            const videoPane = document.querySelector(`.leaflet-sidebar-pane#${sidebarTabID} iframe`);
            if (videoPane && videoElementId) {
                try {
                    const iframeDoc = videoPane.contentDocument || videoPane.contentWindow.document;
                    if (iframeDoc) {
                        const element = iframeDoc.getElementById(videoElementId);
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    }
                } catch (e) {
                    if (videoPane.contentWindow) {
                        videoPane.contentWindow.postMessage({
                            action: 'scrollToElement',
                            elementId: videoElementId
                        }, '*');
                    }
                }
            }
        }, 600);
    };

    // Attach event listeners if sidebar is defined
    if (typeof sidebar !== 'undefined') {
        // Remove expanded width when sidebar is closed
        sidebar.on('closing', function () {
            var sidebarContainer = document.getElementById('sidebar');
            if (sidebarContainer) {
                sidebarContainer.classList.remove('expanded-width');
            }
        });

        // Remove expanded width when switching to another tab
        sidebar.on('content', function (e) {
            if (e.id !== tabId) {
                var sidebarContainer = document.getElementById('sidebar');
                if (sidebarContainer) {
                    sidebarContainer.classList.remove('expanded-width');
                }
            }
        });
    } else {
        console.warn("Sidebar global variable not found immediately.");
    }
});
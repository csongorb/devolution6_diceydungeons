function pauseVideo() {
    try{
        const sidebarIframes = document.querySelectorAll('.sidebar-content');

        sidebarIframes.forEach(function (iframe) {
            const innerDoc = iframe.contentDocument || iframe.contentWindow.document;

            if (!innerDoc) {
                return;
            }

            const ytIframe = innerDoc.querySelector('iframe[src*="youtube"]');

            if (ytIframe && ytIframe.contentWindow) {
                ytIframe.contentWindow.postMessage(
                    JSON.stringify({
                        event: "command",
                        func: "pauseVideo",
                        args: []
                    }),
                    "*"
                );
            }
        });
    }
    catch (error) {
        console.warn("Error pausing video:", error);
    }
}

sidebar.on('closing', function() {
    pauseVideo();
});
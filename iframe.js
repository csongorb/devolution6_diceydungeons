const iframe = document.getElementById("ytPlayer");

function pauseVideo() {
    const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        
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
}

sidebar.on('closing', function() {
    pauseVideo();
});
document.body.onclick = function() {
    document.querySelector('h1#count').innerText = parseInt(document.querySelector('h1#count').innerText) + 1;

    // fullscreen
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            alert(`Error attempting to enable fullscreen: ${err.message}`);
        });
    }
}
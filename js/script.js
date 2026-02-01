const audio = new Audio('bell-sfx.mp3');
audio.volume = 0.02;
document.body.onclick = function() {
    document.querySelector('h1#count').innerText = parseInt(document.querySelector('h1#count').innerText) + 1;

    audio.currentTime = 0;
    audio.play();

    if ('vibrate' in navigator) {
      navigator.vibrate(1);
    }

    // fullscreen
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        alert(`Error attempting to enable fullscreen: ${err.message}`);
      });
    }
}

navigator.serviceWorker.onmessage = (event) => {
  if (event.data.type === 'CACHE_ERROR') {
    alert('Cache error: ' + event.data.error)
  }
}
function sendHearthBeat() {
    window.top.postMessage('HA alive', '*');
}

setInterval(sendHearthBeat, 1000);

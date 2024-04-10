/// SLEEP FUNCTION /////////////
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const muzikSound=new Audio('../assets/sounds/starwars.mp3');
muzikSound.preload = 'auto';
muzikSound.load();

async function muzik() {
    await sleep(3500);
    const sound=muzikSound.cloneNode();
    sound.play();
}
muzik();
/// SLEEP FUNCTION /////////////
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/// START //////////////

// async function start() {
//     await sleep(2000);
//     document.querySelector('#intro').classList.add('fadeOut');
//     await sleep(1000);
// }

// start();
// console.log('JS Working');
window.onload = function () {
    // console.log('document loaded');
    const pauseBtn = document.getElementById("pause-btn");
    const playBtn = document.getElementById("play-btn");
    const bgm = document.getElementById("bgm");

    bgm.volume = 0.01;

    function delay() {
        bgm.autoplay = true;
        bgm.loop = true;
        bgm.load();
    }

    setTimeout(delay, 1000);

    pauseBtn.addEventListener("click", function () {
        // console.log("clicked\n");
        // pauseBtn.innerHTML = "Hello";
        playBtn.style.display = "block";
        pauseBtn.style.display = "none";
        bgm.pause();
    })

    playBtn.addEventListener("click", function () {
        // console.log("clicked\n");
        // playBtn.innerHTML = "Hello";
        pauseBtn.style.zIndex = 2;
        pauseBtn.style.display = "block";
        playBtn.style.display = "none";
        bgm.play();
    })

    // mouse tracker

    const mouseTracker = document.getElementById('mouseTracker');

    document.addEventListener('mousemove', (event) => {
        // console.log(event);
        const mouseX = event.x;
        const mouseY = event.y;

        if (mouseX < 300) {
            mouseTracker.style.backgroundColor = "#FCF7FF";
        } else {
            mouseTracker.style.backgroundColor = "#3B1F2B";
        }

        mouseTracker.style.top = `${mouseY - 4}px`;
        mouseTracker.style.left = `${mouseX - 4}px`;

        // console.log(`Mouse position: (${mouseX}, ${mouseY})`);
    });


}


// document.getElementById("myAudio").volume = 0.2;
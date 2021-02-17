const video = document.querySelector(".screen");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.querySelector(".progress");
const timestamp = document.getElementById("timestamp");

// Play & pause video
video.addEventListener("click", (e) => {
    if (video.paused) {
        // play() : 비디오를 재생하는 속성
        video.play();
    } else {
        // pause() : 비디오를 일시 정지하는 속성
        video.pause();
    }
});

// Play & pause video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// 비디오의 재생 위치가 변경 될 때 timeupdate 이벤트가 발생
video.addEventListener("timeupdate", (e) => {
    console.log(e.target);
    // 재생 슬라이드 bar (currentTime 속성은, 현재 재생중인 시간을 뜻한다)
    progress.value = (video.currentTime / video.duration) * 100;

    // 재생 시간 표시
    // Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = "0" + String(mins); // 10 미만은 1자리이기 때문에 앞에 0을 붙여준다
    }

    // Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = "0" + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
});

// Set video time to progress
progress.addEventListener("change", (e) => {
    video.currentTime = (+progress.value * video.duration) / 100;
});

// Stop video
stop.addEventListener("click", (e) => {
    video.currentTime = 0;
    video.pause();
});

// update play/pause icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// Event listeners
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);

play.addEventListener("click", toggleVideoStatus);

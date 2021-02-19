# video-player 만들기 
## html, javascript
---

1️⃣ `<video>` 태그로 비디오 기능 구현하기

<**video** **src**="(영상 url)" **poster**="(영상 시작 전에 보여지는 img url)"></video>
```js
  <video src="gone.mp4" class="screen" poster="poster.png"></video>
```

2️⃣ `<input tyle="range" />`를 활용하여 재생 슬라이드바 만들기

```js
  <input type="range" class="progress" min="0" max="100" step="0.1" value="0" />
```

3️⃣ 비디오 play & stop 기능

`.play()` , `.pause()` 속성을 통해 재생과 정지 기능 토글 구현하기

```js
video.addEventListener("click", (e) => {
    if (video.paused) {
        // play() : 비디오를 재생하는 속성
        video.play();
    } else {
        // pause() : 비디오를 일시 정지하는 속성
        video.pause();
    }
    
    
 function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

play.addEventListener("click", toggleVideoStatus);
```

4️⃣ 재생 버튼을 한 번 더 누르면 일시정지 버튼으로 toggle되는 기능

일시정지 아이콘 ➡ `<i class="fa fa-pause fa-2x"></i>`

```js
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
```

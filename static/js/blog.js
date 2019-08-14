//音乐播放
var oMusic = document.getElementById("music");
var oPlay = document.getElementById("play");
var mark = true;
var before = document.getElementById("before");
oPlay.onclick = function () {
  if (mark) {
    oMusic.play();
    this.className = "play rotate";
    before.style.display = "none";
  } else {
    oMusic.pause();
    this.className = "play";
    before.style.display = "block";
  }
  mark = !mark;
};
//监听音乐播放完毕并继续播放
oMusic.addEventListener("ended", function () {
  oPlay.className = "play rotate";
  before.style.display = "none";
  mark = true;
  oMusic.play();
});
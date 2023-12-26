let selectedBoat = null;

// ボートの位置を初期化
function resetPositions() {
  const boats = document.getElementsByClassName('boat');
  Array.from(boats).forEach(elms => elms.style = null );
}
// ボートを移動する関数
function moveBoat(event) {
  if (!selectedBoat) return;

  const raceTrackRect = document
    .getElementById("raceTrack")
    .getBoundingClientRect();
  const posX = event.type.startsWith("touch")
    ? event.touches[0].clientX
    : event.clientX;
  const posY = event.type.startsWith("touch")
    ? event.touches[0].clientY
    : event.clientY;

  const left = posX - raceTrackRect.left - selectedBoat.offsetWidth / 2;
  const top = posY - raceTrackRect.top - selectedBoat.offsetHeight / 2;

  selectedBoat.style.left = left + "px";
  selectedBoat.style.top = top + "px";
}

// ドラッグまたはタッチ開始時の処理
function handleDragStart(event) {
  selectedBoat = event.target;
  selectedBoat.style.opacity = "0.4";

  if (event.type === "touchstart") {
    event.preventDefault();
  }
}

// ドラッグまたはタッチ終了時の処理
function handleDragEnd() {
  if (!selectedBoat) return;
  selectedBoat.style.opacity = "";
  selectedBoat = null;
}

// マウスイベントのリスナー
document.querySelectorAll(".boat").forEach((boat) => {
  boat.addEventListener("mousedown", handleDragStart);
  boat.addEventListener("mouseup", handleDragEnd);
});

// タッチイベントのリスナー
document.querySelectorAll(".boat").forEach((boat) => {
  boat.addEventListener("touchstart", handleDragStart);
  boat.addEventListener("touchend", handleDragEnd);
});

// ドラッグとタッチムーブのイベントリスナー
document.getElementById("raceTrack").addEventListener("mousemove", moveBoat);
document.getElementById("raceTrack").addEventListener("touchmove", moveBoat);

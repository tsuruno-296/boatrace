let selectedBoat = null;

// 表示切り替え
function toggleDisplayToolContent() {
  const toolContent = document.getElementsByClassName("toolContent")[0];
  if (!toolContent) return;
  toolContent.style.display = toolContent.style.display === "none" ? "block" : "none";
}


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

// ボートの位置設定
const widthSpSize = 520; // spの横幅定義(メディアクエリと同じ値)
function setBoatPositions(positions = {}) {
  const isSpSize = widthSpSize > window.screen.width;

  // 各ボートに位置を設定
  Object.keys(positions).forEach((boatId) => {
    const boat = document.getElementById(boatId);
    const position = positions[boatId];

    // spはpcの半分で配置
    const left = isSpSize ? (position.left / 2) : position.left;
    const top = isSpSize ? (position.top / 2) : position.top;

    boat.style.left = Math.trunc(left) + "px";
    boat.style.top = Math.trunc(top) + "px";
  });
}

// 展開配置用
const course1 = {
  1: () => {
    const positions = {
      boat1: { left: 200, top: 95 },
      boat2: { left: 227, top: 135 },
      boat3: { left: 290, top: 65 },
      boat4: { left: 320, top: 161 },
      boat5: { left: 354, top: 111 },
      boat6: { left: 352, top: 205 },
    };
    setBoatPositions(positions);
  }
}
const course2 = {
  1: () => {
    const positions = {
      boat1: { left: 235, top: 95 },
      boat2: { left: 200, top: 135 },
      boat3: { left: 290, top: 65 },
      boat4: { left: 320, top: 161 },
      boat5: { left: 354, top: 111 },
      boat6: { left: 352, top: 205 },
    };
    setBoatPositions(positions);
  },
  2: () => {
    const positions = {
      boat1: { left: 200, top: 114 },
      boat2: { left: 174, top: 61 },
      boat3: { left: 294, top: 105 },
      boat4: { left: 329, top: 136 },
      boat5: { left: 339, top: 80 },
      boat6: { left: 349, top: 179 },
    };
    setBoatPositions(positions);
  }
}
const course3 = {
  1: () => {
    const positions = {
      boat1: { left: 235, top: 65 },
      boat2: { left: 272, top: 38 },
      boat3: { left: 200, top: 97 },
      boat4: { left: 283, top: 177 },
      boat5: { left: 257, top: 141 },
      boat6: { left: 319, top: 110 },
    };
    setBoatPositions(positions);
  },
  2: () => {
    const positions = {
      boat1: { left: 228, top: 84 },
      boat2: { left: 238, top: 121 },
      boat3: { left: 206, top: 40 },
      boat4: { left: 287, top: 154 },
      boat5: { left: 353, top: 101 },
      boat6: { left: 351, top: 198 },
    };
    setBoatPositions(positions);
  },
  3: () => {
    const positions = {
      boat1: { left: 248, top: 56.5 },
      boat2: { left: 241, top: 152.5 },
      boat3: { left: 215, top: 98.5 },
      boat4: { left: 341, top: 149.5 },
      boat5: { left: 343, top: 104.5 },
      boat6: { left: 351, top: 198.5 },
    };
    setBoatPositions(positions);
  }
}
const course4 = {
  1: () => {
    const positions = {
      boat1: { left: 235, top: 65 },
      boat2: { left: 275, top: 35 },
      boat3: { left: 298, top: 105 },
      boat4: { left: 180, top: 131 },
      boat5: { left: 351, top: 148 },
      boat6: { left: 263, top: 178 },
    };
    setBoatPositions(positions);
  },
  2: () => {
    const positions = {
      boat1: { left: 241, top: 65 },
      boat2: { left: 234, top: 157 },
      boat3: { left: 217, top: 109 },
      boat4: { left: 194, top: 26 },
      boat5: { left: 308, top: 117 },
      boat6: { left: 308, top: 193 },
    };
    setBoatPositions(positions);
  },
  3: () => {
    const positions = {
      boat1: { left: 255, top: 43 },
      boat2: { left: 202, top: 144 },
      boat3: { left: 295, top: 80 },
      boat4: { left: 183, top: 97 },
      boat5: { left: 315, top: 108 },
      boat6: { left: 312, top: 175 },
    };
    setBoatPositions(positions);
  }
}
const course5 = {
  1: () => {
    const positions = {
      boat1: { left: 273, top: 46 },
      boat2: { left: 340, top: 27 },
      boat3: { left: 312, top: 79 },
      boat4: { left: 220, top: 87 },
      boat5: { left: 209, top: 123 },
      boat6: { left: 253, top: 170 },
    };
    setBoatPositions(positions);
  },
  2: () => {
    const positions = {
      boat1: { left: 201, top: 127 },
      boat2: { left: 280, top: 187 },
      boat3: { left: 322, top: 147 },
      boat4: { left: 345, top: 114 },
      boat5: { left: 215, top: 66 },
      boat6: { left: 387, top: 76 },
    };
    setBoatPositions(positions);
  },
  3: () => {
    const positions = {
      boat1: { left: 235, top: 65 },
      boat2: { left: 272, top: 38 },
      boat3: { left: 321, top: 79 },
      boat4: { left: 245, top: 140 },
      boat5: { left: 211, top: 105 },
      boat6: { left: 284, top: 173 },
    };
    setBoatPositions(positions);
  }
}
const course6 = {
  1: () => {
    const positions = {
      boat1: { left: 265, top: 62 },
      boat2: { left: 295, top: 25 },
      boat3: { left: 269, top: 98 },
      boat4: { left: 340, top: 50 },
      boat5: { left: 271, top: 127 },
      boat6: { left: 257, top: 163 },
    };
    setBoatPositions(positions);
  },
  2: () => {
    const positions = {
      boat1: { left: 246, top: 76 },
      boat2: { left: 233, top: 149 },
      boat3: { left: 332, top: 215 },
      boat4: { left: 249, top: 108 },
      boat5: { left: 305, top: 181 },
      boat6: { left: 216, top: 22 },
    };
    setBoatPositions(positions);
  },
  3: () => {
    const positions = {
      boat1: { left: 254, top: 49 },
      boat2: { left: 235, top: 169 },
      boat3: { left: 245, top: 90 },
      boat4: { left: 336, top: 45 },
      boat5: { left: 294, top: 212 },
      boat6: { left: 196, top: 129 },
    };
    setBoatPositions(positions);
  }
}

const music = document.getElementById("bgMusic");
const btn= document.getElementById("musicBtn");

const music1= document.getElementById("bgMusic1");
const btn1= document.getElementById("musicBtn1");

const music2= document.getElementById("bgMusic2");
const btn2= document.getElementById("musicBtn2");


const music3= document.getElementById("bgMusic3");
const btn3= document.getElementById("musicBtn3");


const music4= document.getElementById("bgMusic4");
const btn4= document.getElementById("musicBtn4");




function toggleMusic() {
  if (music.paused) {
    music.play();
    btn.textContent = "Pause Music";
  } else {
    music.pause();
    btn.textContent = "Play Music";
  }
}


function toggleMusic1() {
  if (music1.paused) {
    music1.play();
    btn1.textContent = "Pause Music";
  } else {
    music1.pause();
    btn1.textContent = "Play Music";
  }
}


function toggleMusic2() {
  if (music2.paused) {
    music2.play();
    btn2.textContent = "Pause Music";
  } else {
    music2.pause();
    btn2.textContent = "Play Music";
  }
}


function toggleMusic3() {
  if (music3.paused) {
    music3.play();
    btn3.textContent = "Pause Music";
  } else {
    music3.pause();
    btn3.textContent = "Play Music";
  }
}

function toggleMusic4() {
  if (music4.paused) {
    music4.play();
    btn4.textContent = "Pause Music";
  } else {
    music4.pause();
    btn4.textContent = "Play Music";
  }
}



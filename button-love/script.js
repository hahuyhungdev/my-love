// Get the music elements
const loveMusic = document.getElementById("loveMusic");
const bb8Music = document.getElementById("bb8Music");

// Play music when the 'love' switch is clicked
document.querySelector(".love-heart").addEventListener("click", function () {
  if (loveMusic.paused) {
    loveMusic.play();
  } else {
    loveMusic.pause();
  }
});

// Play music when the 'bb8' toggle is clicked
document
  .querySelector(".bb8-toggle__checkbox")
  .addEventListener("click", function () {
    if (bb8Music.paused) {
      bb8Music.play();
    } else {
      bb8Music.pause();
    }
  });

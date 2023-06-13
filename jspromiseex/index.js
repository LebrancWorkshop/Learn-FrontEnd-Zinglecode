let lyricBox = document.querySelector("#lyric-box");

function genLyric(lyric) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let lyricElement = document.createElement("h3");
      lyricElement.innerHTML = lyric;
      lyricBox.appendChild(lyricElement);
      resolve();
    }, 2000);
  })
}

genLyric("This is not the man who talk")
  .then(() => {
    return genLyric("This is not the walk I am on the path");
  })
  .then(() => {
    return genLyric("Fast Track ~");
  })
  .then(() => {
    genLyric("Fast Track ~~");
  })

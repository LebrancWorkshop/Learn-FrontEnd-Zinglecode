function inputPromise(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const input = parseInt(prompt(`Enter a ${title}`));
      if(isNaN(input)) {
        reject(new Error("Dude! It is not a number."));
        return;
      }
      resolve(input);
    }, 1000);
  })
}

let width = 0;
let height = 0;
let depth = 0;

inputPromise("Width")
  .then((result) => {
    width = result;
    return inputPromise("Height");
  })
  .then((result) => {
    height = result;
    return inputPromise("Depth");
  })
  .then((result) => {
    depth = result;
    let volume = width * height * depth;
    return volume;
  })
  .then((result) => {
    alert(`Volume: ${result}`); 
  })

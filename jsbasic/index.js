let scores = [12, 30, 56, 77, 21];
let countPassStudent1 = 0;
let countPassStudent2 = 0;


// Method 1: Traditional For Loop.
for(let i = 0; i < scores.length; i++) {
  if(scores[i] >= 30) {
    countPassStudent1++;
  }
}

// Method 2: ForEach Loop.
scores.forEach((score) => {
  if(score >= 30) {
    countPassStudent2++;
  }
});

console.log(`Method 1: ${countPassStudent1}`);
console.log(`Method 2: ${countPassStudent2}`);

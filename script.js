var playa = prompt("Welcome to GC mini golf! What is your name?");
var howMany = prompt(
  `Hi ${playa}, would you like to play 3 or 6 holes of golf?`
);

let par = howMany * 3;

let total = 0;

for (let i = 0; i < howMany; i++) {
  let score = prompt(`How many putts for hole ${i + 1}`);
  console.log(`${playa} scored ${score}.`);
  total = parseInt(total) + parseInt(score);
}

console.log(`${playa}'s total score is ${total} . `);

let party = total - par;

if (party > 0) {
  console.log(`Nice try, ${playa}... Your total par was: +${party}.`);
}
if (party < 0) {
  console.log(`Great job, ${playa}! Your total par was: ${party}.`);
}
if (party === 0) {
  console.log(`Good game, ${playa}. Your total par was: 0.`);
}

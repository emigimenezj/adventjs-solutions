export default function learn(timeToSpend, courses) {
  let bestTime = 0;
  let bestOption = null;
  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      let timeToTake = courses[i] + courses[j];
      if(timeToTake <= timeToSpend && bestTime < timeToTake) {
        bestTime = timeToTake;
        bestOption = [i, j];
      }
    }
  }
  return bestOption;
}

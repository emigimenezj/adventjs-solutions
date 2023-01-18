function checkStepNumbers(systemNames, stepNumbers) {
  return systemNames.every((e, i) => {
    const j = i + systemNames.slice(i + 1).indexOf(e) + 1;
    const fixer = !(systemNames.lastIndexOf(e) - i);
    return stepNumbers[i] < stepNumbers[j] + fixer;
  });
}
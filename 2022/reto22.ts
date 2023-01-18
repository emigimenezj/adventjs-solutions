function checkStepNumbers(systemNames: string[], stepNumbers: number[]) {
  return systemNames.every((e, i) => {
    const j: number = i + systemNames.slice(i + 1).indexOf(e) + 1;
    const fixer: boolean = !(systemNames.lastIndexOf(e) - i);
    return stepNumbers[i] < stepNumbers[j] + ~~fixer;
  });
}
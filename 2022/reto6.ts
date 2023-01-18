export function createCube(size: number): string {
	const upperEnd: string = '_\\'.repeat(size);
	const lowerEnd: string = '_/'.repeat(size);
	const upperStart: string = '/\\';
	const lowerStart: string = '\\/';

	let upperCube: string = '';
	let lowerCube: string = '';

	for (let i = 0; i < size; i++) {
		upperCube += ' '.repeat(size - i - 1) +
      upperStart.repeat(i + 1) + upperEnd + '\n';
		lowerCube += ' '.repeat(i) + lowerStart.repeat(size - i) + lowerEnd + '\n';
	}
  
	return upperCube + lowerCube.slice(0, -1);
}
function createCube(size) {
	const upperEnd = '_\\'.repeat(size);
	const lowerEnd = '_/'.repeat(size);
	const upperStart = '/\\';
	const lowerStart = '\\/';

	let upperCube = '';
	let lowerCube = '';

	for (let i = 0; i < size; i++) {
		upperCube += ' '.repeat(size - i - 1) +
      upperStart.repeat(i + 1) + upperEnd + '\n';
		lowerCube += ' '.repeat(i) + lowerStart.repeat(size - i) + lowerEnd + '\n';
	}
  
	return upperCube + lowerCube.slice(0, -1);
}
function executeCommands(commands) {
  const CPU_BITS = 8;
  const MAX_REPR = 2 ** CPU_BITS;

  const registers = {
    V00: 0,
    V01: 0,
    V02: 0,
    V03: 0,
    V04: 0,
    V05: 0,
    V06: 0,
    V07: 0
  };

  const execute = {
    MOV: (v1, v2) => registers[v2] = /V/.test(v1) ? registers[v1] : ~~v1 % MAX_REPR,
    ADD: (v1, v2) => registers[v1] = (registers[v1] + registers[v2]) % MAX_REPR,
    DEC: v => registers[v] = (((registers[v] - 1) % MAX_REPR) + MAX_REPR) % MAX_REPR,
    INC: v => registers[v] = (registers[v] + 1) % MAX_REPR,
    JMP: i => PC = registers.V00 ? i - 1 : PC
  }

  let PC = 0;

  while (PC < commands.length) {
    const [ins, fst, snd] = commands[PC].match(/\w+/g);
    execute[ins](fst, snd);
    PC++;
  }

  return Array(...Object.values(registers));
}
type Reg = 'V00' | 'V01' | 'V02' | 'V03' | 'V04' | 'V05' | 'V06' | 'V07';

interface Regs {
  V00: number,
  V01: number,
  V02: number,
  V03: number,
  V04: number,
  V05: number,
  V06: number,
  V07: number
};

type Instruction = 'MOV' | 'ADD' | 'DEC' | 'INC' | 'JMP';

interface Exec {
  MOV: (v1: string, v2: Reg) => void;
  ADD: (v1: Reg, v2: Reg) => void;
  DEC: (v: Reg) => void;
  INC: (v: Reg) => void;
  JMP: (i: number) => number;
}

function executeCommands(commands: string[]): number[] {
  const CPU_BITS: number = 8;
  const MAX_REPR: number = 2 ** CPU_BITS;

  const registers: Regs = {
    V00: 0,
    V01: 0,
    V02: 0,
    V03: 0,
    V04: 0,
    V05: 0,
    V06: 0,
    V07: 0
  };

  const execute: Exec = {
    MOV: (v1, v2) => registers[v2] = /V/.test(v1) ? registers[v1 as Reg] : ~~v1 % MAX_REPR,
    ADD: (v1, v2) => registers[v1] = (registers[v1] + registers[v2]) % MAX_REPR,
    DEC: v => registers[v] = (((registers[v] - 1) % MAX_REPR) + MAX_REPR) % MAX_REPR,
    INC: v => registers[v] = (registers[v] + 1) % MAX_REPR,
    JMP: i => PC = registers.V00 ? i - 1 : PC
  }

  let PC: number = 0;

  while (PC < commands.length) {
    const [ins, fst, snd] = commands[PC].match(/\w+/g)!;
    execute[ins as Instruction](fst as never, snd as never);
    PC++;
  }

  return Array(...Object.values(registers));
}
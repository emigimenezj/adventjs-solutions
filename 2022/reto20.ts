type Reindeer = { type: string, weightCapacity: number };
type Gift = { country: string, weight: number };

type ReindeerGroup = { type: string, num: number };
type PerCity = { country: string, reindeers: ReindeerGroup[]};

export function howManyReindeers(reindeerTypes: Reindeer[], gifts: Gift[]): PerCity[] {
  return gifts.map(({country, weight}) => {

    const fReindeer = reindeerTypes
      .filter(r => r.weightCapacity < weight)
      .sort((a, b) => b.weightCapacity - a.weightCapacity);
    
    let totalSum: number = fReindeer.reduce((sum, r) => sum + r.weightCapacity, 0)

    const reindeers: ReindeerGroup[] = fReindeer.map(r => {
      const num: number = weight / totalSum >> 0;
      weight -= num * r.weightCapacity;
      totalSum -= r.weightCapacity;
      return { type: r.type, num };
    });

    return { country, reindeers };
  });
}
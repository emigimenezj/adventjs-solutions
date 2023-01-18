export function getMaxGifts(giftsCities: number[], maxGifts: number, maxCities: number): number {
  if (maxCities === 0) return 0
  if (maxGifts === 0) return 0
  if (!giftsCities.length) return 0

  const giftsCitiesCopy: number[] = [...giftsCities];
  // @ts-ignore
  const giftsForACity: number = giftsCitiesCopy.shift();

  if (giftsForACity > maxGifts) return getMaxGifts(giftsCitiesCopy, maxGifts, maxCities);

  const ignoringBranch: number = getMaxGifts(giftsCitiesCopy, maxGifts, maxCities);
  const considerBranch: number = giftsForACity + getMaxGifts(giftsCitiesCopy, maxGifts - giftsForACity, --maxCities);
  return Math.max(considerBranch, ignoringBranch);
}
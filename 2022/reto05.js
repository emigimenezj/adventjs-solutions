function getMaxGifts(giftsCities, maxGifts, maxCities) {
  if (maxCities === 0) return 0
  if (maxGifts === 0) return 0
  if (!giftsCities.length) return 0

  const giftsCitiesCopy = [...giftsCities];
  const giftsForACity = giftsCitiesCopy.shift();

  if (giftsForACity > maxGifts) return getMaxGifts(giftsCitiesCopy, maxGifts, maxCities);
  
  const ignoringBranch = getMaxGifts(giftsCitiesCopy, maxGifts, maxCities);
  const considerBranch = giftsForACity + getMaxGifts(giftsCitiesCopy, maxGifts - giftsForACity, --maxCities);
  return Math.max(considerBranch, ignoringBranch);
}
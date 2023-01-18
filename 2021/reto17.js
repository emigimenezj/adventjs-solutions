export default function countPackages(carriers, carrierID) {
  const ID = 0;
  const PACKAGES = 1;
  const SUBORDINATES = 2;
  let data = carriers.reduce((rec, c) => {
    return {
      packages: {
        ...rec.packages,
        [c[ID]]: c[PACKAGES]
      },
      subordinates: {
        ...rec.subordinates,
        [c[ID]]: c[SUBORDINATES]
      }
    }
  }, {packages: {}, subordinates: {}});
  return countSubordinatesPackages(data, [carrierID]);
}

function countSubordinatesPackages(data, carriers) {
  return carriers.reduce((rec, c) => {
    return rec + data.packages[c] + countSubordinatesPackages(data, data.subordinates[c]);
  }, 0);
}

/*
***  FIRST APROACH *** // ASSUMING AN ORDERED ARRAY
/*
export default function countPackages(carriers, carrierID) {
  const ID = 0;
  const PAQUETES = 1;
  const SUBORDINADOS = 2;
  const targetCarriers = [carrierID];

  let totalPackages = 0;
  let i = 0;
  while (targetCarriers.length) {
    let [targetCarrier] = targetCarriers;
    if (carriers[i][ID] === targetCarrier) {
      totalPackages += carriers[i][PAQUETES];
      targetCarriers.shift();
      targetCarriers.push(...carriers[i][SUBORDINADOS]);
    }
    i++;
  }
  return totalPackages;
}
*/

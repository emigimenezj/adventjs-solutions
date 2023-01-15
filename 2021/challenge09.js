export default function groupBy(collection, it) {
  return collection.reduce((rec, e) => {
    let tag = typeof it === 'string' ? e[it] : it(e) ;
    (rec[tag] ??= []).push(e)
    return rec;
  }, {});
}

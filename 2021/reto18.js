export default function fixFiles(files) {
  let appearences = {};
  return files.map(f => {
    let res = (appearences[f] ??= 0) ? `${f}(${appearences[f]})` : f ;
    appearences[f]++;
    return res;
  });
}

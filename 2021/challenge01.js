export default function contarOvejas(ovejas) {
  return ovejas.filter(o => /.*n.*a.*|.*a.*n.*/i.test(o.name) && o.color === 'rojo');
}

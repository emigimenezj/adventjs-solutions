export default function daysToXmas(date) {
  return Math.ceil((new Date('Dec 25, 2021').getTime() - date.getTime()) / (1000*60*60*24));
}

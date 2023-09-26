export default function returnHowManyArguments(...theArgs) {
  let count = 0;

  /* eslint-disable no-unused-vars */
  for (const arg of theArgs) {
    count += 1;
  }
  return count;
}

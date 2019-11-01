//Determine if a sequence of integers is graphic using Havel-Hakimi algorithm recursively

const _hasEvenQuantityOfOddNumbers = sequence => {
  const oddNumbers = sequence.filter(number => number % 2 !== 0);
  return oddNumbers.length % 2 == 0;
};

const _biggestOverTotalMinusOne = sequence => {
  return sequence.some(number => number > sequence.length - 1);
};

const _calcNextSequence = sequence => {
  const sortedDescSequence = sequence.sort((a, b) => b - a);
  const firstTerm = sortedDescSequence.shift();

  return sortedDescSequence.map((number, index) => {
    return index <= firstTerm - 1 ? number - 1 : number;
  });
};

const havelHakimi = originalSequence => {
  const sequence = [...originalSequence];
  const isFinalGraphicSequence = sequence.every(number => number === 0);
  const isNonGraphic = sequence.any(number => number < 0);

  if (isNonGraphic) {
    return false;
  }

  if (isFinalGraphicSequence) {
    return true;
  }

  const hasEvenOdds = _hasEvenQuantityOfOddNumbers(sequence);
  const biggestOverTotalMinusOne = _biggestOverTotalMinusOne(sequence);

  if (hasEvenOdds && !biggestOverTotalMinusOne) {
    const nextSequence = _calcNextSequence(sequence);

    return havelHakimi(nextSequence);
  }

  return false;
};

const sequence = [3, 3, 2, 2, 2, 2, 1, 1, 1, 1];
const isGraphic = havelHakimi(sequence);

console.log(isGraphic);

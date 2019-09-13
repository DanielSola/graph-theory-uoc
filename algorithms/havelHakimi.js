//Determine if a sequence of integers is graphic using Havel-Hakimi algorithm recursively

const _hasEvenQuantityOfOddNumbers = (sequence) => {
    const oddNumbers = sequence.filter(number => number % 2 !== 0);
    return oddNumbers.length % 2 == 0;
}

const _biggestOverTotalMinusOne = sequence => {
    return sequence.some(number => number > sequence.length - 1);
}

const _calcNextSequence = sequence => {
    const sortedDescSequence = sequence.sort((a, b) => b - a);
    const firstTerm = sortedDescSequence.shift();

    return sortedDescSequence.map((number, index) => {
        return index <= firstTerm - 1 ? number - 1 : number;
    });
}

const havelHakimi = (sequence) => {
    const isFinalGraphicSequence = sequence.every(number => number === 0);

    if(isFinalGraphicSequence) {
        return true;
    }

    const hasEvenOdds = _hasEvenQuantityOfOddNumbers(sequence);
    const biggestOverTotalMinusOne = _biggestOverTotalMinusOne(sequence);

    if(hasEvenOdds && !biggestOverTotalMinusOne) {
        const nextSequence = _calcNextSequence(sequence);

        return havelHakimi(nextSequence);
    }

    return false;
};

const isGraphic = havelHakimi([2,2,2,2,2,2,3,1]);
console.log('Is graphical? ', isGraphic);

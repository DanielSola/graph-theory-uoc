const bubbleSort = array => {
    let arrayIsChanged = false;
    let len = array.length;

    for (let i = 0; i < len; i++) {
        const current = array[i];
        const next = array[i + 1];
        const nextIsSmaller = current > next;

        if (nextIsSmaller) {
            array[i] = next;
            array[i + 1] = current;
            arrayIsChanged = true;
        }
    }

    if (arrayIsChanged) {
        return bubbleSort(array)
    } else {
        return array;
    }
}

const array = [4, 2, 3, 1];
const sortedArray = bubbleSort(array);

console.log('Sorted', sortedArray);

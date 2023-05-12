/*
const containsString = (mainSyting, subString) => {
  let subStringPointer = 0;
  for (let i = 0; i < mainSyting.length; i++) {
    if (mainSyting[i] === subString[subStringPointer]) {
      subStringPointer++;
    }
    if (subStringPointer === subString.length) {
      return true;
    }
  }
  return false;
};
*/
const arr1 = [-4, -3, 0, 1, 2, 10];
const squareSorted = (arr) => {
  const double = [];
  for (let i = 0; i < arr.length; i++) {
    double.push(arr[i] ** 2);
  }
  return double.sort((a, b) => a - b);
};
console.log(squareSorted(arr1));

const squareSorted2 = (arr) => {
  const res = [];

  const negativeReversedSorted = []; // [ 16, 9, 9 ]
  const positiveSorted = []; // [ 0, 1, 4, 100 ]

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item < 0) {
      negativeReversedSorted.push(item ** 2);
    } else {
      positiveSorted.push(item ** 2);
    }
  }

  const negativeSorted = negativeReversedSorted.reverse(); // [ 9, 9, 16 ]

  let aPointer = 0;
  let bPointer = 0;

  while (aPointer < negativeSorted.length && bPointer < positiveSorted.length) {
    const a = negativeSorted[aPointer];
    const b = positiveSorted[bPointer];

    if (a < b) {
      res.push(a);
      aPointer++;
    } else {
      res.push(b);
      bPointer++;
    }
  }

  while (aPointer < negativeSorted.length) {
    res.push(negativeSorted[aPointer]);
    aPointer++;
  }

  while (bPointer < positiveSorted.length) {
    res.push(positiveSorted[bPointer]);
    bPointer++;
  }

  return res;
};

console.log(squareSorted2(arr1));

const array = [3, 1, 1, 1, 7, 0, -5, 16, 4, 1, 0];

// [ 3, 1, 1, 1, 7, 0, -5, 16, 4, 1, 0 ]
// maxSubArray(arr, k)

const maxSubArray = (arr, k) => {
  const sum = (start, end) => {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum = sum + arr[i];
    }
    return sum;
  };
  let leftPointer = 0;
  let rightPointer = 0;

  let currentCandidate = [];
  while (rightPointer < arr.length) {
    const currentSum = sum(leftPointer, rightPointer);
    if (currentSum <= k) {
      rightPointer++;
    } else {
      const newCandidate = [];
      for (let i = leftPointer; i < rightPointer; i++) {
        newCandidate.push(arr[i]);
      }
      if (newCandidate.length >= currentCandidate.length) {
        currentCandidate = newCandidate;
      }
      leftPointer++;
    }
    if (leftPointer > rightPointer) {
      rightPointer++;
    }
  }

  const newCandidate = [];
  for (let i = leftPointer; i < rightPointer; i++) {
    newCandidate.push(arr[i]);
  }
  if (newCandidate.length >= currentCandidate.length) {
    currentCandidate = newCandidate;
  }

  return currentCandidate;
};

console.log(maxSubArray(array, 9));

const longestRun = (arr) => {//вторыйм аргументом - сколько оошибок мы прощаем (дз)
  const howMenyZero = (start, end) => {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      if (arr[i] === 0) {
        sum++;
      }
    }
    return sum;
  };
  let leftPointer = 0;
  let rightPointer = 0;

  let currentCandidate = [];
  while (rightPointer < arr.length) {
    const currentAmounOfZero = howMenyZero(leftPointer, rightPointer);
    if (currentAmounOfZero <= 1) {
      rightPointer++;
    } else {
      if (currentCandidate < rightPointer - leftPointer - 1) {
        currentCandidate = rightPointer - leftPointer - 1;
      }
      leftPointer++;
    }
    if (leftPointer > rightPointer) {
      rightPointer++;
    }
  }

  if (currentCandidate < rightPointer - leftPointer) {
    currentCandidate = rightPointer - leftPointer
  }

  return currentCandidate;
};

const newArr = [1, 0, 1, 1, 0, 0, 1, 1, 1, 1]
console.log(longestRun(newArr))
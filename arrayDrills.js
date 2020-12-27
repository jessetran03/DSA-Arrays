// 5. URlify a string

function URLify(string) {
  let url = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      url.push('%20')
    }
    else {
      url.push(string[i])
    }
  }
  let result = url.join('')
  console.log(result)
  return result
}

URLify('tauhida parveen')

// 6. Filtering an array

function filter(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      newArr.push(arr[i])
    }
  }
  console.log(newArr);
  return (newArr);
}

filter([1, 6, 3, 7, 11, 10]);

//7. Max sum in the array

function largestSum(arr) {
  if (arr.length < 2) {
    console.log('Need at least two numbers')
    return;
  }
  let highestSum = arr[0]
  for (let i = 0; i < arr.length; i++) {
    let currentSum = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      currentSum = currentSum + arr[j];
      if (currentSum > highestSum) {
        highestSum = currentSum;
      }
    }
  }
  console.log(highestSum);
  return highestSum;
}

largestSum([4, 6, -3, 5, -2, 1])

// 8. Merge arrays

function mergeArrays(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++;
    }
    else {
      result.push(arr2[j]);
      j++;
    }
  }
  console.log(result)
  return (result)
}

mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10])


// 9. Remove characters

function removeChars(str, chars) {
  let result = ""
  let charsToRemove = [...chars]
  for (let i = 0; i < str.length; i++) {
    let char = false;
    for (let j = 0; j < charsToRemove.length; j++) {
      if (str[i] === charsToRemove[j]) {
        char = true;
      }
    }
    if (char === false) {
      result = result + str[i]
    }
  }
  console.log(result)
  return result
}

removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')

// 10. Products

function product(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j != i) {
        product = product * arr[j]
      }
    }
    result.push(product)
  }
  console.log(result)
  return result;
}

product([1, 3, 9 ,4])

// 11. 2D array 

function setZero(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i].slice();
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        for (let k = 0; k < result.length; k++) {
          result[i][k] = 0;
        }
        for (let k = 0; k < result[i].length; k++) {
          result[k][j] = 0;
        }
      }
    }
  }
  return result;
}

let zeroArray =
  [[1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]];
console.log(setZero(zeroArray))

// 12. String rotation

function rotateString(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }
  let string = str1 + str1;
  if(string.includes(str2)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(rotateString('amazon', 'azonam'));
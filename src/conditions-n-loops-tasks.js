/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }
  if (a + b > c && a + c > b && b + c > a)
    if (a === b || a === c || b === c) {
      return true;
    }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const obj = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
  };
  if (num === 10) {
    return obj[`${10}`];
  }
  if (num <= 10) {
    return obj[`${num % 10}`];
  }
  let res = '';
  let tmp = Math.floor(num / 10);
  while (tmp > 0) {
    res += obj[`${10}`];
    tmp -= 1;
  }
  return res + obj[`${num % 10}`];
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';
  switch (numberStr[0]) {
    case '1':
      res += 'one';
      break;
    case '2':
      res += 'two';
      break;
    case '3':
      res += 'three';
      break;
    case '4':
      res += 'four';
      break;
    case '5':
      res += 'five';
      break;
    case '6':
      res += 'six';
      break;
    case '7':
      res += 'seven';
      break;
    case '8':
      res += 'eight';
      break;
    case '9':
      res += 'nine';
      break;
    case '0':
      res += 'zero';
      break;
    case '-':
      res += 'minus';
      break;
    default:
      break;
  }
  if (numberStr.length === 1) {
    return res;
  }
  res += ' ';
  for (let i = 1; i < numberStr.length - 1; i += 1) {
    switch (numberStr[i]) {
      case '1':
        res += 'one ';
        break;
      case '2':
        res += 'two ';
        break;
      case '3':
        res += 'three ';
        break;
      case '4':
        res += 'four ';
        break;
      case '5':
        res += 'five ';
        break;
      case '6':
        res += 'six ';
        break;
      case '7':
        res += 'seven ';
        break;
      case '8':
        res += 'eight ';
        break;
      case '9':
        res += 'nine ';
        break;
      case '0':
        res += 'zero ';
        break;
      case '.':
        res += 'point ';
        break;
      case ',':
        res += 'point ';
        break;
      default:
        break;
    }
  }
  switch (numberStr[numberStr.length - 1]) {
    case '1':
      res += 'one';
      break;
    case '2':
      res += 'two';
      break;
    case '3':
      res += 'three';
      break;
    case '4':
      res += 'four';
      break;
    case '5':
      res += 'five';
      break;
    case '6':
      res += 'six';
      break;
    case '7':
      res += 'seven';
      break;
    case '8':
      res += 'eight';
      break;
    case '9':
      res += 'nine';
      break;
    case '0':
      res += 'zero';
      break;
    default:
      break;
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let res = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    res += str[i];
  }
  if (res === str) {
    return true;
  }
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let tmp = num;
  while (tmp) {
    if (tmp % 10 === digit) {
      return true;
    }
    tmp = Math.floor(tmp / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }
    for (let j = i + 1; j < arr.length; j += 1) {
      rightSum += arr[j];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let colStart = 0;
  let colEnd = size - 1;
  let rowStart = 0;
  let rowEnd = size - 1;
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
  }
  let k = 1;
  let i = 0;
  let j = 0;
  while (k <= size ** 2) {
    arr[i][j] = k;
    if (i === rowStart && j < colEnd) {
      j += 1;
    } else if (i < rowEnd && j === colEnd) {
      i += 1;
    } else if (i === rowEnd && j > colStart) {
      j -= 1;
    } else {
      i -= 1;
    }
    if (i === rowStart + 1 && j === colStart) {
      rowStart += 1;
      rowEnd -= 1;
      colStart += 1;
      colEnd -= 1;
    }
    k += 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const n = matrix.length;
  const rotated = matrix;
  const tmp = [];
  for (let i = 0; i < n; i += 1) {
    tmp[i] = [];
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      tmp[i][j] = matrix[i][j];
    }
  }
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      rotated[j][i] = tmp[n - i - 1][j];
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function quickSort(arr) {
  if (arr.length === 0) return [];
  const a = [];
  const b = [];
  const p = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < p) a.push(arr[i]);
    else b.push(arr[i]);
  }
  return quickSort(a).concat(p, quickSort(b));
}

function sortByAsc(arr) {
  const tmp = quickSort(arr);
  const res = arr;
  for (let i = 0; i < tmp.length; i += 1) {
    res[i] = tmp[i];
  }
  return tmp;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let res = str;
  let tmp = [];
  const cash = [];
  let resTmp = '';
  let count;
  for (let k = 0; k < iterations; k += 1) {
    for (let i = 0; i < res.length; i += 2) {
      tmp[i / 2] = res[i];
      resTmp += res[i];
    }
    const n = tmp.length;
    for (let i = 1; i < res.length; i += 2) {
      tmp[n + Math.floor(i / 2)] = res[i];
      resTmp += res[i];
    }
    cash[cash.length] = resTmp;
    count = k;
    if (cash[0] === cash[cash.length - 1] && cash.length > 1) {
      res = tmp;
      break;
    }
    resTmp = '';
    res = tmp;
    tmp = [];
  }
  if (cash.length === 1) {
    return cash[0];
  }
  if (cash[0] === cash[cash.length - 1]) {
    return cash[(iterations % count) - 1];
  }
  return cash[iterations - 1];
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let num = number;
  const tmp = [];
  const arr = [];
  while (num) {
    tmp[tmp.length] = num % 10;
    num = Math.floor(num / 10);
  }
  for (let i = 0; i < tmp.length; i += 1) {
    arr[i] = tmp[tmp.length - i - 1];
  }
  let pointerIndex;
  let pointerNumber;
  const res = [];
  for (let i = arr.length; i > 0; i -= 1) {
    if (arr[i - 1] < arr[i]) {
      pointerIndex = i - 1;
      pointerNumber = arr[i - 1];
      break;
    }
  }
  for (let i = 0; i < pointerIndex; i += 1) {
    res[res.length] = arr[i];
  }
  let resNum = 0;
  if (!pointerIndex) {
    return num;
  }

  let min = 1000000;
  let curInd;
  for (let i = pointerIndex + 1; i < arr.length; i += 1) {
    if (arr[i] > pointerNumber && arr[i] < min) {
      min = arr[i];
      curInd = i;
    }
  }
  arr[curInd] = pointerNumber;
  res[res.length] = min;
  let sortArr = [];
  for (let i = pointerIndex + 1; i < arr.length; i += 1) {
    sortArr[sortArr.length] = arr[i];
  }
  sortArr = quickSort(sortArr);
  for (let i = 0; i < sortArr.length; i += 1) {
    res[res.length] = sortArr[i];
  }

  for (let i = 0; i < res.length; i += 1) {
    resNum += res[i] * 10 ** (res.length - i - 1);
  }
  return resNum;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};

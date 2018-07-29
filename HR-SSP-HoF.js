// 1.
function cube(x) {
    return x * x * x;
}
var cube = function (x) {
    return x * x * x;
}

// 2.
function fullname(first, last) {
    return first + " " + last;
}
var fullname = function (first, last) {
    return first + " " + last;
}

// 3.
function power(base, exp) {
if (exp === 0) {
    return 1;
}
return base * power(base, exp - 1);
}
var fullname = function(base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * power(base, exp - 1);  
}


// 4.
function sumCubes(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total = total + cube(numbers[i]);
    }
    return total;
}
var sumCubes = function(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total = total + cube(numbers[i]);
    }
    return total;
}

// ------

//1
function each(array, func) {
    for (var i = 0; i < array.length; i++) {
      func(array[i]);
    }
}

// 2
function sumSquares(numbers) {
    var total = 0;
    each(numbers, function(number) {
        total = total +  number;
    });
    return total;
}

// 3
function sumCubes(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total = total + cube(numbers[i]);
    }
    return total;
}

function sumCubes(numbers) {
  var total = 0;
  each(numbers, cube(number));
}

// Write a function called product that calculates the product of an array of numbers using a for loop; then, refactor it to use each.

function product(arr) {
    var total = 1;
    for (i = 0 ; i = arr.length ; i++) {
        total *= arr[i];
    }
    return total;
}

function product(arr) {
    var total = 1;
    each(arr, function(number) {total *= number});
    return total;
}

// Write a function called cubeAll that cubes each number in an array, and returns an array of all the numbers cubed using a for loop; then, refactor it to use each.

function cubeAll(arr) {
    return arr.map(num => Math.pow(num, 3));
}

function cubeAll(arr) {
    var cubedArr = [];
    each(arr, (function(number) {cubedArr.push(Math.pow(number, 3))}));
    return cubedArr;
}

// Write a function called odds that accepts an array as a parameter and returns an array of just the odd numbers. If you wrote it using each, great! If you used anything else, refactor it to use a for loop.

function odds(arr) {
    oddArr = [];
    each(arr, function(element) {
        if (element % 2 !==0) {
            oddArr.push(element);
        };
    });
    return oddArr;
}

// Write a function sumByAllElementsMultipliedByFour that takes an array as an argument and returns the sum of all elements multiplied by four.

function sumByAllElementsMultipliedByFour(arr) {
    var sum = 0;
    each(arr, function(element) {
        sum +=element * 4
    });
    return sum;
}

// Write a function sumBy that accepts two arguments: an array of numbers and a function. The function will be invoked upon each element in the array, and its result will be used to compute the sum.

function square(e) {return e * e};
function cube(e) {return e * e * e};
function doNothing(e) {return e};

function sumBy(arr, func) {
    var sum = 0;
    each(arr, function(element) {
        sum += func(element)
    });
    return sum;
}

// Write a function doubleAll that takes an array of numbers as a parameter and returns an array of all of those numbers doubled:

function doubleAll(arr) {
    newArr = [];
    each(arr, function(element) {
        newArr.push(element * 2)
    });
    return newArr;
}

// Write a function halveAll that takes an array of numbers as a parameter and returns an array of all of those numbers halved (divided by two).

function halveAll(arr) {
    newArr = [];
    each(arr, function(element) {
        newArr.push(element / 2)
    });
    return newArr;
}

// Write a function uppercaseAll that takes an array of strings as a parameter, and returns an array of all of those strings, but transformed to upper case. You can use toUpperCase to convert a string to upper case.

function uppercaseAll(arr) {
    newArr = [];
    each(arr, function(element) {
        newArr.push(element.toUpperCase());
    })
    return newArr;
}

// Write a function map that takes two parameters: an array and a function that, when applied to a single element, produces a new element. map should return an array of all elements in the input array transformed using the input function. Your function should work like this:

function map(arr, func) {
    var newArr = [];
    each(arr, function(element) {
        newArr.push(func(element, i))
    });
    return newArr;
}

// Complete the invocations of map below to produce the desired output (you'll need to replace ??? with a function):

// Write a function called evens that takes an array of numbers as a parameter, and returns an array of only the even numbers in the parameter.

function evens(arr) {
    var evenArr = [];
    each(arr, function(e) {
        if (e % 2 === 0) {
            evenArr.push(e)
        };
    });
    return evenArr;
}

// Write a function called multiplesOfThree that takes an array of numbers as a parameter, and returns an array of only the numbers that are multiples of three.

function multiplesOfThree(arr) {
    var multiplesofThreeArr = [];
    each(arr, function(e) {
        if (e % 3 === 0) {
            multiplesofThreeArr.push(e)
        };
    });
    return multiplesofThreeArr;
}

// Write a function called positives that takes an array of numbers as a parameter, and returns an array of only the numbers that are positive.

function positives(arr) {
    var positiveArr = [];
    each(arr, function(e) {
        if (e  >= 0) {
            positiveArr.push(e)
        };
    });
    return positiveArr;
}

// Write a function called evenLength that takes an array of strings and returns an array of only the strings with an even length.

function evenLength(arr) {
    var evenElementsArr = [];
    each(arr, function(e) {
        if (e.length  % 2 === 0) {
            evenElementsArr.push(e)
        };
    });
    return evenElementsArr;
}

// write a function called filter that takes two parameters: an array and a function that, when invoked with an argument, will return true or false. filter should return a new array of only the elements for which the function returns true

function filter(arr, func) {
    var newArr = [];
        each(arr, function(e) {
            if (func(e) === true) {
                newArr.push(e);
            };
        });
    return newArr;
}

function odds(arr) {
    var output = filter(arr, function(e) {
        return (e % 2 !== 0);
    });
    return output;
}

function positives(arr) {
    var output = filter(arr, function(e) {
        return (e >= 0);
    });
    return output;
}

// Using filter, write a function startsWithChar that accepts two parameters: an array of strings, and a character (e.g. "a"), and returns an array of only the strings that start with that character:

function startsWithChar(arr, char) {
    var output = filter(arr, function(element) {
        return (element[0] === char);
    })
    return output;
}

// write a function called indexedExponentials that, when given an array of numbers as an argument, returns a new array of numbers where each number has been raised to the power of its index

function each(array, func) {
    for (var i = 0; i < array.length; i++) {
      func(array[i], i);
    }
}

function indexedExponentials(arr) {
    var output = [];
    each(arr, function(e, i) {
        output.push(Math.pow(e, i)
    )})
    return output;
}

// Write a function called evenIndexedOddNumbers that, when given an array of numbers as an argument, returns an array of only the odd numbers with even indices.

function evenIndexedOddNumbers(arr) {
    var output = [];
    each(arr, function(e, i) {
        if ((e % 2 !== 0) && (i % 2 === 0)) {
            output.push(e)
        }
    })
    return output;
}

// Write a function called evenIndexedEvenLengths (yeah, a bit of a mouthful) that accepts an array of strings as a parameter, and returns only the strings that are found at an even index that also have an even length

function evenIndexedEvenLengths(arr) {
    var outout = [];
    each(arr, function(e, i) {
        if ((e.length % 2 === 0) && (i % 2 === 0)) {
            output.push(e)
        }
    })
    return output;
}

// values: accepts an object as a parameter, and outputs an array of the object's values.

function each(coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < array.length; i++) {
        func(array[i], i);
        }
    } else {
        for (key in coll) {
            func(coll[key], [key]);
        }
    }
}

function values(coll) {
    var output = [];
    each(coll, function(e, key) {
        output.push(e);
    })
    return output;
}

// keys: accepts an object as a parameter, and outputs an array of the object's keys.

function keys(coll) {
    var output = [];
    each(coll, function(e, key) {
        output.push(key);
    })
    return output;
}

// Write a function called keysLongerThan that accepts two parameters -- an object and a number -- and returns a new object with only the key/value pairs in the input object whose keys are longer than the numeric argument,

function keysLongerThan(coll, num) {
    var output = {};
    each(coll, function(e, key) {
        if (key.toString().length > num) {
            output[key] = e;
        }
    });
    return output;
}

// Write a function called incrementValues that accepts an object as a parameter, and outputs an object with all of its numeric values incremented by one. You'll want to use the updated version of each for this, and you will need to check the type of each value to determine whether or not it should be incremented.

function incrementValues(obj) {
    var output = {};
    each(obj, function(e, key) {
        if (typeof obj[key] === 'number') {
            output[key] = e +1;
        } else {
            output[key] = e;
        }
    })
    return output;
}

// --------

function each(array, func) {
    for (var i = 0; i < array.length; i++) {
      func(array[i]);
    }
}

function map(arr, func) {
    var newArr = [];
    each(arr, function(element, i) {
        newArr.push(func(element, i))
    });
    return newArr;
}

function abs(x) {
    if (x >= 0) {
      return x;
    }
    return -x;
  }
  
  map([1, -2, 37, -100, -8, 5], abs);
  // => [1, 2, 37, 100, 8, 5]


  function max(numbers) {
    output = 0;
    each(numbers, function(num) {
        if (num > output) {
            output = num;
        }
    })
    return output;
  }
  max([1, 3, 2]); // => 3
  max([4, 23, 100]); // => 100

  var sampleInput = [
  [1, 3, 2],
  [4, 23, 100],
  [7, 6, 3, -2]
];

function maximums(arrays) {
    return map(arrays, max);
  }

  maximums(sampleInput);
  
//   Complete the function exponentials that accepts an array of numbers as a parameter, and raises each number n to the nth power, e.g:

function exponentials(numbers) {
    function nthPower(num) {
        return Math.pow(num, num);
    }

  return map(numbers, nthPower);
}

exponentials([1, 2, 3, 4]); // => [1, 2*2, 3*3*3, 4*4*4*4] => [1, 4, 27, 256]
exponentials([3, 2, 5]); // => [27, 4, 3125]

// write a function reverse that accepts a string as a parameter and returns a reversed version of that string (you'll want to use a for loop for this). Then, use reverse to write a function called reverseWords that accepts a string as an argument, and returns a string with all of its words reversed. You'll want to use split and join in both of these functions.

function reverse(string) {
    var charArray = string.split('');
    var reversedString = [];
    for (i = 0 ; i < charArray.length ; i++) {
        reversedString.unshift(charArray[i]);
    }
    return reversedString.join('');;
}

function reverseWords(string) {
    var splitString = string.split(' ');
    var reversedString = []
    for (j = 0 ; j < splitString.length ; j++) {
        console.log(splitString[j]);
        reversedString.push(reverse(splitString[j]));
    }
    return reversedString.join(' ');;
}

// Write a function called pluck that takes an array of objects and a string representing a key as parameters, and returns an array of all the values found under each object using the key

var people = [
    {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
    {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
    {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
    {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
    {name: {first: "Louis", last: "Reasoner"}, age: 21}
  ];

  function each(coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
        }
    } else {
        for (key in coll) {
            func(coll[key], [key]);
        }
    }
}

function map(coll, func) {
    var newColl = [];
    if (!Array.isArray(coll)) {
        newColl = {};
    }
    each(coll, function(element, key) {
        newColl[key] = func(element. key);
    });
    return newColl;
}

  
function ages(people) {
    return map(people, function(person) {
      return person.age;
    });
  }


function pluck(arr, key) {
    return map(arr, function(obj) {
        return obj[key];
    });
}

// ---------- HoFs 4

function each(coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
        }
    } else {
        for (key in coll) {
            func(coll[key], [key]);
        }
    }
}

function reduce(array, f, start) {
    var acc = start;
    each(array, function(element) {
      acc = f(acc, element);
    });
    return acc;
  }

// Rewrite the averageAge function from the warmup using reduce. 

var people = [
    {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
    {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
    {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
    {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
    {name: {first: "Louis", last: "Reasoner"}, age: 21}
  ];
  
function averageAge(people) {
// First you'll need to compute the sum of all the ages
// Second, divide the sum by the number of people (people.length)
var ageSum = reduce(people, function(acc, person) {
    acc = acc + person.age; return acc
}, 0);

return ageSum / people.length;

// YOUR CODE HERE
}

function range(start, end) {
var acc = [];
for (var i = start; i < end; i++) {
    acc.push(i);
}
return acc;
}

function factorial(n) {
var factorialRange = range(1, n);
var output = reduce(factorialRange, function(acc, num) {
    acc = acc * num; 
    return acc;
}, 1);
return output;
}

function sumBy(numbers, f) {
var output = reduce(numbers, function(acc, num) {
    acc = acc + num * f;
    return acc;
}, 0);
return output;
}

function max(numbers) {
return reduce(numbers, function(acc, num) {
    if (num > acc) acc = num;
    return acc;
}, 0);
}

function countOccurrences(str, char) {
    var newString = str.split('');
    return reduce(newString, function(acc, element) {
        if (element === char) {
            acc ++;
        }
        return acc;
    }, 0);
}

function everyNumberOdd(nums) {
    return reduce(nums, function(result, num) {
        return result && num % 2 !== 0;
    }, true);
}

function everyNumberPos(nums) {
    return reduce(nums, function(result, num) {
        return result && num > 0;
    }, true);
}

function everyStringLongerThanThree(strings) {
    return reduce(strings, function(result, str) {
        return result && str.length > 3;
    }, true);
}

function includesE(strings) {
    return reduce(strings, function(result, str) {
        return result && str.includes('e');
    }, true);
}

function every(arr, predicate) {
    return reduce(arr, function(checkAll, element) {
        return predicate(element) && checkAll;
    }, true);
}

function everyNumberOdd(nums) {
    return every(nums, function(num) {return num % 2 !== 0});
}

function everyNumberPos(nums) {
    return every(nums, function(num) {
        return num > 0});
}

function everyStringLongerThanThree(str) {
    return every(str, function(str) {return str.length > 3});
}

function includesE(str) {
    return every(str, function(str) {
        return str.split('').includes('e')});
}

// ------------------

function joinWith(onto, next, separator) {
    return (onto + separator + next)
  }

function join(arr, separator) {
return reduce(arr, function(acc, element) {
    return joinWith(acc, element, separator)}, '');
}

function countWords(s) {
    return reduce(s, function(acc, word) {
        if (!acc.hasOwnProperty(word)) {
            acc[word] = 1;
        } else {
            acc[word]++;
        }
        return acc;
    }, {});
}
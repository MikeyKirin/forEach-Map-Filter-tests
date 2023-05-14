// doubleValues
//Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

function doubleValues(doubles) {
    let newValue = [];
    doubles.forEach(function(val) {
      newValue.push(val * 2);
    });
    return newValue;
  }
  
  //onlyEvenValues
  //Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function.
  
  function onlyEvenValues(even) {
    let onlyEven = [];
    arr.forEach(function(val) {
      if (val % 2 === 0) {
        onlyEven.push(val);
      }
    });
    return onlyEven;
  }
  
  //showFirstAndLast
  //Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
  function showFirstAndLast(){
  const newVal = showFirstAndLast.filter(function(result){
      console.log(result[0]);
      console.log(result.length - 1);
  });
  }
  //addKeyAndValue
  //Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object
  function addKeyAndValue(){
  const values = [{id: 1}, {id: 2}];
  values.forEach(newVal => {
      newVal.occupation = 'retired';
  });
  console.log(values);
  }
  
  
  //vowelCount
  //Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
  
  //Emmanuel, I had a lot of trouble with this one. Would appreciate an explanation on our next call. 
  function countVowels(str) {
      const vowelCount = ['Pneumonoultramicroscopicsilicovolcanoconiosis'];
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      const vowelFilter = vowelCount.filter(char => vowels.includes(char));
      console.log(vowelFilter.length);
    };
  
    //doubleValuesWithMap
    //Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled
    //function doubleValuesWithMap(arr) {}
    function doubleValuesWithMap(arr) {
      return arr.map(function(values) {
        return values * 2;
      });
    }
  
    //valTimesIndex
    //Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
    function valTimesIndex(arr) {
      return arr.map(function(valTimes, index) {
        return valTimes * index;
      });
    }
  
    //extractKey
    //Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
    function extractKey(info, key) {
      return info.map(function(value) {
        return value[key];
      });
    }
  
  
    //extractFullName
    //Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.
    function extractFullName(name) {
      return name.map(function(fullName) {
        return fullName.first + " " + fullName.last;
      });
    }
  
    //filterByValue
    //Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
    function filterByValue(value, key) {
      return value.filter(function(filter) {
        return filter[key] != null;
      });
    }
  
    //find
    //Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
    const age = [10,2,30,4,51];
    function findAge(foundAge){
        return foundAge > 18 
    };
    console.log(age.find(findAge));  // will return 30

    //findInObj
    //Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.
    // findInObj(
    //     [
    //       {first: 'Elie', last:"Schoppik"},
    //       {first: 'Tim', last:"Garcia", isCatOwner: true},
    //       {first: 'att', last:"Lane"},
    //       {first: 'Colt', last:"Steele", isCatOwner: true}
    //     ],
    //     'isCatOwner',
    //     true
    //   )

    function findInObj(arr, key, searchItem) {
      return arr.filter(function(value) {
        return value[key] === searchItem;
      })[0];
    }


    //removeVowels
    //Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
    const str = 'This is the best day ever!';
    function removeVowels(str) {
        return str.replace(/[aeiou]/gi, '');
      }

    //doubleOddNumbers
    //Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).
     n = [1,2,3,20,100,41,73];
    function doubleOddNumbers(){
        if(n % 2 !== 0){
            n * 2;
        }
      } // Emmanuel, I need some help here. To me, this says "If this number is odd, double it" but that does not happen. I think I need to separate the numbers in the array and test each of them individually?

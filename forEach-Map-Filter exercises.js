// doubleValues
//Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
const doubleValues = [1,2,3];
const doubles = doubleValues.map(function(num){
    return num * 2;
});

//onlyEvenValues
//Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function.
const onlyEvenValues = [1,2,3,4,5,6,7,8];
const evens = onlyEvenValues.filter(function(even){
    return even % 2 === 0;
});

//showFirstAndLast
//Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
const showFirstAndLast = [1,2,3,4,5,6,7];
const firstAndLast = showFirstAndLast.filter(function(result){
    console.log(result[0]);
    console.log(result.length - 1);
});

//addKeyAndValue
//Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object
const values = [{id: 1}, {id: 2}];
values.forEach(addKeyAndValue => {
    addKeyAndValue.occupation = 'retired';
});
console.log(values);


//vowelCount
//Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

//Emmanuel, I had a lot of trouble with this one. Would appreciate an explanation on our next call. 
function countVowels(str) {
    const vowelCount = ['Pneumonoultramicroscopicsilicovolcanoconiosis'];
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelFilter = vowelCount.filter(char => vowels.includes(char));
    console.log(vowelFilter.length);
  };
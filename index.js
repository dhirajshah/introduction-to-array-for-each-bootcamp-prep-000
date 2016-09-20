function changeCompletely(element, index, array) {
  array[index] = (Math.floor(Math.random() * 100)).toString();
}

function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

var alphabets = ['a', 'b', 'c', 'd', 'e'];

doToElementsInArray(alphabets, changeCompletely);

console.log(alphabets);

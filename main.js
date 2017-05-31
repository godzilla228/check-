var arr = [1,7,0,8,6];
console.log(arr);
arr.length = 0;
console.log(arr);

var arr = [1,2,3,4,5,6,7,8,9];
arr.reverse();
console.log(arr);

var  fruits = ["Banana", "Orange", "Apple", "Mango"];
var howmany = fruits.length;
for(var i = 0; i < howmany; i++) {
  console.log(fruits[i]);
}

var start = 100;
var pushed = 0;
var result = [];
for(; start >= 0; start--) {
 pushed = result.push(start);
}
 console.log(result);

var test = ['Banana','Orange','Apple', 'Mango'];
test.splice(test.length -2, 1, 'Raspberry');
console.log(test);

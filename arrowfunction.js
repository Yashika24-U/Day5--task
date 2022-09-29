
//to print odd numbers

const arr = [1,2,3,4,5,6,7,8]
let oddArr = arr.forEach((num =>{
  if(num%2 === 0)
  {
    console.log(num)
  }
}));
console.log(oddArr);


//TitleCase

let str="yashika reddy"
str=str.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
console.log(str);


//sum of array elements
const sumArr = [1, 4, 0, 9, -3]
let sum = 0;
sumArr.forEach((num=>
{
   sum = sum+num;
}));
console.log(sum);


//return all primenumbers

const newArr = [1,2,3,4,5,,6,7,8,9,10]
const primeArr = newArr.filter(num =>{
  for(let i=2;i<num;i++)
  {
    if(num%i===0)
      return false;
  }
  return num!== 0 && num!==1;

});
  console.log(primeArr);



//palindrome

let allPalindromes = function(words)
{
   return words.filter(function(word){
                                
  	return word.split("").reverse().join("") === word;
                                
  });
   
};          
  console.log(allPalindromes(["noon","moon","malayalam","gown"]));









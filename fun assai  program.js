
//to print odd number using array

 var arr = [12,11,7,9,4,6,8,97]
 for (var num of arr)
 {   if(num%2!=0)
   {
     console.log(`${num}`);
   }
 }

//  function titleCase(string)
//  {
//    sentence = string.toLowerCase().split(" ");
//    for(var str of sentence)
//    {
//       str= str[0].toUpperCase() + str.slice(1);
//     }
//     console.log(str.join())
//     return str;
//  }



//  var sen = titleCase("hardWork,derteMination,perseVeranCe,suCCEss");
//     console.log(sen);

// TitleCase
function titleCase(string) {
  var sentence = string.toLowerCase().split(" ");
  for(var i = 0; i< sentence.length; i++){
     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  console.log(sentence.join(" "));
return sentence;
}
titleCase("hardwork never fails");


//Sum of all numbers in an array

function sumArr(arr){
    var sum =0;  
    
    for(var ele of arr)
    {
      sum = sum + ele;
      
    }
    console.log(`Sum is ${sum}`);
    }
    //console.log(sum);
    sumArr([1,2,3,4,5,6,7,8,9,10]);


//palindrome
function palindrome(arr)
{
let isPalindrome = true;
for(let i=0;i<arr.length/2;i++)
{
  if(arr[i]!==arr[arr.length-i-1])
  isPalindrome = false;
  break;
}
  return isPalindrome;
}

var result = palindrome([121]);
console.log(result);



//return all palindrome


let allPalindromes = function(words)
{
   return words.filter(function(word){
                                
  	return word.split("").reverse().join("") === word;
                                
  });
   
};          
  console.log(allPalindromes(["book","cook","nan"]));

//rotate an  array by k times


function rotate(arr,k)
{
function reverse(arr,start,end)
{
while(start<end)
{
  [arr[start],arr[end]]=[arr[end],arr[start]];
    start++;
    end--;
  }
}

//k%=arr.length;
reverse(arr,0,(arr.length-1));
reverse(arr,0,(k-1));
reverse(arr,k,(arr.length-1));
return arr;
}

var result =rotate([10,20,30,40,50],1);
console.log(result);



//remove duplicates in an array

let dupArr = ["a","b","a","b","c","c"];
let uniqArr = [...new Set(dupArr)];
console.log(uniqArr);



//Median of two sorted arrays
function medianArr(arrr1,arrr2)
{
let totalArr = [...arrr1, ...arrr2];
totalArr.sort((a,b) => a-b);
if(totalArr.length % 2 !== 0)
{
  
  var mp = Math.floor(totalArr.length/2)
  return totalArr[mp];
}
else{
  var mp = Math.floor(totalArr.length/2)
  return (totalArr[mp]+totalArr[mp-1])/2; 
}
}

const arrr1 = [2,3]
const arrr2 = [4,5]

console.log(medianArr(arrr1,arrr2));


//Return all PrimeNumbers
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


          


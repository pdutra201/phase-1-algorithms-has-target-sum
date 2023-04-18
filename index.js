function hasTargetSum(array, target) {
  // Write your algorithm here
  let counter = 0
  let isIncluded = false
  for(num of array){
    for(i =counter +1; i< array.length;i++){
      //console.log(num)
      if(num + array[i] === target){
        isIncluded = true
        return isIncluded
    }

  }
  //console.log(counter)
  counter++
  }

  return isIncluded
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  will take the first number in the array and add it to rest of the numbers to test
  else if take the 2nd number and add it to the rest
  etc..
*/

/*
  Add written explanation of your solution here
  created a fuction that checks the array for two numbers that will add up to the target number provided, 
  if it exists return true, else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

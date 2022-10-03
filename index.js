function hasTargetSum(array, target) {
  // Write your algorithm here

  for (let i ; i <= array.length ;i++ ){
    //n step 

    const complement = target - array[i] 
    for(let j = i +1; j <array.length ;j++){
        //n * n  step
      if(array[j] ===complement) return true 
    }
  }

  return false
}


function findStock(array){
  for(const item of array){
    if(item === "stock") return "stock"
  }
}

function findStock(object) {
  if(object.sock) return "stock";
}
/* 
  Write the Big O time complexity of your function here
  O( n^2)

  Space Complexity : O(n)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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

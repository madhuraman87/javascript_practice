// Question : https://www.algoexpert.io/questions/two-number-sum
// Solution 1
function twoNumberSum(array, targetSum) {
    const result = [];
    for(let i=0; i<array.length; i++){
      const targetNumb = targetSum - array[i];
      if(array.includes(targetNumb) && array[i] !== targetNumb) {
        const targetIndex = array.indexOf(targetNumb);
        if(!result.includes(array[targetIndex]) && !result.includes(array[i])){
          result.push(array[i], array[targetIndex]);
        }
      }
    }
    return result;
  }

// Solution 2
function twoNumberSum(array, targetSum) {
    let seenArray = new Set();
    for(let i=0;i<array.length;i++){
      let complement = targetSum - array[i];
      if(seenArray.has(array[i])){
        return [complement, array[i]];
      }
      seenArray.add(complement);
    }
    return [];
  }

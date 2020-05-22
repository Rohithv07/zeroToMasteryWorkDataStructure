const numbers = [1, 100, 0, 201, 202, 2, 3, 5];

function mergeSort(array) {
  if (array.length == 1)
    return array;
  let middle=Math.floor(array.length/2);
  const left=array.slice(0,middle);
  const right=array.slice(middle);
  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge(left,right){
  let result=[];
  let rightIndex=0;
  let leftIndex=0;
  while(leftIndex<left.length && rightIndex<right.length){
    if(left[leftIndex]<right[rightIndex]){
      result.push(left[leftIndex]);
      leftIndex++;
    }
    else{
      result.push(right[rightIndex])
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

mergeSort(numbers)
function map(sourceArr,fn) {
  let results = []
  for (let i=0; i < sourceArr.length; i++){
    results.push(fn(sourceArr[i]))
  }
  return results
}

function reduce(sourceArr, fn, startingPoint = 0){
  let total = (!!startingPoint) ? startingPoint : sourceArr[0]
  let i = (!!startingPoint) ? 0: 1
  for ( ;i < sourceArr.length; i++){
    total = fn(sourceArr[i], total)
  }
  return total
}

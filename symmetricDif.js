const symmeetricDif = (arr1, arr2) => {
  let newArr = []

  arr1.map(val=> {
    arr2.indexOf(val) < 0 ? newArr.push(val) : '';
  } )

  arr2.map(val => {
    arr1.indexOf(val) < 0 ? newArr.push(val) : '';
  })

  return newArr
}

console.log(symmeetricDif([1,2,3,4,5], [3,4,8,7]))
const isPalinddrom = (param) => {
  const str = param
  const reversStr = str.split('').reverse().join('')

  return reversStr === str
}

console.log(isPalinddrom('civic'))
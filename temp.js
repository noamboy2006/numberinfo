let fs = require('fs')

function isPrime (num) {
  if (num === 1) return 2
  for (let i = 2; i <= Math.pow(num, 0.5); i++) {
    if (num % i === 0) return 0
  }
  return 1
}

let res = {}
res.res = []

for (let i = 2; i<1000000; i++) {
  if (isPrime(i) !== 1) continue
  res.res.push(i)
}

fs.writeFile('primes.json', JSON.stringify(res), (err)=>{
  console.log(err)
})
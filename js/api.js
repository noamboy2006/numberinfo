export function analyze (num) {
  const res = { num: num }
  res.isPrime = isPrime(res.num)
  res.divisors = divisors(res.num)
  res.factorization = factorization(res)
  res.isPower()
  return res
}

function isPrime (num) {
  if (num === 1) return 2
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return 0
  }
  return 1
}

function divisors (num) {
  const res = []
  for (let i = 1; i < Math.pow(num, 0.5); i++) {
    if (num % i === 0) {
      res.push(i)
      res.push(num / i)
    }
  }
  res.sort((a, b) => { return a - b })
  return res
}

function factorization (numInfo) {
  let res = []
  if (numInfo.isPrime === 0 || numInfo.isPrime === 2 ) {
    res = [[numInfo.num,1]]
    return res
  }
  // for (let i=0; i<)
  return 
}

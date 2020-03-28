import { data } from './data.js'

export function analyze (num) {
  const res = { num: num }
  res.isPrime = isPrime(res.num)
  res.divisors = divisors(res.num)
  res.divisorsSum = sum(res.divisors)
  res.factorization = factorization(res)
  res.root = Math.pow(res.num, 1 / 2)
  res.square = Math.pow(res.num, 2)
  res.isPerfect = isPerfect(res)
  return res
}

function isPrime (num) {
  if (num === 1) return -2
  if (num < data.primes[0] || num > data.primes[data.primes.length - 1]) return -1
  return binarySearch(data.primes, 0, data.primes.length, num)
}

function binarySearch (arr, start, end, find) {
  if (start > end) return -1
  if (arr[start + Math.floor((end - start) / 2)] > find) return binarySearch(arr, start, start + Math.floor((end - start) / 2) - 1, find)
  if (arr[start + Math.floor((end - start) / 2)] === find) return start + Math.floor((end - start) / 2)
  if (arr[start + Math.floor((end - start) / 2)] < find) return binarySearch(arr, start + Math.floor((end - start) / 2) + 1, end, find)
}

function divisors (num) {
  const res = []
  for (let i = 1; i <= Math.pow(num, 0.5); i++) {
    if (num % i === 0) {
      res.push(i)
      if (num / i !== i) res.push(num / i)
    }
  }
  res.sort((a, b) => { return a - b })
  return res
}

function sum (arr) {
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    res += arr[i]
  }
  return res
}

function factorization (numInfo) {
  let res = []
  if (numInfo.isPrime !== -1) {
    res = [[numInfo.num, 1]]
    return res
  }
  for (let i = 2; i < numInfo.num; i++) {
    if (isPrime(i) < 0) continue
    let temp = numInfo.num
    let times = 0
    while (temp % i === 0) {
      temp /= i
      times++
    }
    if (times) res.push([i, times])
  }
  return res
}

function isPerfect (numInfo) {
  if (2 * numInfo.num < numInfo.divisorsSum) return 1
  else if (2 * numInfo.num === numInfo.divisorsSum) return 0
  else return -1
}

import { analyze } from './api/api.js'
window.addEventListener('keydown', (evt) => {
  const keyCode = evt.keyCode || evt.which
  if (keyCode !== 8 && !(keyCode >= 48 && keyCode <= 57)) return false
  document.getElementById('out').style.visibility = 'visible'
  let num = parseInt(document.getElementById('in').innerHTML) || 0
  if (keyCode === 8) {
    num = Math.floor(num / 10)
  } else {
    if (num * 10 + keyCode - 48 >= 1000000) {
      return
    }
    num = num * 10 + keyCode - 48
  }
  if (!num) {
    document.getElementById('in').innerHTML = ''
    document.getElementById('out').style.visibility = 'hidden'
    return
  }
  document.getElementById('in').innerHTML = num
  const res = analyze(num)
  let str = ''
  for (let i = 0; i < res.factorization.length; i++) {
    str += res.factorization[i][0]
    if (res.factorization[i][1] !== 1) str += '<sup>' + res.factorization[i][1] + '</sup>'
    str += '&#215;'
  }
  document.getElementById('factorization').innerHTML = str.slice(0, str.length - 2)
  str = ''
  for (let i = 0; i < res.divisors.length; i++) {
    str += res.divisors[i] + ', '
  }
  document.getElementById('divisors').innerHTML = str.slice(0, str.length - 2)
  document.getElementById('divisorsLength').innerHTML = res.divisors.length + '개'
  document.getElementById('divisorsSum').innerHTML = res.divisorsSum
  switch (res.isPrime) {
    case -1:
      document.getElementById('isPrime').innerHTML = '합성수'
      break
    case -2:
      document.getElementById('isPrime').innerHTML = '단위수'
      break
    default:
      document.getElementById('isPrime').innerHTML = '소수 (' + (res.isPrime + 1) + '번째)'
      break
  }
  document.getElementById('square').innerHTML = res.square
  document.getElementById('root').innerHTML = res.root.toFixed(3)
  switch (res.isPerfect) {
    case 1:
      document.getElementById('isPerfect').innerHTML = '과잉수'
      break
    case 0:
      document.getElementById('isPerfect').innerHTML = '완전수'
      break
    default:
      document.getElementById('isPerfect').innerHTML = '부족수'
      break
  }
  console.log(res)
})

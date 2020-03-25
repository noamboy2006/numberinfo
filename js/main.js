window.addEventListener('keydown', (evt) => {
  const keyCode = evt.keyCode || evt.which
  console.log(keyCode)
  if (keyCode !== 8 && !(keyCode >= 48 && keyCode <= 57)) return false
  let num = parseInt(document.getElementById('in').innerHTML) || 0
  if (keyCode === 8) {
    num = Math.floor(num / 10)
  } else {
    if (num > 100000) {
      alert('6자리의 수까지만 지원합니다.')
      return
    }
    num = num * 10 + keyCode - 48
  }
  document.getElementById('in').innerHTML = num
  const res = analyze(num)
  document.getElementById('out').innerHTML = res.factorization
  console.log(res)
})

function analyze (num) {
  const res = {}
  res.factorization = factorization(num)
  return res
}

function factorization (num) {
  const res = []
  for (let i = 2; i < Math.pow(num, 0.5); i++) {
    if (!(i % num)) {
      res[i]++
      res[num / i]++
    }
  }
  return res
}

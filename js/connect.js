import { analyze } from './api.js'
window.addEventListener('keydown', (evt) => {
  const keyCode = evt.keyCode || evt.which
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
  if (!num) num = ''
  document.getElementById('in').innerHTML = num
  const res = analyze(num)
  console.log(res)
})

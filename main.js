const pwd = document.querySelector('#pwd');
const confirmPwd = document.querySelector('#confirmPwd');

pwd.oninput = confirmPwd.oninput = function () {
  if (pwd.value !== confirmPwd.value) {
    errMsg.textContent = 'Password do not match!'
    errMsg.style.display = 'block';
  } else {
    errMsg.style.display = 'none';
  }
}
if (window.localstorage) {
  var txtUsername = document.getElementById('username');
  var txtAnswer = document.getElementById('answer');

  txtUsername.value = localStorage.getItem('username');
  txtAnswer.value = localStorage.getItem('answer');
}

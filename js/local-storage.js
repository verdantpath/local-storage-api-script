if (window.localstorage) {
  // SET UP VARIABLES TO CAPTURE FORM INPUTS
  var txtUsername = document.getElementById('username');
  var txtAnswer = document.getElementById('answer');

  // CHECK TO SEE IF VALUES ARE IN LOCAL STORAGE AND PUTS THEM IN VARIABLES
  txtUsername.value = localStorage.getItem('username');
  txtAnswer.value = localStorage.getItem('answer');

  // WHEN A NEW VALUE IS ENTERED INTO THE FORM FIELD IT IS SAVED IN LOCAL STORAGE
  txtUsername.addEventListener('input', function() {
    localStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function() {
    localStorage.setItem('answer', txtAnswer.value);
  }, false);


}

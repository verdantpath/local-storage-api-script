if (window.localstorage) {
  // SET UP VARIABLES TO CAPTURE FORM INPUTS
  var txtUsername = document.getElementById('username');
  var txtAnswer = document.getElementById('answer');

  // CHECK TO SEE IF VALUES ARE IN LOCAL STORAGE AND PUTS THEM IN VARIABLES
  txtUsername.value = localStorage.getItem('username');
  txtAnswer.value = localStorage.getItem('answer');


}

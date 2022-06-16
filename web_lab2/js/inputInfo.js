const acceptButton = document.getElementById('acceptButton');

acceptButton.addEventListener('click', e => {
  const inputFields = document.getElementsByName('inputField');
  for(i = 0; i < inputFields.length; i++){
    if(inputFields[i].value.length == 0){
      document.getElementById('error-message').style.display = 'inline';
      return;
    }
  }
  window.location = 'Profile.html';
})

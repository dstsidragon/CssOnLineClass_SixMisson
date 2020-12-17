
$(document).ready(() => {
  
  
  $('#loginButton').click(function (e) {
    e.preventDefault();
    $('#InputPassword').removeClass('is-invalid');
    $('#InputEAccount').removeClass('is-invalid');
    $('#InputPassword').removeClass('is-valid');
    $('#InputEAccount').removeClass('is-valid');

    if ($('#InputEAccount').val() == '' || $('#InputPassword').val() == '') {
        // alert('帳號密碼不得為空')
        if ($('#InputEAccount').val() == ''){
          $('#InputEAccount').addClass('is-invalid ');
          $('#InputEAccount').focus();
        }else{
          
          $('#InputEAccount').addClass('is-valid ');
        }
        if ($('#InputPassword').val() == ''){
          $('#InputPassword').addClass('is-invalid ');
          $('#InputPassword').focus();
        }else{
          $('#InputPassword').addClass('is-valid');
        }
    }
    else {
        window.location.href = 'member.html';
        $('#InputEAccount').val('');
        $('#InputPassword').val('');
    }

});
});
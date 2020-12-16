"use strict";

$(document).ready(function () {
  $('#loginButton').click(function (e) {
    e.preventDefault();
    $('#InputPassword').removeClass('is-invalid');
    $('#InputEAccount').removeClass('is-invalid');

    if ($('#InputEAccount').val() == '' || $('#InputPassword').val() == '') {
      // alert('帳號密碼不得為空')
      if ($('#InputEAccount').val() == '') {
        $('#InputEAccount').addClass('is-invalid ');
        $('#InputEAccount').focus();
      } else {
        $('#InputEAccount').addClass('is-valid ');
      }

      if ($('#InputPassword').val() == '') {
        $('#InputPassword').addClass('is-invalid ');
        $('#InputPassword').focus();
      } else {
        $('#InputPassword').addClass('is-valid');
      }
    } else {
      window.location.href = 'https://dstsidragon.github.io/CssOnLineClass_SixMisson/dist/member.html';
      $('#InputEAccount').val('');
      $('#InputPassword').val('');
    }
  });
});
//# sourceMappingURL=all.js.map

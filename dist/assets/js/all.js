"use strict";

$(document).ready(function () {
  //訂閱
  $('#subscribeButton').click(function (e) {
    e.preventDefault();
    $('#subscribeButton').removeAttr('data-target', '#subscribe');

    if ($('#subscribeEmail').val() == '') {
      alert('信箱地址不得為空');
    } else {
      $('#subscribeEmail').val("");
      $('#subscribeButton').attr('data-target', '#subscribe');
      $('#subscribeButton').onclick;
    }
  }); //登入頁面

  $('#loginButton').click(function (e) {
    e.preventDefault();
    $('#InputPassword').removeClass('is-invalid');
    $('#InputEAccount').removeClass('is-invalid');
    $('#InputPassword').removeClass('is-valid');
    $('#InputEAccount').removeClass('is-valid');

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
      window.location.href = 'member.html';
      $('#InputEAccount').val('');
      $('#InputPassword').val('');
    }
  }); //會員頁面

  $('#changePasswordButton').click(function (e) {
    e.preventDefault();
    $('#OldPassword').removeClass('is-invalid');
    $('#NewPassword').removeClass('is-invalid');
    $('#checkNewPassword').removeClass('is-invalid');
    $('#OldPassword').removeClass('is-valid');
    $('#NewPassword').removeClass('is-valid');
    $('#checkNewPassword').removeClass('is-valid');

    if ($('#OldPassword').val() == '' || $('#NewPassword').val() == '' || $('#checkNewPassword').val() == '') {
      // alert('帳號密碼不得為空')
      if ($('#OldPassword').val() == '') {
        $('#OldPassword').addClass('is-invalid ');
        $('#OldPassword').focus();
      } else {
        $('#OldPassword').addClass('is-valid ');
      }

      if ($('#NewPassword').val() == '') {
        $('#NewPassword').addClass('is-invalid ');
        $('#NewPassword').focus();
      } else {
        $('#NewPassword').addClass('is-valid');
      }

      if ($('#checkNewPassword').val() == '') {
        $('#checkNewPassword').addClass('is-invalid ');
        $('#checkNewPassword').focus();
      } else {
        $('#checkNewPassword').addClass('is-valid');
      }
    } else {
      if ($('#NewPassword').val() == $('#checkNewPassword').val()) {
        alert('密碼修改成功');
        $('#OldPassword').val('');
        $('#NewPassword').val('');
        $('#checkNewPassword').val('');
      } else {
        alert('新密碼兩次輸入不同!');
        $('#NewPassword').val('');
        $('#checkNewPassword').val('');
      }
    }
  });
});
//# sourceMappingURL=all.js.map

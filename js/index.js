const formButtons = 
 `<form class="form-signin" id="form-buttons">
    <button class="btn btn-lg btn-primary btn-block" type="button" id="repair">Восстановить пароль</button>
    <h1 class="h3 mb-3 font-weight-normal">Регистрация</h1>
    <button class="btn btn-lg btn-primary btn-block" type="button" id="student">Студент</button>
    <button class="btn btn-lg btn-primary btn-block" type="button" id="boss">Руководитель</button>
  </form>`;

const formSignIn =
 `<form class="form-signin" id="form-signin">
    <h1 class="h3 mb-3 font-weight-normal">Авторизация</h1>
    <label for="inputEmail" class="sr-only">Логин</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="Логин" required autofocus>
    <label for="inputPassword" class="sr-only">Пароль</label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" required>
    <button class="btn btn-lg btn-primary btn-block" type="submit" id="enter">Войти</button>
  </form>`;


$(document).ready(() => {

  $("#root").html(formSignIn + formButtons);
  
  $('#navbarDropdown').hide();
  
  $('#form-signin').submit(function (e) { 
    e.preventDefault();

    $.ajax({
      async: false,
      type: "POST",
      url: "php/auth.php",
      data: {
        login: $('#inputEmail').val().trim(),
        pass:  $('#inputPassword').val().trim()
      },
    })
    .done((message) => {
      if(message == 0) {
        alert('Неправильный логин или пароль!');
      } else {
        window.location.href = "/search.html";
      }
    });
  });

  $('#repair').click(() => {
    window.location.href = "/repair.html";
  })
  
  $('#student').click(() => {
    window.location.href = "/student_signup.html";
  })

  $('#boss').click(() => {
    window.location.href = "/boss_signup.html";
  })
  
});
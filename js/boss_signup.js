
const formBossSingup = 
 `<form class="form-signin" id="boss-form-singup">
    <h1 class="h3 mb-3 font-weight-normal">Регистрация руководителя</h1>
    <label for="surname1" class="sr-only">Фамилия</label>
    <input type="text" id="surname1" class="form-control" placeholder="Фамилия" required autofocus>
    <label for="name1" class="sr-only">Имя</label>
    <input type="text" id="name1" class="form-control" placeholder="Имя" required autofocus>
    <label for="middle_name1" class="sr-only">Отчество</label>
    <input type="text" id="middle_name1" class="form-control" placeholder="Отчество" autofocus>
    <label for="inputEmail3" class="sr-only">Электронная почта</label>
    <input type="email" id="inputEmail3" class="form-control" placeholder="Электронная почта" required autofocus>
    <label for="places" class="sr-only">Количество свободных мест</label>
    <input type="number" id="places" class="form-control" placeholder="Количество свободных мест" required autofocus>
    <label for="inputPassword2" class="sr-only">Пароль</label>
    <input type="password" id="inputPassword2" class="form-control" placeholder="Пароль" required>
    <button class="btn btn-lg btn-primary btn-block" type="submit" id="boss_signup">Зарегистриваться</button>
  </form>`;

 
$(document).ready(() => {

  
  $("#root").html(formBossSingup);
  
  $('#navbarDropdown').hide();
  
  $('#boss-form-singup').submit(function (e) { 
    e.preventDefault();

    $.ajax({
      async: false,
      type: "POST",
      url: "php/signup_user.php",
      data: {
        login: $('#inputEmail2').val().trim(),
        pass: $('#inputPassword1').val().trim() 
      },
    })
    .done((message) => {   
    });


  });

});
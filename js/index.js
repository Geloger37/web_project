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

const formStudentSingup = 
 `<form class="form-signin" id="student-form-singup">
    <h1 class="h3 mb-3 font-weight-normal">Регистрация студента</h1>
    <label for="surname" class="sr-only">Фамилия</label>
    <input type="text" id="surname" class="form-control" placeholder="Фамилия" required autofocus>
    <label for="name" class="sr-only">Имя</label>
    <input type="text" id="name" class="form-control" placeholder="Имя" required >
    <label for="middle_name" class="sr-only">Отчество</label>
    <input type="text" id="middle_name" class="form-control" placeholder="Отчество" >
    <label for="campus" class="sr-only">Ссылка на кампус</label>
    <input type="url" id="campus" class="form-control" placeholder="Ссылка на кампус" required >
    <label for="inputEmail2" class="sr-only">Электронная почта</label>
    <input type="email" id="inputEmail2" class="form-control" placeholder="Электронная почта" required >
    <label for="inputPassword1" class="sr-only">Пароль</label>
    <input type="password" id="inputPassword1" class="form-control" placeholder="Пароль" required>
    <button class="btn btn-lg btn-primary btn-block" type="submit" id="student_signup">Зарегистриваться</button>
  </form>`;

const formRepair = 
 `<form class="form-signin" id="form-repair">
    <h1 class="h3 mb-3 font-weight-normal">Восстановление</h1>
    <label for="inputEmail1" class="sr-only">Электронная почта</label>
    <input type="email" id="inputEmail1" class="form-control" placeholder="Электронная почта" required autofocus>
    <button class="btn btn-lg btn-primary btn-block" type="submit" id="enter">Отправить</button>
  </form>`;

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
  $("#root").html(formSignIn + formButtons);
  //$("#root").html(formStudentSingup);
  
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
    $("#root").html(formRepair);
  })
  
  $('#student').click(() => {
    $("#root").html(formStudentSingup);
  })

  $('#boss').click(() => {
    $("#root").html(formBossSingup);
  })
 
  

  // ToDo: доделать регистрацию
  $('#student-form-singup').submit(function (e) { 
    e.preventDefault();
  
    $.ajax({
      async: false,
      type: "GET",
      url: "php/signup_user.php",
      data: {
        login: $('#inputEmail2').val().trim(),
        pass:  $('#inputPassword1').val().trim()
      },
    })
    .done((message) => {
      //window.location.href = "/search.html";    
    });
    
    
    /*$.ajax({
      type: "POST",
      url: "php/student_signup.php",
      data: {
        login: $('#inputEmail2').val().trim(),
        pass:  $('#inputPassword1').val().trim()
      },
    })
    .done((message) => {
      
    });*/

     
  })

  $("#boss_signup").click(() => {
    $.post("boss_signup.php",
           {
               login : $.trim($("input[id='inputEmail']").val()),
                pass : $.trim($("input[type='password']").val())
           },
           (data, status) => {

           }
    )
         
  })

})







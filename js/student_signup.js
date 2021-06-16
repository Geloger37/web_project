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

$(document).ready(() => {

  $("#root").html(formStudentSingup);
  
  $('#navbarDropdown').hide();
  
  $('#student-form-singup').submit(function (e) { 
    e.preventDefault();
  
    $.ajax({
      type: "POST",
      url: "php/signup_user.php",
      data: {
        login: $('#inputEmail2').val().trim(),
        pass: $('#inputPassword1').val().trim()
      },
    })
    .done((message) => { 
      $.ajax({
        type: "POST",
        url: "php/student_signup.php",
        data: {
          surname: $('#surname').val().trim(),
          name: $('#name').val().trim(),
          middle_name: $('#middle_name').val().trim(),
          campus: $('#campus').val().trim(),
          login: $('#inputEmail2').val().trim(),
          pass: $('#inputPassword1').val().trim() 
        },
        
      })
      .done((message) => {

      });
    });
  
  

  

  })


  
});
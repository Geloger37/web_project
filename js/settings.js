const formSettings = 
 `<form class="form-signin" id="boss-form-settings">
    <h1 class="h3 mb-3 font-weight-normal">Настройка профиля</h1>

    <label for="email" class="sr-only">Электронная почта</label>
    <input type="email" id="email" class="form-control" placeholder="Электронная почта" required autofocus>

    <label for="placesNumber" class="sr-only">Количество свободных мест</label>
    <input type="number" id="placesNumber" class="form-control" placeholder="Количество свободных мест" required autofocus>

    <a class="nav-link dropdown-toggle" id="studentsDropdown" role="button" data-toggle="dropdown">Студенты</a>
    <div class="dropdown-menu" aria-labelledby="studentsDropdown">
      <a class="dropdown-item" id="settings">Настройки</a>
    </div>
    
    <button class="btn btn-lg btn-primary btn-block" type="submit" id="changeSettings">Сохранить изменения</button>
  </form>`;

$(document).ready(() => {
  $("#root").html(formSettings);
})

$("#changeSettings").click(() => {
  $.post("changeSettings.php",
        {
          email : $.trim($("input[id='email']").val()),
          placesNumber : $.trim($("input[id='placesNumber']").val()),
          messageForStudents : $.trim($("input[id='messageForStudents']").val()),
          students : $.trim($("input[id='students']").val()),
        },
        (data, status) => {
          
        }
  )
})

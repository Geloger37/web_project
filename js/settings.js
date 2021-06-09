const formSettings = 
 `<form class="form-signin" id="boss-form-singup">
    <h1 class="h3 mb-3 font-weight-normal">Настройка профиля</h1>

    <label for="email" class="sr-only">Электронная почта</label>
    <input type="email" id="email" class="form-control" placeholder="e-mail" required autofocus>

    <label for="placesNumber" class="sr-only">Количество свободных мест</label>
    <input type="number" id="placesNumber" class="form-control" placeholder="Имя" required autofocus>

    <label for="messageForStudents" class="sr-only">Сообщение студентам</label>
    <input type="text" id="messageForStudents" class="form-control" placeholder="Сообщение студентам" autofocus>

    <label for="students" class="sr-only">Электронная почта</label>
    <input type="email" id="students" class="form-control" placeholder="Электронная почта" required autofocus>
    
    <button class="btn btn-lg btn-primary btn-block" type="submit" id="changeSettings">Сохранить изменения</button>
  </form>`;

$(document).ready(() => {
  document.getElementById("root").innerHTML = formSettings;
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

const formSettings = 
 `<form class="form-signin" id="boss-form-settings">
    <h1 class="h3 mb-3 font-weight-normal">Настройка профиля</h1>

    <label for="email" class="sr-only">Электронная почта</label>
    <input type="email" id="email" class="form-control" placeholder="Электронная почта" required autofocus>

    <label for="placesNumber" class="sr-only">Количество свободных мест</label>
    <input type="number" id="placesNumber" class="form-control" placeholder="Количество свободных мест" required autofocus>

    <a class="nav-link dropdown-toggle" id="studentsDropdown" role="button" data-toggle="dropdown">Студенты</a>
    <form class="form-signin" id="boss-table">
    
    <table id="table-students"  cellspacing="0" width="100%">
      <thead>
            <tr>
                <th>Студент</th>
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Иванов И.И.</th>
            </tr>
            <tr>
                <th>Петров П.П.</th>
                
            </tr>

        </tbody>
    </table>
  </form>
    
    <button class="btn btn-lg btn-primary btn-block" type="submit" id="changeSettings">Сохранить изменения</button>
  </form>`;

$(document).ready(() => {
  $("#root").html(formSettings);
  $('#table-students').DataTable();
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

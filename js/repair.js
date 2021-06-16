

const formRepair = 
 `<form class="form-signin" id="form-repair">
    <h1 class="h3 mb-3 font-weight-normal">Восстановление</h1>
    <label for="inputEmail1" class="sr-only">Электронная почта</label>
    <input type="email" id="inputEmail1" class="form-control" placeholder="Электронная почта" required autofocus>
    <button class="btn btn-lg btn-primary btn-block" type="submit" id="enter">Отправить</button>
  </form>`;


$(document).ready(() => {

  $("#root").html(formRepair);
  
  $('#navbarDropdown').hide();
  
  $('#form-repair').submit(function (e) { 
    e.preventDefault();

    
    
  });

   
});
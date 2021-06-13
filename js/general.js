const headerNav = 
  `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/index.html">Мастер по поиску руководителей ВКР</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Иванов Иван Иванович
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/settings.html" id="settings">Настройки</a>
            <a class="dropdown-item" id="exit">Выход</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>`;

const footer = 
 `<div class="container">
    <span class="text-muted">@ИРНИТУ2021</span>
  </div>`;

const formBossSettings = 
 `<form class="form-signin" id="boss-form-singup">
    <h1 class="h3 mb-3 font-weight-normal">Насторойки руководителя</h1>
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
  $('#header').html(headerNav);
  $('#footer').html(footer);

})
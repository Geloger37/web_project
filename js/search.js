const tableSearch = 
 `<form class="form-signin" id="search_panel">
    <h1 class="h3 mb-3 font-weight-normal">Список руководителей</h1>
    <label for="searchBox" class="sr-only">Поиск</label>
    <input type="text" id="searchBox" class="form-control" placeholder="Список тегов" autofocus>
    <button class="btn btn-lg btn-primary btn-block" type="button" id="search_button">Поиск</button>
  </form>
  <form class="form-signin" id="boss-table">
    <table id="table-search" class="display" cellspacing="0" width="100%">
      <thead>
            <tr>
                <th>Название темы</th>
                <th>Студент</th>
                <th>Год</th>
                <th>Специальность</th>
                <th>Рейтинг</th>
            </tr>
        </thead>
        
    </table>
  </form>`

  $(document).ready(() => {
    $("#root").html(tableSearch);
    $('#table-search').DataTable();
  });

  $('#search_button').click(() => {
     e.preventDefault();

    $.ajax({
      async: false,
      type: "POST",
      //url: "php/auth.php", Придумай URL по типу search.php  
      data: {
        tags: $('#searchBox').val().trim().split(',')
      },
    })
    .done((message) => {
      //Я тупой и немогу придумать как результат вводить в таблицу :(
    });
  });

  function get_rating(major, minor) {
    return 10*major + minor;
  }
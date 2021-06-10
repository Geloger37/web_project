const tableSearch = 
 `<form class="form-signin" id="boss-table">
    <h1 class="h3 mb-3 font-weight-normal">Список руководителей</h1>
    <table id="table-search" class="display" cellspacing="0" width="100%">
      <thead>
            <tr>
                <th>Название темы</th>
                <th>Студент</th>
                <th>Год</th>
                <th>Специальность</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Название темы</th>
                <th>Студент</th>
                <th>Год</th>
                <th>Специальность</th>
            </tr>
        </tbody>
    </table>
  </form>`

  $(document).ready(() => {
    $("#root").html(tableSearch);
  })
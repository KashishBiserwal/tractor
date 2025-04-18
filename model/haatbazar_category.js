$(document).ready(function(){
    $('#btn_submit').click(store);
    $('#btn_submit_1').click(edit_user);
});
function get() {
    var apiBaseURL = APIBaseURL;
    var url = apiBaseURL + 'haat_bazar_category';
    $.ajax({
        url: url,
        type: "GET",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        success: function (data) {
            const tableBody = document.getElementById('data-table');
            tableBody.innerHTML = ''; 
            if (data.allCategory.length > 0) {
                let serialNumber = 1; 
                let tableData = [];
                data.allCategory.forEach(row => {
                   let action = ` <div class="d-flex">
                                    <button class="btn btn-danger btn-sm mx-1" id="delete_user" onclick="destroy(${row.id});" style="padding:5px;">
                                      <i class="fa fa-trash" style="font-size: 11px;"></i>
                                    </button>
                                    <button class="btn btn-primary btn-sm btn_edit" onclick="fetch_edit_data(${row.id});" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" id="yourUniqueIdHere">
                                      <i class="fas fa-edit" style="font-size: 11px;"></i>
                                  </button>
                                  </div>`;
                
                    tableData.push([
                      serialNumber,
                      row.category_name,
                      action
                  ]);
                    serialNumber++;
                    
                });
                $('#example').DataTable().destroy();
                $('#example').DataTable({
                        data: tableData,
                        columns: [
                          { title: 'ID' },
                          { title: 'Category' },
                          { title: 'Action', orderable: false } 
                      ],
                        paging: true,
                        searching: true,
                    });
            } else {
                tableBody.innerHTML = '<tr><td colspan="7">No valid data available</td></tr>';
            }
        },
        error: function (error) {
            console.error('Error fetching data:', error);
            if(error.status == '401' && error.responseJSON.error == 'Token expired or invalid'){
              $("#errorStatusLoading").modal('show');
              $("#errorStatusLoading").find('.modal-title').html('Error');
              $("#errorStatusLoading").find('.modal-body').html(error.responseJSON.error);
              window.location.href = baseUrl + "login.php"; 
  
            }
        }
    });
  }
  get();

  //  add category
  function store(event) {
    event.preventDefault();
    var category_name = $('#category').val();
    var paraArr = {
      'category_name': category_name
    };
  
  var apiBaseURL =APIBaseURL;
  var url = apiBaseURL + 'haat_bazar_category';
  var token = localStorage.getItem('token');
  var headers = {
    'Authorization': 'Bearer ' + token
  };
    $.ajax({
        url: url,
        type: "POST",
        data: paraArr,
        headers: headers,
        success: function (result) {
            console.log(result, "result");
            alert('successfully inserted..!');
            $('#staticBackdrop1').modal('hide');
              window.location.reload();
        },
        error: function (error) {
            console.error('Error fetching data:', error);
        }
    });
}
   // edit and update 
   function fetch_edit_data(id) {
    var apiBaseURL = APIBaseURL;
    var url = apiBaseURL + 'haat_bazar_category/' + id;
    var headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    };
    $.ajax({
        url: url,
        type: 'GET',
        headers: headers,
        success: function (response) {
            var Data = response.allCategory[0];
            $('#idUser').val(Data.id);
            $('#category_1').val(Data.category_name);
        },
        error: function (error) {
            console.error('Error fetching user data:', error);
        }
    });
  }

function edit_user() {
  var edit_id = $("#idUser").val();
  var category_name = $("#category_1").val();
  var paraArr = {
      'category_name': category_name,
      'id': edit_id, 
};

  var apiBaseURL = APIBaseURL;
  var url = apiBaseURL + 'haat_bazar_category/' + edit_id;
  var headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
  };
  $.ajax({
      url: url,
      type: "PUT",
      data: paraArr,
      headers: headers,
      success: function (result) {
          get();
          $("#staticBackdrop2").modal('hide');
          var msg = "Updated successfully !"
          $("#errorStatusLoading").modal('show');
          $("#errorStatusLoading").find('.modal-title').html('Success');
          $("#errorStatusLoading").find('.modal-body').html(msg);
            window.location.reload();
      },
      error: function (error) {
          console.error('Error fetching data:', error);
          var msg = error;
          $("#errorStatusLoading").modal('show');
          $("#errorStatusLoading").find('.modal-title').html('Error');
          $("#errorStatusLoading").find('.modal-body').html(msg);
      }
  });
}
function destroy(id) {
    console.log(id);
    var apiBaseURL = APIBaseURL;
    var url = apiBaseURL + 'haat_bazar_category/' + id;
    var token = localStorage.getItem('token');
    if (!token) {
      console.error("Token is missing");
      return;
    }
    var isConfirmed = confirm("Are you sure you want to delete this data?");
    if (!isConfirmed) {
      return;
    }
    $.ajax({
      url: url,
      type: "DELETE",
      headers: {
        'Authorization': 'Bearer ' + token
      },
      success: function(result) {
        window.location.reload();
        console.log("Delete request successful");
        alert("Delete operation successful");
      },
      error: function(error) {
        console.error('Error fetching data:', error);
        alert("Error during delete operation");
      }
    });
  }
  function myFunction() {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("namesearch");
    filter = input.value.toUpperCase();
    table = $('#example').DataTable(); 
    table.search(filter).draw();
  }
  
  function resetForm() {
    document.getElementById("myform").reset();
    var table = $('#example').DataTable();
    table.search('').draw();
  }
$(document).ready(function() {
  $("#Reset").click(function () {
    $("#lookup_type").val("");
    $("#lookup_data").val("");
    get_data();
});
  $('#dataeditbtn').click(edit_user);
  $("#lookup_data_form").validate({
    rules: {
      lookup_Selectbox: {
        required: true,
      },
      lookup_datavalue: {
        required: true,
      }
    },
    messages: {
      lookup_Selectbox: {
        required: "This field is required",
      },
      lookup_datavalue: {
        required: "This field is required",
      }
    },
    submitHandler: function (form) {
        var msg = "Form submitted successfully !"
        $("#errorStatusLoading").modal('show');
        $("#errorStatusLoading").find('.modal-title').html('Success');
        $("#errorStatusLoading").find('.modal-body').html(msg);
    },
  });
  $("#lookup_data_submit").on("click", function () {
      $("#lookup_data_form").valid();
  });
$('#lookup_data_submit').click(store);
   // for edit model
   $("#lookup_data_form_1").validate({
    rules: {
      lookup_Selectbox1: {
        required: true,
      },
      lookup_datavalue1: {
        required: true,
      }
    },
    messages: {
      lookup_Selectbox1: {
        required: "This field is required",
      },
      lookup_datavalue1: {
        required: "This field is required",
      }
    },
    submitHandler: function (form) {
      var msg = "Form submitted successfully !";
      $("#errorStatusLoading").modal('show');
      $("#errorStatusLoading").find('.modal-title').html('Success');
      $("#errorStatusLoading").find('.modal-body').html(msg);
    },
  });
  $("#dataeditbtn").on("click", function () {
    $("#lookup_data_form_1").valid();
  });
});

function get_data() {
  console.log('hhsdfshdfch');
  var apiBaseURL = APIBaseURL;
  var url = apiBaseURL + 'lookup_data';

  $.ajax({
      url: url,
      type: 'GET',
      headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      success: function (data) {
          const tableBody = document.getElementById('data-table');
          tableBody.innerHTML = ''; 
          if (data.lookup_data.length > 0) {
            let tableData = [];
            let serialNumber = data.lookup_data.length;
            data.lookup_data.forEach(row => {
              let action = `<div class="d-flex">
              <button class="btn btn-danger btn-sm mx-1" id="delete_user" onclick="destroy(${row.id});" style="padding:5px;">
                <i class="fa fa-trash" style="font-size: 11px;"></i>
              </button>
              <button class="btn btn-primary btn-sm btn_edit" onclick="fetch_edit_data(${row.id});" data-bs-toggle="modal" data-bs-target="#staticBackdrop_2" id="yourUniqueIdHere">
                <i class="fas fa-edit" style="font-size: 11px;"></i>
              </button>
             </div>`;
            tableData.push([
            serialNumber--,
            row.name,
            row.lookup_data_value,
            action
          ]);
        });
        $('#example').DataTable().destroy();
        $('#example').DataTable({
          data: tableData,
          columns: [
            { title: 'ID' },
            { title: 'Lookup Type' },
            { title: 'Lookup Data' },
            { title: 'Action', orderable: false } 
          ],
          paging: true,
          searching: false,
        });
        } else {
          tableBody.innerHTML = '<tr><td colspan="7">No valid data available</td></tr>';
          if(error.status == '401' && error.responseJSON.error == 'Token expired or invalid'){
            $("#errorStatusLoading").modal('show');
            $("#errorStatusLoading").find('.modal-title').html('Error');
            $("#errorStatusLoading").find('.modal-body').html(error.responseJSON.error);
            window.location.href = baseUrl + "login.php"; 
          }
        }
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
get_data();

function store(event) {
  event.preventDefault();
  var lookup_type = $('#lookupSelectbox').val();
  var lookup_data_value = $('#lookup_data_value').val();
  var paraArr = {
    'lookup_type_id': lookup_type,
    'lookup_data_value': lookup_data_value
  };
  var apiBaseURL = APIBaseURL;
  var url = apiBaseURL + 'lookup_data';
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
      var msg = "Added successfully !"
      $("#errorStatusLoading").modal('show');
      $("#errorStatusLoading").find('.modal-title').html('Success');
      $("#errorStatusLoading").find('.modal-body').html(msg);
      $("#staticBackdrop1").modal('hide');
      var alertConfirmation = confirm("Data added successfully. Do you want to reload the page?");
      if (alertConfirmation) {
        window.location.reload();
      }
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

function get() {
  var apiBaseURL =APIBaseURL;
  var url = apiBaseURL + 'lookup_type';
  $.ajax({
      url: url,
      type: "GET",
      headers: {
          'Authorization':'Bearer' + localStorage.getItem('token')
      },
      success: function (data) {
          const select = document.getElementById('lookupSelectbox');
          select.innerHTML = ''; 
          if (data.lookup_type.length > 0) {
              data.lookup_type.forEach(row => {
                  const option = document.createElement('option');
                  option.textContent = row.name;
                  option.value = row.id;
                  select.appendChild(option);
              });
          } else {
              select.innerHTML = '<option> No valid data available</option>';
          }
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
  get();

  function get_lookup() {
    var apiBaseURL =APIBaseURL;
    var url = apiBaseURL + 'lookup_type';
    $.ajax({
        url: url,
        type: "GET",
        headers: {
            'Authorization':'Bearer' + localStorage.getItem('token')
        },
        success: function (data) {
            const select = document.getElementById('lookupSelectbox1');
            select.innerHTML = '';
            if (data.lookup_type.length > 0) {
                data.lookup_type.forEach(row => {
                    const option = document.createElement('option');
                    option.textContent = row.name;
                    option.value = row.id;
                    select.appendChild(option);
                });
            } else {
                select.innerHTML = '<option> No valid data available</option>';
            }
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
get_lookup();

  // **delete***
  function destroy(id) {
    var apiBaseURL = APIBaseURL;
    var url = apiBaseURL + 'lookup_data/' + id;
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
        get_dealers();
        alert("Delete operation successful");
      },
      error: function(error) {
        console.error('Error fetching data:', error);
        alert("Error during delete operation");
      }
    });
  }

function searchdata() {
  var lookup_type = $('#lookup_type').val();
  var lookup_data = $('#lookup_data').val();
  var paraArr = {
    'lookup_type': lookup_type,
    'lookup_data':lookup_data,
  };
  var apiBaseURL = APIBaseURL;
  var url = apiBaseURL + 'search_for_lookup_data';
  $.ajax({
      url:url, 
      type: 'POST',
      data: paraArr,
      headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      success: function (searchData) {
        updateTable(searchData);
      },
      error: function (error) {
          console.error('Error searching for brands:', error);
      }
  });
};
function updateTable(data) {
  const tableBody = document.getElementById('data-table');
  tableBody.innerHTML = '';
  let serialNumber = 1; 
  if(data.lookupType && data.lookupType.length > 0) {
      let tableData = []; 
      data.lookupType.forEach(row => {
          let action =  `<div class="d-flex">
          <button class="btn btn-danger btn-sm mx-1" id="delete_user" onclick="destroy(${row.id});" style="padding:5px;">
              <i class="fa fa-trash" style="font-size: 11px;"></i>
          </button>
          <button class="btn btn-primary btn-sm btn_edit" onclick="fetch_edit_data(${row.id});" data-bs-toggle="modal" data-bs-target="#staticBackdrop_2" id="yourUniqueIdHere">
             <i class="fas fa-edit" style="font-size: 11px;"></i>
          </button>
      </div>`;
          tableData.push([
            serialNumber,
            row.name,
            row.lookup_data_value,
            action
        ]);
        serialNumber++;
    });
    $('#example').DataTable().destroy();
    $('#example').DataTable({
        data: tableData,
        columns: [
          { title: 'ID' },
          { title: 'Lookup Type' },
          { title: 'Lookup Data' },
          { title: 'Action', orderable: false }
        ],
        paging: true,
        searching: false,
    });
  } else {
      tableBody.innerHTML = '<tr><td colspan="4">No valid data available</td></tr>';
  }
}

// edit and update 
function fetch_edit_data(id) {
    var apiBaseURL = APIBaseURL;
    var url = apiBaseURL + 'lookup_data/' + id; 
    var headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    };
  $.ajax({
    url: url,
    type: 'GET',
    headers: headers,
    success: function (response) {
      var Data = response.lookup_data[0];
      $('#idUser').val(Data.id);
      $('#lookupSelectbox1').val(Data.lookup_type_id);
      $('#lookup_data_value1').val(Data.lookup_data_value);
    },
    error: function (error) {
      console.error('Error fetching user data:', error);
      var msg = error;
      $("#errorStatusLoading").modal('show');
      $("#errorStatusLoading").find('.modal-title').html('Error');
      $("#errorStatusLoading").find('.modal-body').html(msg);
    }
  });
}
  
  function edit_user() {
    var edit_id = $("#idUser").val();
    var lookup_type = $("#lookupSelectbox1").val();
    var lookup_value = $("#lookup_data_value1").val();
    var paraArr = {
        'lookup_type_id': lookup_type,
        'lookup_data_value': lookup_value,
        'id': edit_id, 
    };
    var apiBaseURL = APIBaseURL;
    var url = apiBaseURL + 'lookup_data/' + edit_id;
    var headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    };
  
    $.ajax({
        url: url,
        type: "PUT",
        data: paraArr,
        headers: headers,
        success: function (result) {
          window.location.reload();
          var msg = "Updated successfully !"
        $("#errorStatusLoading").modal('show');
        $("#errorStatusLoading").find('.modal-title').html('Success');
        $("#errorStatusLoading").find('.modal-body').html(msg);
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
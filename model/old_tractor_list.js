var customer_id = "";
var editId_state= false;
$(document).ready(function() {
  ImgUpload();
  $('#old_btn').click(store);
  $('#search').click(search_data);
  $("#Reset").click(function () {

    $("#brand_name").val("");
    $("#model_name").val("");
    $("#state_name").val("");
    $("#district_name").val("");
    get_tractor_list();
    
    });
    jQuery.validator.addMethod("customPhoneNumber", function(value, element) {
      return /^[6-9]\d{9}$/.test(value); 
    }, "Phone number must start with 6 or above");
      $("#old_tract").validate({
          rules: {
              first_name: 'required',
              last_name: 'required',
              mobile_number: {
                required:true,
                minlength: 10,
                maxlength:10,
                 digits: true,
                customPhoneNumber: true
              },
              state: "required",
              district: "required",
              brand:"required",
              model:"required",
              purchase_year:"required",
              condition:"required",
              tyrecondition:"required",
              price_old:{
                required:'true',        
               },
              image_pic:{

                required: true,
              },
              hours_driven:"required",
              rc_num:"required",
              description:{
                required: true,
                 minlength: 10, 
                  maxlength: 1000 
              },
              fav_language:"required",
              fav_language1:"required",
          },  
           messages: {
            image:{
              required: "This field is required",
            },
           },

      });
      $('#old_btn').on('click', function() {
          $('#old_tract').valid();
          console.log($('#old_tract').valid());
      });
  });

  function formatPriceWithCommas(price) {
    if (isNaN(price)) {
        return price; 
    }
     return price.toLocaleString('en-IN', { maximumFractionDigits: 2 });
}

  function ImgUpload() {
    var imgWrap = "";
    var imgArray = [];

    $('.upload__inputfile').each(function () {
      $(this).on('change', function (e) {
        imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
        var maxLength = $(this).attr('data-max_length');

        var files = e.target.files;
        var filesArr = Array.prototype.slice.call(files);
        var iterator = 0;
        filesArr.forEach(function (f, index) {

          if (!f.type.match('image.*')) {
            return;
          }

          if (imgArray.length > maxLength) {
            return false
          } else {
            var len = 0;
            for (var i = 0; i < imgArray.length; i++) {
              if (imgArray[i] !== undefined) {
                len++;
              }
            }
            if (len > maxLength) {
              return false;
            } else {
              imgArray.push(f);

              var reader = new FileReader();
              reader.onload = function (e) {
                var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
                imgWrap.append(html);
                iterator++;
              }
              reader.readAsDataURL(f);
            }
          }
        });
      });
    });

    $('body').on('click', ".upload__img-close", function (e) {
      var file = $(this).parent().data("file");
      for (var i = 0; i < imgArray.length; i++) {
        if (imgArray[i].name === file) {
          imgArray.splice(i, 1);
          break;
        }
      }
      $(this).parent().parent().remove();
    });
  }
  
    function removeImage(ele){
      console.log("print ele");
        console.log(ele);
        let thisId=ele.id;
        thisId=thisId.split('closeId');
        thisId=thisId[1];
        $("#"+ele.id).remove();
        $(".upload__img-closeDy"+thisId).remove();
    
      }

    function getbrand() {
      var url = "https://shopninja.in/bharatagri/api/public/api/customer/get_brand_by_product_id/" + 2;
      $.ajax({
          url: url,
          type: "GET",
          headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
          },
          success: function (data) {
              console.log(data);
              const selects = document.querySelectorAll('#brand');
    
              selects.forEach(select => {
                  select.innerHTML = '<option selected disabled value="">Please select an option</option>';
    
                  if (data.brands.length > 0) {
                      data.brands.forEach(row => {
                          const option = document.createElement('option');
                          option.textContent = row.brand_name;
                          option.value = row.id;
                          console.log(option);
                          select.appendChild(option);
                      });
    
                      // Add event listener to brand dropdown
                      select.addEventListener('change', function() {
                          const selectedBrandId = this.value;
                          get_model(selectedBrandId);
                      });
                  } else {
                      select.innerHTML = '<option>No valid data available</option>';
                  }
              });
          },
          error: function (error) {
              console.error('Error fetching data:', error);
          }
      });
    }
    
    function get_model(brand_id) {
      var product_type_id = 1; 
      var url = `https://shopninja.in/bharatagri/api/public/api/customer/get_brand_model/${brand_id}?product_type_id=${product_type_id}`;
      
      console.log('Requesting models for brand ID:', brand_id); // Debugging statement
      
      $.ajax({
          url: url,
          type: "GET",
          headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
          },
          success: function (data) {
              console.log('Received models data:', data); // Debugging statement
              const selects = document.querySelectorAll('#model');
  
              selects.forEach(select => {
                  // Clear the existing options
                  select.innerHTML = '<option selected disabled value="">Please select an option</option>';
                  
                  if (Array.isArray(data.model) && data.model.length > 0) {
                      data.model.forEach(modelName => {
                          const option = document.createElement('option');
                          option.textContent = modelName.trim();  // Trim spaces
                          option.value = modelName.trim();  // Trim spaces
                          select.appendChild(option);
                      });
                  } else {
                      select.innerHTML = '<option>No valid data available</option>';
                  }
              });
          },
          error: function (error) {
              console.error('Error fetching model data:', error);
          }
      });
  }
  
    getbrand();


function get_year_and_hours() {
  console.log('initsfd')
  var apiBaseURL = APIBaseURL;
  var url = apiBaseURL + 'get_year_and_hours';
  $.ajax({
      url: url,
      type: "GET",
      headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      success: function (data) {
          var hours_select = $("#hours_driven");
          hours_select.empty(); // Clear existing options
          hours_select.append('<option selected disabled="" value="">Please select an option</option>'); 
          console.log(data, 'ok');
          for (var k = 0; k < data.getHoursDriven.length; k++){
              var optionText = data.getHoursDriven[k].start + " - " + data.getHoursDriven[k].end;
              hours_select.append('<option value="' + k + '">' + optionText + '</option>');
          } 

          var select_year = $("#purchase_year");
          select_year.empty(); // Clear existing options
          select_year.append('<option selected disabled="" value="">Please select an option</option>'); 

          // Sort the array in descending order
          data.getYears.sort(function(a, b) {
              return b - a;
          });

          for (var j = 0; j < data.getYears.length; j++) {
              select_year.append('<option value="' + data.getYears[j] + '">' + data.getYears[j] + '</option>');
          }
      },
      complete: function() {
          // You can add code here that will run after the request is complete
      },
      error: function (error) {
          console.error('Error fetching data:', error);
      }
  });
}

get_year_and_hours();



function store(event) {
  console.log('run store function');
     event.preventDefault();
    var enquiry_type_id = 1;
    var image_type_id = 1;
    var tractor_type_id=1;
    var product_type_id=1;
    var form_type ='FOR_SELL_TRACTOR';
     var image_names = document.getElementById('_image').files;
     console.log('imgds',image_names);
     console.log('tractor_type_id',tractor_type_id);
     var first_name = $('#first_name').val();
     var customer_id = $('#customer_id').val();
     console.log(first_name);
     var last_name = $('#last_name').val();
     var mobile = $('#mobile_number').val();
     var state = $('#state').val();
     var district = $('#district').val();
     var brand_name = $('#brand').val();
     var Model_name = $('#model').val();
     var purchase_year = $('#purchase_year').val();;
     var tehsil = $('#tehsil').val();
     var engine_condition = $('#condition').val();
     var tyre_condition = $('#tyrecondition').val();
     var hours_driven = $('#hours_driven').val();
     var rc = $('#rc_num').val();
     var rc_number = $('input[name="fav_rc"]:checked').val();
    
     var finance = $('input[name="fav_language"]:checked').val();
     var nocAvailable;

      if (finance == 1) {
        nocAvailable = 1;
      } else {
        nocAvailable = 0;
      }
    //  var nocAvailable = $('input[name="fav_language1"]:checked').val();
     var price= $('#price_old').val();
     price = price.replace(/[\,\.\s]/g, '');
     var description = $('#description').val();
 
    
     var apiBaseURL =APIBaseURL;
    //  var url = apiBaseURL + 'customer_enquiries';
     var token = localStorage.getItem('token');
     var headers = {
       'Authorization': 'Bearer ' + token
     };

     var _method = 'POST';
    var url, method;
    
    console.log('edit state',editId_state);
    console.log('edit id', EditIdmain_);
    if (customer_id!="" && customer_id!=" ") {
        // Update mode
        console.log(editId_state, "state");
        _method = 'put';
        url = apiBaseURL + 'customer_enquiries/' + customer_id ;
        console.log(url);
        method = 'POST'; 
    } else {
        // Add mode
        url = apiBaseURL + 'customer_enquiries';
        method = 'POST';
    }
     var data = new FormData();
    
     for (var x = 0; x < image_names.length; x++) {
       data.append("images[]", image_names[x]);
       console.log("multiple image", image_names[x]);
     }
    //  data.append('product_id',EditIdmain_);
       data.append('customer_id',customer_id);
       data.append('form_type',form_type);
       data.append('_method',_method);
       data.append('product_type_id', product_type_id);
       data.append('enquiry_type_id', enquiry_type_id);
       data.append('image_type_id', image_type_id);
       data.append('tractor_type_id', tractor_type_id);
       data.append('first_name', first_name);
       data.append('last_name', last_name);
       data.append('mobile', mobile);
       data.append('brand_id', brand_name);
       data.append('vehicle_registered_num', rc);
       data.append('model', Model_name);
       data.append('purchase_year', purchase_year);
       data.append('engine_condition', engine_condition);
       data.append('tyre_condition', tyre_condition);
       data.append('hours_driven', hours_driven);
       data.append('state',state);
       data.append('district',district);
       data.append('tehsil',tehsil);
       data.append('rc_number',rc_number);
       data.append('price',price);
       data.append('description', description);
       data.append('finance', finance);
       data.append('noc', nocAvailable);

     $.ajax({
      url: url,
        type: method,
        data: data,
        headers: headers,
        processData: false,
        contentType: false,
       success: function (result) {
         console.log(result, "result");
         // getTractorList();
         console.log("Add successfully");
         get_tractor_list();
          if(result.length){
         //   get_tractor_list();
         }
         alert('successfully inserted..!')
       },
       error: function (error) {
         console.error('Error fetching data:', error);
       }
     });
   }
  function formatDateTime(originalDateTimeStr) {
    const originalDateTime = new Date(originalDateTimeStr);
    const pad = (num) => (num < 10 ? '0' : '') + num;
    const day = pad(originalDateTime.getDate());
    const month = pad(originalDateTime.getMonth() + 1);
    const year = originalDateTime.getFullYear();
    const hours = pad(originalDateTime.getHours());
    const minutes = pad(originalDateTime.getMinutes());
    const seconds = pad(originalDateTime.getSeconds());

    return `${day}-${month}-${year} / ${hours}:${minutes}:${seconds}`;
    }
   // fetch data
   function get_tractor_list() {
    var apiBaseURL = APIBaseURL;
    var url = apiBaseURL + 'get_old_tractor';
    $.ajax({
        url: url,
        type: "GET",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        success: function (data) {
            const tableBody = document.getElementById('data-table');

            if (data.product && data.product.length > 0) {
                let tableData = [];
                // let counter = 1;
                let counter = data.product.length;
                  data.product.forEach(row => {
                    let action = `
                        <div class="d-flex">
                            <button class="btn btn-warning btn-sm text-white mx-1" data-bs-toggle="modal" onclick="fetch_data(${row.customer_id});" data-bs-target="#exampleModal">
                                <i class="fa-solid fa-eye" style="font-size: 11px;"></i>
                            </button>
                            <button class="btn btn-primary btn-sm btn_edit" onclick="fetch_edit_data(${row.customer_id});" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="yourUniqueIdHere" style="padding:5px">
                                <i class="fas fa-edit" style="font-size: 11px;"></i>
                            </button>
                            <button class="btn btn-danger btn-sm mx-1" onclick="destroy(${row.customer_id});" style="padding:5px">
                                <i class="fa fa-trash" style="font-size: 11px;"></i>
                            </button>
                        </div>`;

                    tableData.push([
                        counter--,
                        formatDateTime(row.date),
                        row.brand_name,
                        row.model,
                        row.purchase_year,
                        row.state_name,
                        action
                    ]);
                });

                $('#example').DataTable().destroy();
                $('#example').DataTable({
                    data: tableData,
                    columns: [
                        { title: 'S.No.' },
                        { title: 'Date' },
                        { title: 'Brand' },
                        { title: 'Model' },
                        { title: 'Purchase Year' },
                        { title: 'State' },
                        { title: 'Action', orderable: true }
                    ],
                    paging: true,
                    searching: false,
                });
            } else {
                tableBody.innerHTML = '<tr><td colspan="9">No valid data available</td></tr>';
               
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
get_tractor_list();

function updateTable(data) {
  const tableBody = $('#data-table');
  tableBody.empty();

  if (data && data.oldTractor && data.oldTractor.length > 0) {
    let serialNumber = data.oldTractor.length;
    let tableData = [];

    data.oldTractor.forEach((row, index) => {
      let action = `
        <div class="d-flex">
          <button class="btn btn-warning btn-sm text-white mx-1" data-bs-toggle="modal" onclick="fetch_data(${row.customer_id});" data-bs-target="#exampleModal">
            <i class="fa-solid fa-eye" style="font-size: 11px;"></i>
          </button>
          <button class="btn btn-primary btn-sm btn_edit" onclick="fetch_edit_data(${row.customer_id});" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="yourUniqueIdHere" style="padding:5px">
            <i class="fas fa-edit" style="font-size: 11px;"></i>
          </button>
          <button class="btn btn-danger btn-sm mx-1" onclick="destroy(${row.customer_id});" style="padding:5px">
            <i class="fa fa-trash" style="font-size: 11px;"></i>
          </button>
        </div>`;

      tableData.push([
        serialNumber - index, // Decrement serial number here
        formatDateTime(row.date),
        row.brand_name,
        row.model,
        row.purchase_year,
        row.state_name,
        action
      ]);
    });

    $('#example').DataTable().destroy();
    $('#example').DataTable({
      data: tableData,
      columns: [
        { title: 'S.No.' },
        { title: 'Date' },
        { title: 'Brand' },
        { title: 'Model' },
        { title: 'Purchase Year' },
        { title: 'State' },
        { title: 'Action', orderable: true }
      ],
      paging: true,
      searching: false,
      // ... other options ...
    });
  } else {
    const errorMessage = (data && data.error && data.error.message) ? data.error.message : 'No valid data available';
    tableBody.html(`<tr><td colspan="7">${errorMessage}</td></tr>`);
  }
}

function search_data() {
  const selectedBrand = $('#brand_name').val();
  const model = $('#model_name').val();
  const state = $('#state_name').val();
  const paraArr = {
    'brand_id': selectedBrand,
    'model': model,
    'state': state,
  };

  const apiBaseURL = APIBaseURL;
  const url = apiBaseURL + 'search_for_old_tractor';
  $.ajax({
    url: url,
    type: 'POST',
    data: paraArr,
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
    success: function (searchData) {
      updateTable(searchData);
    },
    error: function (xhr, status, error) {
      const tableBody = $('#data-table');
      if (xhr.status === 404) {
        tableBody.html('<tr><td colspan="7">No valid data available</td></tr>');
      } else {
        console.error('Error searching for brands:', error);
        tableBody.html('<tr><td colspan="7">Error fetching data</td></tr>');
      }
    }
  });
}
function removeImage(ele){
  console.log("print ele");
    console.log(ele);
    let thisId=ele.id;
    thisId=thisId.split('closeId');
    thisId=thisId[1];
    $("#"+ele.id).remove();
    $(".upload__img-closeDy"+thisId).remove();

  }
// fetch edit data
function fetch_edit_data(customer_id) {
  console.log(customer_id, 'customer_id');
  var apiBaseURL = APIBaseURL;
  var url = apiBaseURL + 'get_old_tractor_by_id/' + customer_id;
  editId_state = true;
  // EditIdmain_= product_id;
  var headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  };
  $.ajax({
    url: url,
    type: 'GET',
    headers: headers,
    success: function(response) {
      var userData = response.product[0];
      var formattedPrice = parseFloat(userData.price).toLocaleString('en-IN');
      $('#customer_id').val(userData.customer_id);
      $('#enquiry_type_id').val(userData.enquiry_type_id);
      $('#image_type_id').val(userData.image_type_id);
      $('#tractor_type_id').val(userData.tractor_type_id);
      $('#form_type').val(userData.form_type);
      $('#first_name').val(userData.first_name);
      $('#last_name').val(userData.last_name);
      $('#mobile_number').val(userData.mobile);
      $('#price_old').val(formattedPrice);
      // $('#description').val(userData.description);
      $("#purchase_year option").prop("selected", false);
      $("#purchase_year option[value='" + userData.purchase_year + "']").prop("selected", true);

      $("#hours_driven option").prop("selected", false);
      $("#hours_driven option[value='" + userData.hours_driven + "']").prop("selected", true);

      $("#condition option").prop("selected", false);
      $("#condition option[value='" + userData.engine_condition + "']").prop("selected", true);

      $("#tyrecondition option").prop("selected", false);
      $("#tyrecondition option[value='" + userData.tyre_condition + "']").prop("selected", true);

      setSelectedOption('state', userData.state_id);
      getDistricts(userData.state_id, 'district-dropdown1', 'tehsil-dropdown1');
      setTimeout(function() {
        setSelectedOption('district', userData.district_id);
        populateTehsil(userData.district_id, 'tehsil-dropdown1', userData.tehsil_id);
      }, 1000); 
    
      $('#product_type_id').val(userData.product_type);
      $('#rc_num').val(userData.vehicle_registered_num);
      $('input[name="fav_rc"]').filter('[value="' + userData.rc_number + '"]').prop('checked', true);
      console.log('userData.rc_number:', userData.rc_number);
      $('input[name="fav_language1"]').filter('[value="' + userData.noc + '"]').prop('checked', true);
      $('input[name="fav_language"]').filter('[value="' + userData.finance + '"]').prop('checked', true);

      if (userData.rc_number == 1) {
        $('.rc-num-container').removeClass('hidden');
        $('#rc_num').val(userData.vehicle_registered_num);
      } else {
        $('.rc-num-container').addClass('hidden');
      }

      if (userData.finance == 1) {
        $('#nocDiv').show();
      } else {
        $('#nocDiv').hide();
      }
      var brandDropdown = document.getElementById('brand');
      for (var i = 0; i < brandDropdown.options.length; i++) {
        if (brandDropdown.options[i].text === userData.brand_name) {
          brandDropdown.selectedIndex = i;
          break;
        }
      }

      $('#model').empty(); 
      get_model(userData.brand_id); 

      // Selecting the option in the model dropdown
      setTimeout(function() { // Wait for the model dropdown to populate
          $("#model option").prop("selected", false);
          $("#model option[value='" + userData.model + "']").prop("selected", true);
      }, 2000); // Adjust the delay time as needed

      $("#selectedImagesContainer").empty();
      if (userData.image_names) {
        var imageNamesArray = Array.isArray(userData.image_names) ? userData.image_names : userData.image_names.split(',');
        
        var countclass=0;
        imageNamesArray.forEach(function (image_names) {
            var imageUrl = 'https://shopninja.in/bharatagri/api/public/uploads/product_img/' + image_names.trim();
            countclass++;
            var newCard = `
                <div class="col-12 col-md-6 col-lg-4 position-relative">
                <div class="upload__img-close_button " id="closeId${countclass}" onclick="removeImage(this);"></div>
                    <div class="brand-main d-flex box-shadow mt-1 py-2 text-center shadow upload__img-closeDy${countclass}">
                        <a class="weblink text-decoration-none text-dark" title="Tyre Image">
                          <img class="img-fluid w-100 h-100" id="img_url" src="${imageUrl}" alt="Tyre Image">
                        </a>
                    </div>
                </div>
            `;

            // Append the new image element to the container
            $("#selectedImagesContainer").append(newCard);
        });
      }
    },
    error: function(error) {
      console.error('Error fetching user data:', error);
    }
  });
}
function setSelectedOption(selectId, value) {
  var select = document.getElementById(selectId);
  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].value == value) {
      select.selectedIndex = i;
      break;
    }
  }
}


function populateTehsil(selectId, value) {
  var select = document.getElementById(selectId);
  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].value == value) {
      select.options[i].selected = true;
      break;
    }
  }
}

// view data
function fetch_data(product_id){
  // alert(product_id);
  var urlParams = new URLSearchParams(window.location.search);
  
  var productId = product_id;
  var apiBaseURL = APIBaseURL;
  var url = apiBaseURL + 'get_old_tractor_by_id/' + productId;
  var headers = {
  'Authorization': 'Bearer ' + localStorage.getItem('token')
  };
  $.ajax({
      url: url,
      type: "GET",
      headers: headers,
      success: function(data) {
      var formattedPrice = parseFloat(data.product[0].price).toLocaleString('en-IN');
      document.getElementById('first_name2').innerText=data.product[0].first_name;
      document.getElementById('last_name2').innerText=data.product[0].last_name;
      document.getElementById('monile').innerText=data.product[0].mobile;
      document.getElementById('state2').innerText=data.product[0].state_name;
      document.getElementById('district2').innerText=data.product[0].district_name;
      document.getElementById('tehsil2').innerText=data.product[0].tehsil_name;
      document.getElementById('brand1').innerText=data.product[0].brand_name;
      document.getElementById('purchase_year1').innerText=data.product[0].purchase_year;
      document.getElementById('eng_condition').innerText=data.product[0].engine_condition;
      document.getElementById('tyre_con').innerText=data.product[0].tyre_condition;
      document.getElementById('hr_driven').innerText=data.product[0].hours_driven;
      document.getElementById('rcNumber').innerText=data.product[0].rc_number;
      document.getElementById('model1').innerText=data.product[0].model;
      document.getElementById('noc_available').innerText=data.product[0].noc;
      document.getElementById('Finance_veh').innerText=data.product[0].vehicle_registered_num;
      document.getElementById('price12').innerText= formattedPrice;
      
      $("#selectedImagesContainer-old").empty();
      if (data.product[0].image_names) {
        var imageNamesArray = Array.isArray(data.product[0].image_names) ? data.product[0].image_names : data.product[0].image_names.split(',');

        imageNamesArray.forEach(function (imageName) {
            var imageUrl = 'https://shopninja.in/bharatagri/api/public/uploads/product_img/' + imageName.trim();

            var newCard = `
                <div class="col-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="brand-main d-flex box-shadow   mt-2 text-center shadow">
                        <a class="weblink text-decoration-none text-dark" title="Image">
                            <img class="img-fluid w-50 h-100 " src="${imageUrl}" alt="Image">
                        </a>
                    </div>
                </div>
            `;

            $("#selectedImagesContainer-old").append(newCard);
        });
    }  
  },
  error: function (error) {
  console.error('Error fetching data:', error);
  }
  });
  }

// delete data
  function destroy(id) {
    var apiBaseURL = APIBaseURL;
    var url = apiBaseURL + 'customer_enquiries/' + id;
    var token = localStorage.getItem('token');
  
    if (!token) {
      console.error("Token is missing");
      return;
    }
  
    // Show a confirmation popup
    var isConfirmed = confirm("Are you sure you want to delete this data?");
    if (!isConfirmed) {
      // User clicked 'Cancel' in the confirmation popup
      return;
    }
  
    $.ajax({
      url: url,
      type: "DELETE",
      headers: {
        'Authorization': 'Bearer ' + token
      },
      success: function(result) {
        get_tractor_list();
        console.log("Delete request successful");
        alert("Delete operation successful");
      },
      error: function(error) {
        console.error('Error fetching data:', error);
        alert("Error during delete operation");
      }
    });
  }
function resetFormFields(){
    document.getElementById("old_tract").reset();
    document.getElementById("_image").value = '';
    document.getElementById("selectedImagesContainer").innerHTML = '';
}

function get_By_State() {
  var url = 'https://shopninja.in/bharatagri/api/public/api/customer/state_data';

  $.ajax({
      url: url,
      type: "GET",
      headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      success: function(data) {
          const select = document.getElementById('state_name');
          select.innerHTML = '<option selected disabled value="">Please select a state</option>';

          // Iterate through all states and populate the dropdown
          data.stateData.forEach(state => {
              const option = document.createElement('option');
              option.textContent = state.state_name;
              option.value = state.id;
              select.appendChild(option);
          });
      },
      error: function(error) {
          console.error('Error fetching data:', error);
      }
  });
}
get_By_State();
  function getbrandSearch() {
    var url = "https://shopninja.in/bharatagri/api/public/api/customer/get_brand_by_product_id/" + 2;
    $.ajax({
        url: url,
        type: "GET",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        success: function (data) {
            console.log(data);
            const selects = document.querySelectorAll('#brand_name');
  
            selects.forEach(select => {
                select.innerHTML = '<option selected disabled value="">Please select an option</option>';
  
                if (data.brands.length > 0) {
                    data.brands.forEach(row => {
                        const option = document.createElement('option');
                        option.textContent = row.brand_name;
                        option.value = row.id;
                        console.log(option);
                        select.appendChild(option);
                    });
  
                    // Add event listener to brand dropdown
                    select.addEventListener('change', function() {
                        const selectedBrandId = this.value;
                        get_model_1(selectedBrandId);
                    });
                } else {
                    select.innerHTML = '<option>No valid data available</option>';
                }
            });
        },
        error: function (error) {
            console.error('Error fetching data:', error);
        }
    });
  }
  
  function get_model_1(brand_id) {
    var product_type_id = 1; 
    var url = `https://shopninja.in/bharatagri/api/public/api/customer/get_brand_model/${brand_id}?product_type_id=${product_type_id}`;
    
    console.log('Requesting models for brand ID:', brand_id); // Debugging statement
    $.ajax({
        url: url,
        type: "GET",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        success: function (data) {
            console.log('Received models data:', data); // Debugging statement
            const selects = document.querySelectorAll('#model_name');
  
            selects.forEach(select => {
              // Clear the existing options
              select.innerHTML = '<option selected disabled value="">Please select an option</option>';
          
              if (Array.isArray(data.model) && data.model.length > 0) {
                  data.model.forEach(modelName => {
                      const option = document.createElement('option');
                      option.textContent = modelName;  // Directly use the model name string
                      option.value = modelName;
                      select.appendChild(option);
                  });
              } else {
                  select.innerHTML = '<option>No valid data available</option>';
              }
          });
        },
        error: function (error) {
            console.error('Error fetching model data:', error);
        }
    });
  }
  getbrandSearch();

$(document).ready(function(){
  $('#btn_sb').click(store);
  $('#undate_btn').click(edit_data_id);
  jQuery.validator.addMethod("customPhoneNumber", function(value, element) {
    return /^[6-9]\d{9}$/.test(value); 
  }, "Phone number must start with 6 or above");
  $("#narsary_list_form").validate({
    
    rules: {
        name: {
        required: true,
      },
      fname:{
        required: true,
      },
      lname:{
        required: true,
      },
      textarea_d:{
        required: true,
      },
      'files[]':{
        required: true,
      },
      number:{
        required:true, 
          maxlength:10,
          digits: true,
          customPhoneNumber: true
      },
      state_:{
        required: true,
      },
      dist:{
        required: true,
      },
      loc: {
        required: true
      }
    },

    messages:{
        name: {
        required: "This field is required",
      },
      fname:{
        required: "This field is required",
      },
      lname: {
        required: "This field is required",
      },
      textarea_d: {
        required: "This field is required",
      },
      'files[]': {
        required: "This field is required",
      },
      number: {
        required:"This field is required",
        maxlength:"Enter only 10 digits",
        digits: "Please enter only digits"
      },
      state_: {
        required: "This field is required",
      },
      dist: {
        required: "This field is required",
      },
      loc: {
        required:"This field is required",
        }
    },
    
    submitHandler: function (form) {
      alert("Form submitted successfully!");
    },
  });
  $("#btn_sb").on("click", function () {
    $("#narsary_list_form").valid();
  });
});
jQuery(document).ready(function () {
  ImgUpload();
});
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

var removedImages = []; 
function removeImage(ele) {
    console.log("Removing image:", ele);
    let thisId = ele.id.split('closeId')[1];
    removedImages.push(thisId); 
    $("#" + ele.id).remove(); 
    $(".upload__img-closeDy" + thisId).remove();
}

//  **********data add**********
function store(event) {
  event.preventDefault();

  var image_names = document.getElementById('_image').files;
  var name = $('#name').val();
  var first_name = $('#fname').val();
  var last_name = $('#lname').val();
  var number = $('#number').val();
  var state = $('#state_').val();
  var district = $('#dist').val();
  var tehsil = $('#tehsil').val();
  var location = $('#loc').val();
  var description = $('#textarea_d').val();
  if (image_names.length === 0) {
    alert("Please select at least one image.");
    return; 
}
  var apiBaseURL = APIBaseURL;
  var url = apiBaseURL + 'nursery_data';
  var token = localStorage.getItem('token');

  var headers = {
      'Authorization': 'Bearer ' + token
  };

  var data = new FormData();

  for (var x = 0; x < image_names.length; x++) {
      data.append('images[]', image_names[x]);
  }

  data.append('nursery_name', name);
  data.append('first_name', first_name);
  data.append('last_name', last_name);
  data.append('mobile', number);
  data.append('state', state);
  data.append('district', district);
  data.append('tehsil', tehsil);
  data.append('address', location);
  data.append('description', description);

  $.ajax({
      url: url,
      type: "POST",
      data: data,
      headers: headers,
      processData: false,
      contentType: false,
      success: function (result) {
          console.log('Success:', result);

          // Close the modal
          $('#staticBackdrop').modal('hide');

          // Clear form values
          $('#name, #fname, #lname, #number, #state_, #dist, #tehsil, #loc, #textarea_d, #_image').val('');

          // Reload the page (try without forcing a full reload)
         alert('Successfully inserted!');
        //  window.location.reload();
      },
      error: function (error) {
          console.error('Error:', error);

          alert('Error inserting data. See console for details.');
      }
  });
}

 // fetch data
function nursery_data() {
  var apiBaseURL = APIBaseURL;
  var url = apiBaseURL + 'nursery_data';
  $.ajax({
    url: url,
    type: "GET",
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
    success: function (data) {
      const tableBody = document.getElementById('data-table');
      let serialNumber = 1;
      let tableData = [];
      
      if (data.nursery_data && data.nursery_data.length > 0) {
        data.nursery_data.reverse().forEach(row => {
        let action = `<div class="d-flex">
                        <button class="btn btn-warning text-white btn-sm mx-1" onclick="openViewdata(${row.id})" data-bs-toggle="modal" data-bs-target="#view_model_nursery" id="viewbtn">
                          <i class="fa fa-eye" style="font-size: 11px;"></i>
                        </button>
                        <button class="btn btn-primary btn-sm btn_edit" onclick="fetch_edit_data_nursery(${row.id})" data-bs-toggle="modal" data-bs-target="#editmodel" id="">
                          <i class="fas fa-edit" style="font-size: 11px;"></i>
                        </button>
                        <button class="btn btn-danger btn-sm mx-1" onclick="destroy(${row.id})">
                          <i class="fa fa-trash" style="font-size: 11px;"></i>
                        </button>
                      </div>`;
      
                    tableData.push([
                      serialNumber,
                      row.nursery_name,
                      row.mobile,
                      row.state_name,
                      row.district_name,
                      action
                    ]);

                      serialNumber++;
                  });
      
                      $('#example').DataTable().destroy();
                      $('#example').DataTable({
                        data: tableData,
                        columns: [
                          { title: 'S.No.' },
                          { title: 'Name' },
                          { title: 'Phone Number' },
                          { title: 'State' },
                          { title: 'District' },
                          { title: 'Action', orderable: false } 
                        ],
                          paging: true,
                          searching: false,
                      });
                  } else {
                      tableBody.innerHTML = '<tr><td colspan="6">No valid data available</td></tr>';
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
    nursery_data();
      
      
// delete
function destroy(id) {
  var apiBaseURL = APIBaseURL;
  var url = apiBaseURL + 'nursery_data/' + id; // Change product_id to id
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
      window.location.reload();
      console.log("Delete request successful");
      // alert("Delete operation successful");
    },
    error: function(error) {
      console.error('Error fetching data:', error);
      alert("Error during delete operation");
    }
  });
}

// View data
function openViewdata(Id) {
  var apiBaseURL = APIBaseURL;
  var url = apiBaseURL + 'nursery_data/' + Id;

  var headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  };

  $.ajax({
    url: url,
    type: 'GET',
    headers: headers,
  
    success: function(response) {
      var userData = response.nursery_data[0];
      console.log('ffdtydtrd',$('#nursery_name'),userData.nursery_name);
      document.getElementById('nursery_name').innerText=userData.nursery_name;
      document.getElementById('fname1').innerText=userData.first_name;
      document.getElementById('lname1').innerText=userData.last_name;
      document.getElementById('number1').innerText=userData.mobile;
      document.getElementById('state1').innerText=userData.state_name;
      document.getElementById('dist1').innerText=userData.district_name;
      document.getElementById('tehsil1').innerText=userData.tehsil_name;
      document.getElementById('loc1').innerText=userData.address;
      document.getElementById('textarea').innerText=userData.description;
      
      $("#selectedImagesContainer1").empty();

      if (userData.image_names) {
          var imageNamesArray = Array.isArray(userData.image_names) ? userData.image_names : userData.image_names.split(',');
      
          imageNamesArray.forEach(function (image_names) {
              var imageUrl = 'https://shopninja.in/bharatagri/api/public/uploads/nursery_img/' + image_names.trim();
      
              var newCard = `
                  <div class="col-12 col-lg-4 col-md-4 col-sm-4">
                      <div class="brand-main d-flex box-shadow mt-1 py-2 text-center shadow">
                          <a class="weblink text-decoration-none text-dark" title="Tyre Image">
                              <img class="img-fluid w-100 h-100" src="${imageUrl}" alt="Tyre Image">
                          </a>
                      </div>
                  </div>
              `;
      
              // Append the new image element to the container
              $("#selectedImagesContainer1").append(newCard);
          });
      }
      
      
        // $('#exampleModal').modal('show');
    },
    error: function(error) {
      console.error('Error fetching user data:', error);
    }
  });
}

// edit data 
var initialImagesCount;
var initialimgDivlength;
function fetch_edit_data_nursery(id) {
  var apiBaseURL = APIBaseURL;
  var nursery_id = id;
  var url = apiBaseURL + 'nursery_data/' + nursery_id; 

  var headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  };

  $.ajax({
    url: url,
    type: 'GET',
    headers: headers,
    success: function(response) {
      var userData = response.nursery_data[0];
      $('#userId').val(userData.id);
      $('#nursery_name2').val(userData.nursery_name);
      $('#fname2').val(userData.first_name);
      $('#lname2').val(userData.last_name);
      $('#number2').val(userData.mobile);

      setSelectedOption('state', userData.state_id);
      getDistricts(userData.state_id, 'district-dropdown', 'tehsil-dropdown');
      setTimeout(function() {
        setSelectedOption('dist_', userData.district_id);
        populateTehsil(userData.district_id, 'tehsil-dropdown', userData.tehsil_id);
      }, 2000); 
      
      $('#loc2').val(userData.address);
      $('#textarea_d2').val(userData.description);
      $('#userId').val(userData.id);
      $("#selectedImagesContainer2").empty();

      if (userData.image_names) {
        var imageNamesArray = Array.isArray(userData.image_names) ? userData.image_names : userData.image_names.split(',');
        var countclass = 0;
        fetchdataImage = imageNamesArray
        imageNamesArray.forEach(function(image_name) {
          var imageUrl = 'https://shopninja.in/bharatagri/api/public/uploads/nursery_img/' + image_name.trim();
          console.log('imageUrl',imageUrl);
          countclass++;
          var newCard = `
          <div class="col-12 col-md-6 col-lg-4 position-relative">
            <div class="upload__img-close_button " id="closeId${countclass}" onclick="removeImage(this, '${image_name.trim().replace(/'/g, "\\'")}');"></div>
              <div class="brand-main d-flex box-shadow mt-1 py-2 text-center shadow upload__img-closeDy${countclass}">
                  <a class="weblink text-decoration-none text-dark" title="Tyre Image">
                    <img class="img-fluid w-100 h-100" id="img_url" src="${imageUrl}" alt="Tyre Image">
                  </a>
              </div>
          </div>
          `;
          $("#selectedImagesContainer2").append(newCard);
        });
      }
      var initialiamge = $('.brand-main').length; 
      initialImagesCount = initialiamge;
      initialimgDivlength = initialiamge;
      console.log(initialImagesCount,'initialimagelengh');
      console.log('Fetched data successfully');
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


function edit_data_id(id) {

  var edit_id = $("#userId").val();
  var nursery_name = $("#nursery_name2").val();
  var first_name = $('#fname2').val();
  var last_name = $('#lname2').val();
  var mobile = $('#number2').val();
  var state = $('#state').val();
  var district = $('#dist_').val();
  var tehsil = $('#tehsil_').val();
  var address = $('#loc2').val();
  var description = $('#textarea_d2').val();

  var apiBaseURL = APIBaseURL;
  var url = apiBaseURL + 'nursery_data/' + edit_id;
  var token = localStorage.getItem('token');
  var _method = 'put';
  var headers = {
    'Authorization': 'Bearer ' + token
  };

  var data = new FormData();

  data.append('_method', _method);
  data.append('id', edit_id);
  data.append('nursery_name', nursery_name);
  data.append('first_name', first_name);
  data.append('last_name', last_name);
  data.append('mobile', mobile);
  data.append('state', state);
  data.append('district', district);
  data.append('tehsil', tehsil);
  data.append('address', address);
  data.append('description', description);

  var remainingImagesCount;
  if(removedImages.length ==0){
    remainingImagesCount =0;
  }
  else{
    remainingImagesCount = $('.brand-main').length; 
  }


  if(fetchdataImage.length>0 && removedImages.length>0 && imgUploaded.length==0){
    for(i=0;i<removedImages.length; i++){
      var imageName = removedImages[i];
      var file = new File([null], imageName);
      data.append('images[]',  file);
    }
    data.append('flag', 'deleteimage');
  }
  else if(fetchdataImage.length==0 && removedImages.length>0 && imgUploaded.length==0){
    data.append('flag', 'noimg');
  }
  else if(fetchdataImage.length==0 && removedImages.length==0 && imgUploaded.length>0){
    for(i=0;i<imgUploaded.length; i++){
      console.log(' imgUploaded[i]-', imgUploaded[i])
      data.append('images[]',  imgUploaded[i]);
    }
  }
  else if(fetchdataImage.length>0 && removedImages.length==0 && imgUploaded.length>0){
    for(i=0;i<imgUploaded.length; i++){
      console.log(' imgUploaded[i]-', imgUploaded[i])
      data.append('images[]',  imgUploaded[i]);
    }
  }
  else if(fetchdataImage.length==0 && removedImages.length>0 && imgUploaded.length>0){
    for(i=0;i<imgUploaded.length; i++){
      data.append('images[]',  imgUploaded[i]);
    }
    for(i=0;i<removedImages.length; i++){
      var imageName = removedImages[i];
      var file = new File([null], imageName);
      data.append('remimages[]',  file);
    }
    data.append('flag', 'newimguploaded');
  }
  else if(fetchdataImage.length>0 && removedImages.length>0 && imgUploaded.length>0){
    for(i=0;i<removedImages.length; i++){
      var imageName = removedImages[i];
      var file = new File([null], imageName);
      data.append('remimages[]',  file);
    }
    for(i=0;i<imgUploaded.length; i++){
      data.append('images[]',  imgUploaded[i]);
    }
    data.append('flag', 'newimguploaded');
  }

  $.ajax({
    url: url,
    type: "POST",
    data: data,
    headers: headers,
    processData: false,
    contentType: false,
    success: function(result) {
      console.log(result, "result");
      alert('successfully updated..!');
      removedImages=[];
      fetchdataImage=[];
      imgUploaded=[];
      window.location.reload();
    },
    error: function(error) {
      console.error('Error fetching data:', error);
    }
  });

}
// function edit_data_id(id) {
//   var edit_id = $("#userId").val();
//   var nursery_name = $("#nursery_name2").val();
//   var first_name = $('#fname2').val();
//   var last_name = $('#lname2').val();
//   var mobile = $('#number2').val();
//   var state = $('#state').val();
//   var district = $('#dist_').val();
//   var tehsil = $('#tehsil_').val();
//   var address = $('#loc2').val();
//   var description = $('#textarea_d2').val();

//   const canvas = document.getElementById('card-canvas');
//   const generatedImage = canvas.toDataURL('image/png'); 

//   var apiBaseURL = APIBaseURL;
//   var url = apiBaseURL + 'nursery_data/' + edit_id;
//   var token = localStorage.getItem('token');
//   var headers = {
//       'Authorization': 'Bearer ' + token
//   };

//   var data = new FormData();
//   data.append('id', edit_id);
//   data.append('nursery_name', nursery_name);
//   data.append('first_name', first_name);
//   data.append('last_name', last_name);
//   data.append('mobile', mobile);
//   data.append('state', state);
//   data.append('district', district);
//   data.append('tehsil', tehsil);
//   data.append('address', address);
//   data.append('description', description);

//   data.append('description', generatedImage);

//   $.ajax({
//       url: url,
//       type: "POST",
//       data: data,
//       headers: headers,
//       processData: false,
//       contentType: false,
//       success: function(result) {
//           console.log(result, "result");
//           alert('Successfully updated!');
//           window.location.reload();
//       },
//       error: function(error) {
//           console.error('Error fetching data:', error);
//       }
//   });
// }


 function searchdata() {
  var name = $('#name1').val();
  var state = $('#state_1').val();
  var district = $('#district_1').val();
  
  var apiBaseURL = APIBaseURL;
  var url = apiBaseURL + 'search_for_nursery';
  var token = localStorage.getItem('token');
  var headers = {
      'Authorization': 'Bearer ' + token
  };
  var data = {
      'nursery_name': name,
      'state': state,
      'district': district
  };
  $.ajax({
      url: url,
      type: "POST",
      data: data,
      headers: headers,
      success: function (response) {
          console.log('Success:', response);
          const tableBody = document.getElementById('data-table');
          let serialNumber = 1;
          if (response.nursery && response.nursery.length > 0) {
              let tableData = response.nursery.map(row => {
                  let action = `<div class="d-flex">
                      <button class="btn btn-warning text-white btn-sm mx-1" onclick="openViewdata(${row.id})" data-bs-toggle="modal" data-bs-target="#view_model_nursery" id="viewbtn">
                          <i class="fa fa-eye" style="font-size: 11px;"></i>
                      </button>
                      <button class="btn btn-primary btn-sm btn_edit" onclick="fetch_edit_data_nursery(${row.id})" data-bs-toggle="modal" data-bs-target="#editmodel" id="your_UniqueId">
                          <i class="fas fa-edit" style="font-size: 11px;"></i>
                      </button>
                      <button class="btn btn-danger btn-sm mx-1" onclick="destroy(${row.id})">
                          <i class="fa fa-trash" style="font-size: 11px;"></i>
                      </button>
                  </div>`;
                  return [
                      serialNumber++,
                      row.nursery_name,
                      row.mobile,
                      row.state_name,
                      row.district_name,
                      action
                  ];
              });
              // Initialize DataTable after preparing the tableData
              $('#example').DataTable().destroy();
              $('#example').DataTable({
                  data: tableData,
                  columns: [
                      { title: 'S.No.' },
                      { title: 'Name' },
                      { title: 'Phone Number' },
                      { title: 'State' },
                      { title: 'District' },
                      { title: 'Action', orderable: false } // Disable ordering for Action column
                  ],
                  paging: true,
                  searching: false,
              });
          } else {
              tableBody.innerHTML = '<tr><td colspan="6">No valid data available</td></tr>';
          }
      },
      error: function (xhr, status, error) {
          console.error('Error:', xhr.responseText);
      }
  });
}
function resetform(){
  $('#name1').val('');
  $('#state_1').val('');
  $('#district_1').val('');
  nursery_data();
}

jQuery(document).ready(function () {
  ImgUpload();
  // removeImage();
});
var removedImages = [];
var removedImageFiles = [];
var imageuploadstatus = false;
var imgUploaded=[];
function ImgUpload() {
  // removedImages =[];
  // if (removedImages[0] ===undefined){
  //   removedImages =[];
  // }
  var imgWrap = "";
  var imgArray = [];
  $('.upload__inputfile').each(function () {
    console.log("ding dong")
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
            imgUploaded.push(f);
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
      initialImagesCount++; 
      initialimgDivlength++;
      console.log(initialImagesCount, 'when an image is added');
    });
  });
    

  $('body').on('click', ".upload__img-close", function (e) {
    var filename = $(this).parent().data("file");
    var file = new File([null], filename);
    console.log(file,'imagefile',imgArray.length);
    // for (var i = 0; i < imgArray.length; i++) {
      // if (imgArray[i].name === file) {
        imgArray.splice(1);
        removedImages.push(file); // Add the removed image filename to removedImages array
       
        // break;
      // }
    // }
    console.log('removedImages-', removedImages, removedImages.length)
    $(this).parent().parent().remove();
    initialimgDivlength = $('.brand-main').length; 
    imageuploadstatus = false;
  });
  var initialiamge = $('.brand-main').length; 
  initialImagesCount = initialiamge;
  imageuploadstatus = true;
}


var fetchdataImage = [];
function removeImage(ele, imagename) {
  console.log('ele',ele,fetchdataImage,imagename);
  initialImagesCount--;
  if(imagename !=''){
    removedImages.push(imagename); 
      // Find the index of the imagename in the fetchdataImage array
      var index = fetchdataImage.indexOf(imagename);
      // Remove the image from fetchdataImage if it exists
      if (index !== -1) {
          fetchdataImage.splice(index, 1);
      }

  }
  console.log('removedImageFiles-',removedImages, fetchdataImage)
  if(removedImages.length > 0){
    imageuploadstatus = false;
  }
  $(ele).closest('.col-12').remove(); 
}

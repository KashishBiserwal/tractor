$(document).ready(function() {
    console.log("ready!");
    $('#submit_enquiry').click(store);
    get_old_harvester_byiD();
    getpopularTractorList();
    getupcomimgTractorList();
    $('#Verify').click(verifyotp);
});

function get_old_harvester_byiD() {
    console.log(window.location)
    var urlParams = new URLSearchParams(window.location.search);
    var productId = urlParams.get('id');
    console.log(productId);
    var url = "https://shopninja.in/bharatagri/api/public/api/customer/get_old_harvester_by_id/" + productId;

    $.ajax({
        url: url,
        type: "GET",
        success: function(data) {
            var userId = localStorage.getItem('id');
            getUserDetail(userId);
            var fullMobileNumber = data.product[0].mobile;
            var mobileString = fullMobileNumber.toString();
            var lastFourDigits = mobileString.substring(mobileString.length - 4);
            var maskedPart = 'xxxxxx'.padStart(mobileString.length - 4, 'x');
            var maskedMobileNumber = maskedPart + lastFourDigits;
            var fullname = data.product[0].first_name + ' ' + data.product[0].last_name;
            var formattedPrice = parseFloat(data.product[0].price).toLocaleString('en-IN');
            var brand_model_name = data.product[0].brand_name + ', ' + data.product[0].model;
            var location = data.product[0].district_name + ', ' + data.product[0].state_name;
            var name = data.product[0].first_name + ' ' + data.product[0].last_name;
        document.getElementById('price_main').innerText= formattedPrice;
        document.getElementById('brand_model_name').innerText=brand_model_name;
        document.getElementById('location').innerText=location;
        document.getElementById('power_source1').innerText=data.product[0].power_source_value;
        document.getElementById('hour').innerText=data.product[0].hours_driven;
        document.getElementById('year1').innerText=data.product[0].purchase_year;
        document.getElementById('price_').innerText=formattedPrice;
        document.getElementById('crop_type').innerText=data.product[0].crops_type_value;
        document.getElementById('brand').innerText=data.product[0].brand_name;
        document.getElementById('hours').innerText=data.product[0].hours_driven;
        document.getElementById('power_source').innerText=data.product[0].power_source_value;
        document.getElementById('year').innerText=data.product[0].purchase_year;
        document.getElementById('first_name').innerText=name;
        document.getElementById('mobile_').innerText=maskedMobileNumber;
        document.getElementById('district_').innerText=data.product[0].district_name;
        document.getElementById('state_').innerText=data.product[0].state_name;
        document.getElementById('model3').innerText=data.product[0].model;
        document.getElementById('description').innerText = data.product[0].description;
        document.getElementById('product_subject_id').value = productId;
        console.log('get-id', productId);
        document.getElementById('customer_id').value = data.product[0].customer_id;
        document.getElementById('model').value = data.product[0].model;
        document.getElementById('slr_name').value = fullname;
        document.getElementById('mob_num').value = data.product[0].mobile;
        var imageNames = data.product[0].image_names.split(',');
        var carouselContainer = $('.swiper-wrapper_buy');
            carouselContainer.empty();
            var swiperSlides = [];
            imageNames.forEach(function(imageName, index) {
                var imageUrl = "https://shopninja.in/bharatagri/api/public/uploads/product_img/" + imageName.trim(); // Update the path
                var slide = $('<div class="swiper-slide swiper-slide_buy"><img class="img_buy mt-2" src="' + imageUrl + '" style="height: 300px;" /></div>'); // Set height here
                carouselContainer.append(slide);
                
                swiperSlides.push(slide);
            });

            var mySwiper = new Swiper('.swiper_buy', {
            });
            swiperSlides.forEach(function(slide, index) {
                slide.on('click', function() {
                    mySwiper.slideTo(index);
                });
            });
          },
            error: function (error) {
          console.error('Error fetching data:', error);
      }
  });
}
  // get new popular tractor
  function getpopularTractorList() {
    var url = "https://shopninja.in/bharatagri/api/public/api/customer/get_new_tractor";

    $.ajax({
        url: url,
        type: "GET",
        success: function(data) {
            let new_arr = [];
            const new_data = data.product.accessory_and_tractor_type.filter((s) => {
                const arr = s.tractor_type_name.split(',');
                if (arr.includes('Popular')) {
                    new_arr.push(s.product_id);
                    return s.product_id;
                }
            });

            var productContainer = $("#productContainerpopular");

            if (data.product.allProductData && data.product.allProductData.length > 0) {
                // Display the initial set of 4 cards
                displayPopularTractors(data.product.allProductData.slice(0, 4), new_arr);

                if (data.product.allProductData.length > 4) {
                    $("#loadMoretract").show();
                }
                $("#load_more").click(function() {
                    window.location.href = "popular_tractors.php";
                });
            }
        },
        error: function(error) {
            console.error('Error fetching data:', error);
        }
    });
}

 // get new popular tractor
 function getpopularTractorList() {
    var url = "https://shopninja.in/bharatagri/api/public/api/customer/get_new_tractor";

    $.ajax({
        url: url,
        type: "GET",
        success: function(data) {
            let new_arr = [];
            const new_data = data.product.accessory_and_tractor_type.filter((s) => {
                const arr = s.tractor_type_name.split(',');
                if (arr.includes('Popular')) {
                    new_arr.push(s.product_id);
                    return s.product_id;
                }
            });

            var productContainer = $("#productContainerupcoming");

            if (data.product.allProductData && data.product.allProductData.length > 0) {
                // Display the initial set of 4 cards
                displayPopularTractors(data.product.allProductData.slice(0, 4), new_arr);

                // Show the "Load More" button if there are more tractors
                if (data.product.allProductData.length > 4) {
                    $("#loadMoretract").show();
                }

                // Handle "Load More" button click
                $("#load_more").click(function() {
                    window.location.href = "popular_tractors.php";
                });
            }
        },
        error: function(error) {
            console.error('Error fetching data:', error);
        }
    });
}

function displayPopularTractors(tractors, new_arr) {
    var productContainer = $("#productContainerupcoming");

    tractors.forEach(function(p) {
        if (new_arr.includes(p.product_id)) {
            var images = p.image_names;
            var a = [];

            if (images) {
                if (images.indexOf(',') > -1) {
                    a = images.split(',');
                } else {
                    a = [images];
                }
            }

            var newCard = `<div class="used-tractor mb-3 d-flex flex-row shadow p-2" style="background-color:#fff">
                            <div class="text-center">
                                <a href="detail_tractor.php?product_id=${p.product_id}" class="weblink">
                                    <img src="https://shopninja.in/bharatagri/api/public/uploads/product_img/${a[0]}" width="100" height="100" alt=""
                                        style=" border-radius: 10px;" loading="lazy">
                                </a>
                            </div>
                            <div class="px-2 d-flex flex-column justify-content-center">
                                <a href="detail_tractor.php?product_id=${p.product_id}" class="text-decoration-none">
                                    <p class="mb-1">${p.model}</p>
                                </a>
                                <p class="trac">
                                    <span class="bg-light"> ${p.hp_category} HP</span>
                                    <span class="bg-light">${p.wheel_drive_value}</span>
                                </p>
                                
                            </div>
                        </div>`;

            // Append the new card to the container
            productContainer.append(newCard);
        }
    });
}

function getupcomimgTractorList() {
    var url = "https://shopninja.in/bharatagri/api/public/api/customer/get_new_tractor";

    $.ajax({
        url: url,
        type: "GET",
        success: function(data) {
            let new_arr = [];
            const new_data = data.product.accessory_and_tractor_type.filter((s) => {
                const arr = s.tractor_type_name.split(',');
                if (arr.includes('Upcoming')) {
                    new_arr.push(s.product_id);
                    return s.product_id;
                }
            });

            var productContainer = $("#productContainerupcoming2");

            if (data.product.allProductData && data.product.allProductData.length > 0) {
                // Display the initial set of 4 cards
                displayupcomingTractors(data.product.allProductData.slice(0, 4), new_arr);

                // Show the "Load More" button if there are more tractors
                if (data.product.allProductData.length > 4) {
                    $("#load_btn").show();
                }

                $("#load_btn").click(function() {
                    window.location.href = "upcoming_tractors.php";
                });
            }
        },
        error: function(error) {
            console.error('Error fetching data:', error);
        }
    });
}

function displayupcomingTractors(tractors, new_arr) {
    var productContainer = $("#productContainerupcoming2");

    tractors.forEach(function(p) {
        if (new_arr.includes(p.product_id)) {
            var images = p.image_names;
            var a = [];

            if (images && typeof images === 'string') {
                // Check if images is not null and is a string before splitting
                if (images.indexOf(',') > -1) {
                    a = images.split(',');
                } else {
                    a = [images];
                }
            }

            var newCard = `<div class="used-tractor mb-3 d-flex flex-row shadow p-2" style="background-color:#fff">
                            <div class="text-center">
                                <a href="detail_tractor.php?product_id=${p.product_id}" class="weblink">
                                    <img src="https://shopninja.in/bharatagri/api/public/uploads/product_img/${a[0]}" width="100" height="100" alt=""
                                        style=" border-radius: 10px;" loading="lazy">
                                </a>
                            </div>
                            <div class="px-2 d-flex flex-column justify-content-center">
                                <a href="detail_tractor.php?product_id=${p.product_id}" class="text-decoration-none">
                                    <p class="mb-1">${p.model}</p>
                                </a>
                                <p class="trac">
                                    <span class="bg-light"> ${p.hp_category} HP</span>
                                    <span class="bg-light">${p.wheel_drive_value}</span>
                                </p>
                               
                            </div>
                        </div>`;

            productContainer.append(newCard);
        }
    });
}

function store(event) {
    event.preventDefault();
    if (isUserLoggedIn()) {
        var isConfirmed = confirm("Are you sure you want to submit the form?");
        if (isConfirmed) {
            submitForm();
            $('#staticBackdrop').modal('show');
        }
    } else {
        var mobile = $('#number').val();
        get_otp(mobile);
    }
}

function isUserLoggedIn() {
    return localStorage.getItem('token_customer') && localStorage.getItem('mobile') && localStorage.getItem('id');
}

function get_otp(phone) {
    var url = "https://shopninja.in/bharatagri/api/public/api/customer/customer_login";
    var paraArr = {
        'mobile': phone,
    };
    $.ajax({
        url: url,
        type: "POST",
        data: paraArr,
        success: function (result) {
            console.log(result, "result");
            $('#get_OTP_btn').modal('show'); 
        },
        error: function (error) {
            console.error('Error fetching data:', error);
        }
    });
}
function verifyotp() {
    var mobile = $('#number').val();
    var otp = $('#otp').val();
    var paraArr = {
        'otp': otp,
        'mobile': mobile,
    };
    var url = 'https://shopninja.in/bharatagri/api/public/api/customer/verify_otp';
    $.ajax({
        url: url,
        type: "POST",
        data: paraArr,
        success: function (result) {
            console.log(result);
            $('#get_OTP_btn').modal('hide');
            var isConfirmed = confirm("Are you sure you want to submit the form?");
            if (isConfirmed) {
                submitForm();
                $('#staticBackdrop').modal('show');
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log(xhr.status, 'error');
            // Handle different error scenarios
            if (xhr.status === 401) {
                console.log('Invalid credentials');
                var htmlcontent = `<p>Invalid credentials!</p>`;
                document.getElementById("error_message").innerHTML = htmlcontent;
            } else if (xhr.status === 403) {
                console.log('Forbidden: You don\'t have permission to access this resource.');
                var htmlcontent = ` <p> You don't have permission to access this resource.</p>`;
                document.getElementById("error_message").innerHTML = htmlcontent;
            } else {
                console.log('An error occurred:', textStatus, errorThrown);
                var htmlcontent = `<p>An error occurred while processing your request.</p>`;
                document.getElementById("error_message").innerHTML = htmlcontent;
            }
        },
    });
}

function submitForm() {
    // Gather form data
    var enquiry_type_id = $('#enquiry_type_id').val();
    var first_name = $('#fname').val();
    var last_name = $('#lname').val();
    var mobile = $('#number').val();
    var state = $('#state_form').val();
    var district = $('#district_form').val();
    var tehsil = $('#tehsil').val();
    var price = $('#price').val();
    price = price.replace(/[\,\.\s]/g, '');
    var product_subject_id = $('#product_subject_id').val();
    var model = $('#model').val();

    var paraArr = {
        'enquiry_type_id':enquiry_type_id,
        'first_name': first_name,
        'last_name':last_name,
        'model':model,
        'mobile':mobile,   
        'state':state,
        'district':district,
        'tehsil':tehsil,
        'price':price,
        'enquiry_type_id':enquiry_type_id,
        'product_id':product_subject_id,
    };

    var url = "https://shopninja.in/bharatagri/api/public/api/customer/customer_enquiries";

    $.ajax({
        url: url,
        type: "POST",
        data: paraArr,
        success: function (result) {
            console.log("Form submitted successfully!");
        },
        error: function (error) {
            console.error('Error submitting form:', error);
            var msg = error;
            $("#errorStatusLoading").modal('show');
            $("#errorStatusLoading").find('.modal-title').html('<p class="text-center">Process Failed..! Enter Valid Detail</p>');
            $("#errorStatusLoading").find('.modal-body').html(msg);
            $("#errorStatusLoading").find('.modal-body').html('<img src="assets/images/comp_3.gif" style="display:block; margin:0 auto;" class="w-50 text-center" alt="Successfull Request"></img>');
        }
    });
}

function getUserDetail(id) {
    var url = "https://shopninja.in/bharatagri/api/public/api/customer/get_customer_personal_info_by_id/" + id;

    var headers = {
        'Authorization': localStorage.getItem('token_customer')
    };
    $.ajax({
        url: url,
        type: "GET",
        headers: headers,
        success: function(response) {
      
            if (response.customerData && response.customerData.length > 0) {
                var customer = response.customerData[0];
                $('#interested-harvester-form #fname').val(customer.first_name);
                $('#interested-harvester-form #lname').val(customer.last_name);
                $('#interested-harvester-form #number').val(customer.mobile);
                // $('#interested-harvester-form #state_form').val(customer.state_id);
            
                if (isUserLoggedIn()) {
                    $('#interested-harvester-form input, #interested-harvester-form select').not('#price,#state_form,#district_form,#tehsil').prop('disabled', true);
                }
                
            }
        },
        error: function(error) {
            console.error('Error fetching data:', error);
        }
    });
}


function isUserLoggedIn() {
    return localStorage.getItem('token_customer') && localStorage.getItem('mobile') && localStorage.getItem('id');
}
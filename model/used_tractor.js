$(document).ready(function() {
    console.log("ready!");
    getoldTractorList();
});

var cardsPerPage = 9; // Number of cards to show initially
var cardsDisplayed = 0; // Counter to keep track of the number of cards displayed
var allCards; // Variable to store all cards

function getoldTractorList() {
    var url = "http://tractor-api.divyaltech.com/api/customer/get_old_tractor";

    $.ajax({
        url: url,
        type: "GET",
        success: function (data) {
            var productContainer = $("#productContainer");
            // Clear the existing content in the container
            productContainer.empty();

            if (data.product && data.product.length > 0) {
                allCards = data.product; 
            
                allCards.sort(function(a, b) {
                    return b.customer_id - a.customer_id;
                });
            
                // Display all cards
                allCards.slice(0, cardsPerPage).forEach(function (p) {
                    appendCard(productContainer, p);
                    cardsDisplayed++;
                });
            
                if (allCards.length > cardsPerPage) {
                    $("#loadMoreBtn").show();
                } else {
                    $("#loadMoreBtn").hide();
                }
            } else {
                // Hide the "Load More" button if there are no cards
                $("#loadMoreBtn").hide();
            }
        },
        error: function (error) {
            console.error('Error fetching data:', error);
        }
    });
}

// Function to append a card to the container
function appendCard(container, p) {
    var images = p.image_names;
    var a = [];

    if (images) {
        if (images.indexOf(',') > -1) {
            a = images.split(',');
        } else {
            a = [images];
        }
    }

    var newCard = `
    <div class="col-12 col-lg-4 col-md-4 col-sm-4 mb-4">
        <div class="h-auto success__stry__item d-flex flex-column shadow ">
            <div class="thumb">
                <a href="farmtrac_60.php?product_id=${p.customer_id}">
                    <div class="ratio ratio-16x9">
                        <img src="http://tractor-api.divyaltech.com/uploads/product_img/${a[0]}" class="object-fit-cover " alt="${p.description}">
                    </div>
                </a>
            </div>
            <div class="content d-flex flex-column flex-grow-1 ">
                <div class="caption text-center">
                    <a href="farmtrac_60.php?product_id=${p.customer_id}" class="text-decoration-none text-dark">
                        <p class="pt-3"><strong class="series_tractor_strong text-center h4 fw-bold ">${p.model}</strong></p>
                    </a>      
                </div>
                <div class=" row">
                    <div class="col-12 ms-2 ">
                        <p class="" id="district"><span id="engine_powerhp2">${p.brand_name}</span> | <span id="year">${p.purchase_year}</span>| ${p.district}</p>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                        <p class="fw-bold ">Price: ₹<span id="price">${p.price}</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                        <p class="fw-bold pe-2">Great Deal  <i class="fa-regular fa-thumbs-up"></i></p>
                    </div>
                </div>
            </div>
            <div class=" row state_btn">
                <div class="col-12 ">
                    <button  type ="button" class="btn-success w-100 p-2 rounded-3 text-decoration-none  text-center" data-bs-toggle="modal" data-bs-target="#used_tractor_callbnt"><i class="fa-solid fa-phone pe-2"></i>Contact Seller</button> 
                </div>
            </div>
        </div>
    </div>

    `;
    // Append the new card to the container
    container.append(newCard);
}
$(document).on('click', '#loadMoreBtn', function(){
    var productContainer = $("#productContainer");

    allCards.slice(cardsDisplayed, cardsDisplayed + cardsPerPage).forEach(function (p) {
        appendCard(productContainer, p);
        cardsDisplayed++;
    });

    // Hide the "Load More" button if all cards are displayed
    if (cardsDisplayed >= allCards.length) {
        $("#loadMoreBtn").hide();
    }
});


// store data throught form
function store(event) {
    event.preventDefault();
    console.log('jfhfhw');
    var enquiry_type_id = $('#enquiry_type_id').val();
    var first_name = $('#fname').val();
    var last_name = $('#lname').val();
    var mobile = $('#number').val();
    var state = $('#state_form').val();
    var district = $('#district_form').val();
    var tehsil = $('#tehsil').val();
    var price = $('#price').val();
    var urlParams = new URLSearchParams(window.location.search);
    var productId = urlParams.get('product_id');
  
    // Prepare data to send to the server
    var paraArr = {
        'product_id':productId,
      'enquiry_type_id':enquiry_type_id,
      'first_name': first_name,
      'last_name':last_name,
      'mobile':mobile,
      'state':state,
      'district':district,
      'tehsil':tehsil,
      'price':price,
    };
   
  var apiBaseURL =APIBaseURL;
//   var url = apiBaseURL + 'customer_enquiries';
var url = "http://tractor-api.divyaltech.com/api/customer/customer_enquiries";
    console.log(url);
  
  
    // Make an AJAX request to the server
    $.ajax({
      url: url,
      type: "POST",
      data: paraArr,
      success: function (result) {
        console.log(result, "result");
        // alert('successfully inserted..!');
        // const new_data=data.product.filter((s)=>{ 
        //     if(s.product_type=="FOR_SELL_TRACTOR"){
        //         return s;
        //     }
        // });
        $("#used_tractor_callbnt_").modal('hide'); 
        var msg = "Added successfully !"
        $("#errorStatusLoading").modal('show');    
        $("#errorStatusLoading").find('.modal-title').html('<p class="text-center">Congratulation..! Requested Successful</p>');
     
        $("#errorStatusLoading").find('.modal-body').html(msg);
        $("#errorStatusLoading").find('.modal-body').html('<img src="assets/images/7efs.gif" style="display:block; margin:0 auto;" class="w-50 text-center" alt="Successfull Request"></img>');
      
        // getOldTractorById();
        console.log("Add successfully");
      
      },
      error: function (error) {
        console.error('Error fetching data:', error);
        var msg = error;
        $("#errorStatusLoading").modal('show');
        $("#errorStatusLoading").find('.modal-title').html('<p class="text-center">Process Failed..! Enter Valid Detail</p>');
        $("#errorStatusLoading").find('.modal-body').html(msg);
        $("#errorStatusLoading").find('.modal-body').html('<img src="assets/images/comp_3.gif" style="display:block; margin:0 auto;" class="w-50 text-center" alt="Successfull Request"></img>');
        // 
      }
    });
  }
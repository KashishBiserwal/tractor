<!DOCTYPE html>
<html lang="en">
<head>
    <?php
        include 'includes/headertag.php';
        include 'includes/header.php';
    ?>
</head>
<body>
  <section class="bg-light">
    <div class="container mt-5 pt-5">
      <div class="mt-5 mb-1 py-2">
        <span class="">
          <a href="index.php" class="text-decoration-none header-link px-1">Home <i class="fa-solid fa-chevron-right px-1"></i></a>
          <span class=""><span class=" header-link  px-1">Certified Dealers</span></span>
        </span> 
      </div>
    </div>
  </section>
  <!--TEXT Find Tractor Dealer -->
  <section>
    <div class="row">
      <img src="assets/images/tractor dealerimg.png" class="position-relative" alt="dealership-image">
    </div>
  </section>

  <!-- FORM -->
  <section class="form-view bg-white pb-4">
    <div class="container-sm float-start mt-n4">
      <div class="row">
        <div class="col-md-8 col-lg-7">
          <form id="dealership_enq_from" style="margin-top: -340px; margin-left: 55px;" class="form-view-inner w-50  position-absolute form-view-overlay bg-light box-shadow p-3" action="" method="" >
            <div class="row justify-content-center">                 
              <div class="col-12 col-sm-4 col-md-4 col-lg-4">
                <div class="form-outline">
                  <label for="yr_dist" class="form-label fw-bold text-dark">Brand</label>
                  <select class="form-select form-select-sm py-2 " id="_brand" name="_brand"aria-label=".form-select-sm example">
                    <option value="" selected disabled=""></option>
                    <option value="1">Mahindra</option>
                    <option value="2">Swaraj</option>
                    <option value="2">Powertrac</option>
                  </select>
                </div>                
              </div>
              <div class="col-12 col-sm-4 col-md-4 col-lg-4">
                <div class="form-outline">
                  <label for="yr_state" class="form-label text-dark fw-bold"> <i class="fas fa-location"></i> State</label>
                  <select class="form-select form-select-sm py-2" id="_state" name="_state"aria-label=".form-select-sm example">
                    <option value="" selected disabled=""></option>
                    <option value="1">Chhattisgarh</option>
                    <option value="2">Other</option>
                  </select>
                </div>
              </div>
              <div class="col-12 col-sm-4 col-md-4 col-lg-4">
                <div class="form-outline">
                  <label for="yr_dist" class="form-label fw-bold  text-dark"><i class="fa-solid fa-location-dot"></i> District</label>
                  <select class="form-select form-select-sm py-2" id="_district" name="_district" aria-label=".form-select-sm example">
                    <option value="" selected disabled=""></option>
                    <option value="1">Raipur</option>
                    <option value="2">Bilaspur</option>
                    <option value="2">Durg</option>
                  </select>
                </div>
              </div>
              <div class="row mt-1 mb-0">
                <div class="text-center col-12 col-lg-6 col-md-6 col-sm-6 my-3">
                  <button type="submit" id="delership_enq_btn" class="btn btn-success px-5 w-100 ">Search Dealer</button>         
                </div>                    
                <div class="text-center col-12 col-lg-6 col-md-6 col-sm-6 my-3">
                  <a href="become_certified_dealer.php" >
                    <p type="submit" id="" class="btn btn-success px-5 w-100 fs-6">Become Certified Dealer</p>         
                  </a>         
                </div>                   
              </div>              
            </div>
          </form>
        </div>
      </div>
    </div>    
</section>

  <!-- CERTIFIED DEALER CARDS -->
  <section>
    <div class="container">
      <div class="row">
        <h3 class=" mt-1">Recent Certified Dealers</h3>
        <div class="col-12 col-sm-3 col-md-3 col-lg-3 px-2 py-3 h-100">
          <div class="h-auto success__stry__item d-flex flex-column shadow ">
            <div class="thumb" style="positon:relative;">
              <a href="certified_dealers_inner.php">
                <div class="ratio ratio-16x9">
                  <img src="assets/images/ratnaautomotive.webp" class="object-fit-cover " alt="img">
                </div>
              </a>            
            </div>
            <div class="position-absolute" >
              <p class="rounded-pill bg-warning text-center px-2 mt-1">Certified</p>
            </div>
            <div class="">
              <a href="certified_dealers_inner.php" class="text-decoration-none text-dark">
                <h5 class="fw-bold text-center mt-3 mx-3">Ratna Automotive Pvt. Ltd. </h5>
              </a> 
              <div class="col-12 col-lg-12 col-md-12 col-sm-12">
                <p class=" text-center text-dark fw-bold ps-3">Sonalika Dealer</p>
              </div>              
              <div class="justify-content-center  d-flex">
                <button typt="button" class="btn btn-success w-100">Rangareddy, Telangana</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-3 col-md-3 col-lg-3 px-2 py-3 h-100">
          <div class="h-auto success__stry__item d-flex flex-column shadow ">
            <div class="thumb" style="positon:relative;">
              <a href="certified_dealers_inner.php">
                <div class="ratio ratio-16x9">
                  <img src="assets/images/ratnaautomotive.webp" class="object-fit-cover " alt="img">
                </div>
              </a>            
            </div>
            <div class="position-absolute" >
              <p class="rounded-pill bg-warning text-center px-2 mt-1">Certified</p>
            </div>
            <div class="">
              <a href="certified_dealers_inner.php" class="text-decoration-none text-dark">
                <h5 class="fw-bold text-center mt-3 mx-3">Ratna Automotive Pvt. Ltd. </h5>
              </a> 
              <div class="row">
              <div class="col-12 col-lg-12 col-md-12 col-sm-12"><p class=" text-center text-dark fw-bold ps-3">Sonalika Dealer</p></div>
               
              </div>
              <div class="justify-content-center  d-flex">
                <button typt="button" class="btn btn-success w-100">Rangareddy, Telangana</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-3 col-md-3 col-lg-3 px-2 py-3 h-100">
          <div class="h-auto success__stry__item d-flex flex-column shadow ">
            <div class="thumb" style="positon:relative;">
              <a href="certified_dealers_inner.php">
                <div class="ratio ratio-16x9">
                  <img src="assets/images/ratnaautomotive.webp" class="object-fit-cover " alt="img">
                </div>
              </a>            
            </div>
            <div class="position-absolute" >
              <p class="rounded-pill bg-warning text-center px-2 mt-1">Certified</p>
            </div>
            <div class="">
              <a href="certified_dealers_inner.php" class="text-decoration-none text-dark">
                <h5 class="fw-bold text-center mt-3 mx-3">Ratna Automotive Pvt. Ltd. </h5>
              </a> 
              <div class="row">
              <div class="col-12 col-lg-12 col-md-12 col-sm-12"><p class=" text-center text-dark fw-bold ps-3">Sonalika Dealer</p></div>
               
              </div>
              <div class="justify-content-center  d-flex">
                <button typt="button" class="btn btn-success w-100">Rangareddy, Telangana</button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-12 col-sm-3 col-md-3 col-lg-3 px-2 py-3 h-100">
          <div class="h-auto success__stry__item d-flex flex-column shadow ">
            <div class="thumb" style="positon:relative;">
              <a href="certified_dealers_inner.php">
                <div class="ratio ratio-16x9">
                  <img src="assets/images/ratnaautomotive.webp" class="object-fit-cover " alt="img">
                </div>
              </a>            
            </div>
            <div class="position-absolute" >
              <p class="rounded-pill bg-warning text-center px-2 mt-1">Certified</p>
            </div>
            <div class="">
              <a href="certified_dealers_inner.php" class="text-decoration-none text-dark">
                <h5 class="fw-bold text-center mt-3 mx-3">Ratna Automotive Pvt. Ltd. </h5>
              </a> 
              <div class="row">
                <div class="col-12 col-lg-12 col-md-12 col-sm-12"><p class=" text-center text-dark fw-bold ps-3">Sonalika Dealer</p></div>
               
              </div>
              <div class="justify-content-center  d-flex">
                <button typt="button" class="btn btn-success w-100">Rangareddy, Telangana</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- Find tractor dealers near you -->
  <section>
    <div class="container">
      <div class="row">
        <p class="fw-bold text-dark bg-light text-start mt-4 assured ps-3">Find tractor dealers near you</p>
        <p class="justify-content-center">Bharat Tractor is India’s leading digital platform for all kinds of Tractor related services be it buying, selling, financing, insuring or servicing the machine we serve you all. Bharat Tractor, in order to meet your expectations and needs strive hard in order to get more resources on-board for your betterment. One such feature we offer you is to find best and certified dealers for your desired activity. Finding a dealer we know can be very messy sometimes but we assure you ease through our highly selective database. Find best dealers in your locality and get a list of all the dealers in your proximity. We believe in making the tasks of buying and selling tractors easy for you and hassle free. When it is with us, it is assured, it is guaranteed and it is safe. Bharat Tractor brings to you the best after scrutinizing the companies, brands, models and dealers through our integrated process of selection</p>
        <p class="justify-content-center">We offer you a hassle-free process to buy tractor dealerships in India. You just need to fill up the above form asking for basic details like name, tractor brand preferences, state, district, etc. We will help you identify the right steps to start your new tractor dealerships. We will help you with pre and post-opening & product support, prepare a marketing and advertising plan & even provide assistance on gathering resources for ideal site selection, followed by quality control parameters. For any further Tractor dealership enquiry, reach us.</p>
      </div>
    </div>
  </section>

    <!-- QUICK LINKS -->
  <section>
    <div class="container py-3 mt-2">
      <div class="row">
        <h5 class="bg-light assured py-1 ps-3">Quick links</h5>
        <div class="col-12 col-md-6 col-lg-3 py-1">
          <ul>
            <li><i class="fa-solid fa-angles-right pe-1"></i><a href="#" class="text-decoration-none text-dark">New Tractor</a></li>                    
            <li><i class="fa-solid fa-angles-right pe-1"></i><a href="#" class="text-decoration-none text-dark">Compare</a></li>
            <li><i class="fa-solid fa-angles-right pe-1"></i><a href="#" class="text-decoration-none text-dark">Dealership Enquiry</a></li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3 py-1">
          <ul>
            <li><i class="fa-solid fa-angles-right pe-1"></i><a href="#" class="text-decoration-none text-dark">Finance</a></li>                    
            <li><i class="fa-solid fa-angles-right pe-1"></i><a href="#" class="text-decoration-none text-dark">Upcoming Tractors</a></li>
            <li><i class="fa-solid fa-angles-right pe-1"></i><a href="#" class="text-decoration-none text-dark">Contact/Mail Us</a></li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3 py-1">
          <ul>
            <li><i class="fa-solid fa-angles-right pe-1"></i><a href="#" class="text-decoration-none text-dark">Popular Tractors</a></li>                    
            <li><i class="fa-solid fa-angles-right pe-1"></i><a href="#" class="text-decoration-none text-dark">Tractor News</a></li>
            <li><i class="fa-solid fa-angles-right pe-1"></i><a href="#" class="text-decoration-none text-dark">Insurance</a></li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3 py-1">
          <ul>
            <li><i class="fa-solid fa-angles-right pe-1"></i><a href="#" class="text-decoration-none text-dark">Used Tractors</a></li>
            <li><i class="fa-solid fa-angles-right pe-1"></i><a href="#" class="text-decoration-none text-dark">Latest Tractors</a></li>
            <li><i class="fa-solid fa-angles-right pe-1"></i><a href="#" class="text-decoration-none text-dark">Offers</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>        

  <?php
    include 'includes/footer.php';
    include 'includes/footertag.php';
  ?>
</body>
</html>
<?php
  include 'includes/headertag.php';
  include 'includes/headertagadmin.php';
  include 'includes/footertag.php';
  ?> 
  <script> var APIBaseURL = "<?php echo $APIBaseURL; ?>";</script>
  <script> var baseUrl = "<?php echo $baseUrl; ?>";</script>
  <script src="<?php $baseUrl; ?>model/dealership_list.js" defer></script>
  <script src="<?php $baseUrl; ?>model/State_dist_tehsil.js" defer></script>
   <script src="<?php $baseUrl; ?>model/state2_dist2.js" defer></script>
<body class="loaded"> 
  <div class="main-wrapper">
    <div class="app" id="app">
      <?php
      include 'includes/left_nav.php';
      include 'includes/header_admin.php';
      ?>
      <section style="padding: 0 15px;">
        <div class="">
          <div class="container">
            <div class="card-body d-flex align-items-center justify-content-between page_title">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb my-0 ms-2">
                  <li class="breadcrumb-item">
                    <span> Dealers Listings</span>
                  </li>
                </ol>
              </nav>
              <button type="button" id="add_trac" class="btn add_btn btn-success float-right p-2" onclick="resetFormFields();" data-bs-toggle="modal"  data-bs-target="#staticBackdrop">
                  <i class="fa fa-plus" aria-hidden="true"></i> Add New Dealers
              </button>
              <!-- Modal -->
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                  <div class="modal-content modal_box">
                    <div class="modal-header modal_head">
                      <h5 class="modal-title text-white fw-bold" id="staticBackdropLabel"> Add New Dealers </h5>
                      <button type="button" class="btn-close btn-success" data-bs-dismiss="modal" aria-label="Close"><img src="assets/images/close.png"></button>
                    </div>
                    <div class="modal-body bg-light">
                      <div class="row justify-content-center">
                        <div class="col-lg-10">
                          <h4 class="text-center">Fill your Details</h4>
                          <form id="dealer_list_form">
                            <div class="row justify-content-center pt-4">
                              <div class="col-12 col-lg-6 col-md-6 col-sm-6 ">
                                <div class="form-outline">
                                  <label for="name" class="form-label text-dark">Dealer Name</label>
                                  <input type="text" class="form-control" placeholder="" id="dname" name="dname">
                                </div>
                              </div>
                              <div class="ol-12 col-lg-6 col-md-6 col-sm-6">
                                <div class="form-outline">
                                  <label class="form-label"> Brand</label>
                                  <select class="form-select py-2" aria-label="Default select example" id="brand" name="brand">
                                  </select>
                                </div>
                              </div>
                              <div class="col-12 col-lg-6 col-md-6 col-sm-6 ">
                                <div class="form-outline mt-3">
                                  <label for="name" class="form-label text-dark">Email Id</label>
                                  <input type="text" class="form-control" placeholder="" id="email" name="">
                                </div>
                              </div>
                              <div class="col-12 col-lg-6 col-md-6 col-sm-6 ">
                                <div class="form-outline mt-3">
                                  <label for="name" class="form-label text-dark">Contact Number</label>
                                  <input type="text" class="form-control" placeholder="" id="cno" name="cno">
                                </div>
                              </div>
                              <div class="col-12  mb-2">
                                <div class="form-outline mt-3">
                                  <label for="name" class="form-label text-dark">Address</label>
                                  <!-- <input type="email" class="form-control" placeholder="" id="" name=""> -->
                                  <textarea rows="3" cols="70" class="w-100 pt-2" minlength="1" maxlength="255" id="address" name="address"></textarea>
                                </div>
                              </div>
                              <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div class="form-outline mt-3">
                                  <label class="form-label">State</label>
                                  <select class="form-select py-2 state-dropdown"  aria-label="Default select example" id="state_" name="state_">
                                  </select>
                                </div>
                              </div>
                              <div class="col-12  col-sm-6 col-md-6 col-lg-6">
                                <div class="form-outline mt-3">
                                  <label class="form-label">District</label>
                                  <select class="form-select py-2 district-dropdown"  aria-label="Default select example" id="dist" name="dist">
                                  </select>
                                </div>
                              </div>
                              <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div class="form-outline mt-3">
                                  <label class="form-label">Tehsil</label>
                                  <select class="form-select py-2 tehsil-dropdown" id="tehsil" aria-label="Default select example">
                                  </select>
                                </div>
                              </div>
                              <div class="col-12 col-lg-6 col-md-6 col-sm-6 ">
                                <div class="upload__box mt-5 d-none">
                                  <div class="upload__btn-box text-center">
                                    <label >
                                      <p class="upload__btn ">Upload images</p>
                                      <input type="file" multiple="" data-max_length="20" class="upload__inputfile" id="_image" name="_image">
                                    </label>
                                  </div>
                                  <div id="selectedImagesContainer" class="upload__img-wrap"></div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary px-3" data-bs-dismiss="modal">Close</button>
                      <button type="submit" id="subbtn_" class="btn btn-success fw-bold px-3">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="filter-card mb-2">
            <div class="card-body">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                  <div class="form-outline ">
                    <label class="form-label">Name</label>
                    <input type="text" id="name1" name="name1" class="form-control" />
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                  <div class="form-outline">
                    <label class="form-label"> Brand Name</label>
                    <select class="form-select py-2" id="brand1" aria-label="Default select example">
                    </select>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                  <div class="form-outline">
                    <label class="form-label">State</label>
                    <select class="form-select py-2 state_select" aria-label="Default select example" id="search_state">
                    </select>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                  <div class="form-outline">
                    <label class="form-label">District</label>
                    <select class="form-select py-2 district_select" aria-label="Default select example" id="search_dist">
                    </select>
                  </div>
                </div>
                <div class="col-12 mt-4">
                  <div class="text-center">
                    <button type="button" class="btn-success btn px-4 pt-2" id="Search" onclick="searchdata()">Search</button>
                    <button type="button" class="btn-success btn mx-2 px-4 pt-2" id="Reset" onclick="resetform()">Reset</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Table Card -->
          <div class=" mb-5 shadow bg-white mt-3 p-3">
            <div class="table-responsive">
              <table id="example" class="table table-striped  table-hover table-bordered dataTable no-footer" width="100%; margin-bottom: 15px;">
                <thead class="">
                  <tr>
                    <th class="d-none d-md-table-cell text-white">S.No.</th>
                    <th class="d-none d-md-table-cell text-white">Date</th>
                    <th class="d-none d-md-table-cell text-white">Dealer Name </th>
                    <th class="d-none d-md-table-cell text-white">Brand</th>
                    <th class="d-none d-md-table-cell text-white">Moble</th>
                    <th class="d-none d-md-table-cell text-white">State</th>
                    <th class="d-none d-md-table-cell text-white">District</th>
                    <!-- <th class="d-none d-md-table-cell text-white">Action</th> -->
                  </tr>
                </thead>
                <tbody id="data-table">
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <!--Model-->
      <div class="modal fade" id="view_model_dealers" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content modal_box">
            <div class="modal-header modal_head">
              <h5 class="modal-title text-white fw-bold" id="staticBackdropLabel"> Dealers Details</h5>
              <button type="button" class="btn-close btn-success" data-bs-dismiss="modal" aria-label="Close"><img src="assets/images/close.png"></button>
            </div>
            <div class="modal-body bg-light">
              <div class="row">
                <div class="col-12">
                  <table class="table table-striped">
                    <tbody>
                      <tr>
                        <td>Dealers Name-</td>
                        <td id="dealer_name"></td>
                        <td>Brand-</td>
                        <td id="brand_nmae"></td>
                      </tr>
                      <tr>
                        <td>Email Id-</td>
                        <td id="email_id"></td>
                        <td>Contact Number-</td>
                        <td id="contact"></td>
                      </tr>
                      <tr>
                        <td>State-</td>
                        <td id="state"></td>
                        <td>District-</td>
                        <td id="district"></td>
                      </tr>
                      <tr>
                        <td>Tehsil-</td>
                        <td id="tehsil_"></td>
                      </tr>
                      <tr>
                        <td>Address-</td>
                        <td colspan="3">
                          <div class="col-12" id="addrss"></div>
                        </td>
                      </tr>
                      <tr class="d-none">
                        <td>Upload images-</td>
                        <td colspan="3">
                          <div class="col-12">
                            <div id="selectedImagesContainer1" class="upload__img-wrap row"></div>
                           </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>  
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary px-3" data-bs-dismiss="modal">Close</button>
                <!-- <button type="submit" id="btn_sb" class="btn btn-success fw-bold px-3">Submit</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</body>

<?php
  include 'includes/footertag.php';
?> 
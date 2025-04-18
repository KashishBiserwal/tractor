 <?php
    include 'includes/headertag.php';
    include 'includes/headertagadmin.php';
    include 'includes/footertag.php';
   ?> 
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
  <script> var APIBaseURL = "<?php echo $APIBaseURL; ?>";</script>
  <script> var baseUrl = "<?php echo $baseUrl; ?>";</script>
  <script src="<?php $baseUrl; ?>model/blog_list.js"></script>
  <script>
    $(document).ready(function() {
      console.log('dfsdwe');
    $(".js-select2").select2({
      closeOnSelect: true
    });
  });
</script>
<style>
    .custom-image-size {
        width: 200px;
        height: 200;
    }
    .upload__inputfile {
    width: .1px;
    height: .1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    }

    .upload__btn {
    display: inline-block;
    font-weight: 600;
    color: #fff;
    text-align: center;
    min-width: 150px;
    padding: 5px;
    transition: all .3s ease;
    cursor: pointer;
    border: 2px solid;
    background-color:  #198754;
    border-color:  #198754;
    border-radius: 10px;
    line-height: 26px;
    font-size: 14px;
    }

    .upload__btn:hover {
    background-color: unset;
    color:  #198754;
    transition: all .3s ease;
    }

    .upload__btn-box {
    margin-bottom: 10px;
    margin-top:-25px;
    }

    .upload__img-wrap {
      display: flex;
      flex-wrap: wrap;
    }

    .upload__img-box {
    flex: 0 0 calc(33.333% - 20px); 
    margin: 0 10px 20px; 
    position: relative;
    display: flex;
      flex-wrap: wrap;
    }

    .upload__img-close,.upload__img-close_button {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 10px;
    right: 60px;
    text-align: center;
    line-height: 24px;
    z-index: 1;
    cursor: pointer;
    }

    .upload__img-close:after,.upload__img-close_button:after {
    content: '\2716';
    font-size: 14px;
    color: white;
    }
    

    .img-bg {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: relative;
    width: 160px;
    height: 125px;
    }
</style>
<body class="loaded"> 
  <div class="main-wrapper">
    <div class="app" id="app">
    <?php
    include 'includes/left_nav.php';
    include 'includes/header_admin.php';
    ?>
  <section style="padding: 0 15px 0 60px;">
   <div class="">
      <div class="">
      <div class="card-body d-flex align-items-center justify-content-between page_title">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <span>Blog List</span>
              </li>
            </ol>
          </nav>
           <button type="button" id="add_trac" class="btn add_btn btn-success  btn_edit float-right btn_all" data-bs-toggle="modal"  data-bs-target="#staticBackdrop" onclick="resetFormFields()">
              <i class="fa fa-plus" aria-hidden="true"></i>Add Blog
            </button>
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
              <div class="modal-content modal_box">
                <div class="modal-header modal_head">
                  <h5 class="modal-title text-white fw-bold" id="staticBackdropLabel">Add Blog</h5>
                  <button type="button" class="btn-close btn-success" data-bs-dismiss="modal" aria-label="Close"><img src="assets/images/close.png"></button>
                </div>
                <div class="modal-body bg-white">
                        <div class="row justify-content-center">
                            <div class="col-lg-10">
                              <h4 class="text-center" style="font-weight: 600;">Fill your Details</h4>
                            <form id="form_news_updates">
                                <div class="row justify-content-center">
                                    <div class="col-12 col-lg-6 col-md-6 col-sm-6  mt-3">
                                      <div class="form-outline">
                                        <label for="name" class="form-label text-dark">Blog Category</label>
                                        <!-- <input type="text" class="form-control" placeholder="" id="brand" name="brand"> -->
                                        <select class="form-select form-control py-2" name="brand" for="lookupSelectbox" id="brand" aria-label="Default select example">
                                          <option value="" id="">Select Type Name</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-12 col-lg-6 col-md-6 col-sm-6 mt-3">
                                      <div class="form-outline ">
                                        <label for="name" class="form-label text-dark">Blog Headline</label>
                                        <input type="text" class="form-control" placeholder="" id="headline" name="headline">
                                      </div>
                                    </div>
                                    <div class="col-12 mt-3">
                                        <div class="form-outline">
                                        <label class="form-label text-dark">Body/ Blog Content</label>
                                        <textarea class="w-100 p-2" name="contant" id="contant" rows="4" cols="70" ></textarea>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-8 col-md-8 col-sm-8 mt-3">
                                        <div class="form-outline">
                                        <label class="form-label text-dark">Publisher Name</label>
                                        <input type="text" class="form-control" placeholder="" id="publisher" name="publisher">
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-4 col-md-4 col-sm-4">
                                            <div class="upload__box m-5">
                                                <div class="upload__btn-box">
                                                    <label>
                                                        <p class="upload__btn">Upload image</p>
                                                        <input type="file" class="upload__inputfile" id="image_" name="image_" accept="image/*">
                                                    </label>
                                                    <p></p>
                                                </div>
                                                <div id="selectedImagesContainer2" class="upload__img-wrap"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary btn_all" data-bs-dismiss="modal">Close</button>
                      <button type="submit" id="submitBtn" class="btn btn-success btn_all">Submit</button>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <!-- Filter Card -->
      <div class="filter-card mb-2">
        <div class="card-body">
        <form action="" id="myform" class="mb-0">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 ">
            <div class="form-outline">
                      <label class="form-label">Search By Category</label>
                      <select class="js-select2 form-select form-control mb-0" id="category_name">
                      </select>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="form-outline">
                <label class="form-label">Headline</label>
                <input type="text"  name="search_email" class="form-control" id="search_headline"/>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="text-center float-end">
              <button type="button" class="btn-success btn btn_all" id="Search">Search</button>
                <button type="button" class="btn-success btn btn_all" id="Reset">Reset</button>
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
      <!-- Table Card -->
      <div class=" mb-5">
            <div class="table-responsive shadow bg-white mt-3 p-3">
              <table id="example" class="table table-striped  table-hover table-bordered dataTable no-footer" width="100%; margin-bottom: 15px;">
                <thead class="">
                  <tr>
                    <th class="d-none d-md-table-cell text-white">S.No.</th>
                    <th class="d-none d-md-table-cell text-white">Date</th>
                    <th class="d-none d-md-table-cell text-white">Category</th>
                    <th class="d-none d-md-table-cell text-white">Headline </th>
                    <th class="d-none d-md-table-cell text-white">Action</th>
                  </tr>
                </thead>
                <tbody id="data-table">
                </tbody>
              </table>
           </div>
          </div>
        </div>
        <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
              <div class="modal-content modal_box">
                <div class="modal-header modal_head">
                  <h5 class="modal-title text-white fw-bold" id="staticBackdropLabel">Blog List Information </h5>
                  <button type="button" class="btn-close btn-success" data-bs-dismiss="modal" aria-label="Close"><img src="assets/images/close.png"></button>
                </div>
                  <div class="modal-body bg-light">
                    <div class="row ">
                       <div class="col-12">
                        <table class="table table-striped">
                        <tbody>
                         <tr>
                            <td >Blog Category-</td>
                            <td id="news_cate"></td>
                            <td>Blog headline-</td>
                            <td id="headline_news"></td>
                          </tr>
                          <tr>
                            <td>Blog Content-</td>
                            <td id="content_news"></td>
                            <td>Publisher-</td>
                            <td id="publi"></td>
                          <tr>
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
</section>
      
    
</div>
</div>
</body>


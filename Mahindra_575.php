<!DOCTYPE html>
<html lang="en">
<head>
   <?php
    include 'includes/headertag.php';
    $product_id=$_REQUEST['product_id'];
    echo $product_id;
    include 'includes/footertag.php';
   ?>
  
  <script> var APIBaseURL = "<?php echo $APIBaseURL; ?>";</script>
  <script> var baseUrl = "<?php echo $baseUrl; ?>";</script>
  <script src="<?php $baseUrl; ?>model/.js"></script>
</head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6Z38E658LD"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6Z38E658LD');
</script>

<body>
   <?php
   include 'includes/header.php';
   ?>

<section>
    <div class="container mt-5 pt-4">
        <div class="pt-5">
            <span class="mt-4 pt-4 ">
                <a href="index.php" class="text-decoration-none header-link px-1">Home <i class="fa-solid fa-chevron-right px-1"></i></a>
                    <span class=""><span class=" header-link  px-1">Brand <i class="fa-solid fa-chevron-right px-1"></i> </span></span>
                    <span class="text-dark"> Mahindra</span>
            </span> 
        </div>
    </div>
</section>

<section id="Mahindra_575">
    <div class="container">
        <h1 class="mt-4" id="model_name"></h1>
        <div class="row">
            <div class="col-12 col-lg-6 col-md-6 col-sm-6 mt-5 pt-3">
                <img src="" alt="mahindra-575-DI-XP-Plus" id="image_id">
            </div>
            <div class="col-12 col-lg-6 col-md-6 col-sm-6">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col"><h5> <i class="fa-solid fa-award"></i> Brand</h5></th>
                            <th scope="col"> <p><a href="mahindra.php" class="text-decoration-none h5 text-danger " id="brand_name"></a></p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p><i class="fa-solid fa-gas-pump"></i> Number of Cylinder</p></td>
                            <td><p id="total_cyclinder_value2"></p></td>
                        </tr>
                        <tr>
                            <td> <p><i class="fas fa-bolt"></i> HP Category</p></td>
                            <td><p> <span id="hp_category"></span> HP</p> </td>
                        </tr>
                        <tr>
                            <td><p><i class="fas fa-bolt"></i> PTO HP</p></td>
                            <td><p> <span  id="horse_power"></span> HP</p> </td>
                        </tr>
                        <tr>
                            <td> <i class="fa-solid fa-gear"></i> Gear Box</p></p></td>
                            <td><p><span id="gear_box_forward"></span> Forward + <span id="gear_box_reverse"></span> Reverse</p></td>
                        </tr>
                        <tr>
                            <td><p><i class="fa fa-chain-broken" aria-hidden="true"></i> Brakes</p></td>
                            <td><p id="brake_value2"></p></td>
                        </tr>
                        <tr>
                            <td> <p><i class="fa-solid fa-pen-to-square"></i> Warranty</p></td>
                            <td> <p><span id="warranty"></span> Year</p></td>
                        </tr>
                        <!-- <tr>
                            <td>  <p><i class="fas fa-rupee-sign"></i> Price</p></td>
                            <td> <p> <a href="#" class="text-decoration-none text-danger">Check Price</a></p></td>
                        </tr> -->
                    </tbody>
                </table>
                <div class="row my-3 text-center">
                    <div class="col-12 col-lg-4 col-md-4 col-sm-4">
                        <button type="submit" class="btn btn-danger w-100 fw-bold" >GET ON ROAD PRICE</button>
                    </div>
                    <div class="col-12 col-lg-4 col-md-4 col-sm-4">
                        <button type="submit" class="btn btn-dark w-100 fw-bold" >VIEW LOAN OFFERS</button>
                    </div>
                </div>

            </div>
        </div>

       
    </div>
</section>


<section class="bg-light">
    <div class="container py-2">
        <h3 class="text-dark fw-bold assured mt-2 ps-3" ><span class="text-success"  class="model_name"></span> Other Features</h3>
        <div class="row mt-3 pt-4">
            <div class="col-2 col-md-3 col-lg-3 col-sm-3 p-2">
                <div class="Engine shadow p-2 h-100 "style="background-color:#fff">
                    <div class="col-12 text-center">
                        <img src="assets/images/clutch.png" width="50" height="50" alt="">
                    </div>
                    <div class="col-12">
                        <h6 class="engine_ text-center fw-bold fs-6 m-1 text-dark">CLUTCH</h6>
                        <p class="engine_name text-center" id="transmission_clutch_value2"> </p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-3 p-2">
                <div class="Engine shadow p-2 h-100 "style="background-color:#fff">
                    <div class="col-12 text-center">
                        <img src="assets/images/61pVwAXBzSL.jpg" width="50" height="50" alt="">
                    </div>
                    <div class="col-12">
                        <h6 class="engine_ text-center fw-bold fs-6 m-1 text-dark">STEERING</h6>
                        <p class="engine_name text-center" id="steering_column_value2"></p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-3 p-2">
                <div class="Engine shadow p-2 h-100 "style="background-color:#fff">
                    <div class="col-12 text-center">
                        <img src="assets/images/wheel-drive.png" width="50" height="50" alt="">
                    </div>
                    <div class="col-12">
                        <h6 class="engine_ text-center fw-bold fs-6 m-1 text-dark">LIFTING CAPACITY</h6>
                        <p class="engine_name text-center"><span id="lifting"></span> </p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-3 p-2">
                <div class="Engine shadow p-2 h-100 "style="background-color:#fff">
                    <div class="col-12 text-center">
                        <img src="assets/images/rpm.png" width="50" height="50" alt="">
                    </div>
                    <div class="col-12">
                        <h6 class="engine_ text-center fw-bold fs-6 m-1 text-dark" >ENGINE RATED RPM</h6>
                        <p class="engine_name text-center" id="engine_rated_rpm2"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container my-5">
        <div class="about border-success  border-4 text-dark border-start">
            <h2 class="text-dark fw-bold text-start ps-4"> About <span id="brand_name"></span></h2>
        </div>
        <div class="mt-1">
            <p class="text-dark" id="description"></p>
        </div>
    </div>
</section>
<section class="mt-3">
    <div class="container">
        <div class="about border-success  border-4 text-dark border-start">
            <h3 class="text-dark fw-bold text-start ps-4"> <span class="model_name"></span> Engine</h3>
        </div>
        <table class="table w-75 table-hover table table-striped my-4">
            <tbody>
                <tr>
                    <td class="table-data">No. Of Cylinder</td>
                    <td class="table-data"><p id="total_cyclinder_value"></p></td>
                </tr>
                <tr>
                    <td class="table-data">HP Category</td>
                    <td class="table-data"><span id="hp_category_id"></span> HP</td>
                </tr>
                <tr>
                    <td class="table-data">Capacity CC</td>
                    <td class="table-data" ><span id="engine_capacity_cc"></span> CC</td>
                </tr>
                <tr>
                    <td class="table-data">Engine Rated RPM</td>
                    <td class="table-data"><span id="engine_rated_rpm"></span> RPM</td>
                </tr>
                <tr>
                    <td class="table-data">Cooling</td>
                    <td class="table-data" id="cooling_value"> </td>
                </tr>
                <tr>
                    <td class="table-data">Air Filter</td>
                    <td class="table-data" id="air_filter"></td>
                </tr>
                <tr>
                    <td  class="table-data">PTO HP</td>
                    <td class="table-data"><p> <span  id="horse_power_2"></span> HP</p> </td>
                </tr>
                <tr>
                    <td class="table-data">Fuel Pump</td>
                    <td class="table-data"> <span  id="fuel_value"></span></td>
                </tr>
                <tr>
                    <td class="table-data">Torque</td>
                    <td class="table-data"><span  id="torque"></span> NM</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>

<section class="mt-3">
    <div class="container">
        <div class="about border-success  border-4 text-dark border-start">
            <h3 class="text-dark fw-bold text-start ps-4"> Mahindra 575 DI XP Plus Transmission</h3>
        </div>

        <table class="table w-75 table-hover table table-striped my-4">
            <tbody>
                <tr>
                    <td class="table-data">Type</td>
                    <td class="table-data"><span  id="transmission_type_value"></span></td>
                </tr>
                <tr>
                    <td class="table-data">Clutch</td>
                    <td class="table-data"><span  id="transmission_clutch_value"></span></td>
                </tr>
                <tr>
                    <td class="table-data">Gear Box</td>
                    <td class="table-data"><span  id="gear_box_forward_2"></span> Forward + <span  id="gear_box_reverse_2"></span> Reverse</td>
                </tr>
                <tr>
                    <td class="table-data">Forward Speed</td>
                    <td class="table-data"> <span id="transmission_forward"></span> kmph </td>
                </tr>
                <tr>
                    <td class="table-data">Reverse Speed</td>
                    <td class="table-data" > <span id="transmission_reverse"></span> kmph</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>

<section class="mt-3">
    <div class="container">
        <div class="about border-success  border-4 text-dark border-start">
            <h3 class="text-dark fw-bold text-start ps-4">Mahindra 575 DI XP Plus Brakes</h3>
        </div>
        <table class="table w-75 table-hover table table-striped my-4">
            <tbody>
                <tr>
                    <td class="table-data">Brakes</td>
                    <td class="table-data"><span  id="brake_value"></span></td>
                </tr>
            </tbody>
        </table>
    </div>
</section>

<section class="mt-3">
    <div class="container">
        <div class="about border-success  border-4 text-dark border-start">
            <h3 class="text-dark fw-bold text-start ps-4">Mahindra 575 DI XP Plus Steering</h3>
        </div>
        <table class="table w-75 table-hover table table-striped my-4">
            <tbody>
                <tr>
                    <td class="table-data">Type</td>
                    <td class="table-data" id="steering_details_value"> </td>
                </tr>
                <tr>
                    <td class="table-data">Steering Column</td>
                    <td class="table-data"><span id="steering_column_value"></span></td>
                </tr>
            </tbody>
        </table>
    </div>
</section>

<section class="mt-3">
    <div class="container">
        <div class="about border-success  border-4 text-dark border-start">
            <h3 class="text-dark fw-bold text-start ps-4">Mahindra 575 DI XP Plus Power Take Off</h3>
        </div>
        <table class="table w-75 table-hover table table-striped my-4">
            <tbody>
                <tr>
                    <td class="table-data">Type</td>
                    <td class="table-data">6 Spline</td>
                </tr>
                <tr>
                    <td class="table-data">RPM</td>
                    <td class="table-data"><span id="power_take_off_rpm"></span></td>
                </tr>
            </tbody>
        </table>
    </div>
</section>

<section class="mt-3">
    <div class="container">
        <div class="about border-success  border-4 text-dark border-start">
            <h3 class="text-dark fw-bold text-start ps-4">Mahindra 575 DI XP Plus Dimensions And Weight Of Tractor</h3>
        </div>
        <table class="table w-75 table-hover table table-striped my-4">
            <tbody>
                <tr>
                    <td class="table-data">Total Weight</td>
                    <td class="table-data"><span id="total_weight"></span> KG</td>
                </tr>
                <tr>
                    <td class="table-data">Wheel Base</td>
                    <td class="table-data"><span id="wheel_base"></span>  MM</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>

<section class="mt-3">
    <div class="container">
        <div class="about border-success  border-4 text-dark border-start">
            <h3 class="text-dark fw-bold text-start ps-4">Mahindra 575 DI XP Plus Hydraulics</h3>
        </div>
        <table class="table w-75 table-hover table table-striped my-4">        
            <tbody>
                <tr>
                    <td class="table-data">Lifting Capacity</td>
                    <td class="table-data"><span id="lifting_capacity"></span> Kg</td>
                </tr>
                <tr>
                    <td class="table-data">3 point Linkage</td>
                    <td class="table-data"> <span id="linkage_point_value"></span></td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
<section class="mt-3">
    <div class="container">
        <div class="about border-success  border-4 text-dark border-start">
            <h3 class="text-dark fw-bold text-start ps-4">Mahindra 575 DI XP Plus Fuel Tank</h3>
        </div>
        <table class="table w-75 table-hover table table-striped my-4">
            <tbody>
                <tr>
                    <td class="table-data">Capacity</td>
                    <td class="table-data"><span class="fuel_capacity"></span> L</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>

<section class="mt-3">
    <div class="container">
        <div class="about border-success  border-4 text-dark border-start">
            <h3 class="text-dark fw-bold text-start ps-4">Mahindra 575 DI XP Plus Wheels And Tyres</h3>
        </div>
        <table class="table w-75 table-hover table table-striped my-4">
            <tbody>
                <tr>
                    <td class="table-data">Wheel drive</td>
                    <td class="table-data"><span id="wheel_drive_value"></span></td>
                </tr>
                <tr>
                    <td class="table-data">Front</td>
                    <td class="table-data"><span id="front_tyre"></span></td>
                </tr>
                <tr>
                    <td class="table-data">Rear</td>
                    <td class="table-data"><span id="rear_tyre"></span></td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
<section class="mt-3">
    <div class="container">
        <div class="about border-success  border-4 text-dark border-start">
            <h3 class="text-dark fw-bold text-start ps-4"><span id="brand_name"></span> Other Information</h3>
        </div>
        <table class="table w-75 table-hover table table-striped my-4">
            <tbody>
                <tr>
                    <td class="table-data">Accessories</td>
                    <td class="table-data"><span id="accessory_id"></span> </td>
                </tr>
                <tr>
                    <td class="table-data">Warranty</td>
                    <td> <span id="warranty_2"></span> year</td>
                </tr>
                <tr>
                    <td class="table-data">Status</td>
                    <td class="table-data"><span id="status_value"></span></td>
                </tr>
            </tbody>
        </table>
    </div>
</section>

    <section>
         <div class="container">
            <h2 class="fw-bold text-dark text-start">Similar Used Tractors</h3>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 px-2 py-3 h-100">
                    <div class="h-auto success__stry__item d-flex flex-column shadow ">
                        <div class="thumb">
                            <a href="#">
                                <div class="ratio ratio-16x9">
                                    <img src="assets/images/b425d279-340f-47cf-be7e-3a8d25f56196.webp" class="object-fit-cover  "  alt="img">
                                </div>
                            </a>
                        </div>
                        <div class="content d-flex flex-column flex-grow-1 ms-3">
                            <a href="#" class="text-decoration-none text-dark ps-3">
                                <h4 class="fw-bold mt-3">Mahindra 575 DI XP Plus  </h3>
                            </a>
                            <a href="# " class="text-dark flex-grow-1 text-decoration-none ps-3">
                                <p>Price: ₹ 6,20,000*</p>
                            </a>
                            <div class="row mt-1 ps-3">
                                <div class="col-12 col-lg-3 col-md-3 col-sm-3">
                                    <p class=""> <i class="fas fa-bolt"></i> 47 HP</p>
                                </div>
                                <div class="col-12 col-lg-4 col-md-4 col-sm-4">
                                    <p class="ps-1">2021 Model</p>
                                </div>
                            </div>
                            <a href="#" class="text-decoration-none text-dark mb-4 ps-3">
                                <span> Nasik, Maharashtra </span>
                                <span class="icon">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 px-2 py-3 h-100">
                    <div class="h-auto success__stry__item d-flex flex-column shadow ">
                        <div class="thumb">
                            <a href="#">
                                <div class="ratio ratio-16x9">
                                    <img src="assets/images/90aa527c-3aa2-4972-b1cb-937bfa90ba5f.webp" class="object-fit-cover  "  alt="img">
                                </div>
                            </a>
                        </div>
                        <div class="content d-flex flex-column flex-grow-1 ms-3">
                            <a href="#" class="text-decoration-none text-dark ps-3">
                                <h4 class="fw-bold mt-3">Mahindra 575 DI XP Plus  </h3>
                            </a>

                            <a href="# " class="text-dark flex-grow-1 text-decoration-none ps-3">
                                <p>Price: ₹ 5,80,000*</p>
                            </a>

                            <div class="row mt-1 ps-3">
                                <div class="col-12 col-lg-3 col-md-3 col-sm-3">
                                    <p class=""> <i class="fas fa-bolt"></i> 47 HP</p>
                                </div>
                                <div class="col-12 col-lg-4 col-md-4 col-sm-4">
                                    <p class="ps-1">2021 Model</p>
                                </div>
                            </div>
                            <a href="#" class="text-decoration-none text-dark mb-4 ps-3">
                                <span>
                                    Ahmednagar, Maharashtra 
                                </span>
                                <span class="icon">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 px-2 py-3 h-100">
                    <div class="h-auto success__stry__item d-flex flex-column shadow ">
                        <div class="thumb">
                            <a href="#">
                                <div class="ratio ratio-16x9">
                                    <img src="assets/images/575-di-xp-plus-141907-1693895494-0.webp" class="object-fit-cover  "  alt="img">
                                </div>
                            </a>
                        </div>
                        <div class="content d-flex flex-column flex-grow-1 ms-3">
                            <a href="#" class="text-decoration-none text-dark ps-3">
                                <h4 class="fw-bold mt-3">Mahindra 575 DI XP Plus </h3>
                            </a>

                            <a href="# " class="text-dark flex-grow-1 text-decoration-none ps-3">
                                <p>Price: ₹ 5,80,000*</p>
                            </a>

                            <div class="row mt-1 ps-3">
                                    <div class="col-12 col-lg-3 col-md-3 col-sm-3">
                                        <p class=""> <i class="fas fa-bolt"></i> 47 HP</p>
                                    </div>
                                    <div class="col-12 col-lg-4 col-md-4 col-sm-4">
                                        <p class="ps-1">2021 Model</p>
                                    </div>
                            </div>
                            <a href="#" class="text-decoration-none text-dark mb-4 ps-3">
                                <span>
                                    Dewas, Madhya Pradesh 
                                </span>
                                <span class="icon">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 px-2 py-3 h-100">
                    <div class="h-auto success__stry__item d-flex flex-column shadow ">
                        <div class="thumb">
                            <a href="#">
                                <div class="ratio ratio-16x9">
                                    <img src="assets/images/575-di-xp-plus-141907-1693895494-0.webp" class="object-fit-cover  "  alt="img">
                                </div>
                            </a>
                        </div>
                        <div class="content d-flex flex-column flex-grow-1 ms-3">
                            <a href="#" class="text-decoration-none text-dark ps-3">
                                <h4 class="fw-bold mt-3">Mahindra 575 DI XP Plus </h3>
                            </a>

                            <a href="# " class="text-dark flex-grow-1 text-decoration-none ps-3">
                                <p>Price: ₹ 5,80,000*</p>
                            </a>

                            <div class="row mt-1 ps-3">
                                    <div class="col-12 col-lg-3 col-md-3 col-sm-3">
                                        <p class=""> <i class="fas fa-bolt"></i> 47 HP</p>
                                    </div>
                                    <div class="col-12 col-lg-4 col-md-4 col-sm-4">
                                        <p class="ps-1">2021 Model</p>
                                    </div>
                            </div>
                            <a href="#" class="text-decoration-none text-dark mb-4 ps-3">
                                <span>
                                Dewas, Madhya Pradesh 
                                </span>
                                <span class="icon">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 px-2 py-3 h-100">
                    <div class="h-auto success__stry__item d-flex flex-column shadow ">
                        <div class="thumb">
                            <a href="#">
                                <div class="ratio ratio-16x9">
                                    <img src="assets/images/575-di-xp-plus-140857-1692693481-0.webp" class="object-fit-cover  "  alt="img">
                                </div>
                            </a>
                        </div>
                        <div class="content d-flex flex-column flex-grow-1 ms-3">
                            <a href="#" class="text-decoration-none text-dark ps-3">
                                <h4 class="fw-bold mt-3">Mahindra 575 DI XP Plus </h3>
                            </a>

                            <a href="# " class="text-dark flex-grow-1 text-decoration-none ps-3">
                                <p>Price: ₹ 5,45,000*</p>
                            </a>

                            <div class="row mt-1 ps-3">
                                    <div class="col-12 col-lg-3 col-md-3 col-sm-3">
                                        <p class=""> <i class="fas fa-bolt"></i> 47 HP</p>
                                    </div>
                                    <div class="col-12 col-lg-4 col-md-4 col-sm-4">
                                        <p class="ps-1">2021 Model</p>
                                    </div>
                            </div>
                            <a href="#" class="text-decoration-none text-dark mb-4 ps-3">
                                <span>
                                    Ujjain, Madhya Pradesh 
                                </span>
                                <span class="icon">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 px-2 py-3 h-100">
                    <div class="h-auto success__stry__item d-flex flex-column shadow ">
                        <div class="thumb">
                            <a href="#">
                                <div class="ratio ratio-16x9">
                                    <img src="assets/images/575-di-xp-plus-140855-1692693042-0.webp" class="object-fit-cover  "  alt="img">
                                </div>
                            </a>
                        </div>
                        <div class="content d-flex flex-column flex-grow-1 ms-3">
                            <a href="#" class="text-decoration-none text-dark ps-3">
                                <h4 class="fw-bold mt-3">Mahindra 575 DI XP Plus </h3>
                            </a>

                            <a href="# " class="text-dark flex-grow-1 text-decoration-none ps-3">
                                <p>Price: ₹ 6,00,000*</p>
                            </a>

                            <div class="row mt-1 ps-3">
                                    <div class="col-12 col-lg-3 col-md-3 col-sm-3">
                                        <p class=""> <i class="fas fa-bolt"></i> 47 HP</p>
                                    </div>
                                    <div class="col-12 col-lg-4 col-md-4 col-sm-4">
                                        <p class="ps-1">2021 Model</p>
                                    </div>
                            </div>
                            <a href="#" class="text-decoration-none text-dark mb-4 ps-3">
                                <span>
                                Raisen, Madhya Pradesh 
                                </span>
                                <span class="icon">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         <div class="col text-center my-3 pb-5">
            <a href="#" class="btn btn-success btn-lg">View All Used Tractors</a>
        </div>
    </section>

    <h2 id="productName"></h2>


<?php
    include 'includes/footer.php';
    // include 'includes/footertag.php';

    ?>
    </html>
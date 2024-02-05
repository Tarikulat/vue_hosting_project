<script setup>
// Import Swiper Vue.js components
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
const modules = ref([Pagination, Navigation]);

//slider value changing start.....
const monthly = ref();
const theryMonth = ref();
const halfYear = ref();
const yearly = ref();

const monthlyPrice = () => {
    monthly.value = '3890';
    theryMonth.value = '6890';
    halfYear.value = '12390';
    yearly.value = '15490';
}
const threeMonthPrice = () => {
    monthly.value = '11670';
    theryMonth.value = '20670';
    halfYear.value = '37170';
    yearly.value = '46470';
}
const halfYearPrice = () => {
    monthly.value = '23340';
    theryMonth.value = '41340';
    halfYear.value = '74340';
    yearly.value = '92940';
}
const yearPrice = () => {
    monthly.value = '46680';
    theryMonth.value = '82680';
    halfYear.value = '148680';
    yearly.value = '185880';
}

onMounted(() => {
    yearPrice();
})
</script>

<template>
    <!--hero section start-->
    <section class="hero-equal-height pt-165 backgrs pb-100 packge backgrs gradient-overly-right">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-7 col-lg-7">
                    <div class="hero-content-wrap text-white position-relative z-index">
                        <h1 class="text-brand media-res">Reseller Hosting Management</h1>
                        <p class="lead">Sell anything, anywhere, anytime on the world's biggest platform.</p>
                        <ul class="list-unstyled">
                            <li class="py-1">
                                <div class="d-flex align-items-center">
                                    <span class="ti-check mr-2"></span>
                                    <p class="mb-0">Great for selling online</p>
                                </div>
                            </li>
                            <li class="py-1">
                                <div class="d-flex align-items-center">
                                    <span class="ti-check mr-2"></span>
                                    <p class="mb-0">Secure payment gateways provided</p>
                                </div>
                            </li>
                            <li class="py-1">
                                <div class="d-flex align-items-center">
                                    <span class="ti-check mr-2"></span>
                                    <p class="mb-0">Fully customizable online stores</p>
                                </div>
                            </li>
                            <li class="py-1">
                                <div class="d-flex align-items-center">
                                    <span class="ti-check mr-2"></span>
                                    <p class="mb-0">Free Online Store Set Up Phone Call</p>
                                </div>
                            </li>
                        </ul>
                        <div class="action-btns mt-4">
                            <p>Get all the essentials features <strong>Starting at $6.59/mo</strong></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-lg-5">
                    <div class="container">
                        <div>
                            <label><img src="@/assets/img/v4.png" class="lan img-lan body-landing" alt="ser"></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!--hero section end-->

    <!-- packages starting heading -->
    <section>
        <div class="container">
            <div class="row justify-content-center head">
                <div class="col-md-12 col-lg-7">
                    <div class="section-heading  text-center">
                        <h3 class="media-la text-brand bt-hj">Reseller Page Hosting :</h3>
                        <h6 class="h5 med-w">
                            6 month plan <strong class="text-brand">10%</strong> discount - <strong class="text-brand">
                                hostgift6m
                            </strong>
                        </h6>
                        <div>
                            <h6 class="h5 med-w">
                                1year plan <strong class="text-brand">25%</strong> discount - <strong class="text-brand">
                                    hostgift1yr </strong>
                            </h6>
                        </div>
                    </div>
                </div>
                <div class="col-10 col-sm-8 col-md-7">

                    <div class="text-center mb-2 radio-box-wrap billingCycle">

                        <div class="single-radio-box" @click="monthlyPrice">
                            <input name="billingPlan" id="monthly-plan" value="monthly" class="radio" type="radio" checked>
                            <label for="monthly-plan"><span class="custom-check"></span>1 Month</label>
                        </div>
                        <div class="single-radio-box" @click="threeMonthPrice">
                            <input name="billingPlan" id="yearly-plan" value="yearly" class="radio" type="radio">
                            <label for="yearly-plan"><span class="custom-check"></span>3 Month</label>
                        </div>
                        <div class="single-radio-box" @click="halfYearPrice">
                            <input name="billingPlan" id="biannual-plan" value="biannual" class="radio" type="radio">
                            <label for="biannual-plan"><span class="custom-check"></span>6 Month</label>
                        </div>

                        <div class="single-radio-box" @click="yearPrice">
                            <input name="billingPlan" id="triennial-plan" value="triennial" class="radio" type="radio">
                            <label for="triennial-plan"><span class="custom-check"></span>1 Year</label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- main packages below -->
    <section>
        <div class="container top-p">

            <swiper :slidesPerView="3" :spaceBetween="50" :loop="true" :pagination="{
                clickable: true,
            }" :breakpoints="{
    '320': {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    '570': {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    '1024': {
        slidesPerView: 3,
        spaceBetween: 50,
    },
}" :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide>
                    <div class="container">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-lg-12 col-md-12 col-12">
                                <div class="card text-center align-items-center single-pricing-pack">
                                    <div class="pt-5">
                                        <h5 class="mb-0 text-brand">Reseller Page Hosting </h5>
                                        <p class="mb-0">Reseller Starter:</p>
                                    </div>
                                    <div class="card-header border-0 pricing-header">
                                        <div class="price text-center mb-0 monthly-price">৳ {{ monthly }}<span>/-BDT
                                                Only.</span></div>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-unstyled mb-4 pricing-feature-list">
                                            <li> 50 GB NVMe Disk Space</li>
                                            <li> 1 TB Bandwidth Monthly</li>
                                            <li> 20 cPanel Accounts</li>
                                            <li> WHM Accounts</li>
                                            <li> Free SSL certificates</li>
                                            <li> Private Nameserver</li>
                                            <li> White-label Server</li>
                                            <li> 1 Core (up to 4.9 GHz) per cP</li>
                                            <li> 1 GB RAM (DDR4) Per cP</li>
                                            <li> I/O 20 MBs Per cP</li>
                                            <li> 20 Entry Process Per cP</li>
                                            <li> 100 Number of Process Per cP</li>
                                            <li> Cloud Linux</li>
                                            <li> LiteSpeed</li>
                                            <li> imunify360</li>
                                            <li> Jetbackup</li>
                                            <li> 99.9% Uptime</li>
                                        </ul>
                                        <a href="https://account.hostservice.com.bd/index.php?rp=/store/shared-hosting/starter"
                                            class="btn outline-btn mb-3" target="_blank">Purchase now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="container">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-lg-12 col-md-12 col-12">
                                <div class="card text-center align-items-center single-pricing-pack">
                                    <div class="pt-5">
                                        <h5 class="mb-0 text-brand">Reseller Page Hosting </h5>
                                        <p class="mb-0">Reseller Standard:</p>
                                    </div>
                                    <div class="card-header border-0 pricing-header">
                                        <div class="price text-center mb-0 monthly-price">৳ {{ theryMonth }}<span>/-BDT
                                                Only.</span></div>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-unstyled mb-4 pricing-feature-list">
                                            <li> 100 GB NVMe Disk Space</li>
                                            <li> 2 TB Bandwidth Monthly</li>
                                            <li> 45 cPanel Accounts</li>
                                            <li> WHM Accounts</li>
                                            <li> Free SSL certificates</li>
                                            <li> Private Nameserver</li>
                                            <li> White-label Server</li>
                                            <li> 1 Core (up to 4.9 GHz) per cP</li>
                                            <li> 1 GB RAM (DDR4) Per cP</li>
                                            <li> I/O 20 MBs Per cP</li>
                                            <li> 20 Entry Process Per cP</li>
                                            <li> 100 Number of Process Per cP</li>
                                            <li> Cloud Linux</li>
                                            <li> LiteSpeed</li>
                                            <li> imunify360</li>
                                            <li> Jetbackup</li>
                                            <li> 99.9% Uptime</li>
                                        </ul>
                                        <a href="https://account.hostservice.com.bd/index.php?rp=/store/shared-hosting/standard"
                                            class="btn outline-btn mb-3" target="_blank">Purchase now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="container">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-lg-12 col-md-12 col-12">
                                <div class="card text-center align-items-center single-pricing-pack">
                                    <div class="pt-5">
                                         <h5 class="mb-0 text-brand">Reseller Page Hosting </h5>
                                        <p class="mb-0">Reseller Silver :</p>
                                    </div>
                                    <div class="card-header border-0 pricing-header">
                                        <div class="price text-center mb-0 monthly-price">৳ {{ halfYear }}<span>/-BDT
                                                Only.</span></div>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-unstyled mb-4 pricing-feature-list">
                                            <li> 200 GB NVMe Disk Space</li>
                                            <li> 3 TB Bandwidth Monthly</li>
                                            <li> 90 cPanel Accounts</li>
                                            <li> WHM Accounts</li>
                                            <li> Free SSL certificates</li>
                                            <li> Private Nameserver</li>
                                            <li> White-label Server</li>
                                            <li> 1 Core (up to 4.9 GHz) per cP</li>
                                            <li> 1 GB RAM (DDR4) Per cP</li>
                                            <li> I/O 20 MBs Per cP</li>
                                            <li> 30 Entry Process Per cP</li>
                                            <li> 120 Number of Process Per cP</li>
                                            <li> Cloud Linux</li>
                                            <li> LiteSpeed</li>
                                            <li> imunify360</li>
                                            <li> Jetbackup</li>
                                            <li> 99.9% Uptime</li>
                                        </ul>
                                        <a href="https://account.hostservice.com.bd/index.php?rp=/store/shared-hosting/silver"
                                            class="btn outline-btn mb-3" target="_blank">Purchase now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="container">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-lg-12 col-md-12 col-12">
                                <div class="card text-center align-items-center single-pricing-pack">
                                    <div class="pt-5">
                                       <h5 class="mb-0 text-brand">Reseller Page Hosting </h5>
                                        <p class="mb-0">Reseller Gold :</p>
                                    </div>
                                    <div class="card-header border-0 pricing-header">
                                        <div class="price text-center mb-0 monthly-price">৳ {{ yearly }}<span>/-BDT
                                                Only.</span></div>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-unstyled mb-4 pricing-feature-list">
                                            <li> 300 GB NVMe Disk Space</li>
                                            <li> Unlimited Bandwidth</li>
                                            <li> 120 cPanel Accounts</li>
                                            <li> 3 WHM Accounts</li>
                                            <li> Free SSL certificates</li>
                                            <li> Private Nameserver</li>
                                            <li> White-label Server</li>
                                            <li> 1 Core (up to 4.9 GHz) per cP</li>
                                            <li> 2 GB RAM (DDR4) Per cP</li>
                                            <li> I/O 20 MBs Per cP</li>
                                            <li> 30 Entry Process Per cP</li>
                                            <li> 120 Number of Process Per cP</li>
                                            <li> Cloud Linux</li>
                                            <li> LiteSpeed</li>
                                            <li> imunify360</li>
                                            <li> Jetbackup</li>
                                            <li> 99.9% Uptime</li>
                                        </ul>
                                        <a href="https://account.hostservice.com.bd/index.php?rp=/store/shared-hosting/gold"
                                            class="btn outline-btn mb-3" target="_blank">Purchase now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section> <br> <br>

    <!--compare provider table start (new1)-->
    <section class="compare-provider-table ptb-100 gray-light-bg-n">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-7 ">
                    <div class="section-heading  text-center mb-5">
                        <h1 class="re-sell">Web Hosting Resource Details</h1>
                        <p class="lead">
                            This hosting resource is very exclusive
                        </p>
                    </div>
                </div>
                <div class="row table">
                    <div class="col-md-12 col-lg-12">
                        <div class="table-responsive">
                            <table
                                class="table w-100 table-hover table-bordered table-striped comparision-table text-center">
                                <thead class="comparision-table-head">
                                    <tr>
                                    <tr>
                                        <td style="width: 20%; text-align: center">
                                            <h5>Resource Type</h5>
                                        </td>
                                        <td class="primary-bg" style="width: 20%; text-align: center;">
                                            <h5 class="text-white">Starter</h5>
                                        </td>
                                        <td style="width: 20%; text-align: center;">
                                            <h5>Standard</h5>
                                        </td>
                                        <td style="width: 20%; text-align: center;">
                                            <h5>Silver</h5>
                                        </td>
                                        <td style="width: 20%; text-align: center;">
                                            <h5>Gold</h5>
                                        </td>
                                    </tr>
                                    </tr>
                                </thead>
                                <tbody class="comparision-table-body">
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">CPU Core Limit %</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">0.5 core 50%</h6>
                                        </td>
                                        <td>
                                            <h6>1 core 100%</h6>
                                        </td>
                                        <td>
                                            <h6>1.5 core 150%</h6>
                                        </td>
                                        <td>
                                            <h6>2 core 200%</h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">Physical Memory</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">1 GB</h6>
                                        </td>
                                        <td>
                                            <h6>2 GB</h6>
                                        </td>
                                        <td>
                                            <h6>3 GB</h6>
                                        </td>
                                        <td>
                                            <h6>4 GB</h6>
                                        </td>
                                    </tr>

                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">Virtual Memory</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">1 GB</h6>
                                        </td>
                                        <td>
                                            <h6>1 GB</h6>
                                        </td>
                                        <td>
                                            <h6>1 GB</h6>
                                        </td>
                                        <td>
                                            <h6>1 GB</h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">I/O Speed</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">20 MBs</h6>
                                        </td>
                                        <td>
                                            <h6>30 MBs</h6>
                                        </td>
                                        <td>
                                            <h6>40 MBs</h6>
                                        </td>
                                        <td>
                                            <h6>50 MBs</h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">IOPS</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">1024</h6>
                                        </td>
                                        <td>
                                            <h6>1024</h6>
                                        </td>
                                        <td>
                                            <h6>1024</h6>
                                        </td>
                                        <td>
                                            <h6>1024</h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">Entry Process</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">20</h6>
                                        </td>
                                        <td>
                                            <h6>30</h6>
                                        </td>
                                        <td>
                                            <h6>40</h6>
                                        </td>
                                        <td>
                                            <h6>50</h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">Number of Process</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">100</h6>
                                        </td>
                                        <td>
                                            <h6>110</h6>
                                        </td>
                                        <td>
                                            <h6>120</h6>
                                        </td>
                                        <td>
                                            <h6>130</h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">INODES/File Limit</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">No File Limit</h6>
                                        </td>
                                        <td>
                                            <h6>No File Limit</h6>
                                        </td>
                                        <td>
                                            <h6>No File Limit</h6>
                                        </td>
                                        <td>
                                            <h6>No File Limit</h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">Bandwidth Network</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white"></h6>
                                        </td>
                                        <td class="col-12">
                                            <h6>1Gbps Global </h6>
                                        </td>
                                        <td class="col-12">
                                            <h6>10Gbps Special </h6>
                                        </td>
                                        <td class="col-12">
                                            <h6>Bandwidth Port</h6>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--feature section start-->
    <section class="feature-section ptb-100  gray-light-bg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="section-heading text-center mb-5">
                        <h2 class="re-sell">Hosting Features For Your Big Ideas</h2>
                        <p class="lead">These features come standard in all of our hosting plans. Dynamically extend
                            imperatives through open-source quickly niche markets.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="features-box p-4">
                        <div class="features-box-icon">
                            <span class="ti-panel icon-sm color-primary"></span>
                        </div>
                        <div class="features-box-content">
                            <h5>Custom Control Panel</h5>
                            <p>Our intuitive control panel gives you admin access to all of your DreamHost products
                                easily.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="features-box p-4">
                        <div class="features-box-icon">
                            <span class="ti-thumb-up icon-sm color-primary"></span>
                        </div>
                        <div class="features-box-content">
                            <h5>Real-Life Human Beings</h5>
                            <p>Tech veterans, geeks, and nerds are all standing by to optimize your experience whether.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="features-box p-4">
                        <div class="features-box-icon">
                            <span class="ti-mouse-alt icon-sm color-primary"></span>
                        </div>
                        <div class="features-box-content">
                            <h5>1-Click Installer</h5>
                            <p>No need to dig into a bunch of documentation. Simply install web apps like WordPress,
                                Joomla!.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="features-box p-4">
                        <div class="features-box-icon">
                            <span class="ti-timer icon-sm color-primary"></span>
                        </div>
                        <div class="features-box-content">
                            <h5>100% Uptime Guarantee</h5>
                            <p>With multiple datacenter locations, redundant cooling, emergency generators and
                                monitoring.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="features-box p-4">
                        <div class="features-box-icon">
                            <span class="ti-harddrives icon-sm color-primary"></span>
                        </div>
                        <div class="features-box-content">
                            <h5>Solid State Drives (SSD)</h5>
                            <p>With SSDs, your website, caching, and database queries are faster by our calculations. </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="features-box p-4">
                        <div class="features-box-icon">
                            <span class="ti-cup icon-sm color-primary"></span>
                        </div>
                        <div class="features-box-content">
                            <h5>Award-Winning Support</h5>
                            <p>No question is too simple, or too complex for our team of experts. Synergistically
                                synergize.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--feature section end-->
    <!--call to action new style start-->
    <section class="call-to-action ptb-100 gray-light-bg gradient-bg">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-6">
                    <div class="call-to-action-box white-bg shadow-sm rounded p-5">
                        <h3 class="re-sell">100% Uptime Guarantee</h3>
                        <p>Made possible by our multiple datacenter locations, redundant cooling, emergency generators.
                            Monotonectally drive business e-markets after distinctive functionalities.</p>
                        <a href="#" class="btn outline-btn">Learn More</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="call-to-action-box white-bg shadow-sm rounded p-5">
                        <h3 class="re-sell">24/7 365 Day Support</h3>
                        <p>Our experts are on standby for friendly, pro-level support 24/7, 365. No question is too
                            Objectively envisioneer stand-alone growth strategies whereas market.</p>
                        <div class="action-btns">
                            <a href="#" class="btn primary-solid-btn mr-2">Chat With Us</a>
                            <a href="#" class="btn outline-btn">Email Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--call to action new style end-->
    <!--faq new style start-->
    <section class="ptb-100 ">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="section-heading mb-3 text-center">
                        <h2 class="re-sell">Frequently Asked Questions</h2>
                        <p class="lead">
                            Quickly morph client-centric results through performance based applications. Proactively
                            facilitate professional human capital for cutting-edge.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="single-faq pt-4">
                        <h5>How can I pay for this?</h5>
                        <p>Intrinsicly implement high standards in strategic theme areas via inexpensive solutions.
                            Assertively conceptualize prospective bandwidth whereas client-based imperatives.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="single-faq pt-4">
                        <h5>Is it possible to pay yearly?</h5>
                        <p>Assertively iterate user friendly innovation without open-source markets. Monotonectally extend
                            resource sucking manufactured products without high-payoff paradigms. Objectively customize
                            ubiquitous information before economically sound relationships. </p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="single-faq pt-4">
                        <h5>Do you offer discounts on multiple items?</h5>
                        <p>Dramatically target focused testing procedures after holistic ideas. Collaboratively maximize
                            high-payoff ROI and value-added products. Distinctively deliver cooperative collaboration and
                            idea-sharing whereas customized</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="single-faq pt-4">
                        <h5>Is VAT included in plan prices?</h5>
                        <p>Distinctively simplify high-quality initiatives for highly efficient applications. Monotonectally
                            repurpose integrated customer service after magnetic e-services. </p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="single-faq pt-4">
                        <h5>Will I pay more for some features?</h5>
                        <p>Enthusiastically pontificate resource-leveling supply chains whereas scalable markets.
                            Authoritatively streamline resource maximizing methods of empowerment</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="single-faq pt-4">
                        <h5>Why are there no limits on the number of messages?</h5>
                        <p>Assertively target turnkey ideas for market-driven portals. Appropriately e-enable world-class
                            intellectual capital whereas 2.0 mindshare.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--faq new style end-->

    <!--testimonial and review section start-->
    <section class="client-review-section btn-mc gray-light-bg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="section-heading text-center mb-5">
                        <h2 class="re-sell">What Our Customers Say About Us?</h2>
                        <p class="lead">Authoritatively reinvent client-centric e-markets via fully tested process.
                            Objectively restore strategic initiatives through fully researched.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="single-testimonial white-bg shadow-sm rounded p-5">
                        <ul class="list-inline ratting-list mb-2">
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                        </ul>
                        <div class="ratting-content">
                            <h5>Awesome support from technical</h5>
                            <p>Objectively envisioneer magnetic manufactured products and dynamic models.
                                Progressively maximize 2.0 relationships whereas process-centric.</p>
                        </div>
                        <div class="ratting-author mt-3">
                            <h6>Alex Khamer</h6>
                            <small class="text-right">6 days ago</small>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="single-testimonial white-bg shadow-sm rounded p-5">
                        <ul class="list-inline ratting-list mb-2">
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                        </ul>
                        <div class="ratting-content">
                            <h5>Awesome Design Quality with Support</h5>
                            <p>Objectively envisioneer magnetic manufactured products and dynamic
                                models maximize 2.0 relationships whereas.</p>
                        </div>
                        <div class="ratting-author mt-3">
                            <h6>Peter Anderson</h6>
                            <small class="text-right">3 days ago</small>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="single-testimonial white-bg shadow-sm rounded p-5">
                        <ul class="list-inline ratting-list mb-2">
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                        </ul>
                        <div class="ratting-content">
                            <h5>Contacted support after Midnight</h5>
                            <p>Objectively envisioneer magnetic manufactured products and dynamic models.
                                Progressively maximize 2.0 relationships whereas process-centric.</p>
                        </div>
                        <div class="ratting-author mt-3">
                            <h6>Jolio Darix</h6>
                            <small class="text-right">8 days ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--testimonial and review section end-->
</template>

<style>
.backgrs {
    background-image: url("@/assets/img/resel.webp");
}




#app {
    height: 100%;
}

html,
body {
    position: relative;
    height: 100%;
}

body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper {
    margin-left: auto;
    margin-right: auto;
}</style>
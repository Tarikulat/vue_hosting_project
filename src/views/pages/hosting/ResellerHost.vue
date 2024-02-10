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
    monthlyPrice();
})
</script>

<template>
    <!--hero section start-->
    <section class="hero-equal-height ptb-100 backgrs pb-100 packge backgrs gradient-overly-right">
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
                         <div class="hover15 column">
                        <div>
                            <figure><img src="@/assets/img/v4.png" class="lan img-lan body-landing" alt="ser"></figure>
                        </div>
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
                        <h3 class="media-la text-brand bt-hj">Reseller Hosting Plan </h3>
                        <h6 class="h5 med-w">
                  6 month plan <span class="text-rd">5%</span> discount - <span class="text-rd"> hostgift6m
                  </span>
                </h6>

                <div>
                  <h6 class="h5 med-w ">
                    1year plan <span class="text-rd"> 15% </span> discount -<span class="text-rd"> hostgift1yr</span>
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
                            <label for="triennial-plan"><span class="custom-check"></span>1  Year</label>
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
                                        <p class="mb-0">Starter </p>
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
                                        <a href="https://account.hostservice.com.bd/index.php?rp=/store/reseller-hosting/starter"
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
                                        <p class="mb-0">Standard </p>
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
                                        <a href="https://account.hostservice.com.bd/index.php?rp=/store/reseller-hosting/standard"
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
                                        <p class="mb-0">Silver </p>
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
                                        <a href="https://account.hostservice.com.bd/index.php?rp=/store/reseller-hosting/silver"
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
                                        <p class="mb-0">Gold </p>
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
                                        <a href="https://account.hostservice.com.bd/index.php?rp=/store/reseller-hosting/gold"
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
                        <h3 class="media-la text-brand">Reseller Page Hosting Resource </h3>
                        <p class="h5 web-s bt-bl">
                           Exclusive reseller page hosting resource
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
                                            <h6 class="text-left">Core GHz per cP</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">1 Core (up to 4.9 )</h6>
                                        </td>
                                        <td>
                                            <h6>1 Core (up to 4.9 )</h6>
                                        </td>
                                        <td>
                                            <h6>1 Core (up to 4.9 )</h6>
                                        </td>
                                        <td>
                                            <h6>1 Core (up to 4.9 )</h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">NVMe Disk Space</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">50 GB</h6>
                                        </td>
                                        <td>
                                            <h6>100 GB</h6>
                                        </td>
                                        <td>
                                            <h6>200 GB</h6>
                                        </td>
                                        <td>
                                            <h6>300 GB</h6>
                                        </td>
                                    </tr>

                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">Bandwidth Monthly</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">1 TB  </h6>
                                        </td>
                                        <td>
                                            <h6>2 TB </h6>
                                        </td>
                                        <td>
                                            <h6>3 TB</h6>
                                        </td>
                                        <td>
                                            <h6>Unlimited </h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">cPanel Accounts</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">20 </h6>
                                        </td>
                                        <td>
                                            <h6>45</h6>
                                        </td>
                                        <td>
                                            <h6>90</h6>
                                        </td>
                                        <td>
                                            <h6>120</h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">RAM (DDR4) Per cP
    </h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">1 GB</h6>
                                        </td>
                                        <td>
                                            <h6>1 GB</h6>
                                        </td>
                                        <td>
                                            <h6>2 GB</h6>
                                        </td>
                                        <td>
                                            <h6>2 GB</h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">I/O Per cP</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">20 MBs </h6>
                                        </td>
                                        <td>
                                            <h6>20 MBs </h6>
                                        </td>
                                        <td>
                                            <h6>20 MBs </h6>
                                        </td>
                                        <td>
                                            <h6>20 MBs </h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">Entry Process Per cP</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">20</h6>
                                        </td>
                                        <td>
                                            <h6>20</h6>
                                        </td>
                                        <td>
                                            <h6>30</h6>
                                        </td>
                                        <td>
                                            <h6>30</h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left"> Uptime</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">99.9% Uptime</h6>
                                        </td>
                                        <td>
                                            <h6>99.9% Uptime</h6>
                                        </td>
                                        <td>
                                            <h6>99.9% Uptime</h6>
                                        </td>
                                        <td>
                                            <h6>99.9% Uptime</h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">Speed</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">LiteSpeed</h6>
                                        </td>
                                        <td class="col-12">
                                            <h6>LiteSpeed </h6>
                                        </td>
                                        <td class="col-12">
                                            <h6>LiteSpeed </h6>
                                        </td>
                                        <td class="col-12">
                                            <h6>LiteSpeed</h6>
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
                        <h3 class="media-la text-brand">Hosting Feature Idea </h3>
                        <p class="h5 web-s">Standard Features Hosting</p>
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
    <section class="call-to-action ptb-100 pd-crt gray-light-bg gradient-bg">
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
                <div class="col-md-6 nd-res col-lg-6">
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
                        <h3 class="media-la text-brand">Frequently Asked Questions</h3>
                        <p class="h5 web-s">
                            Dynamic Client Outcomes Proactive.
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
                        <h3 class="media-la text-brand">Our Customers Say About Us?</h3>
                        <p class="h5 web-s bt-bl">Revamping E-Markets: Tested Approach, Researched Strategies</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 nd-res col-lg-4">
                    <div class="single-testimonial white-bg shadow-sm rounded p-5">
                        <ul class="list-inline ratting-list mb-2">
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                        </ul>
                        <div class="ratting-content">
                            <h5>Reliable Hosting with Stellar!</h5>
                            <p>I've been using this hosting service for my personal site, I'm thoroughly impressed.
                                  I've encountered were swiftly resolved by their knowledgeable support team.</p>
                        </div>
                        <div class="ratting-author mt-3">
                            <h6>David M.</h6>
                            <small class="text-right">7 days ago</small>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 nd-res col-lg-4">
                    <div class="single-testimonial white-bg shadow-sm rounded p-5">
                        <ul class="list-inline ratting-list mb-2">
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                        </ul>
                        <div class="ratting-content">
                            <h5>Exceptional Value Performance!</h5>
                            <p>
                                The value for the price is unbeatable, and the performance of my website has exceeded my expectations. 
                                I highly recommend this hosting provider to anyone in need of reliable hosting.</p>
                        </div>
                        <div class="ratting-author mt-3">
                            <h6>Jennifer W.</h6>
                            <small class="text-right">4 days ago</small>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 nd-res col-lg-4">
                    <div class="single-testimonial white-bg shadow-sm rounded p-5">
                        <ul class="list-inline ratting-list mb-2">
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            <li class="list-inline-item"><span class="fas fa-star"></span></li>
                        </ul>
                        <div class="ratting-content">
                            <h5>Outstanding Hosting Provider!</h5>
                            <p>Transitioning my business website to this hosting service.
                                 The uptime is rock-solid, and the scalability options have allowed my website to grow alongside my business.</p>
                        </div>
                        <div class="ratting-author mt-3">
                            <h6>Daniel T.</h6>
                            <small class="text-right">9 days ago</small>
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
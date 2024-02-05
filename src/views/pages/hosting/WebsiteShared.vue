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

const threeMonthPrice = () => {
    monthly.value = '1500';
    theryMonth.value = '2,750';
    halfYear.value = '3,850';
    yearly.value = '5,000';
}
const halfYearPrice = () => {
    monthly.value = '3000';
    theryMonth.value = '5500';
    halfYear.value = '7700';
    yearly.value = '10000';
}
const yearPrice = () => {
    monthly.value = '6000';
    theryMonth.value = '11000';
    halfYear.value = '15400';
    yearly.value = '20000';
}

onMounted(() => {
    yearPrice();
})

</script>

<template>
    <section class="hero-equal-height backge gradient-overly-right">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-7 col-lg-8 media-shair ">
                    <div class="hero-content-wrap text-white position-relative">
                        <h1 class="text-brand media-sh">Website Shared Hosting</h1>
                        <p class="lead">Build and grow the perfect Website Shared Hosting Pro.</p>
                        <ul class="list-unstyled tech-feature-list text-white">
                            <li class="py-1"><span class="ti-control-forward mr-2"></span>Flexible, Easy to Use Control
                                Panel</li>
                            <li class="py-1"><span class="ti-control-forward mr-2"></span><strong>Unmetered</strong>
                                Bandwidth</li>
                            <li class="py-1"><span class="ti-control-forward mr-2"></span><strong>Unmetered</strong> Sub
                                Domains, FTP Accounts</li>
                            <li class="py-1"><span class="ti-control-forward mr-2"></span><strong>99%</strong> Uptime
                                Guarantee</li>
                            <li class="py-1"><span class="ti-control-forward mr-2"></span><strong>45-Day</strong> Money-Back
                                Guarantee</li>
                        </ul>
                        <div class="action-btns mt-4">
                            <p>Get all the essentials features <strong>Starting at $2.59/mo</strong></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-lg-4">
                    <!-- <div >
                        <label><img src="@/assets/img/host5.webp" class="body-landing img-sec" alt="ser"></label>
                    </div> -->
                    <div class="hover15 column">
                        <div>
                            <figure><img src="@/assets/img/host5.webp" class="body-landing img-sec" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section>
        <div class="container">
            <div class="row justify-content-center head">
                <div class="col-md-12 col-lg-7">
                    <div class="section-heading  text-center">
                        <h3 class="media-la text-brand bt-hj">Website Shared Hosting :</h3>
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

                        <div class="single-radio-box" @click="threeMonthPrice">
                            <input name="billingPlan" id="yearly-plan" value="yearly" class="radio" type="radio" checked>
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
                                        <h5 class="mb-0 text-brand">Website Shared Hosting</h5>
                                        <p class="mb-0">Starter:</p>
                                    </div>
                                    <div class="card-headerborder-0 pricing-header">
                                        <div class="price text-center mb-0 monthly-price">৳ {{ monthly }}<span>/-BDT
                                                Only.</span></div>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-unstyled mb-4 pricing-feature-list">
                                            <li> 5 GB SSD Storage</li>
                                            <li> 1000 GB Bandwidth</li>
                                            <li> 1 Domain</li>
                                            <li> Unlimited sub-domains</li>
                                            <li> 1 Core CPU 4.7 GHz Pro</li>
                                            <li> 2 GB Physical Memory</li>
                                            <li> 50 MBs I/O Speed</li>
                                            <li> 1024 IOPS</li>
                                            <li> 30 Entry Process</li>
                                            <li> 120 Number of Process</li>
                                            <li> LiteSpeed with LSCache</li>
                                            <li> cPanel Control Panel</li>
                                            <li> 24/7 Regular Support</li>
                                            <li> Advanced Features</li>
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
                                           <h5 class="mb-0 text-brand">Website Shared Hosting</h5>
                                        <p class="mb-0">Standard :</p>
                                    </div>
                                    <div class="card-header border-0 pricing-header">
                                        <div class="price text-center mb-0 monthly-price">৳ {{ theryMonth }}<span>/-BDT
                                                Only.</span></div>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-unstyled mb-4 pricing-feature-list">
                                            <li> 10 GB SSD Storage</li>
                                            <li> 1500 GB Bandwidth</li>
                                            <li> 2 Domain</li>
                                            <li> Unlimited sub-domains</li>
                                            <li> 1 Core CPU 4.7 GHz Pro</li>
                                            <li> 2 GB Physical Memory</li>
                                            <li> 50 MBs I/O Speed</li>
                                            <li> 1024 IOPS</li>
                                            <li> 30 Entry Process</li>
                                            <li> 120 Number of Process</li>
                                            <li> LiteSpeed with LSCache</li>
                                            <li> cPanel Control Panel</li>
                                            <li> 24/7 Regular Support</li>
                                            <li> Advanced Features</li>
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
                                           <h5 class="mb-0 text-brand">Website Shared Hosting</h5>
                                        <p class="mb-0">Silver :</p>
                                    </div>
                                    <div class="card-header border-0 pricing-header">
                                        <div class="price text-center mb-0 monthly-price">৳ {{ halfYear }}<span>/-BDT
                                                Only.</span></div>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-unstyled mb-4 pricing-feature-list">
                                            <li> 15 GB SSD Storage</li>
                                            <li> 2000 GB Bandwidth</li>
                                            <li> 3 Domain</li>
                                            <li> Unlimited sub-domains</li>
                                            <li> 1 Core CPU 4.7 GHz Pro</li>
                                            <li> 2 GB Physical Memory</li>
                                            <li> 50 MBs I/O Speed</li>
                                            <li> 1024 IOPS</li>
                                            <li> 30 Entry Process</li>
                                            <li> 120 Number of Process</li>
                                            <li> LiteSpeed with LSCache</li>
                                            <li> cPanel Control Panel</li>
                                            <li> 24/7 Regular Support</li>
                                            <li> Advanced Features</li>
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
                                           <h5 class="mb-0 text-brand">Website Shared Hosting</h5>
                                        <p class="mb-0">Gold :</p>
                                    </div>
                                    <div class="card-header border-0 pricing-header">
                                        <div class="price text-center mb-0 monthly-price">৳ {{ yearly }}<span>/-BDT
                                                Only.</span></div>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-unstyled mb-4 pricing-feature-list">
                                            <li> 20 GB SSD Storage</li>
                                            <li> 3000 GB Bandwidth</li>
                                            <li> 5 Domain</li>
                                            <li> Unlimited sub-domains</li>
                                            <li> 1 Core CPU 4.7 GHz Pro</li>
                                            <li> 2 GB Physical Memory</li>
                                            <li> 50 MBs I/O Speed</li>
                                            <li> 1024 IOPS</li>
                                            <li> 30 Entry Process</li>
                                            <li> 120 Number of Process</li>
                                            <li> LiteSpeed with LSCache</li>
                                            <li> cPanel Control Panel</li>
                                            <li> 24/7 Regular Support</li>
                                            <li> Advanced Features</li>
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
                        <h1>Web Hosting Resource Details</h1>
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

    <!--promo-section feature section start-->
    <section class="promo-feature ptb-100 backgr gradient-overlay">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="section-heading text-center mb-5 text-white">
                        <h2 class="text-white">Why Choose This Package</h2>
                        <p class="lead">
                            Distinctively recaptiualize principle-centered core competencies through client-centered
                            core competencies. Enthusiastically provide access.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-3">
                    <div class="feature-feature-list p-3 text-center text-white">
                        <span class="ti-thumb-up icon-md d-block mb-3"></span>
                        <h5 class="mb-2 text-white">100% Network Uptime</h5>
                        <p>Holisticly whiteboard seamless ideas rather than cross</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="feature-feature-list p-3 text-center text-white">
                        <span class="ti-headphone-alt icon-md d-block mb-3"></span>
                        <h5 class="mb-2 text-white">24x7 Tech Support</h5>
                        <p>Collaboratively architect sustainable e-services</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="feature-feature-list p-3 text-center text-white">
                        <span class="ti-lock icon-md d-block mb-3"></span>
                        <h5 class="mb-2 text-white">DDoS Protection</h5>
                        <p>Professionally envisioneer adaptive materials schemas</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="feature-feature-list p-3 text-center text-white">
                        <span class="ti-user icon-md d-block mb-3"></span>
                        <h5 class="mb-2 text-white">Trusted by Millions</h5>
                        <p>Seamlessly pontificate business best practices systems</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--promo-section feature section end-->

    <!--feature section start(1add)-->
    <section class="feature-section ptb-100 gray-light-bg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="section-heading text-center mb-5">
                        <h2>Hosting Features For Your Big Ideas</h2>
                        <p class="lead">
                            These features come standard in all of our hosting plans. Dynamically extend
                            imperatives through open-source quickly niche markets.
                        </p>
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
                            <p>
                                Our intuitive control panel gives you admin access to all of your
                                DreamHost products easily.
                            </p>
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
                            <p>
                                Tech veterans, geeks, and nerds are all standing by to optimize your
                                experience whether.
                            </p>
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
                            <p>
                                No need to dig into a bunch of documentation. Simply install web apps like
                                WordPress, Joomla!.
                            </p>
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
                            <p>
                                With multiple datacenter locations, redundant cooling, emergency
                                generators and monitoring.
                            </p>
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
                            <p>
                                With SSDs, your website, caching, and database queries are faster by our
                                calculations.
                            </p>
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
                            <p>
                                No question is too simple, or too complex for our team of experts.
                                Synergistically synergize.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--feature section end-->


    <!--feature section tab style start-->
    <section id="features" class="feature-tab-section ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-3 col-12 order-lg-last align-self-center">
                    <div class="image-box fadein text-xl-right text-center">
                        <img src="@/assets/img/icon-wordpress-hosting.svg" alt="wp-hosting" class="img-fluid" />
                    </div>
                </div>
                <div class="col-xl-8 col-lg-9 col-12 order-xl-first">
                    <h2>Better Support & Security</h2>
                    <p>Progressively matrix mission-critical core competencies without magnetic
                        paradigms. Appropriately develop flexible ROI without goal-oriented customer
                        service. Seamlessly.</p>
                    <div class="row pt-2">
                        <div class="col-md-6 col-12">
                            <h5>WordPress Optimization</h5>
                            <ul class="disc-style">
                                <li>Latest and Fastest PHP/MySQL version</li>
                                <li>SSD-only cloud with guaranteed CPU</li>
                                <li>HTTP/2 and free CloudFlare CDN</li>
                                <li>Observer Resource Monitoring</li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-12">
                            <h5>Extra RocketBooster</h5>
                            <ul class="disc-style">
                                <li>Varnish Static and Dynamic caching</li>
                                <li>LiteSpeed LSPHP Technology</li>
                                <li>Opcode Caching</li>
                                <li>Optimized static content processing</li>
                            </ul>
                        </div>
                    </div>
                    <div class="action-btns mt-4">
                        <a href="#" class="btn primary-solid-btn mr-3">Start Now</a>
                        <a href="#" class="btn outline-btn">Pricing Plans</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="cta-new pb-100">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-xl-4 col-lg-7 col-12 order-lg-last align-self-center">
                    <div class="image-box fadein text-xl-right text-center">
                        <img src="@/assets/img/shared-wp-hosting.svg" alt="wp-hosting" class="img-fluid" />
                    </div>
                </div>
                <div class="col-xl-7 col-lg-7 col-12 order-xl-last">
                    <h2>World-Famous Shared Hosting</h2>
                    <p>Efficiently reintermediate long-term high-impact channels without equity
                        invested technology. Quickly brand backend web-readiness without
                        cross-platform e-services.</p>
                    <div class="row pt-2">
                        <div class="col-md-6 col-12">
                            <h5>Exclusive Features</h5>
                            <ul class="disc-style">
                                <li>Daily Backups & free backup restore</li>
                                <li>Security Updates and Patching</li>
                                <li>Performance and resource monitoring</li>
                                <li>Step-by-step Tutorials & Knowledgebase</li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-12">
                            <h5>WordPress Services</h5>
                            <ul class="disc-style">
                                <li>1-click WordPress Installation</li>
                                <li>Free WordPress Transfer</li>
                                <li>Themes and plugins installation</li>
                                <li>Malware Scan & Reports</li>
                            </ul>
                        </div>
                    </div>
                    <div class="action-btns mt-4">
                        <a href="#" class="btn primary-solid-btn mr-2">Start Now</a>
                        <a href="#" class="btn outline-btn">Pricing Plans</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--feature section tab style end-->

    <!--testimonial and review section start-->
    <section class="client-review-section ptb-100 gray-light-bg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="section-heading text-center mb-5">
                        <h2>What Our Customers Say About Us?</h2>
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
                            <p>Objectively envisioneer magnetic manufactured products and dynamic models. Progressively
                                maximize 2.0 relationships whereas process-centric.</p>
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
                            <p>Objectively magnetic manufactured products and dynamic models maximize 2.0 relationships
                                whereas methodologies.</p>
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
                            <p>Objectively envisioneer magnetic manufactured products and dynamic models. Progressively
                                maximize 2.0 relationships whereas process-centric.</p>
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
.backge {
    background-image: url("@/assets/img/shair.webp");
}

.backgr {
    background-image: url("@/assets/img/z3.webp");
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
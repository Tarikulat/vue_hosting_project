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
    monthly.value = '1890';
    theryMonth.value = '2890';
    halfYear.value = '3890';
    yearly.value = '4890';
}
const threeMonthPrice = () => {
    monthly.value = '5670';
    theryMonth.value = '8670';
    halfYear.value = '11670';
    yearly.value = '14670';
}
const halfYearPrice = () => {
    monthly.value = '11340';
    theryMonth.value = '17340';
    halfYear.value = '23340';
    yearly.value = '29340';
}
const yearPrice = () => {
    monthly.value = '22680';
    theryMonth.value = '34680';
    halfYear.value = '46680';
    yearly.value = '58680';
}

onMounted(() => {
    monthlyPrice();
})
</script>

<template>
    <!--hero section start-->
    <section class="hero-equal-height pt-165 pb-100 backgek gradient-overly-right">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-lg-6 col-12 mar-e">
                    <div class="hero-content-wrap marg-tq text-white">
                        <h1 class="text-brand media-eco">Advance Ecommerce Hosting </h1>
                        <p class="lead">Globally through excellent intellectual capital.</p>
                <ul class="list-unstyled tech-feature-list text-white">
                  <li class="py-1"><span class="ti-control-forward mr-2"></span>Easy to use technical required</li>
                  <li class="py-1"><span class="ti-control-forward mr-2"></span>Thousands of customizable design</li>
                  <li class="py-1"><span class="ti-control-forward mr-2"></span>Zero-Risk Money-Back Guarantee</li>
                  <li class="py-1"><span class="ti-control-forward mr-2"></span>Free domain with install</li>
                </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="animation-image-wrap med-p">
                        <img src="@/assets/img/private-cloud-server.svg" alt="wp hosting" class="img-fluid eco-img-s" />
                        <img src="@/assets/img/wordpress-logo.svg" alt="wp hosting" width="70"
                            class="animation-icon-img eco-anim animation-icon-5" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--hero section end-->

    <section>
        <div class="container">
            <div class="row justify-content-center head">
                <div class="col-md-12 col-lg-7">
                    <div class="section-heading  text-center">
                        <h3 class="media-la text-brand bt-hj">Advance Ecommerce Plan </h3>
                       <h6 class="h5 med-w">
                 6 month purchase <span class="text-rd">5%</span> discount - <span class="text-rd"> hostgift6m
                  </span>
                </h6>

                <div>
                  <h6 class="h5 med-w ">
                    1year purchase <span class="text-rd"> 15% </span> discount -<span class="text-rd"> hostgift1yr</span>
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
        <div class="container top-p ">

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
                    <div class="container ">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-lg-12 col-md-12 col-12">
                                <div class="card text-center align-items-center single-pricing-pack">
                                    <div class="pt-5">
                                        <h5 class="mb-0 text-brand">Advance Ecommerce Hosting </h5>
                                        <p class="mb-0">Ecom Starter </p>
                                    </div>
                                    <div class="card-header border-0 pricing-header">
                                        <div class="price text-center mb-0 monthly-price">৳ {{ monthly }}<span>/-BDT
                                                Only.</span></div>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-unstyled mb-4 pricing-feature-list">

                                            <li> 20 GB Gen4 NVMe Storage</li>
                                            <li> Unlimited Bandwidth</li>
                                            <li> Unlimited Website</li>
                                            <li> 2 Core CPU 5.7 GHz 3D Pro</li>
                                            <li> 4 GB DDR5 Ram 3800 MHz</li>
                                            <li> 80 MBs I/O Speed</li>
                                            <li> 1024 IOPS </li>
                                            <li> 130 Entry Process</li>
                                            <li> 250 Number of Process</li>
                                            <li> Anti-DDoS Protection</li>
                                            <li> Free SSL Certificate</li>
                                            <li> 2x7 Days Backup</li>
                                            <li> LiteSpeed with LSCache</li>
                                            <li> cPanel Control Panel</li>
                                            <li> 24/7 Regular Support</li>
                                            <li> Advanced Features</li>
                                        </ul>
                                        <a href="https://account.hostservice.com.bd/index.php?rp=/store/ecommerce-hosting/ecom-starter"
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
                                    <h5 class="mb-0 text-brand">Advance Ecommerce Hosting</h5>
                                        <p class="mb-0">Ecom Standard </p>
                                    </div>
                                    <div class="card-header border-0 pricing-header">
                                        <div class="price text-center mb-0 monthly-price">৳ {{ theryMonth }}<span>/-BDT
                                                Only.</span></div>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-unstyled mb-4 pricing-feature-list">
                                                <li> 40 GB Gen4 NVMe Storage</li>
                                                <li> Unlimited Bandwidth</li>
                                                <li> Unlimited Website</li>
                                                <li> 3 Core CPU 5.7 GHz 3D Pro</li>
                                                <li> 6 GB DDR5 Ram 3800 MHz</li>
                                                <li> 100 MBs I/O Speed </li>
                                                <li> 1024 IOPS </li>
                                                <li> 150 Entry Process</li>
                                                <li> 290 Number of Process</li>
                                                <li> Anti-DDoS Protection</li>
                                                <li> Free SSL Certificate</li>
                                                <li> 2x7 Days Backup</li>
                                                <li> LiteSpeed with LSCache</li>
                                                <li> cPanel Control Panel</li>
                                                <li> 24/7 Regular Support</li>
                                                <li> Advanced Features</li>
                                        </ul>
                                        <a href="https://account.hostservice.com.bd/index.php?rp=/store/ecommerce-hosting/ecom-standard"
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
                                      <h5 class="mb-0 text-brand">Advance Ecommerce Hosting</h5>
                                        <p class="mb-0">Ecom Silver </p>
                                    </div>
                                    <div class="card-header border-0 pricing-header">
                                        <div class="price text-center mb-0 monthly-price">৳ {{ halfYear }}<span>/-BDT
                                                Only.</span></div>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-unstyled mb-4 pricing-feature-list">

                                                    <li> 60 GB Gen4 NVMe Storage</li>
                                                    <li> Unlimited Bandwidth</li>
                                                    <li> Unlimited Website</li>
                                                    <li> 4 Core CPU 5.7 GHz 3D Pro</li>
                                                    <li> 8 GB DDR5 Ram 3800 MHz</li>
                                                    <li> 130 MBs I/O Speed </li>    
                                                    <li> 2048 IOPS</li>                     
                                                    <li> 180 Entry Process</li>  
                                                    <li> 350 Number of Process</li>     
                                                    <li> Anti-DDoS Protection</li>  
                                                    <li> Free SSL Certificate</li>
                                                    <li> 2x7 Days Backup</li>
                                                    <li> LiteSpeed with LSCache</li>
                                                    <li> cPanel Control Panel</li>
                                                    <li> 24/7 Regular Support</li> 
                                                    <li> Advanced Features</li> 
                                        </ul> 
                                        <a href="https://account.hostservice.com.bd/index.php?rp=/store/ecommerce-hosting/ecom-silver"
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
                                        <h5 class="mb-0 text-brand">Advance Ecommerce Hosting</h5>
                                        <p class="mb-0">Ecom Gold </p>
                                    </div>
                                    <div class="card-header border-0 pricing-header">
                                        <div class="price text-center mb-0 monthly-price">৳ {{ yearly }}<span>/-BDT
                                                Only.</span></div>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-unstyled mb-4 pricing-feature-list">

                                                        <li> 80 GB Gen4 NVMe Storage</li> 
                                                        <li> Unlimited Bandwidth</li>
                                                        <li> Unlimited Website</li>
                                                        <li> 5 Core CPU 5.7 GHz 3D Pro</li>
                                                        <li> 10 GB DDR5 Ram 3800 MHz</li> 
                                                        <li> 150 MBs I/O Speed </li>
                                                        <li> 2048 IOPS </li>
                                                        <li> 200 Entry Process</li>
                                                        <li> 390 Number of Process</li> 
                                                        <li> Anti-DDoS Protection</li>
                                                        <li> Free SSL Certificate</li>
                                                        <li> 2x7 Days Backup</li>
                                                        <li> LiteSpeed with LSCache</li>
                                                        <li> cPanel Control Panel</li>
                                                        <li> 24/7 Regular Support</li> 
                                                        <li> Advanced Features</li>
                                        </ul>
                                        <a href="https://account.hostservice.com.bd/index.php?rp=/store/ecommerce-hosting/ecom-gold"
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
                        <h3 class="media-la text-brand bt-h">Advance Ecommerce Hosting Resource </h3>
                        <p class="h5 web-s bt-bl">
                            Exclusive advance ecommerce hosting resource
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
                                        <td style="width: 20%; text-align: center">
                                            <h5>Resource Type</h5>
                                        </td>
                                        <td class="primary-bg" style="width: 20%; text-align: center;">
                                            <h5 class="text-white">Ecom Starter</h5>
                                        </td>
                                        <td style="width: 20%; text-align: center;">
                                            <h5>Ecom Standard</h5>
                                        </td>
                                        <td style="width: 20%; text-align: center;">
                                            <h5>Ecom Silver</h5>
                                        </td>
                                        <td style="width: 20%; text-align: center;">
                                            <h5>Ecom Gold</h5>
                                        </td>
                                    </tr>
                                   
                                </thead>
                                <tbody class="comparision-table-body">
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">CPU Core Limit 3D Pro</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">2 Core CPU 5.7 GHz </h6>
                                        </td>
                                        <td>
                                            <h6>3 Core CPU 5.7 GHz </h6>
                                        </td>
                                        <td>
                                            <h6>4 Core CPU 5.7 GHz </h6>
                                        </td>
                                        <td>
                                            <h6>5 Core CPU 5.7 GHz </h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">DDR5 Ram</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">4 GB 3800 MHz</h6>
                                        </td>
                                        <td>
                                            <h6>6 GB 3800 MHz</h6>
                                        </td>
                                        <td>
                                            <h6>8 GB 3800 MHz</h6>
                                        </td>
                                        <td>
                                            <h6>10 GB 3800 MHz</h6>
                                        </td>
                                    </tr>

                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">Gen4 NVMe Storage</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">20 GB</h6>
                                        </td>
                                        <td>
                                            <h6>40 GB </h6>
                                        </td>
                                        <td>
                                            <h6>60 GB </h6>
                                        </td>
                                        <td>
                                            <h6>80 GB </h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">I/O Speed</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">80 MBs</h6>
                                        </td>
                                        <td>
                                            <h6>100 MBs</h6>
                                        </td>
                                        <td>
                                            <h6>130 MBs</h6>
                                        </td>
                                        <td>
                                            <h6>150 MBs</h6>
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
                                            <h6>2048</h6>
                                        </td>
                                        <td>
                                            <h6>2048</h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">Entry Process</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">130</h6>
                                        </td>
                                        <td>
                                            <h6>150</h6>
                                        </td>
                                        <td>
                                            <h6>180 </h6>
                                        </td>
                                        <td>
                                            <h6>200 </h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">Number of Process</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">250 </h6>
                                        </td>
                                        <td>
                                            <h6>290 </h6>
                                        </td>
                                        <td>
                                            <h6>350 </h6>
                                        </td>
                                        <td>
                                            <h6>390 </h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left">Bandwidth</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">Unlimited</h6>
                                        </td>
                                        <td>
                                            <h6>Unlimited</h6>
                                        </td>
                                        <td>
                                            <h6>Unlimited</h6>
                                        </td>
                                        <td>
                                            <h6>Unlimited</h6>
                                        </td>
                                    </tr>
                                    <tr style="width: 20%; text-align: center">
                                        <td>
                                            <h6 class="text-left"> Website</h6>
                                        </td>
                                        <td class="primary-bg">
                                            <h6 class="text-white">Unlimited</h6>
                                        </td>
                                        <td class="col-12">
                                            <h6>Unlimited </h6>
                                        </td>
                                        <td class="col-12">
                                            <h6>Unlimited </h6>
                                        </td>
                                        <td class="col-12">
                                            <h6>Unlimited</h6>
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

      <section class="compare-provider-table gray-light-bg-n ro-bg">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 col-lg-12">
              <div class="section-heading  text-center mb-5">
                <h3 class="media-la text-brand">Advance Ecommerce Host Service </h3>
                <p class="h5 web-s">
                  Real-Time Server Monitoring System
                </p>
              </div>
            </div>
            <div class="r-img">
              <img src="@/assets/img/ser_img.png" />
            </div>
          </div>
          <div class="ro-mr mid-rk">
            <a href="https://uptime.hostservice.com.bd/" class="btn outline-btn mb-3 bt-r glow-on-hover" target="_blank">Live Monitoring</a>
          </div>
        </div>
      </section>

    <!--technical specifications start-->
    <section class="technical-specification ptb-100 ">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="section-heading text-center mb-sm-5 mb-md-0 mb-lg-0">
                        <h3 class="media-la text-brand bt-h">Technical Specifications</h3>
                        <p class="h5 web-s">Transform high-quality users into effective</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4 col-12">
                    <div class="technical-specifications-wrap mt-md-5 mt-lg-5">
                        <span class="ti-harddrives icon-md color-primary d-block mb-4"></span>
                        <h5>Web Hosting Features</h5>
                        <ul class="list-unstyled tech-feature-list">
                            <li class="py-1"><span class="ti-control-forward mr-2 color-primary"></span>Flexible, Easy to
                                Use Control Panel</li>
                            <li class="py-1"><span
                                    class="ti-control-forward mr-2 color-primary"></span><strong>Unmetered</strong>
                                Bandwidth</li>
                            <li class="py-1"><span
                                    class="ti-control-forward mr-2 color-primary"></span><strong>Unmetered</strong> Sub
                                Domains, FTP Accounts</li>
                            <li class="py-1"><span class="ti-control-forward mr-2 color-primary"></span><strong>99%</strong>
                                Uptime Guarantee</li>
                            <li class="py-1"><span
                                    class="ti-control-forward mr-2 color-primary"></span><strong>45-Day</strong> Money-Back
                                Guarantee</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-12">
                    <div class="technical-specifications-wrap mt-md-5 mt-lg-5">
                        <span class="ti-panel icon-md color-primary d-block mb-4"></span>
                        <h5>cPanel Control Panel</h5>
                        <ul class="list-unstyled tech-feature-list">
                            <li class="py-1"><span
                                    class="ti-control-forward mr-2 color-primary"></span><strong>Latest</strong> cPanel Web
                                Hosting Control Panel</li>
                            <li class="py-1"><span class="ti-control-forward mr-2 color-primary"></span>Webalizer, Raw Log
                                Manager with Error Logs</li>
                            <li class="py-1"><span class="ti-control-forward mr-2 color-primary"></span>Instant Shopping
                                Carts, Blogs, Portals</li>
                            <li class="py-1"><span
                                    class="ti-control-forward mr-2 color-primary"></span><strong>Password</strong> Protected
                                Directories Error Pages</li>
                            <li class="py-1"><span class="ti-control-forward mr-2 color-primary"></span>Web Based File
                                Manager, Hotlink Protection</li>

                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-12">
                    <div class="technical-specifications-wrap mt-md-5 mt-lg-5">
                        <span class="ti-server icon-md color-primary d-block mb-4"></span>
                        <h5>Programming & Databases</h5>
                        <ul class="list-unstyled tech-feature-list">
                            <li class="py-1"><span
                                    class="ti-control-forward mr-2 color-primary"></span><strong>MySQL</strong> Databases
                                with phpMyAdmin Access</li>
                            <li class="py-1"><span class="ti-control-forward mr-2 color-primary"></span>Fast CGI, PHP 7,
                                Ruby on Rails, Python</li>
                            <li class="py-1"><span
                                    class="ti-control-forward mr-2 color-primary"></span><strong>ImageMagick</strong> Curl,
                                CPAN, GD Library</li>
                            <li class="py-1"><span class="ti-control-forward mr-2 color-primary"></span><strong>SSH</strong>
                                Access and Cron Job Scheduling</li>
                            <li class="py-1"><span class="ti-control-forward mr-2 color-primary"></span>SSL Certification
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-12">
                    <div class="technical-specifications-wrap mt-md-5 mt-lg-5">
                        <span class="ti-email icon-md color-primary d-block mb-4"></span>
                        <h5>Email Features</h5>
                        <ul class="list-unstyled tech-feature-list">
                            <li class="py-1"><span
                                    class="ti-control-forward mr-2 color-primary"></span><strong>Unlimited</strong> POP3
                                Email Accounts with SMTP</li>
                            <li class="py-1"><span class="ti-control-forward mr-2 color-primary"></span>WebMail Access:
                                Horde, RoundCube</li>
                            <li class="py-1"><span class="ti-control-forward mr-2 color-primary"></span>Receive your email
                                to your phone via IMAP</li>
                            <li class="py-1"><span class="ti-control-forward mr-2 color-primary"></span>Prevent spam with
                                SpamAssassin</li>
                            <li class="py-1"><span
                                    class="ti-control-forward mr-2 color-primary"></span><strong>Unlimited</strong> Email
                                Aliases, Autoresponders</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-12">
                    <div class="technical-specifications-wrap mt-md-5 mt-lg-5">
                        <span class="ti-headphone-alt icon-md color-primary d-block mb-4"></span>
                        <h5>Award-Winning Support</h5>
                        <ul class="list-unstyled tech-feature-list">
                            <li class="py-1"><span
                                    class="ti-control-forward mr-2 color-primary"></span><strong>24/7/365</strong> Premium
                                Support with Live Chat</li>
                            <li class="py-1"><span
                                    class="ti-control-forward mr-2 color-primary"></span><strong>Automatic</strong> Weekly
                                Off-Site Data Backups</li>
                            <li class="py-1"><span
                                    class="ti-control-forward mr-2 color-primary"></span><strong>24/7/365</strong> Hosting
                                Server Monitoring</li>
                            <li class="py-1"><span class="ti-control-forward mr-2 color-primary"></span>Online Support
                                Portal</li>
                            <li class="py-1"><span
                                    class="ti-control-forward mr-2 color-primary"></span><strong>500+</strong>Video
                                Tutorials and <strong>680+</strong> Help Articles</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-12">
                    <div class="technical-specifications-wrap mt-md-5 mt-lg-5">
                        <span class="ti-direction-alt icon-md color-primary d-block mb-4"></span>
                        <h5>Application Hosting Plan</h5>
                        <ul class="list-unstyled tech-feature-list">
                            <li class="py-1"><span
                                    class="ti-control-forward mr-2 color-primary"></span><strong>Free</strong> Website
                                Transfer, Domain Transfer</li>
                            <li class="py-1"><span class="ti-control-forward mr-2 color-primary"></span><strong>52
                                    Free</strong> scripts can be instantly installed</li>
                            <li class="py-1"><span
                                    class="ti-control-forward mr-2 color-primary"></span><strong>$100</strong> Google
                                Adwords Offer (Details)</li>
                            <li class="py-1"><span
                                    class="ti-control-forward mr-2 color-primary"></span><strong>$100</strong> Bing Ads
                                Credit (Details)</li>
                            <li class="py-1"><span
                                    class="ti-control-forward mr-2 color-primary"></span><strong>Free</strong> SSL
                                Certification website securely</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="promo-feature ptb-100 bg-mz gray-light-bg">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-9 col-lg-8">
                            <div class="section-heading text-center mb-5">
                                <h3 class="media-la text-brand bt-h">Why Choose This Package</h3>
                                <p class="h5 web-s">
                                   Enthusiastically facilitate accessibility
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-feature-list p-3 text-center">
                                <span class="ti-thumb-up icon-md d-block color-primary mb-3"></span>
                                <h5 class="mb-2">100% Network Uptime</h5>
                                <p>Holisticly whiteboard seamless ideas rather than cross</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-feature-list p-3 text-center">
                                <span class="ti-headphone-alt icon-md d-block color-primary mb-3"></span>
                                <h5 class="mb-2">24x7 Tech Support</h5>
                                <p>Collaboratively architect sustainable e-services</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-feature-list p-3 text-center">
                                <span class="ti-lock icon-md d-block color-primary mb-3"></span>
                                <h5 class="mb-2">DDoS Protection</h5>
                                <p>Professionally envisioneer adaptive materials schemas</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-feature-list p-3 text-center">
                                <span class="ti-user icon-md d-block color-primary mb-3"></span>
                                <h5 class="mb-2">Trusted by Millions</h5>
                                <p>Seamlessly pontificate business best practices systems</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    <!--call to action new style start-->
    <section class="call-to-action ptb-100 backgr gradient-overly-bottom">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="call-to-action-content text-white text-center">
                        <h4 class="text-white eco-cho">Already have a domain that you love?</h4>
                        <p>No problem! It's quick and painless to transfer your hosting, domain registrations, or both
                            to HostLar maximize market positioning solutions and enterprise services.</p>
                        <div class="action-btns mt-3">
                            <a href="#" class="btn solid-white-btn mr-3">Existing Customers</a>
                            <a href="#" class="btn outline-white-btn">New Customers</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--call to action new style end-->
     
    <!--start and transfer section start-->
    <section class="start-transfer ptb-100 gray-light-bg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="section-heading text-center mb-5">
                        <h3 class="media-la text-brand bt-h">Easy, Hassle free Transfer</h3>
                        <p class="h5 web-s bt-bl">Get Immediate Activation Express Transfer service</p>
                    </div>
                </div>
            </div>
            <div class="row start-website-box">
                <div class="col-lg-6 col-12 pr-lg-0">
                    <div class="left-box white-bg">
                        <div class="d-flex align-items-center mb-4">
                            <span class="ti-vector icon-sm text-white primary-bg p-2 rounded mr-3"></span>
                            <h5 class="mb-0">Start a New Website <span class="badge color-1 color-1-bg">Easy to start</span>
                            </h5>
                        </div>
                        <ul>
                            <li>
                                <strong>One-click App Marketplace</strong>
                                <p>Over 450 Apps ready to be installed in seconds</p>
                            </li>
                            <li>
                                <strong>The best DIY solution</strong>
                                <p>20+ Frameworks and your favorite dev tools</p>
                            </li>
                            <li>
                                <strong>Step by Step Tutorials</strong>
                                <p>3000+ pages of tutorials to get you started</p>
                            </li>
                            <li>
                                <strong>Unlimited 24/7 Priority Support</strong>
                                <p>Always-free in-house technical support</p>
                            </li>
                        </ul>
                        <div class="btn-holder mt-4">
                            <a class="btn primary-solid-btn" href="#">Start now</a>
                        </div>
                        <p class="mt-3">
                            <small>Sign up today before <span class="text-blue" data-role="site-activation-timer"
                                    data-type="new">04:00 PM</span> and get Immediate Account
                                Activation and Free Website Setup!
                            </small>
                        </p>
                    </div>
                </div>
                <div class="col-lg-6 mr-con col-12 pl-lg-0">
                    <div class="right-box primary-bg">
                        <div class="d-flex align-items-center mb-4">
                            <span class="ti-loop icon-sm color-primary white-bg p-2 rounded mr-3"></span>
                            <h5 class="mb-0 text-white">Express Transfer</h5>
                        </div>
                        <ul>
                            <li>
                                <strong>People-powered site transfer</strong>
                                <p>No messy automation - get it done by experts</p>
                            </li>
                            <li>
                                <strong>No downtime, Fast and Painless</strong>
                                <p>Express Transfer service included in all plans</p>
                            </li>
                            <li>
                                <strong>Free Domain Transfer</strong>
                                <p>Free one-year domain renewal after transfer</p>
                            </li>
                            <li>
                                <strong>Free months of hosting</strong>
                                <p>Up to six months unused time compensation</p>
                            </li>
                        </ul>
                        <div class="btn-holder mt-4">
                            <a class="btn solid-white-btn" href="#">Transfer Now</a>
                        </div>
                        <p class="mt-3">
                            <small>Sign up now and get your website transferred by <span class="text-yellow"
                                    data-role="site-activation-timer" data-type="transfer">04:57 PM</span>
                                today with free Express Transfer!
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--start and transfer section end-->

    <!--testimonial and review section start-->
    <section class="client-review-section bt-z">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="section-heading text-center mb-5">
                        <h3 class="media-la text-brand bt-h">What Our Customers Say About Us?</h3>
                        <p class="lead">Authoritatively reinvent client-centric fully tested process improvements.
                            Objectively restore strategic initiatives through fully researched.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-lg-12">
                    <div class="owl-carousel owl-theme client-testimonial custom-dot dot-bottom-center">
                        <div class="item">
                            <div class="single-testimonial white-bg shadow-sm rounded p-5">
                                <ul class="list-inline ratting-list mb-2">
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                </ul>
                                <div class="ratting-content">
                                    <h5>Awesome Support !</h5>
                                    <p>Objectively magnetic manufactured products and dynamic models.
                                        Progressively maximize 2.0 relationships imperatives through whereas
                                        process-centric.</p>
                                </div>
                                <div class="ratting-author mt-3">
                                    <h6>Alex Khamer</h6>
                                    <small class="text-right">6 days ago</small>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="single-testimonial white-bg shadow-sm rounded p-5">
                                <ul class="list-inline ratting-list mb-2">
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                </ul>
                                <div class="ratting-content">
                                    <h5>Pleasant support experience</h5>
                                    <p>Objectively envisioneer magnetic manufactured products and dynamic models.
                                        Progressively maximize 2.0 relationships methodologies.</p>
                                </div>
                                <div class="ratting-author mt-3">
                                    <h6>Peter Anderson</h6>
                                    <small class="text-right">3 days ago</small>
                                </div>
                            </div>
                        </div>
                        <div class="item">
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
                                    <p>Objectively envisioneer magnetic manufactured products and dynamic
                                        maximize 2.0 relationships whereas process-centric methodologies.</p>
                                </div>
                                <div class="ratting-author mt-3">
                                    <h6>Jolio Darix</h6>
                                    <small class="text-right">8 days ago</small>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="single-testimonial white-bg shadow-sm rounded p-5">
                                <ul class="list-inline ratting-list mb-2">
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                </ul>
                                <div class="ratting-content">
                                    <h5>Great experience with the technical</h5>
                                    <p>Objectively manufactured products and dynamic models maximize 2.0 relationships
                                        whereas process-centric methodologies.</p>
                                </div>
                                <div class="ratting-author mt-3">
                                    <h6>Carolyn Dani</h6>
                                    <small class="text-right">6 days ago</small>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="single-testimonial white-bg shadow-sm rounded p-5">
                                <ul class="list-inline ratting-list mb-2">
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                </ul>
                                <div class="ratting-content">
                                    <h5>Reliable web hosting company</h5>
                                    <p>Objectively magnetic manufactured products and dynamic models.
                                        Progressively maximize 2.0 relationships whereas.</p>
                                </div>
                                <div class="ratting-author mt-3">
                                    <h6>Alex Dari</h6>
                                    <small class="text-right">4 days ago</small>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="single-testimonial white-bg shadow-sm rounded p-5">
                                <ul class="list-inline ratting-list mb-2">
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                    <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                </ul>
                                <div class="ratting-content">
                                    <h5>People and services that care</h5>
                                    <p>Objectively envisioneer magnetic manufactured products and
                                        dynamic models maximize 2.0 relationships whereas process-centric methodologies.</p>
                                </div>
                                <div class="ratting-author mt-3">
                                    <h6>Sir Rainbo </h6>
                                    <small class="text-right">2 days ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--testimonial and review section end-->
</template>

<style>
.eco {
    height: 600px;
}

.backgek {
    background-image: url("@/assets/img/ecom_baner.webp");
    height: 500px;
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
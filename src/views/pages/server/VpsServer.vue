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
    monthly.value = '3190';
    theryMonth.value = '5290';
    halfYear.value = '9390';
    yearly.value = '11890';
}
const threeMonthPrice = () => {
    monthly.value = '9570';
    theryMonth.value = '15870';
    halfYear.value = '28170';
    yearly.value = '35670';
}
const halfYearPrice = () => {
    monthly.value = '19140';
    theryMonth.value = '31740';
    halfYear.value = '56340';
    yearly.value = '71340';
}
const yearPrice = () => {
    monthly.value = '38280';
    theryMonth.value = '63480';
    halfYear.value = '112680';
    yearly.value = '142680';
}

onMounted(() => {
    monthlyPrice();
})
</script>

<template>
     <section class="hero-equal-height ptb-100 gradient-overly-right:before backvp gradient-overly-right">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-7 col-lg-7 media-lan ">
              <div class="hero-content-wrap text-white position-relative">
                <h1 class="text-brand media-lan">VPS Server Hosting</h1>
                <p class="lead">Build and grow the perfect Website vpsserver Hosting Pro.</p>
                <ul class="list-unstyled tech-feature-list text-white">
                  <li class="py-1"><span class="ti-control-forward mr-2"></span>Flexible, Easy to Use Control Panel</li>
                  <li class="py-1"><span class="ti-control-forward mr-2"></span><strong>Unmetered</strong> Bandwidth</li>
                  <li class="py-1"><span class="ti-control-forward mr-2"></span><strong>Unmetered</strong> Sub Domains, FTP
                    Accounts</li>
                  <li class="py-1"><span class="ti-control-forward mr-2"></span><strong>99%</strong> Uptime Guarantee</li>
                  <li class="py-1"><span class="ti-control-forward mr-2"></span><strong>45-Day</strong> Money-Back Guarantee
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-5 col-lg-5">

              <div class="hover14 column">
                <div>
                  <figure><img src="@/assets/img/bz.png" class="lan img-lan body-landing" /></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <!-- packages starting heading -->
    <section>
        <div class="container">
            <div class="row justify-content-center head">
                <div class="col-md-12 col-lg-7">
                    <div class="section-heading  text-center">
                        <h3 class="media-la text-brand bt-hj">VPS Servers Plan </h3>
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
                                        <h5 class="mb-0 text-brand">VPS Servers Plan</h5>
                                        <p class="mb-0">Starter </p>
                                    </div>
                                    <div class="card-header pb-4 border-0 pricing-header">
                                        <div class="price text-center mb-0 ">৳ {{ monthly }}<span>/-BDT Only.</span></div>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-unstyled mb-4 pricing-feature-list">
                                            <li> 4 Core 4.7 GHz Processor</li>
                                            <li> 8 GB Memory DDR-4</li>
                                            <li> 100 GB NVMe PCI Gen 4.0</li>
                                            <li> 1 IPv4 Address</li>
                                            <li> 1 - upto 10 Gbps Port </li>
                                            <li> 5 TB Transfer</li>
                                            <li> DDoS Protection included </li>
                                            <li> KVM Technology</li>
                                            <li> Linux distribution / Windows</li>
                                            <li> Auto Control + Root access</li>
                                            <li> Premium (paid) add-ons</li>
                                            <li> 99.9% Uptime Guarantee</li>
                                        </ul>
                                        <a href="https://account.hostservice.com.bd/index.php?rp=/store/vps-server/starte"
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
                                        <h5 class="mb-0 text-brand">VPS Servers Plan</h5>
                                        <p class="mb-0"> Standard </p>
                                    </div>
                                    <div class="card-header pb-4 border-0 pricing-header">
                                        <div class="price text-center mb-0">৳ {{ theryMonth }}<span>/-BDT Only.</span></div>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-unstyled mb-4 pricing-feature-list">
                                            <li> 6 Core 4.7 GHz Processor</li>
                                            <li> 16 GB Memory DDR-4</li>
                                            <li> 200 GB NVMe PCI Gen 4.0</li>
                                            <li> 1 IPv4 Address</li>
                                            <li> 1 - upto 10 Gbps Port </li>
                                            <li> 8 TB Transfer</li>
                                            <li> DDoS Protection included</li>
                                            <li> KVM Technology</li>
                                            <li> Linux distribution / Windows</li>
                                            <li> Auto Control + Root access</li>
                                            <li> Premium (paid) add-ons</li>
                                            <li> 99.9% Uptime Guarantee</li>
                                        </ul>
                                        <a href="https://account.hostservice.com.bd/cart.php?a=confproduct&i=1"
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
                                         <h5 class="mb-0 text-brand">VPS Servers Plan</h5>
                                        <p class="mb-0"> Silver </p>
                                    </div>
                                    <div class="card-header pb-4 border-0 pricing-header">
                                        <div class="price text-center mb-0">৳ {{ halfYear }}<span>/-BDT Only.</span></div>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-unstyled mb-4 pricing-feature-list">
                                            <li> 8 Core 4.7 GHz Processor</li>
                                            <li> 32 GB Memory DDR-4</li>
                                            <li> 400 GB NVMe PCI Gen 4.0</li>
                                            <li> 1 IPv4 Address</li>
                                            <li> 1 - upto 10 Gbps Port </li>
                                            <li> Unlimited Transfer</li>
                                            <li> DDoS Protection included</li>
                                            <li> KVM Technology </li>
                                            <li> Linux distribution / Windows</li>
                                            <li> Auto Control + Root access</li>
                                            <li> Premium (paid) add-ons</li>
                                            <li> 99.9% Uptime Guarantee</li>
                                        </ul>
                                        <a href="https://account.hostservice.com.bd/cart.php?a=confproduct&i=2"
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
                                        <h5 class="mb-0 text-brand">VPS Servers Plan</h5>
                                        <p class="mb-0"> Gold </p>
                                    </div>
                                    <div class="card-header pb-4 border-0 pricing-header">
                                        <div class="price text-center mb-0">৳ {{ yearly }}<span>/-BDT Only.</span></div>
                                    </div>
                                    <div class="card-body">
                                        <ul class="list-unstyled mb-4 pricing-feature-list">
                                            <li> 10 Core 4.7 GHz Processor</li>
                                            <li> 48 GB Memory DDR-4</li>
                                            <li> 600 GB NVMe PCI Gen 4.0</li>
                                            <li> 1 IPv4 Address</li>
                                            <li> 1 - upto 10 Gbps Port </li>
                                            <li> Unlimited Transfer </li>
                                            <li> DDoS Protection included </li>
                                            <li> KVM Technology</li>
                                            <li> Linux distribution / Windows</li>
                                            <li> Auto Control + Root access</li>
                                            <li> Premium (paid) add-ons</li>
                                            <li> 99.9% Uptime Guarantee</li>
                                        </ul>
                                        <a href="https://account.hostservice.com.bd/index.php?rp=/store/business-hosting/vps-gold"
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
    <br>

     <section class="compare-provider-table ptb-100 gray-light-bg-n">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 col-lg-7 ">
              <div class="section-heading  text-center mb-5">
                <h3 class="media-la text-brand">VPS Servers Plan Hosting Resource</h3>
                <p class="h5 web-s bt-bl">
                  Exclusive vps servers plan hosting resource
                </p>
              </div>
            </div>
            <div class="row table">
              <div class="col-md-12 col-lg-12">
                <div class="table-responsive">
                  <table class="table w-100 table-res table-hover table-bordered table-striped comparision-table text-center">
                    <thead class="comparision-table-head">
                      <tr>
                      <tr>
                        <td style="width: 20%; text-align: center">
                          <h5>Resource Type</h5>
                        </td>
                        <td class="primary-bg" style="width: 20%; text-align: center;">
                          <h5 class="text-white">Starter </h5>
                        </td>
                        <td style="width: 20%; text-align: center;">
                          <h5>Standard </h5>
                        </td>
                        <td style="width: 20%; text-align: center;">
                          <h5>Silver </h5>
                        </td>
                        <td style="width: 20%; text-align: center;">
                          <h5>Gold </h5>
                        </td>
                      </tr>
                      </tr>
                    </thead>
                    <tbody class="comparision-table-body">
                      <tr style="width: 20%; text-align: center">
                        <td>
                          <h6 class="text-left">Core Processor</h6>
                        </td>
                        <td class="primary-bg">
                          <h6 class="text-white">4 Core 4.7 GHz  </h6>
                        </td>
                        <td>
                          <h6>6 Core 4.7 GHz  </h6>
                        </td>
                        <td>
                          <h6>8 Core 4.7 GHz  </h6>
                        </td>
                        <td>
                          <h6>10 Core 4.7 GHz </h6>
                        </td>
                      </tr>
                      <tr style="width: 20%; text-align: center">
                        <td>
                          <h6 class="text-left"> Memory DDR-4</h6>
                        </td>
                        <td class="primary-bg">
                          <h6 class="text-white">8 GB </h6>
                        </td>
                        <td>
                          <h6>16 GB </h6>
                        </td>
                        <td>
                          <h6>32 GB </h6>
                        </td>
                        <td>
                          <h6>48 GB </h6>
                        </td>
                      </tr>

                      <tr style="width: 20%; text-align: center">
                        <td>
                          <h6 class="text-left">NVMe PCI Gen 4.0</h6>
                        </td>
                        <td class="primary-bg">
                          <h6 class="text-white">100 GB </h6>
                        </td>
                        <td>
                          <h6>200 GB </h6>
                        </td>
                        <td>
                          <h6>400 GB </h6>
                        </td>
                        <td>
                          <h6>600 GB </h6>
                        </td>
                      </tr>
                      <tr style="width: 20%; text-align: center">
                        <td>
                          <h6 class="text-left">Transfer</h6>
                        </td>
                        <td class="primary-bg">
                          <h6 class="text-white">5 TB Transfer</h6>
                        </td>
                        <td>
                          <h6>8 TB Transfer</h6>
                        </td>
                        <td>
                          <h6>Unlimited Transfer</h6>
                        </td>
                        <td>
                          <h6>Unlimited Transfer</h6>
                        </td>
                      </tr>
                      <tr style="width: 20%; text-align: center">
                        <td>
                          <h6 class="text-left"> Address</h6>
                        </td>
                        <td class="primary-bg">
                          <h6 class="text-white">1 IPv4 Address</h6>
                        </td>
                        <td>
                          <h6>1 IPv4 Address</h6>
                        </td>
                        <td>
                          <h6>1 IPv4 Address</h6>
                        </td>
                        <td>
                          <h6>1 IPv4 Address</h6>
                        </td>
                      </tr>
                      <tr style="width: 20%; text-align: center">
                        <td>
                          <h6 class="text-left">Gbps Port</h6>
                        </td>
                        <td class="primary-bg">
                          <h6 class="text-white">1 - upto 10 </h6>
                        </td>
                        <td>
                          <h6>1 - upto 10 </h6>
                        </td>
                        <td>
                          <h6>1 - upto 10 </h6>
                        </td>
                        <td>
                          <h6>1 - upto 10 </h6>
                        </td>
                      </tr>
                      <tr style="width: 20%; text-align: center">
                        <td>
                          <h6 class="text-left"> Protection </h6>
                        </td>
                        <td class="primary-bg">
                          <h6 class="text-white">DDoS included</h6>
                        </td>
                        <td>
                          <h6>DDoS included</h6>
                        </td>
                        <td>
                          <h6>DDoS included</h6>
                        </td>
                        <td>
                          <h6>DDoS included</h6>
                        </td>
                      </tr>
                      <tr style="width: 20%; text-align: center">
                        <td>
                          <h6 class="text-left"> Technology</h6>
                        </td>
                        <td class="primary-bg">
                          <h6 class="text-white">KVM </h6>
                        </td>
                        <td>
                          <h6>KVM </h6>
                        </td>
                        <td>
                          <h6>KVM </h6>
                        </td>
                        <td>
                          <h6>KVM </h6>
                        </td>
                      </tr>
                      <tr style="width: 20%; text-align: center">
                        <td>
                          <h6 class="text-left">Guarantee</h6>
                        </td>
                        <td class="primary-bg">
                          <h6 class="text-white">99.9% Uptime</h6>
                        </td>
                        <td class="col-12">
                          <h6>99.9% Uptime </h6>
                        </td>
                        <td class="col-12">
                          <h6>99.9% Uptime </h6>
                        </td>
                        <td class="col-12">
                          <h6>99.9% Uptime </h6>
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
    <section class="feature-section ptb-100 ">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="section-heading text-center mb-5">
                        <h3 class="media-la text-brand">Server Hosting Platform Features</h3>
                        <p class="h5 web-s">Standard Hosting Features: Dynamic Open-Source Expansion.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="feature-feature-list p-4 text-center">
                        <span class="ti-harddrives icon-sm d-block color-primary mb-3"></span>
                        <h5 class="mb-2">SSD Disk Drives</h5>
                        <p>You can never go wrong with our own top-notch dedicated servers loaded</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="feature-feature-list p-4 text-center">
                        <span class="ti-rss-alt icon-sm d-block color-primary mb-3"></span>
                        <h5 class="mb-2">100 Mb/s Network</h5>
                        <p>We can guarantee an excellent experience and loading time for your successful</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="feature-feature-list p-4 text-center">
                        <span class="ti-lock icon-sm d-block color-primary mb-3"></span>
                        <h5 class="mb-2">DDoS Protection</h5>
                        <p>With full root access you will be able to take full control of your server very easy</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="feature-feature-list p-4 text-center">
                        <span class="ti-world icon-sm d-block color-primary mb-3"></span>
                        <h5 class="mb-2">Dedicated IP</h5>
                        <p>One of many premium features is a dedicated IP cheapest VPS hosting plan</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="feature-feature-list p-4 text-center">
                        <span class="ti-location-pin icon-sm d-block color-primary mb-3"></span>
                        <h5 class="mb-2">IPv6 Support</h5>
                        <p>Our VPS hosting plan is fully packed with dedicated IPv6 Internet protocol IP</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="feature-feature-list p-4 text-center">
                        <span class="ti-wallet icon-sm d-block color-primary mb-3"></span>
                        <h5 class="mb-2">Money-back Guarantee</h5>
                        <p>If you’re not 100% satisfied with Hostlar, we’ll refund your payment no risk</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--feature section end-->

    <!--call to action new section start-->
    <section class="call-to-action backvps ptb-100 gradient-overlay">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="cta-new-wrap text-white text-center">
                        <h3 class="text-white bm-d">30-day Money-back Guarantee</h3>
                        <p class="lead">Globally parallel task granular alignments through excellent intellectual capital.
                            Globally deploy vertical leadership.</p>
                        <div class="action-btns mt-4">
                            <a href="#" class="btn solid-white-btn animated-btn mr-lg-3">Get
                                Started Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--call to action new section end-->
     <!--testimonial and review section start-->
        <section class="client-review-section ptb-100 gray-light-bg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-9 col-lg-8">
                        <div class="section-heading text-center mb-5">
                            <h3 class="media-la text-brand">Our Customers Say About Us?</h3>
                            <p class="h5 web-s bt-bl">Revitalizing E-Markets: Tested & Researched Approach.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mr-con col-lg-4">
                        <div class="single-testimonial white-bg shadow-sm rounded p-5">
                            <ul class="list-inline ratting-list mb-2">
                                <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            </ul>
                            <div class="ratting-content">
                                <h5>Exceptional VPS Hosting!</h5>
                                <p>I've been using their VPS hosting for my e-commerce website, and the performance has been outstanding. 
                                  The dedicated resources ensure consistent speed and reliability, even during peak traffic periods. </p>
                            </div>
                            <div class="ratting-author mt-3">
                                <h6>Alex Khamer</h6>
                                <small class="text-right">6 days ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mr-con col-lg-4">
                        <div class="single-testimonial white-bg shadow-sm rounded p-5">
                            <ul class="list-inline ratting-list mb-2">
                                <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            </ul>
                            <div class="ratting-content">
                                <h5>Top-Notch VPS Hosting Provider!</h5>
                                <p>I switched to this VPS hosting provider after experiencing frequent downtime with my previous host. Since making the switch, 
                                  I've been impressed by the stability and performance of their servers.</p>
                            </div>
                            <div class="ratting-author mt-3">
                                <h6>Ryan H.</h6>
                                <small class="text-right">3 days ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mr-con col-lg-4">
                        <div class="single-testimonial white-bg shadow-sm rounded p-5">
                            <ul class="list-inline ratting-list mb-2">
                                <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                <li class="list-inline-item"><span class="fas fa-star"></span></li>
                                <li class="list-inline-item"><span class="fas fa-star"></span></li>
                            </ul>
                            <div class="ratting-content">
                                <h5>Impressive VPS Performance!</h5>
                                <p>As a developer, I require a reliable VPS solution for my projects, and this hosting service delivers exactly that. 
                                  The VPS performance is impressive, and the support team is responsive and knowledgeable.</p>
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
<!-- faq -->
    <section>
        <div class="container">
            <div id="faq" class="ptb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9 col-lg-8">
                            <div class="section-heading mb-5">
                                <h3 class="media-la text-brand">Frequently Asked Queries</h3>
                                <p class="h5 web-s">Hosting Made Simple: Ask Us Anything ! <a href="contact" class="page-scroll"> Contact us</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-lg-12">
                            <div id="accordion-one" class="accordion accordion-faq">
                                <div class="card mb-0">
                                    <a class="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                                        <h6 class="mb-0 d-inline-block">What are the benefits of using VPS hosting for my website?
                                        </h6>
                                    </a>
                                    <div id="collapseOne" class="collapse" data-parent="#accordion-one">
                                        <div class="card-body">
                                            <p> VPS hosting offers several benefits, including dedicated resources, enhanced performance, scalability,
                                               and improved security. With dedicated resources, your website's performance is less likely
                                                to be affected by other users. Additionally, you can easily scale resources 
                                                up or down as your website grows or experiences fluctuations in traffic.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-0">
                                    <a class="card-header collapsed" data-toggle="collapse" href="#collapseTwo">
                                        <h6 class="mb-0 d-inline-block">Can I manage my VPS hosting server independently?</h6>
                                    </a>
                                    <div id="collapseTwo" class="collapse" data-parent="#accordion-one">
                                        <div class="card-body">
                                            <p>Yes, with VPS hosting, you typically have full root access or administrative control over your virtual server. 
                                              This means you can install and configure software, customize server settings, and perform system administration
                                               tasks according to your requirements. However, if you're not comfortable managing the server yourself,
                                                many hosting providers offer managed VPS hosting options with additional support and assistance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-0">
                                    <a class="card-header collapsed" data-toggle="collapse" href="#collapseThree">
                                        <h6 class="mb-0 d-inline-block">How secure is VPS hosting compared to other hosting options?
                                        </h6>
                                    </a>
                                    <div id="collapseThree" class="collapse" data-parent="#accordion-one">
                                        <div class="card-body">
                                            <p>VPS hosting offers a higher level of security compared to shared hosting. Since each VPS operates in an isolated environment, 
                                              the actions of other users on the server are less likely to impact the security of your website. Additionally,
                                               you have more control over security measures such as firewall configurations, access controls,
                                                and software updates, making it easier to implement robust security practices.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-0">
                                    <a class="card-header collapsed" data-toggle="collapse" href="#collapseFour">
                                        <h6 class="mb-0 d-inline-block">Can I upgrade or downgrade my VPS hosting plan as my needs change?
                                        </h6>
                                    </a>
                                    <div id="collapseFour" class="collapse" data-parent="#accordion-one">
                                        <div class="card-body">
                                            <p>Yes, most VPS hosting providers offer flexible scalability options that allow you to upgrade or
                                               downgrade your hosting plan as needed. Whether you require additional CPU, RAM, or storage resources
                                                to accommodate growth or wish to reduce your hosting costs, you can typically adjust your
                                                 VPS hosting plan with minimal downtime or disruption to your website or application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style>
.slider-demo-block {
    display: flex;
    align-items: center;
}

.slider-demo-block .el-slider {
    margin-top: 0;
    margin-left: 12px;
}
     
.backvp {
    background-image: url("@/assets/img/bbb.webp");
}

.backvps {
    background-image: url("@/assets/img/z2.webp");
}


#app {
    height: 100%;
}

html,
body {
    position: relative;
    height: 60%;
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
    height: 60%;
    padding-top: 0px;
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
    width: 600%;
    height: 60%;
    object-fit: cover;
}
</style>
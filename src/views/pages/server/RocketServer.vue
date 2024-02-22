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
  monthly.value = '10490';
  theryMonth.value = '15490';
  halfYear.value = '20490';
  yearly.value = '25490';
}
const threeMonthPrice = () => {
  monthly.value = '31470';
  theryMonth.value = '46470';
  halfYear.value = '61470';
  yearly.value = '76470';
}
const halfYearPrice = () => {
  monthly.value = '62940';
  theryMonth.value = '92940';
  halfYear.value = '122940';
  yearly.value = '152940';
}
const yearPrice = () => {
  monthly.value = '125880';
  theryMonth.value = '185880';
  halfYear.value = '245880';
  yearly.value = '305880';
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
            <h1 class="text-brand media-lan">Rocket Cloud Server </h1>
            <p class="lead">Build and grow the perfect Website rocket cloud server Pro.</p>
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
              <figure><img src="@/assets/img/rocket_img.png" class="lan img-lan body-landing" /></figure>
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
            <h3 class="media-la text-brand bt-hj">Rocket Cloud Server Plan </h3>
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
                    <h5 class="mb-0 text-brand">Rocket cloud server</h5>
                    <p class="mb-0">Rocket Starter </p>
                  </div>
                  <div class="card-header border-0 pricing-header">
                    <div class="price text-center mb-0 ">৳ {{ monthly }}<span>/-BDT Only.</span></div>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mb-4 pricing-feature-list">

                      <li> 150 GB Gen4 NVMe Storage</li>
                      <li> Unlimited Bandwidth</li>
                      <li> Unlimited Website</li>
                      <li> 7 Core CPU 5.7 GHz 3D Pro</li>
                      <li> 16 GB DDR5 Ram 3800 MHz </li>
                      <li> 200 MBs I/O Speed</li>
                      <li> 4096 IOPS </li>
                      <li> 250 Entry Process</li>
                      <li> 490 Number of Process</li>
                      <li> Anti-DDoS Protection</li>
                      <li> Free SSL Certificate</li>
                      <li> 2x7 Days Backup</li>
                      <li> LiteSpeed with LSCache</li>
                      <li> cPanel Control Panel</li>
                      <li> 24/7 Regular Support</li>
                      <li> Advanced Features</li>
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
                    <h5 class="mb-0 text-brand">Rocket cloud server</h5>
                    <p class="mb-0"> Rocket Standard </p>
                  </div>
                  <div class="card-header border-0 pricing-header">
                    <div class="price text-center mb-0">৳ {{ theryMonth }}<span>/-BDT Only.</span></div>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mb-4 pricing-feature-list">

                      <li> 350 GB Gen4 NVMe Storage</li>
                      <li> Unlimited Bandwidth</li>
                      <li> Unlimited Website</li>
                      <li> 8 Core CPU 5.7 GHz 3D Pro</li>
                      <li> 18 GB DDR5 Ram 3800 MHz </li>
                      <li> 250 MBs I/O Speed</li>
                      <li> 4096 IOPS</li>
                      <li> 300 Entry Process</li>
                      <li> 590 Number of Process</li>
                      <li> Anti-DDoS Protection</li>
                      <li> Free SSL Certificate</li>
                      <li> 2x7 Days Backup</li>
                      <li> LiteSpeed with LSCache</li>
                      <li> cPanel Control Panel</li>
                      <li> 24/7 Regular Support</li>
                      <li> Advanced Features</li>
                    </ul>
                    <a href="https://account.hostservice.com.bd/cart.php?a=confproduct&i=2" class="btn outline-btn mb-3"
                      target="_blank">Purchase now</a>
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
                    <h5 class="mb-0 text-brand">Rocket cloud server</h5>
                    <p class="mb-0"> Rocket Silver </p>
                  </div>
                  <div class="card-header border-0 pricing-header">
                    <div class="price text-center mb-0">৳ {{ halfYear }}<span>/-BDT Only.</span></div>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mb-4 pricing-feature-list">

                      <li> 500 GB Gen4 NVMe Storage</li>
                      <li> Unlimited Bandwidth</li>
                      <li> Unlimited Website</li>
                      <li> 10 Core CPU 5.7 GHz 3D Pro</li>
                      <li> 20 GB DDR5 Ram 3800 MHz </li>
                      <li> 300 MBs I/O Speed</li>
                      <li> 6144 IOPS </li>
                      <li> 350 Entry Process</li>
                      <li> 690 Number of Process</li>
                      <li> Anti-DDoS Protection</li>
                      <li> Free SSL Certificate</li>
                      <li> 2x7 Days Backup</li>
                      <li> LiteSpeed with LSCache</li>
                      <li> cPanel Control Panel</li>
                      <li> 24/7 Regular Support</li>
                      <li> Advanced Features</li>
                    </ul>
                    <a href="https://account.hostservice.com.bd/cart.php?a=confproduct&i=3" class="btn outline-btn mb-3"
                      target="_blank">Purchase now</a>
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
                    <h5 class="mb-0 text-brand">Rocket cloud server</h5>
                    <p class="mb-0"> Rocket Gold </p>
                  </div>
                  <div class="card-header border-0 pricing-header">
                    <div class="price text-center mb-0">৳ {{ yearly }}<span>/-BDT Only.</span></div>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mb-4 pricing-feature-list">

                      <li> 750 GB NVMe Storage</li>
                      <li> Unlimited Bandwidth</li>
                      <li> Unlimited Website</li>
                      <li> 12 Core CPU 5.7 GHz 3D Pro</li>
                      <li> 22 GB DDR5 Ram 3800 MHz </li>
                      <li> 350 MBs I/O Speed</li>
                      <li> 6144 IOPS </li>
                      <li> 400 Entry Process</li>
                      <li> 790 Number of Process</li>
                      <li> Anti-DDoS Protection</li>
                      <li> Free SSL Certificate</li>
                      <li> 2x7 Days Backup</li>
                      <li> LiteSpeed with LSCache</li>
                      <li> cPanel Control Panel</li>
                      <li> 24/7 Regular Support</li>
                      <li> Advanced Features</li>
                    </ul>
                    <a href="https://account.hostservice.com.bd/cart.php?a=confproduct&i=4"
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
            <h3 class="media-la text-brand">Rocket Cloud Server Resource</h3>
            <p class="h5 web-s bt-bl">
              Exclusive rocket cloud server resource
            </p>
          </div>
        </div>
        <div class="row table">
          <div class="col-md-12 col-lg-12">
            <div class="table-responsive">
              <table class="table w-100 table-res table-hover table-bordered table-striped comparision-table text-center">
                <thead class="comparision-table-head">

                  <tr>
                    <td style="width: 20%; text-align: center">
                      <h5>Resource Type</h5>
                    </td>
                    <td class="primary-bg" style="width: 20%; text-align: center;">
                      <h5 class="text-white">Rocket Starter </h5>
                    </td>
                    <td style="width: 20%; text-align: center;">
                      <h5>Rocket Standard </h5>
                    </td>
                    <td style="width: 20%; text-align: center;">
                      <h5>Rocket Silver </h5>
                    </td>
                    <td style="width: 20%; text-align: center;">
                      <h5>Rocket Gold </h5>
                    </td>
                  </tr>

                </thead>
                <tbody class="comparision-table-body">
                  <tr style="width: 20%; text-align: center">
                    <td>
                      <h6 class="text-left">CPU Core 3D Pro </h6>
                    </td>
                    <td class="primary-bg">
                      <h6 class="text-white">7 Core CPU 5.7 GHz </h6>
                    </td>
                    <td>
                      <h6>8 Core CPU 5.7 GHz </h6>
                    </td>
                    <td>
                      <h6>10 Core CPU 5.7 GHz </h6>
                    </td>
                    <td>
                      <h6>12 Core CPU 5.7 GHz </h6>
                    </td>
                  </tr>
                  <tr style="width: 20%; text-align: center">
                    <td>
                      <h6 class="text-left">DDR5 Ram</h6>
                    </td>
                    <td class="primary-bg">
                      <h6 class="text-white">16 GB, 3800 MHz</h6>
                    </td>
                    <td>
                      <h6>18 GB, 3800 MHz</h6>
                    </td>
                    <td>
                      <h6>20 GB, 3800 MHz</h6>
                    </td>
                    <td>
                      <h6>22 GB, 3800 MHz </h6>
                    </td>
                  </tr>

                  <tr style="width: 20%; text-align: center">
                    <td>
                      <h6 class="text-left"> Gen4 NVMe Storage</h6>
                    </td>
                    <td class="primary-bg">
                      <h6 class="text-white">150 GB </h6>
                    </td>
                    <td>
                      <h6>350 GB </h6>
                    </td>
                    <td>
                      <h6>500 GB </h6>
                    </td>
                    <td>
                      <h6>750 GB </h6>
                    </td>
                  </tr>
                  <tr style="width: 20%; text-align: center">
                    <td>
                      <h6 class="text-left">I/O Speed</h6>
                    </td>
                    <td class="primary-bg">
                      <h6 class="text-white">200 MBs</h6>
                    </td>
                    <td>
                      <h6>250 MBs</h6>
                    </td>
                    <td>
                      <h6>300 MBs</h6>
                    </td>
                    <td>
                      <h6>350 MBs</h6>
                    </td>
                  </tr>
                  <tr style="width: 20%; text-align: center">
                    <td>
                      <h6 class="text-left"> Bandwidth</h6>
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
                      <h6 class="text-left">IOPS</h6>
                    </td>
                    <td class="primary-bg">
                      <h6 class="text-white">4096 </h6>
                    </td>
                    <td>
                      <h6>4096</h6>
                    </td>
                    <td>
                      <h6>6144 </h6>
                    </td>
                    <td>
                      <h6>6144</h6>
                    </td>
                  </tr>
                  <tr style="width: 20%; text-align: center">
                    <td>
                      <h6 class="text-left">Entry Process </h6>
                    </td>
                    <td class="primary-bg">
                      <h6 class="text-white">250 </h6>
                    </td>
                    <td>
                      <h6>300 </h6>
                    </td>
                    <td>
                      <h6>350 </h6>
                    </td>
                    <td>
                      <h6>400 </h6>
                    </td>
                  </tr>
                  <tr style="width: 20%; text-align: center">
                    <td>
                      <h6 class="text-left"> Website</h6>
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
                      <h6 class="text-left">Number of Process</h6>
                    </td>
                    <td class="primary-bg">
                      <h6 class="text-white">490 </h6>
                    </td>
                    <td class="col-12">
                      <h6>590 </h6>
                    </td>
                    <td class="col-12">
                      <h6>690 </h6>
                    </td>
                    <td class="col-12">
                      <h6>790 </h6>
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

  <!-- Hostservice Monitoring start section -->

  <section class="compare-provider-table gray-light-bg-n ro-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 col-lg-12">
          <div class="section-heading  text-center mb-5">
            <h3 class="media-la text-brand">Rocket Cloud Server Monitoring </h3>
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

  <!--feature section start-->
  <section class="feature-section ptb-100 ">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-8">
          <div class="section-heading text-center mb-5">
            <h3 class="media-la text-brand">Server Platform Features</h3>
            <p class="h5 web-s">Standard Features: Dynamic Open-Source Expansion.</p>
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
            <p>One of many premium features is a dedicated IP cheapest rocket cloud server plan</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="feature-feature-list p-4 text-center">
            <span class="ti-location-pin icon-sm d-block color-primary mb-3"></span>
            <h5 class="mb-2">IPv6 Support</h5>
            <p>Our rocket cloud server plan is fully packed with dedicated IPv6 Internet protocol IP</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="feature-feature-list p-4 text-center">
            <span class="ti-wallet icon-sm d-block color-primary mb-3"></span>
            <h5 class="mb-2">Money-back Guarantee</h5>
            <p>If you’re not 100% satisfied with Host service, we’ll refund your payment no risk</p>
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
              <h5>Exceptional Rocket Cloud server!</h5>
              <p>I've been using their Rocket Cloud server for my e-commerce website, and the performance has been
                outstanding.
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
              <h5>Rocket Cloud server Provider!</h5>
              <p>I switched to this Rocket Cloud server provider after experiencing frequent downtime with my previous
                host. Since
                making the switch,
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
              <h5>Impressive Performance Server!</h5>
              <p>As a developer, I require a reliable Rocket Cloud solution for my projects, and this server service
                delivers
                exactly that.
                The Rocket Cloud performance is impressive, The support team is responsive.</p>
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
                <p class="h5 web-s">Server Made Simple: Ask Us Anything ! <a href="contact" class="page-scroll"> Contact
                    us</a></p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-lg-12">
              <div id="accordion-one" class="accordion accordion-faq">
                <div class="card mb-0">
                  <a class="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                    <h6 class="mb-0 d-inline-block">What is Rocket Cloud Server?
                    </h6>
                  </a>
                  <div id="collapseOne" class="collapse" data-parent="#accordion-one">
                    <div class="card-body">
                      <p> Rocket cloud server is a high-performance solution designed to deliver exceptional speed,
                        security,
                        and scalability for websites and applications.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card mb-0">
                  <a class="card-header collapsed" data-toggle="collapse" href="#collapseTwo">
                    <h6 class="mb-0 d-inline-block">What makes rocket cloud server stand out from other options?</h6>
                  </a>
                  <div id="collapseTwo" class="collapse" data-parent="#accordion-one">
                    <div class="card-body">
                      <p>Rocket cloud server utilizes advanced optimization techniques and server configurations to ensure
                        blazing-fast performance and seamless scalability for online projects of all sizes.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card mb-0">
                  <a class="card-header collapsed" data-toggle="collapse" href="#collapseThree">
                    <h6 class="mb-0 d-inline-block">Which types of websites or applications are best suited for rocket
                      cloud server?
                    </h6>
                  </a>
                  <div id="collapseThree" class="collapse" data-parent="#accordion-one">
                    <div class="card-body">
                      <p>Rocket cloud server is ideal for websites and applications that require high-speed performance,
                        such as e-commerce platforms, content-heavy websites, and media streaming services.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card mb-0">
                  <a class="card-header collapsed" data-toggle="collapse" href="#collapseFour">
                    <h6 class="mb-0 d-inline-block">Does rocket cloud server offer security features to protect my website
                      or application?
                    </h6>
                  </a>
                  <div id="collapseFour" class="collapse" data-parent="#accordion-one">
                    <div class="card-body">
                      <p>Yes, Rocket cloud server includes robust security measures such as DDoS protection, firewalls,
                        malware scanning, and SSL encryption to safeguard your online assets from threats.
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
  background-image: url("@/assets/img/baner2.webp");
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
}</style>
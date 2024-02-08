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
  monthly.value = '750';
  theryMonth.value = '1500';
  halfYear.value = '2500';
  yearly.value = '3750';
}
const halfYearPrice = () => {
  monthly.value = '1500';
  theryMonth.value = '3000';
  halfYear.value = '5000';
  yearly.value = '10000';
}
const yearPrice = () => {
  monthly.value = '3000';
  theryMonth.value = '6000';
  halfYear.value = '10000';
  yearly.value = '20000';
}

onMounted(() => {
  threeMonthPrice();
})
</script>

<template>
  <section class="hero-equal-height ptb-100 gradient-overly-right:before backmg gradient-overly-right">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-7 col-lg-7 media-lan ">
          <div class="hero-content-wrap text-white position-relative">
            <h1 class="text-brand media-lan">Landing Page Hosting</h1>
            <p class="lead">Build and grow the perfect Website Landing Hosting Pro.</p>
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
              <figure><img src="@/assets/img/bh.png" class="lan img-lan body-landing" /></figure>
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
            <h3 class="media-la text-brand bt-hj">Landing Page Hosting </h3>
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
                    <h5 class="mb-0 text-brand">Landing Page Hosting</h5>
                    <p class="mb-0">Starte </p>
                  </div>
                  <div class="card-header border-0 pricing-header">
                    <div class="price text-center mb-0 ">৳ {{ monthly }}<span>/-BDT Only.</span></div>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mb-4 pricing-feature-list">
                      <li> 5 GB SSD Storage</li>
                      <li> 250 GB Bandwidth</li>
                      <li> 2 Domain</li>
                      <li> Unlimited sub-domains</li>
                      <li> 1 Core CPU 4.7 GHz Pro</li>
                      <li> 2 GB Physical Memory</li>
                      <li> 50 MBs I/O Speed </li>
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
                  <h5 class="mb-0 text-brand">Landing Page Hosting</h5>
                    <p class="mb-0">Standard </p>
                  </div>
                  <div class="card-header border-0 pricing-header">
                    <div class="price text-center mb-0">৳ {{ theryMonth }}<span>/-BDT Only.</span></div>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mb-4 pricing-feature-list">
                      <li> 7 GB SSD Storage</li>
                      <li> 750 GB Bandwidth</li>
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
                   <h5 class="mb-0 text-brand">Landing Page Hosting</h5>
                    <p class="mb-0">Silver </p>
                  </div>
                  <div class="card-header border-0 pricing-header">
                    <div class="price text-center mb-0">৳ {{ halfYear }}<span>/-BDT Only.</span></div>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mb-4 pricing-feature-list">
                      <li> 10 GB SSD Storage</li>
                      <li> 1500 GB Bandwidth</li>
                      <li> 5 Domain</li>
                      <li> Unlimited sub-domains</li>
                      <li> 1 Core CPU 4.7 GHz Pro</li>
                      <li> 2 GB Physical Memory</li>
                      <li> 50 MBs I/O Speed</li>
                      <li> 1024 IOPS </li>
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
                   <h5 class="mb-0 text-brand">Landing Page Hosting</h5>
                    <p class="mb-0">Gold </p>
                  </div>
                  <div class="card-header border-0 pricing-header">
                    <div class="price text-center mb-0">৳ {{ yearly }}<span>/-BDT Only.</span></div>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mb-4 pricing-feature-list">
                      <li> 15 GB SSD Storage</li>
                      <li> 2000 GB Bandwidth</li>
                      <li> 7 Domain</li>
                      <li> Unlimited sub-domains</li>
                      <li> 1 Core CPU 4.7 GHz Pro</li>
                      <li> 2 GB Physical Memory</li>
                      <li> 50 MBs I/O Speed </li>
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
            <h3 class="media-la text-brand">Landing Page Hosting Resource </h3>
            <p class="h5 web-s bt-bl">
              Exclusive landing hosting resources
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
                      <h6 class="text-left">CPU Core Limit </h6>
                    </td>
                    <td class="primary-bg">
                      <h6 class="text-white">1 Core 4.7 GHz Pro</h6>
                    </td>
                    <td>
                      <h6>1 Core  4.7 GHz Pro</h6>
                    </td>
                    <td>
                      <h6>1 Core 4.7 GHz Pro</h6>
                    </td>
                    <td>
                      <h6>1 Core 4.7 GHz Pro</h6>
                    </td>
                  </tr>
                  <tr style="width: 20%; text-align: center">
                    <td>
                      <h6 class="text-left">Physical Memory</h6>
                    </td>
                    <td class="primary-bg">
                      <h6 class="text-white">2 GB</h6>
                    </td>
                    <td>
                      <h6>2 GB</h6>
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
                      <h6 class="text-left">Virtual Storage</h6>
                    </td>
                    <td class="primary-bg">
                      <h6 class="text-white">5 GB SSD </h6>
                    </td>
                    <td>
                      <h6>7 GB SSD </h6>
                    </td>
                    <td>
                      <h6>10 GB SSD </h6>
                    </td>
                    <td>
                      <h6>15 GB SSD </h6>
                    </td>
                  </tr>
                  <tr style="width: 20%; text-align: center">
                    <td>
                      <h6 class="text-left">I/O Speed</h6>
                    </td>
                    <td class="primary-bg">
                      <h6 class="text-white">50 MBs</h6>
                    </td>
                    <td>
                      <h6>50 MBs</h6>
                    </td>
                    <td>
                      <h6>50 MBs</h6>
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
                      <h6 class="text-white">30</h6>
                    </td>
                    <td>
                      <h6>30</h6>
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
                      <h6 class="text-left">Number of Process</h6>
                    </td>
                    <td class="primary-bg">
                      <h6 class="text-white">120</h6>
                    </td>
                    <td>
                      <h6>120</h6>
                    </td>
                    <td>
                      <h6>120</h6>
                    </td>
                    <td>
                      <h6>120</h6>
                    </td>
                  </tr>
                  <tr style="width: 20%; text-align: center">
                    <td>
                      <h6 class="text-left">Numbers of Domain</h6>
                    </td>
                    <td class="primary-bg">
                      <h6 class="text-white">2 Domain</h6>
                    </td>
                    <td>
                      <h6>3 Domain</h6>
                    </td>
                    <td>
                      <h6>5 Domain</h6>
                    </td>
                    <td>
                      <h6>7 Domain</h6>
                    </td>
                  </tr>
                  <tr style="width: 20%; text-align: center">
                    <td>
                      <h6 class="text-left">Bandwidth Network</h6>
                    </td>
                    <td class="primary-bg">
                      <h6 class="text-white">250 GB </h6>
                    </td>
                    <td class="col-12">
                      <h6>750 GB </h6>
                    </td>
                    <td class="col-12">
                      <h6>1500 GB </h6>
                    </td>
                    <td class="col-12">
                      <h6>2000 GB</h6>
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

  <!--feature section start(1add)-->
  <section class="feature-section gray-light-bg sm-p">
    <div class="container mar-hn">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-8">
          <div class="section-heading text-center mb-5">
            <h3 class="media-la text-brand">Hosting Feature Ideas</h3>
            <p class="h5 web-s">
              Standard our hosting plans
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
                Hosting related solution provide any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--feature section end-->

  <!--call to action new section start (add2)-->
  <section class="call-to-action ptb-100 backges gradient-overlay ">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-8">
          <div class="cta-new-wrap text-white text-center">
            <h3 class="text-white med-c">30-day Money-back Guarantee</h3>
            <p class="lead-k">Globally parallel task granular alignments through excellent intellectual capital. Globally
              deploy vertical leadership.</p>
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

  <!--faq new style start (3add)-->
  <section class="ptb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-8">
          <div class="section-heading mb-3 text-center">
            <h3 class="media-la text-brand">Frequently Questions</h3>
            <p class="h5 web-s">
              Success to everyone online
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="single-faq pt-4">
            <h5>How can I pay for this?</h5>
            <p>
              Intrinsicly implement high standards in strategic theme areas via
              inexpensive solutions. Assertively conceptualize prospective bandwidth
              whereas client-based imperatives.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="single-faq pt-4">
            <h5>Is it possible to pay yearly?</h5>
            <p>
              Assertively iterate user friendly innovation without open-source markets.
              Monotonectally extend resource sucking manufactured products without
              high-payoff paradigms. Objectively customize ubiquitous information before
              economically sound relationships.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="single-faq pt-4">
            <h5>Do you offer discounts on multiple items?</h5>
            <p>
              Dramatically target focused testing procedures after holistic ideas.
              Collaboratively maximize high-payoff ROI and value-added products.
              Distinctively deliver cooperative collaboration and idea-sharing whereas
              customized
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="single-faq pt-4">
            <h5>Is VAT included in plan prices?</h5>
            <p>
              Distinctively simplify high-quality initiatives for highly efficient
              applications. Monotonectally repurpose integrated customer service after
              magnetic e-services.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="single-faq pt-4">
            <h5>Will I pay more for some features?</h5>
            <p>
              Enthusiastically pontificate resource-leveling supply chains whereas
              scalable markets. Authoritatively streamline resource maximizing methods of
              empowerment
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="single-faq pt-4">
            <h5>Why are there no limits on the number of messages?</h5>
            <p>
              Assertively target turnkey ideas for market-driven portals. Appropriately
              e-enable world-class intellectual capital whereas 2.0 mindshare.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--faq new style end-->
</template>

<style>
@media (min-width: 320px) {
  .sw-response {
    max-width: 540px;
  }
}

.lan {
  height: 360px;

}

.backmg {
  background-image: url("@/assets/img/landing.webp");
}

.backges {
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
}
</style>

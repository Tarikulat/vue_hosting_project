<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<template>
     
    <section class="hero-equal-height ptb-100 gradient-overly-right" style="background: url('http://localhost:5174/src/assets/img/z2.jpg')">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-7 col-lg-8">
                    <div class="hero-content-wrap text-white position-relative">
                        <h1 class="text-white">Landing Page Hosting</h1>
                        <p class="lead">Build and grow the perfect Website Shared Hosting Pro.</p>
                        <ul class="list-unstyled tech-feature-list text-white">
                            <li class="py-1"><span class="ti-control-forward mr-2"></span>Flexible, Easy to Use Control Panel</li>
                            <li class="py-1"><span class="ti-control-forward mr-2"></span><strong>Unmetered</strong> Bandwidth</li>
                            <li class="py-1"><span class="ti-control-forward mr-2"></span><strong>Unmetered</strong> Sub Domains, FTP Accounts</li>
                            <li class="py-1"><span class="ti-control-forward mr-2"></span><strong>99%</strong> Uptime Guarantee</li>
                            <li class="py-1"><span class="ti-control-forward mr-2"></span><strong>45-Day</strong> Money-Back Guarantee</li>
                        </ul>
                        <div class="action-btns mt-4">
                            <p>Get all the essentials features <strong>Starting at $3.59/mo</strong></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-lg-4">
                    <div class="offer-box text-white text-center py-5 px-4">
                        <span class="h5 text-white">Special intro offer </span>
                        <h2 class="offer-price text-white">
                            <span class="currency usa-currency">$</span>0<span class="decimal">.99</span><small>/month</small>
                        </h2>
                        <p class="regular-price">Regular Price <strong>$7.99/mo</strong></p>
                        <div class="action-btns mt-4">
                            <a class="btn primary-solid-btn animated-btn" href="#">Get Started Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shape-bottom">
            <img src="@/assets/img/jj.png" alt="shape" class="bottom-shape img-fluid">
        </div>
    </section>
    <!--page header section end-->
<!-- packages starting heading -->
<section>
  <div class="container">
    <div class="row justify-content-center head">
        <div class="col-md-12 col-lg-7 ">
            <div class="section-heading  text-center mb-5">
                <h1>Choose the package you need</h1>
                <p class="lead">
                    use this code for 25% discount on yearly payment | YEARLY25
                </p>
            </div>
        </div>
        <div class="col-10 col-sm-8 col-md-7">

            <div class="text-center mb-2 radio-box-wrap billingCycle">

                <div class="single-radio-box">
                    <input name="billingPlan" id="monthly-plan" value="monthly" class="radio" type="radio" checked>
                    <label for="monthly-plan"><span class="custom-check"></span>1 Month</label>
                </div>
                <div class="single-radio-box">
                    <input name="billingPlan" id="yearly-plan" value="yearly" class="radio" type="radio">
                    <label for="yearly-plan"><span class="custom-check"></span>3 Month</label>
                </div>
                <div class="single-radio-box">
                    <input name="billingPlan" id="biannual-plan" value="biannual" class="radio" type="radio">
                    <label for="biannual-plan"><span class="custom-check"></span>6 Month</label>
                </div>

                <div class="single-radio-box">
                    <input name="billingPlan" id="yearly-plan" value="yearly" class="radio" type="radio" checked>
                    <label for="yearly-plan"><span class="custom-check"></span>1 Year</label>
                </div>
                <div class="single-radio-box">
                    <input name="billingPlan" id="monthly-plan" value="monthly" class="radio" type="radio">
                    <label for="monthly-plan"><span class="custom-check"></span>2 Years</label>
                </div>
                <div class="single-radio-box">
                    <input name="billingPlan" id="biannual-plan" value="biannual" class="radio" type="radio">
                    <label for="biannual-plan"><span class="custom-check"></span>3 Years</label>
                </div>
            </div>
        </div>
    </div>
  </div>
</section>
<!-- main packages below -->
<section>
<div class="container">

<swiper
    :slidesPerView="3"
    :spaceBetween="50"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
<swiper-slide> 
<div class="container">
<div class="row align-items-center justify-content-between">
  <div class="col-lg-12 col-md-12 col-12">
   <div class="card text-center align-items-center single-pricing-pack">
     <div class="pt-5">
         <h5 class="mb-0">Cloud Starter</h5>
         <p class="mb-0">1 Month Price</p>
       </div>
        <div class="card-header pb-4 border-0 pricing-header">
            <div class="price text-center mb-0 monthly-price">$19<span>/month</span></div>
            <div class="price text-center mb-0 yearly-price">$69<span>/yearly</span></div>
            <div class="price text-center mb-0 biannual-price">$130<span>/biannual</span></div>
            <div class="price text-center mb-0 triennial-price">$199<span>/triennial</span></div>
        </div>
   <div class="card-body">
       <ul class="list-unstyled mb-4 pricing-feature-list">
           <li > 20 GB SSD Storage</li>
           <li > Unlimited Bandwidth</li>
           <li > Unlimited Website</li>
           <li > Free SSL Certificate</li>
           <li > 2x7 Days Backup</li>
           <li > 2 Core CPU</li>
           <li > 4 GB Physical Memory</li>
           <li > 1 GB Virtual Memory</li>
           <li > I/O Speed 50 MBs</li>
           <li > IOPS 1024</li>
           <li > Entry Process 50</li>
           <li > Number of Process 130</li>
           <li > LiteSpeed with LSCache</li>
           <li > cPanel Control Panel</li>
           <li > 24/7 Regular Support</li>
       </ul>
       <a href="#" class="btn outline-btn mb-3" target="_blank">Purchase now</a>
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
         <h5 class="mb-0">Cloud Starter</h5>
         <p class="mb-0">3 Month Price</p>
       </div>
        <div class="card-header pb-4 border-0 pricing-header">
            <div class="price text-center mb-0 monthly-price">$19<span>/month</span></div>
            <div class="price text-center mb-0 yearly-price">$69<span>/yearly</span></div>
            <div class="price text-center mb-0 biannual-price">$130<span>/biannual</span></div>
            <div class="price text-center mb-0 triennial-price">$199<span>/triennial</span></div>
        </div>
   <div class="card-body">
       <ul class="list-unstyled mb-4 pricing-feature-list">
          <li > 40 GB NVMe Storage</li>
          <li > Unlimited Bandwidth</li>
          <li > Unlimited Website</li>
          <li > Free SSL Certificate</li>
          <li > 2x7 Days Backup</li>
          <li > 4 Core CPU</li>
          <li > 6 GB Physical Memory</li>
          <li > 2 GB Virtual Memory</li>
          <li > I/O Speed 100 MBs</li>
          <li > IOPS 2000</li>
          <li > Entry Process 50</li>
          <li > Number of Process 150</li>
          <li > LiteSpeed with LSCache</li>
          <li > cPanel Control Panel</li>
          <li > 24/7 Regular Support</li>
       </ul>
       <a href="#" class="btn outline-btn mb-3" target="_blank">Purchase now</a>
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
         <h5 class="mb-0">Cloud Starter</h5>
         <p class="mb-0">6 Month Price</p>
       </div>
        <div class="card-header pb-4 border-0 pricing-header">
            <div class="price text-center mb-0 monthly-price">$19<span>/month</span></div>
            <div class="price text-center mb-0 yearly-price">$69<span>/yearly</span></div>
            <div class="price text-center mb-0 biannual-price">$130<span>/biannual</span></div>
            <div class="price text-center mb-0 triennial-price">$199<span>/triennial</span></div>
        </div>
   <div class="card-body">
       <ul class="list-unstyled mb-4 pricing-feature-list">
                      <li > 60 GB NVMe Storage</li>
                      <li > Unlimited Bandwidth</li>
                      <li > Unlimited Website</li>
                      <li > Free SSL Certificate</li>
                      <li > 2x7 Days Backup</li>
                      <li > 4 Core CPU</li>
                      <li > 8 GB Physical Memory</li>
                      <li > 2 GB Virtual Memory</li>
                      <li > I/O Speed 150 MBs</li>
                      <li > IOPS 2500</li>
                      <li > Entry Process 80</li>
                      <li > Number of Process 180</li>
                      <li > LiteSpeed with LSCache</li>
                      <li > cPanel Control Panel</li>
                      <li > 24/7 Regular Support</li>
       </ul>
       <a href="#" class="btn outline-btn mb-3" target="_blank">Purchase now</a>
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
         <h5 class="mb-0">Cloud Starter</h5>
         <p class="mb-0">1 Year</p>
       </div>
        <div class="card-header pb-4 border-0 pricing-header">
            <div class="price text-center mb-0 monthly-price">$19<span>/month</span></div>
            <div class="price text-center mb-0 yearly-price">$69<span>/yearly</span></div>
            <div class="price text-center mb-0 biannual-price">$130<span>/biannual</span></div>
            <div class="price text-center mb-0 triennial-price">$199<span>/triennial</span></div>
        </div>
   <div class="card-body">
       <ul class="list-unstyled mb-4 pricing-feature-list">
          <li > 80 GB SSD Storage</li>
          <li > Unlimited Bandwidth</li>
          <li > Unlimited Website</li>
          <li > Free SSL Certificate</li>
          <li > 2x7 Days Backup</li>
          <li > 5 Core CPU</li>
          <li > 10 GB Physical Memory</li>
          <li > 2 GB Virtual Memory</li>
          <li > I/O Speed 200 MBs</li>
          <li > IOPS 3000</li>
          <li > Entry Process 100</li>
          <li > Number of Process 200</li>
          <li > LiteSpeed with LSCache</li>
          <li > cPanel Control Panel</li>
          <li > 24/7 Regular Support</li>
       </ul>
       <a href="#" class="btn outline-btn mb-3" target="_blank">Purchase now</a>
     </div>
  </div>
</div>
</div>
</div>
</swiper-slide>
</swiper> 
</div>
</section> <br>

 <!--compare provider table start (new1)-->
 <section class="compare-provider-table ptb-100 gray-light-bg">
    <div class="container">
      <div class="row justify-content-center head">
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
                    <table class="table w-100 table-hover table-bordered table-striped comparision-table text-center">
                        <thead class="comparision-table-head">
                            <tr>
                                <tr>
                                    <td style="width: 20%; text-align: center"><h5>Resource Type</h5></td>
                                    <td class="primary-bg" style="width: 20%; text-align: center;"><h5 class="text-white">Bronze</h5></td>
                                    <td style="width: 20%; text-align: center;"><h5>Silver</h5></td>
                                    <td style="width: 20%; text-align: center;"><h5>Gold</h5></td>
                                    <td style="width: 20%; text-align: center;"><h5>Platinum</h5></td>
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
</section> <br> <br>

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
  </section><br>
  <!--feature section end-->

  <!--call to action new section start (add2)-->
<section class="call-to-action ptb-100 gradient-overlay " style="background: url('http://localhost:5174/src/assets/img/z3.jpg')">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 col-lg-8">
                <div class="cta-new-wrap text-white text-center">
                    <h2 class="text-white">30-day Money-back Guarantee</h2>
                    <p class="lead">Globally parallel task granular alignments through excellent intellectual capital. Globally deploy vertical leadership.</p>
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
            <h2>Frequently Asked Questions</h2>
            <p class="lead">
              Quickly morph client-centric results through performance based applications.
              Proactively facilitate professional human capital for cutting-edge.
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
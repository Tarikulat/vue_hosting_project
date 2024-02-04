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
const monthly    = ref();
const theryMonth = ref();
const halfYear   = ref();
const yearly     = ref();

const monthlyPrice = () => {
    monthly.value    = '3,190';
    theryMonth.value = '5,290';
    halfYear.value   = '9,390';
    yearly.value     = '11,890';
}
const threeMonthPrice = () => {
    monthly.value    = '9570';
    theryMonth.value = '15870';
    halfYear.value   = '28170';
    yearly.value     = '35670';
}
const halfYearPrice = () => {
    monthly.value    = '19140';
    theryMonth.value = '31740';
    halfYear.value   = '56340';
    yearly.value     = '71340';
}
const yearPrice = () => {
    monthly.value    = '38280';
    theryMonth.value = '63480';
    halfYear.value   = '112680';
    yearly.value     = '142680';
}

onMounted(() => {
    yearPrice();
})
</script>

<template>
    <!--hero section start-->
    <section class = "hero-equal-height pt-165 backvp pb-100 gradient-overlay">
    <div     class = "container">
    <div     class = "row justify-content-center">
    <div     class = "col-md-7 col-lg-7">
    <div     class = "hero-content-wrap text-white text-center position-relative z-index">
    <h1      class = "text-white vp-t">Managed Your VPS Servers</h1>
    <p       class = "lead sub-t">Our High-Performance VPS is a powerful virtual server that offers
                            lightning-fast speed,
                            reliability, and scalability. It's perfect for hosting resource-intensive websites,
                            running complex applications, and handling data-heavy tasks with minimal downtime.
                            Ideal for businesses and developers who demand top-tier performance.</p>
                    </div>
                </div>

                <div class = "col-md-5 col-lg-5">
                    <div>
                        <label><img src = "@/assets/img/vp1.png" class = "body-landing ser-img" alt = "ser"></label>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--hero section end-->

    <!-- packages starting heading -->
    <section>
      <div class = "container">
      <div class = "row justify-content-center head">
      <div class = "col-md-12 col-lg-7">
      <div class = "section-heading  text-center mb-5">
      <h1  class = "media-la">VPS Server Plan:</h1>
      <p   class = "lead">
                     6 month purchase 10% discount - hostgift6m
                    <br> 1year purchase 25% discount - hostgift1yr</p>
                </div>
            </div>
        
            <div   class = "col-10 col-sm-8 col-md-7">
            <div   class = "text-center mb-2 radio-box-wrap billingCycle">
            <div   class = "single-radio-box" @click  = "monthlyPrice">
            <input name  = "billingPlan" id           = "monthly-plan" value = "monthly" class = "radio" type = "radio" checked>
            <label for   = "monthly-plan"><span class = "custom-check" ></span>1 Month</label>
                    </div>
                    <div   class = "single-radio-box" @click = "threeMonthPrice">
                    <input name  = "billingPlan" id          = "yearly-plan" value = "yearly" class = "radio" type = "radio">
                    <label for   = "yearly-plan"><span class = "custom-check" ></span>3 Month</label>
                    </div>
                    <div   class = "single-radio-box" @click   = "halfYearPrice">
                    <input name  = "billingPlan" id            = "biannual-plan" value = "biannual" class = "radio" type = "radio">
                    <label for   = "biannual-plan"><span class = "custom-check" ></span>6 Month</label>
                    </div>

                    <div   class = "single-radio-box" @click    = "yearPrice">
                    <input name  = "billingPlan" id             = "triennial-plan" value = "triennial" class = "radio" type = "radio" checked>
                    <label for   = "triennial-plan"><span class = "custom-check" ></span>1 Year</label>
                    </div>
          
                </div>
            </div>
        </div>
      </div>
    </section>
    <!-- main packages below -->
    <section>
    <div class = "container top-p">

    <swiper
        :slidesPerView = "3"
        :spaceBetween  = "50"
        :loop          = "true"
        :pagination    = "{
              clickable: true,
            }"
        :breakpoints="{
              '320': {
                slidesPerView: 1,
                spaceBetween : 20,
              },
              '570': {
                slidesPerView: 2,
                spaceBetween : 40,
              },
              '1024': {
                slidesPerView: 3,
                spaceBetween : 50,
              },
            }"
        :navigation = "true"
        :modules    = "modules"
          class     = "mySwiper"
      >

    <swiper-slide> 
    <div class = "container">
    <div class = "row align-items-center justify-content-between">
    <div class = "col-lg-12 col-md-12 col-12">
    <div class = "card text-center align-items-center single-pricing-pack">
    <div class = "pt-5">
    <h5  class = "mb-0">Cloud Starter</h5>
    <p   class = "mb-0">VPS Starter:</p>
            </div>
             <div class = "card-header pb-4 border-0 pricing-header">
             <div class = "price text-center mb-0 ">৳ {{ monthly }}<span>/-BDT Only.</span></div>
             </div>
           <div class = "card-body">
           <ul  class = "list-unstyled mb-4 pricing-feature-list">
               <li > 4 Core 4.7 GHz Processor</li>
               <li > 8 GB Memory DDR-4</li>
               <li > 100 GB NVMe PCI Gen 4.0</li>
               <li > 1 IPv4 Address</li>
               <li > 1 - upto 10 Gbps Port </li>
               <li > 5 TB Transfer</li>
               <li > DDoS Protection included </li>
               <li > KVM Technology</li>
               <li > Linux distribution / Windows</li>
               <li > Auto Control + Root access</li>
               <li > Premium (paid) add-ons</li>
               <li > 99.9% Uptime Guarantee</li>
           </ul>
           <a href = "https://account.hostservice.com.bd/index.php?rp=/store/shared-hosting/starter" class = "btn outline-btn mb-3" target = "_blank">Purchase now</a>
         </div>
      </div>
    </div>
    </div>
    </div>
    </swiper-slide>

    <swiper-slide> 
    <div class = "container">
    <div class = "row align-items-center justify-content-between">
    <div class = "col-lg-12 col-md-12 col-12">
    <div class = "card text-center align-items-center single-pricing-pack">
    <div class = "pt-5">
    <h5  class = "mb-0">Cloud Starter</h5>
    <p   class = "mb-0">VPS Standard: :</p>
           </div>
            <div class = "card-header pb-4 border-0 pricing-header">
            <div class = "price text-center mb-0">৳ {{theryMonth}}<span>/-BDT Only.</span></div>
            </div>
       <div class = "card-body">
       <ul  class = "list-unstyled mb-4 pricing-feature-list">
              <li > 6 Core 4.7 GHz Processor</li>
              <li > 16 GB Memory DDR-4</li>
              <li > 200 GB NVMe PCI Gen 4.0</li>
              <li > 1 IPv4 Address</li>
              <li > 1 - upto 10 Gbps Port </li>
              <li > 8 TB Transfer</li>
              <li > DDoS Protection included</li>
              <li > KVM Technology</li>
              <li > Linux distribution / Windows</li>
              <li > Auto Control + Root access</li>
              <li > Premium (paid) add-ons</li>
              <li > 99.9% Uptime Guarantee</li>
           </ul>
           <a href = "https://account.hostservice.com.bd/index.php?rp=/store/shared-hosting/standard" class = "btn outline-btn mb-3" target = "_blank">Purchase now</a>
         </div>
      </div>
    </div>
    </div>
    </div>
    </swiper-slide>

    <swiper-slide> 
    <div class = "container">
    <div class = "row align-items-center justify-content-between">
    <div class = "col-lg-12 col-md-12 col-12">
    <div class = "card text-center align-items-center single-pricing-pack">
    <div class = "pt-5">
    <h5  class = "mb-0">Cloud Starter</h5>
    <p   class = "mb-0">VPS Silver:</p>
           </div>
            <div class = "card-header pb-4 border-0 pricing-header">
            <div class = "price text-center mb-0">৳ {{halfYear}}<span>/-BDT Only.</span></div>
            </div>
       <div class = "card-body">
       <ul  class = "list-unstyled mb-4 pricing-feature-list">
                          <li > 8 Core 4.7 GHz Processor</li>
                          <li > 32 GB Memory DDR-4</li>
                          <li > 400 GB NVMe PCI Gen 4.0</li>
                          <li > 1 IPv4 Address</li>
                          <li > 1 - upto 10 Gbps Port </li>
                          <li > Unlimited Transfer</li>
                          <li > DDoS Protection included</li>
                          <li > KVM Technology </li>
                          <li > Linux distribution / Windows</li>
                          <li > Auto Control + Root access</li>
                          <li > Premium (paid) add-ons</li>
                          <li > 99.9% Uptime Guarantee</li>                     
           </ul>
           <a href = "https://account.hostservice.com.bd/index.php?rp=/store/shared-hosting/silver" class = "btn outline-btn mb-3" target = "_blank">Purchase now</a>
         </div>
      </div>
    </div>
    </div>
    </div>
    </swiper-slide>

    <swiper-slide> 
    <div class = "container">
    <div class = "row align-items-center justify-content-between">
    <div class = "col-lg-12 col-md-12 col-12">
    <div class = "card text-center align-items-center single-pricing-pack">
    <div class = "pt-5">
    <h5  class = "mb-0">Cloud Starter</h5>
    <p   class = "mb-0">VPS Gold :</p>
           </div>
            <div class = "card-header pb-4 border-0 pricing-header">
            <div class = "price text-center mb-0">৳ {{yearly}}<span>/-BDT Only.</span></div>
            </div>
       <div class = "card-body">
       <ul  class = "list-unstyled mb-4 pricing-feature-list">
              <li > 10 Core 4.7 GHz Processor</li>
              <li > 48 GB Memory DDR-4</li>
              <li > 600 GB NVMe PCI Gen 4.0</li>
              <li > 1 IPv4 Address</li>
              <li > 1 - upto 10 Gbps Port </li>
              <li > Unlimited Transfer </li>
              <li > DDoS Protection included </li>
              <li > KVM Technology</li>
              <li > Linux distribution / Windows</li>
              <li > Auto Control + Root access</li>
              <li > Premium (paid) add-ons</li>
              <li > 99.9% Uptime Guarantee</li>
           </ul>
           <a href = "https://account.hostservice.com.bd/index.php?rp=/store/shared-hosting/gold" class = "btn outline-btn mb-3" target = "_blank">Purchase now</a>
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
    <!--feature section start-->
    <section class = "feature-section ptb-100 ">
    <div     class = "container">
    <div     class = "row justify-content-center">
    <div     class = "col-md-9 col-lg-8">
    <div     class = "section-heading text-center mb-5">
                        <h2>Server Hosting Platform Features</h2>
                        <p class = "lead">These features come standard in all of our hosting plans. Dynamically extend
                            imperatives through open-source quickly niche markets.</p>
                    </div>
                </div>
            </div>
            <div  class = "row">
            <div  class = "col-md-6 col-lg-4">
            <div  class = "feature-feature-list p-4 text-center">
            <span class = "ti-harddrives icon-sm d-block color-primary mb-3"></span>
            <h5   class = "mb-2">SSD Disk Drives</h5>
                        <p>You can never go wrong with our own top-notch dedicated servers loaded</p>
                    </div>
                </div>
                <div  class = "col-md-6 col-lg-4">
                <div  class = "feature-feature-list p-4 text-center">
                <span class = "ti-rss-alt icon-sm d-block color-primary mb-3"></span>
                <h5   class = "mb-2">100 Mb/s Network</h5>
                        <p>We can guarantee an excellent experience and loading time for your successful</p>
                    </div>
                </div>
                <div  class = "col-md-6 col-lg-4">
                <div  class = "feature-feature-list p-4 text-center">
                <span class = "ti-lock icon-sm d-block color-primary mb-3"></span>
                <h5   class = "mb-2">DDoS Protection</h5>
                        <p>With full root access you will be able to take full control of your server very easy</p>
                    </div>
                </div>
                <div  class = "col-md-6 col-lg-4">
                <div  class = "feature-feature-list p-4 text-center">
                <span class = "ti-world icon-sm d-block color-primary mb-3"></span>
                <h5   class = "mb-2">Dedicated IP</h5>
                        <p>One of many premium features is a dedicated IP cheapest VPS hosting plan</p>
                    </div>
                </div>
                <div  class = "col-md-6 col-lg-4">
                <div  class = "feature-feature-list p-4 text-center">
                <span class = "ti-location-pin icon-sm d-block color-primary mb-3"></span>
                <h5   class = "mb-2">IPv6 Support</h5>
                        <p>Our VPS hosting plan is fully packed with dedicated IPv6 Internet protocol IP</p>
                    </div>
                </div>
                <div  class = "col-md-6 col-lg-4">
                <div  class = "feature-feature-list p-4 text-center">
                <span class = "ti-wallet icon-sm d-block color-primary mb-3"></span>
                <h5   class = "mb-2">Money-back Guarantee</h5>
                        <p>If you’re not 100% satisfied with Hostlar, we’ll refund your payment no risk</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--feature section end-->

    <!--call to action new section start-->
    <section class = "call-to-action backvps ptb-100 gradient-overlay">
    <div     class = "container">
    <div     class = "row justify-content-center">
    <div     class = "col-md-9 col-lg-8">
    <div     class = "cta-new-wrap text-white text-center">
    <h2      class = "text-white">30-day Money-back Guarantee</h2>
    <p       class = "lead">Globally parallel task granular alignments through excellent intellectual capital.
                            Globally deploy vertical leadership.</p>
                        <div class = "action-btns mt-4">
                        <a   href  = "#" class = "btn solid-white-btn animated-btn mr-lg-3">Get
                                Started Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--call to action new section end-->
    <!-- faq home pages -->

    <section>
        <div class = "container">
        <div id    = "faq" class = "ptb-100 ">
        <div class = "container">
        <div class = "row">
        <div class = "col-md-9 col-lg-8">
        <div class = "section-heading mb-5">
                                <h2>Frequently Asked Queries</h2>
                                <p>We understand that hosting stuff can seem complicated.
                                    So please, ask us anything! We're happy to explain and help you on your
                                    journey to getting online.<a href = "#contact" class = "page-scroll">Contact us</a></p>
                            </div>
                        </div>
                    </div>
                    <div class = "row">
                    <div class = "col-md-12 col-lg-12">
                    <div id    = "accordion-one" class               = "accordion accordion-faq">
                    <div class = "card mb-0">
                    <a   class = "card-header collapsed" data-toggle = "collapse" href = "#collapseOne">
                    <h6  class = "mb-0 d-inline-block">What exactly is web hosting?
                                        </h6>
                                    </a>
                                    <div id    = "collapseOne" class = "collapse" data-parent = "#accordion-one">
                                    <div class = "card-body">
                                            <p>Web hosting provides the storage, servers, and technology to publish
                                                your site on the internet so others can access it 24/7. We take care of
                                                all technical issues, so you can focus on your site and business.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class = "card mb-0">
                                <a   class = "card-header collapsed" data-toggle = "collapse" href = "#collapseTwo">
                                <h6  class = "mb-0 d-inline-block">What types of hosting plans do we offer?</h6>
                                    </a>
                                    <div id    = "collapseTwo" class = "collapse" data-parent = "#accordion-one">
                                    <div class = "card-body">
                                            <p>We offer shared hosting for new sites, cloud hosting for rapidly growing
                                                sites,
                                                and dedicated servers for large businesses. Each scales up in resources and
                                                control.
                                                Our team can suggest the ideal plan type for your needs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class = "card mb-0">
                                <a   class = "card-header collapsed" data-toggle = "collapse" href = "#collapseThree">
                                <h6  class = "mb-0 d-inline-block">How can you get a domain from us?
                                        </h6>
                                    </a>
                                    <div id    = "collapseThree" class = "collapse" data-parent = "#accordion-one">
                                    <div class = "card-body">
                                            <p>Purchasing a domain name is easy and affordable. You can buy domains directly
                                                from us when signing up for web hosting. We help you find available domain
                                                names
                                                that strengthen your brand.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class = "card mb-0">
                                <a   class = "card-header collapsed" data-toggle = "collapse" href = "#collapseFour">
                                <h6  class = "mb-0 d-inline-block">How do we optimize hosting for WordPress sites?
                                        </h6>
                                    </a>
                                    <div id    = "collapseFour" class = "collapse" data-parent = "#accordion-one">
                                    <div class = "card-body">
                                            <p>We optimize hosting for WordPress sites with automatic installs, custom
                                                plugins, and built-in scaling.
                                                So you get a secure, high-performance WordPress site with ease.
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

    <!--testimonial and review section start-->
    <section class = "client-review-section ptb-100 gray-light-bg">
    <div     class = "container">
    <div     class = "row justify-content-center">
    <div     class = "col-md-9 col-lg-8">
    <div     class = "section-heading text-center mb-5">
                        <h2>What Our Customers Say About Us?</h2>
                        <p class = "lead">Authoritatively reinvent client-centric e-markets via fully tested process.
                            Objectively restore strategic initiatives through fully researched.</p>
                    </div>
                </div>
            </div>
            <div class = "row">
            <div class = "col-md-6 col-lg-4">
            <div class = "single-testimonial white-bg shadow-sm rounded p-5">
            <ul  class = "list-inline ratting-list mb-2">
            <li  class = "list-inline-item"><span class = "fas fa-star"></span></li>
            <li  class = "list-inline-item"><span class = "fas fa-star"></span></li>
            <li  class = "list-inline-item"><span class = "fas fa-star"></span></li>
            <li  class = "list-inline-item"><span class = "fas fa-star"></span></li>
            <li  class = "list-inline-item"><span class = "fas fa-star"></span></li>
                        </ul>
                        <div class = "ratting-content">
                            <h5>Awesome support from technical</h5>
                            <p>Objectively envisioneer magnetic manufactured products and dynamic models. Progressively
                                maximize 2.0 relationships whereas process-centric.</p>
                        </div>
                        <div class = "ratting-author mt-3">
                            <h6>Alex Khamer</h6>
                            <small class = "text-right">6 days ago</small>
                        </div>
                    </div>
                </div>
                <div class = "col-md-6 col-lg-4">
                <div class = "single-testimonial white-bg shadow-sm rounded p-5">
                <ul  class = "list-inline ratting-list mb-2">
                <li  class = "list-inline-item"><span class = "fas fa-star"></span></li>
                <li  class = "list-inline-item"><span class = "fas fa-star"></span></li>
                <li  class = "list-inline-item"><span class = "fas fa-star"></span></li>
                <li  class = "list-inline-item"><span class = "fas fa-star"></span></li>
                <li  class = "list-inline-item"><span class = "fas fa-star"></span></li>
                        </ul>
                        <div class = "ratting-content">
                            <h5>Awesome Design Quality with Support</h5>
                            <p>Objectively envisioneer magnetic manufactured products and dynamic models maximize 2.0
                                relationships whereas methodologies.</p>
                        </div>
                        <div class = "ratting-author mt-3">
                            <h6>Peter Anderson</h6>
                            <small class = "text-right">3 days ago</small>
                        </div>
                    </div>
                </div>
                <div class = "col-md-6 col-lg-4">
                <div class = "single-testimonial white-bg shadow-sm rounded p-5">
                <ul  class = "list-inline ratting-list mb-2">
                <li  class = "list-inline-item"><span class = "fas fa-star"></span></li>
                <li  class = "list-inline-item"><span class = "fas fa-star"></span></li>
                <li  class = "list-inline-item"><span class = "fas fa-star"></span></li>
                <li  class = "list-inline-item"><span class = "fas fa-star"></span></li>
                <li  class = "list-inline-item"><span class = "fas fa-star"></span></li>
                        </ul>
                        <div class = "ratting-content">
                            <h5>Contacted support after Midnight</h5>
                            <p>Objectively envisioneer magnetic manufactured products and dynamic models. Progressively
                                maximize 2.0 relationships whereas process-centric.</p>
                        </div>
                        <div class = "ratting-author mt-3">
                            <h6>Jolio Darix</h6>
                            <small class = "text-right">8 days ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--testimonial and review section end-->
</template>

<style>
.slider-demo-block {
    display    : flex;
    align-items: center;
}

.slider-demo-block .el-slider {
    margin-top : 0;
    margin-left: 12px;
}



.backvp {
    background-image: url("@/assets/img/a8.webp");
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
    height  : 60%;
}

body {
    background : #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size  : 14px;
    color      : #000;
    margin     : 0;
    padding    : 0;
}

.swiper {
    width      : 100%;
    height     : 60%;
    padding-top: 0px;
}

.swiper-slide {
    text-align: center;
    font-size : 18px;
    background: #fff;

      /* Center slide text vertically */
    display        : flex;
    justify-content: center;
    align-items    : center;
}

.swiper-slide img {
    display   : block;
    width     : 600%;
    height    : 60%;
    object-fit: cover;
}</style>
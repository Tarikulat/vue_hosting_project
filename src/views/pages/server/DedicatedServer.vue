<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { ref } from 'vue'

const value = ref(0)
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
    <section class="hero-equal-height ptb-100 gradient-overly-right:before backgb backmg gradient-overly-right">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-7 col-lg-7 media-lan ">
                <div class="hero-content-wrap text-white position-relative">
                  <h1 class="text-brand media-lan">Dedicated Server </h1>
                  <p class="lead">Build and grow the perfect Website dadicated Server.</p>
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

                <div class="hover13 column">
                  <div>
                    <figure><img src="@/assets/img/v3.png" class="lan img-lan body-landing" /></figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
 
  <!--vps hosting pricing plane start-->
  <section class="vps-pricing-plane ptb-100 gray-light-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-7 media-lan">
          <div class="section-heading text-center mb-5">
            <h3 class="media-la text-brand">Dedicated Server Plan </h3>
            <p class="h5 web-s">Open-Source Solutions with Client Focus</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <table class="table vps-hosting-pricing-table">
            <thead>
              <tr class="media-la text-brand"> 
                <th>Packages</th>
                <th>CPU </th>
                <th>Processor</th>
                <th>Ram</th>
                <th>Storage</th>
                <th>Bandwidth DDoS</th>
                <th colspan="2">Price And Delivered</th>
              </tr>
            </thead>
            <tbody>
              <tr class="vps-pricing-row border-accent-primary">
                <td>Starter:</td>
                <td><span class="cpu-core">Ryzen 5800X 8x3.80GHz</span></td>
                <td><span class="cpu-core">Ryzen 5600X 6x3.70GHz</span></td>
                <td><span class="cpu-core">64GB DDR4 Memory</span></td>
                <td>
                  <div>
                    <span class="cpu-core">512GB NVMe Hard Drive</span>
                  </div>
                </td>
                <td><span class="cpu-core">Protection included</span></td>
                <td>
                  <p>
                    <span class="rate">৳14390<span>/month</span></span><br>


                  </p>
                </td>

                <td>
                  <a href="" class="btn primary-solid-btn">Order</a>
                </td>

              </tr>

              <tr class="vps-pricing-row border-red-themes">
                <td>Standard:</td>
                <td><span class="cpu-core">Ryzen 5800X 8x3.80GHz</span></td>
                <td> <span class="cpu-core">Ryzen 5800X Processor</span></td>
                <td><span class="cpu-core">128GB DDR4 Memory</span></td>
                <td><span class="cpu-core">1TB Hard Drive</span></td>
                <td><span class="cpu-core"> Protection included</span></td>
                <td >
                  <p>
                    <span class="rate">৳20390<span>/month</span></span><br>
                  </p>
                </td>
                <td>
                  <a href="" class="btn primary-solid-btn">Order</a>
                </td>
              </tr>
              <tr class="vps-pricing-row border-orange-themes">
                <td>Silver :</td>
                <td><span class="cpu-core">Ryzen 5900X 12x3.70GHz</span> </td>
                <td> <span class="cpu-core">Ryzen 5900X Processor</span></td>
                <td><span class="cpu-core">128GB DDR4 Memory</span></td>
                <td>
                  <div class="score-bar-wrap">
                    <span class="cpu-core">2TB Hard Drive</span>
                  </div>
                </td>
                <td><span class="cpu-core"> Protection included</span></td>
                <td>
                  <p>
                    <span class="rate">৳26590<span>/month</span></span><br>
                  </p>
                </td>
                <td>
                  <a href="" class="btn primary-solid-btn">Order </a>
                </td>
              </tr>
              <tr class="vps-pricing-row border-yellow-themes">
                <td>Gold :</td>
                <td><span class="cpu-core">Ryzen 5950X 16x3.40GHz</span></td>
                <td><span class="cpu-core">AMD Ryzen 5950X</span></td>
                <td><span class="cpu-core">128GB DDR4 Memory</span></td>
                <td>
                  <div class="score-bar-wrap">
                    <span class="cpu-core">2TB Hard Drive</span>
                  </div>
                </td>
                <td><span class="cpu-core"> Protection included</span></td>
                <td>
                  <p><span class="rate">৳32390<span>/month</span></span><br>
                  </p>
                </td>
                <td>
                  <a href="" class="btn primary-solid-btn">Order </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row justify-content-center d-none d-md-block d-lg-block">
        <div class="col-md-10 col-lg-12">
          <ul class="list-inline">
                                  <li class=" mar-da payment-method text-center">
                                      <img src="@/assets/img/footer-last.webp" alt="amex" width="300px" />
                                  </li>
                              </ul>
        </div>
      </div>
    </div>
  </section>
  <!--vps hosting pricing plane end-->
  <!--feature section start-->
  <section class="feature-section ptb-100 vps-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-8">
          <div class="section-heading text-center mb-5">
            <h3 class="media-la text-brand">Hosting Platform Features</h3>
            <p class="h5 web-s">Standard Hosting Features: Dynamic Open-Source Expansion</p>
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

  <!--call to action new section start (add2)-->
  <section class="call-to-action backgm ptb-100 gradient-overlay ">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-8">
          <div class="cta-new-wrap text-white text-center">
            <h2 class="text-white bm-d">30-day Money-back Guarantee</h2>
            <p class="lead">Globally parallel task granular alignments through excellent intellectual capital. Globally
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

  <!--feature section start(1add)-->
  <section class="feature-section ptb-100 gray-light-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-8">
          <div class="section-heading text-center mb-5">
            <h3 class="media-la text-brand">Hosting Features Ideas</h3>
            <p class="h5 web-s">
              Standard Hosting: Open-Source Expansion
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
        <div class="col-md-6  col-lg-4">
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
        <div class="col-md-6  col-lg-4">
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

  <!--call to action new style start-->
  <section class="call-to-action ptb-100 gray-light-bg gradient-bg">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6">
          <div class="call-to-action-box white-bg shadow-sm rounded p-5">
            <h3>100% Uptime Guarantee</h3>
            <p>
              Made possible by our multiple datacenter locations, redundant cooling,
              emergency generators. Monotonectally drive business e-markets after
              distinctive functionalities.
            </p>
            <a href="#" class="btn outline-btn">Learn More</a>
          </div>
        </div>
        <div class="col-md-6 mr-con col-lg-6">
          <div class="call-to-action-box white-bg shadow-sm rounded p-5">
            <h3>24/7 365 Day Support</h3>
            <p>
              Our experts are on standby for friendly, pro-level support 24/7, 365. No
              question is too Objectively envisioneer stand-alone growth strategies
              whereas market.
            </p>
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

  <!--faq new style start (3add)-->
  <section class="ptb-100 white-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-8">
          <div class="section-heading mb-3 text-center">
            <h3 class="media-la text-brand">Frequently Asked Questions</h3>
            <p class="h5 web-s">
              Transforming Results: Performance-Based Solutions
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

  <!--testimonial and review section start-->
  <section class="client-review-section ptb-100 gray-light-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-8">
          <div class="section-heading text-center mb-5">
            <h3 class="media-la text-brand">What Our Customers Say About Us?</h3>
            <p class="h5 web-s bt-bl">
              Revamping E-Markets: Tested Processes, Researched Initiatives
            </p>
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
              <p>
                Objectively envisioneer magnetic manufactured products and dynamic models.
                Progressively maximize 2.0 relationships whereas process-centric.
              </p>
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
              <h5>Awesome Design Quality with Support</h5>
              <p>
                Objectively envisioneer manufactured products and dynamic models
                maximize 2.0 relationships whereas methodologies.
              </p>
            </div>
            <div class="ratting-author mt-3">
              <h6>Peter Anderson</h6>
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
              <h5>Contacted support after Midnight</h5>
              <p>
                Objectively envisioneer magnetic manufactured products and dynamic models.
                Progressively maximize 2.0 relationships whereas process-centric.
              </p>
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
.titl {
  margin-top: 120px !important;

}

.slider-demo-block {
  display: flex;
  align-items: center;
}

.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}

.backgb {
  background-image: url("@/assets/img/nzz.webp");
}

.backgm {
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

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
  <!--hero section start-->
  <section class="hero-equal-height pt-165 pb-100 backgb gradient-overlay">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 dser-media col-lg-7">
                <div class="hero-content-wrap text-white text-center position-relative z-index">
                    <h1 class="text-white ded-t ">DEDICATED SERVERS</h1>
                    <p class="lead">Discover a full range of web hosting servers. Dedicated servers are the perfect 
                      solution to accommodate your projects when shared hosting is no longer enough. The complete 
                      freedom of managing your dedicated server lets you shape it to your own needs.</p>
                </div>
            </div>
            <div class="col-md-4 col-lg-5">
              <div>
                  <label><img src="@/assets/img/dade1.png" class="da-img body-landing" alt="ser"></label>
              </div>
            </div>
        </div>
    </div>
</section>
<!--hero section end-->

<!--vps hosting pricing plane start-->
<section class="vps-pricing-plane ptb-100 gray-light-bg">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 col-lg-8">
                <div class="section-heading text-center mb-5">
                    <h2>Dadicated Hosting Pricing Plane</h2>
                    <p class="lead">Uniquely restore open-source products via open-source relationships.
                        Enthusiastically deliver competitive systems and client-centric.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <table class="table vps-hosting-pricing-table">
                    <thead>
                        <tr>
                            <th>VCPU</th>
                            <th>Memory</th>
                            <th>CPU Power</th>
                            <th>Storage</th>
                            <th>Geekbench Score</th>
                            <th>Bandwidth</th>
                            <th colspan="2">Dadicate server Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="vps-pricing-row border-accent-primary">
                            <td data-value="VCPU">1 vCPU</td>
                            <td data-value="Memory">2GB</td>
                            <td data-value="CPU Power"><span>2.4GHz<span class="cpu-core">1 core</span></span></td>
                            <td data-value="Storage">20GB</td>
                            <td data-value="Geekbench Score">
                                <div class="score-bar-wrap">
                                    <span class="geekbench-score">3513</span>
                                    <div class="progress w-100 score-bar-item">
                                        <div class="progress-bar primary-bg" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td data-value="Bandwidth">1000GB</td>
                            <td data-value="Price">
                                <p>
                                    <span class="rate">৳13,450<span>/month</span></span><br>
                                  <span>Dedicated Starter</span>
                                    <span class="pricing-onsale">On sale - <span class="badge color-3 color-3-bg">Save 25%</span></span>
                                </p>
                            </td>
                            <td>
                                <a href="https://account.hostservice.com.bd/index.php?rp=/store/dedicated-server/dedicated-starter" class="btn primary-solid-btn">Order Now</a>
                            </td>
                        </tr>
                        <tr class="vps-pricing-row border-red-themes">
                            <td data-value="VCPU">2 vCPU</td>
                            <td data-value="Memory">4GB</td>
                            <td data-value="CPU Power"><span>4.8GHz<span class="cpu-core">2 cores</span></span></td>
                            <td data-value="Storage">40GB</td>
                            <td data-value="Geekbench Score">
                                <div class="score-bar-wrap">
                                    <span class="geekbench-score">5363</span>
                                    <div class="progress w-100 score-bar-item">
                                        <div class="progress-bar primary-bg" role="progressbar" style="width: 40%;" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">40%
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td data-value="Bandwidth">2000GB</td>
                            <td data-value="Price">
                                <p>
                                    <span class="rate">৳15,350<span>/month</span></span><br>
                                    <span>Dedicated Standard</span>
                                    <span class="pricing-onsale">On sale - <span class="badge color-1 color-1-bg">Save 50%</span></span>
                                </p>
                            </td>
                            <td>
                                <a href="https://account.hostservice.com.bd/index.php?rp=/store/dedicated-server/dedicated-standard" class="btn primary-solid-btn">Order Now</a>
                            </td>
                        </tr>
                        <tr class="vps-pricing-row border-orange-themes">
                            <td data-value="VCPU">3 vCPU</td>
                            <td data-value="Memory">6GB</td>
                            <td data-value="CPU Power"><span>7.2GHz<span class="cpu-core">3 cores</span></span></td>
                            <td data-value="Storage">60GB</td>
                            <td data-value="Geekbench Score">
                                <div class="score-bar-wrap">
                                    <span class="geekbench-score">7545</span>
                                    <div class="progress w-100 score-bar-item">
                                        <div class="progress-bar primary-bg" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td data-value="Bandwidth">3000GB</td>
                            <td data-value="Price">
                                <p>
                                    <span class="rate">৳17,350<span>/month</span></span><br>
                                    <span>Dedicated Silver</span>
                                    <span class="pricing-onsale">On sale -
                                       <span class="badge color-3 color-3-bg">Save 10%</span></span>
                                </p>
                            </td>
                            <td>
                                <a href="https://account.hostservice.com.bd/index.php?rp=/store/dedicated-server/silver" class="btn primary-solid-btn">Order Now</a>
                            </td>
                        </tr>
                        <tr class="vps-pricing-row border-yellow-themes">
                            <td data-value="VCPU">4 vCPU</td>
                            <td data-value="Memory">8GB</td>
                            <td data-value="CPU Power"><span>9.6GHz<span class="cpu-core">4 cores</span></span></td>
                            <td data-value="Storage">80GB</td>
                            <td data-value="Geekbench Score">
                                <div class="score-bar-wrap">
                                    <span class="geekbench-score">8953</span>
                                    <div class="progress w-100 score-bar-item">
                                        <div class="progress-bar primary-bg" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td data-value="Bandwidth">4000GB</td>
                            <td data-value="Price">
                                <p><span class="rate">৳23,350<span>/month</span></span><br>
                                  <span>Dedicated Gold</span>
                                <span class="pricing-onsale">On sale - 
                                <span class="badge color-3 color-3-bg">Save 30%</span></span></p>
                            </td>
                            <td>
                                <a href="https://account.hostservice.com.bd/index.php?rp=/store/dedicated-server/dedicated-silver" class="btn primary-solid-btn">Order Now</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row justify-content-center d-none d-md-block d-lg-block">
            <div class="col-md-10 col-lg-12">
                <div class="payment-method text-center">
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <img src="@/assets/img/payment-amex.svg" alt="amex" width="50">
                        </li>
                        <li class="list-inline-item">
                            <img src="@/assets/img/payment-visa.svg" alt="visa" width="50">
                        </li>
                        <li class="list-inline-item">
                            <img src="@/assets/img/payment-mastercard.svg" alt="mastercard" width="50">
                        </li>
                        <li class="list-inline-item">
                            <img src="@/assets/img/payment-paypal.svg" alt="paypal" width="50">
                        </li>
                        <li class="list-inline-item">
                            <img src="@/assets/img/payment-bitcoin.svg" alt="bitcoin" width="50">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!--vps hosting pricing plane end-->

<br>
<!--feature section start-->
<section class="feature-section ptb-100 ">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 col-lg-8">
                <div class="section-heading text-center mb-5">
                    <h2>Hosting Platform Features</h2>
                    <p class="lead">These features come standard in all of our hosting plans. Dynamically extend
                        imperatives through open-source quickly niche markets.</p>
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

<!--testimonial and review section start-->
<section class="client-review-section ptb-100 gray-light-bg">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 col-lg-8">
                <div class="section-heading text-center mb-5">
                    <h2>What Our Customers Say About Us?</h2>
                    <p class="lead">Authoritatively reinvent client-centric e-markets via fully tested process. Objectively restore strategic initiatives through fully researched.</p>
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
                        <p>Objectively envisioneer magnetic manufactured products and dynamic models. Progressively maximize 2.0 relationships whereas process-centric.</p>
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
                        <p>Objectively envisioneer magnetic manufactured products and dynamic models maximize 2.0 relationships whereas methodologies.</p>
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
                        <p>Objectively envisioneer magnetic manufactured products and dynamic models. Progressively maximize 2.0 relationships whereas process-centric.</p>
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
        <div class="col-md-6 col-lg-6">
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

  <!--testimonial and review section start-->
  <section class="client-review-section ptb-100 gray-light-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-8">
          <div class="section-heading text-center mb-5">
            <h2>What Our Customers Say About Us?</h2>
            <p class="lead">
              Authoritatively reinvent client-centric e-markets via fully tested process.
              Objectively restore strategic initiatives through fully researched.
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
              <p>
                Objectively envisioneer magnetic manufactured products and dynamic models
                maximize 2.0 relationships whereas methodologies.
              </p>
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

.da-img{
  margin-top: 100px !important;
  height: 500px !important;
}
.titl{
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

.backgb{
  background-image: url("@/assets/img/k1.webp");
}
.backgm{
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

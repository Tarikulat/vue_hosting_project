<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
//Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//import required modules
import { Pagination, Navigation } from 'swiper/modules';
//element start
import { ref } from 'vue'

const value = ref(0)

//element end

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
      <section class="hero-equal-height pt-165 backvp pb-100 gradient-overlay">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-7 col-lg-7">
                    <div class="hero-content-wrap text-white text-center position-relative z-index">
                        <h1 class="text-white vp-t">Managed Your VPS Servers</h1>
                        <p class="lead sub-t">Our High-Performance VPS is a powerful virtual server that offers lightning-fast speed,
                             reliability, and scalability. It's perfect for hosting resource-intensive websites, 
                             running complex applications, and handling data-heavy tasks with minimal downtime.
                              Ideal for businesses and developers who demand top-tier performance.</p>
                    </div>
                </div>

                <div class="col-md-5 col-lg-5">
                        <div>
                            <label><img src="@/assets/img/vp1.png" class="body-landing ser-img" alt="ser"></label>
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
                        <h2>VPS Hosting Pricing Plane</h2>
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
                                <th colspan="2">Vps Server Price</th>
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
                                        <span class="rate">৳3,190<span>/month</span></span><br>
                                        <span>VPS Standard</span>
                                        <span class="pricing-onsale">On sale - <span class="badge color-3 color-3-bg">Save 30%</span></span>
                                    </p>
                                </td>
                                <td>
                                    <a href="https://account.hostservice.com.bd/cart.php?a=confproduct&i=1" class="btn primary-solid-btn">Order Now</a>
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
                                        <span class="rate">৳5,290<span>/month</span></span><br>
                                        <span>VPS Silver</span>
                                        <span class="pricing-onsale">On sale - <span class="badge color-1 color-1-bg">Save 35%</span></span>
                                    </p>
                                </td>
                                <td>
                                    <a href="https://account.hostservice.com.bd/cart.php?a=confproduct&i=2" class="btn primary-solid-btn">Order Now</a>
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
                                        <span class="rate">৳9,390<span>/month</span></span><br>
                                        <span>VPS Gold</span>
                                        <span class="pricing-onsale">On sale - <span class="badge color-3 color-3-bg">Save 20%</span></span>
                                    </p>
                                </td>
                                <td>
                                    <a href="https://account.hostservice.com.bd/index.php?rp=/store/vps-server/vps-gold" class="btn primary-solid-btn">Order Now</a>
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
                                <img src="@/assets/img/footer-last.webp" alt="amex" width="300px" />
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

    <!--call to action new section start-->
    <section class="call-to-action backvps ptb-100 gradient-overlay">
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
    <!-- faq home pages -->

        <section>
            <div class="container">
            <div id="faq" class="ptb-100 ">
               <div class="container">
                   <div class="row">
                       <div class="col-md-9 col-lg-8">
                           <div class="section-heading mb-5">
                               <h2>Frequently Asked Queries</h2>
                               <p>We understand that hosting stuff can seem complicated. 
                               So please, ask us anything! We're happy to explain and help you on your 
                               journey to getting online.<a href="#contact" class="page-scroll">Contact us</a></p>
                           </div>
                       </div>
                   </div>
                   <div class="row">
                       <div class="col-md-12 col-lg-12">
                           <div id="accordion-one" class="accordion accordion-faq">
                               <div class="card mb-0">
                                   <a class="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                                       <h6 class="mb-0 d-inline-block">What exactly is web hosting? 
                                       </h6>
                                   </a>
                                   <div id="collapseOne" class="collapse" data-parent="#accordion-one">
                                       <div class="card-body">
                                           <p>Web hosting provides the storage, servers, and technology to publish 
                                           your site on the internet so others can access it 24/7. We take care of
                                            all technical issues, so you can focus on your site and business.
                                           </p>
                                       </div>
                                   </div>
                               </div>
                               <div class="card mb-0">
                                   <a class="card-header collapsed" data-toggle="collapse" href="#collapseTwo">
                                       <h6 class="mb-0 d-inline-block">What types of hosting plans do we offer?</h6>
                                   </a>
                                   <div id="collapseTwo" class="collapse" data-parent="#accordion-one">
                                       <div class="card-body">
                                           <p>We offer shared hosting for new sites, cloud hosting for rapidly growing sites, 
                                           and dedicated servers for large businesses. Each scales up in resources and control.
                                            Our team can suggest the ideal plan type for your needs. 
                                           </p>
                                       </div>
                                   </div>
                               </div>
                               <div class="card mb-0">
                                   <a class="card-header collapsed" data-toggle="collapse" href="#collapseThree">
                                       <h6 class="mb-0 d-inline-block">How can you get a domain from us?
                                       </h6>
                                   </a>
                                   <div id="collapseThree" class="collapse" data-parent="#accordion-one">
                                       <div class="card-body">
                                           <p>Purchasing a domain name is easy and affordable. You can buy domains directly
                                            from us when signing up for web hosting. We help you find available domain names 
                                            that strengthen your brand.
                                           </p>
                                       </div>
                                   </div>
                               </div>
                               <div class="card mb-0">
                                   <a class="card-header collapsed" data-toggle="collapse" href="#collapseFour">
                                       <h6 class="mb-0 d-inline-block">How do we optimize hosting for WordPress sites?
                                       </h6>
                                   </a>
                                   <div id="collapseFour" class="collapse" data-parent="#accordion-one">
                                       <div class="card-body">
                                           <p>We optimize hosting for WordPress sites with automatic installs, custom plugins, and built-in scaling. 
                                           So you get a secure, high-performance WordPress site with ease. 
                                           </p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div> </div>
       </section>

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


  
.backvp{
    background-image: url("@/assets/img/k1.webp");
  }
  .backvps{
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
<script setup>
import { Service, Testimonial } from '@/views/common'

</script>

<template>
     <!--hero section start home main page-->
        <section class="hero-equal-height section-xl section-header background-video-overly text-white flex-column d-flex justify-content-center">
            <video class="fit-cover w-100 h-100 position-absolute z--1" autoplay muted loop id="myVideo">
                <source src="https://hostlar.themetags.com/server-room.mp4" type="video/mp4">
            </video>
            <div class="container">
                <div class="row align-items-center cho-p justify-content-center">
                    <div class="col-lg-6 col-12">
                        <div class="hero-content-left text-center">
                            <h1 class="text-white testing">Build Your Online Home with Host Service</h1>
                            <p class="lead">Host Service's hosting provides the performance to power
                                 the website you wish for, and our builder makes it simple to develop.</p>
                            <form  class="domain-search-form mt-3  mx-auto">
                                <a href="https://account.hostservice.com.bd/cart.php?a=add&domain=register">
                                <div class="input-group">
                                    <input type="text" name="domain" id="domain" class="form-control" placeholder="example.com" />
                                    <div class="input-group-append">
                                        <button class="btn search-btn btn-hover d-flex align-items-center" type="submit">
                                            <span class="ti-search mr-2"></span> Search
                                        </button>
                                    </div>
                                </div> </a>
                            </form>
                            <div class="domain-list-wrap res mt-4">
                                <ul class="list-inline domain-search-list text-white">
                                    <li class="list-inline-item"><a href="#"><img src="@/assets/img/lg1.png" alt="com" width="75" class="img-fluid" /> <span>৳ 1,250</span></a></li>
                                    <li class="list-inline-item"><a href="#"><img src="@/assets/img/lg2.png" alt="com" width="75" class="img-fluid" /> <span>৳ 1,550</span></a></li>
                                    <li class="list-inline-item"><a href="#"><img src="@/assets/img/lg3.png" alt="com" width="75" class="img-fluid" /> <span>৳ 1,499</span></a></li>
                                    <li class="list-inline-item"><a href="#"><img src="@/assets/img/lg5.png" alt="com" width="75" class="img-fluid" /> <span>৳8,99</span></a></li>
                                    <li class="list-inline-item"><a href="#"><img src="@/assets/img/lg4.png" alt="com" width="75" class="img-fluid" /> <span>৳6,99</span></a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>

                      <div class="col-lg-5 col-12">
                        <div class="animation-image-wrap">
                            <img src="@/assets/img/d.webp" alt="wp hosting" class="img-fluid down-img" />
                            <img src="@/assets/img/an1.png" alt="wp hosting" class="animation-icon-img animation-icon-1 down-icon" />
                            <img src="@/assets/img/an2.png" alt="wp hosting" class="animation-icon-img animation-icon-2 down-icon-u" />
                            <img src="@/assets/img/an3.png" alt="wp hosting" class="animation-icon-img animation-icon-3 down-icon" />
                            <img src="@/assets/img/an4.png" alt="wp hosting" class="animation-icon-img animation-icon-4 down-icon-u" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--hero section with video backgroun page end-->
        
        <!--domain name block start-->
        <div class="domain-name-block pt-100 mt--165">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <ul class="list-inline cart-respons domain-list">
                            <li class="list-inline-item white-bg custom-shadow">
                                <a href="#">
                                    <div class="single-domain">
                                        <img src="@/assets/img/s5.png" alt="domain" class="img-fluid" />
                                        <div class="domain-price">
                                            <h6 class="sell-price">৳ 1,250 <span
                                                    class="badge badge-danger text-uppercase">Sell</span></h6>
                                            <span class="old-price">৳1,350</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="list-inline-item white-bg custom-shadow">
                                <a href="#">
                                    <div class="single-domain">
                                        <img src="@/assets/img/s2.png" alt="domain" class="img-fluid" />
                                        <div class="domain-price">
                                            <h6 class="sell-price">৳ 1,499 <span
                                                    class="badge badge-danger text-uppercase">Sell</span></h6>
                                            <span class="old-price">৳ 1,599</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="list-inline-item white-bg custom-shadow">
                                <a href="#">
                                    <div class="single-domain">
                                        <img src="@/assets/img/biz.png" alt="domain" class="img-fluid" />
                                        <div class="domain-price">
                                            <h6 class="sell-price">৳ 1,499 <span
                                                    class="badge badge-danger text-uppercase">Sell</span></h6>
                                            <span class="old-price">৳1,599</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="list-inline-item white-bg custom-shadow">
                                <a href="#">
                                    <div class="single-domain">
                                        <img src="@/assets/img/xyz.png" alt="domain" class="img-fluid" />
                                        <div class="domain-price">
                                            <h6 class="sell-price">৳ 3,50 <span
                                                    class="badge badge-danger text-uppercase">Sell</span></h6>
                                            <span class="old-price">৳4,50</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="list-inline-item white-bg custom-shadow">
                                <a href="#">
                                    <div class="single-domain">
                                        <img src="@/assets/img/info1.png" alt="domain" class="img-fluid" />
                                        <div class="domain-price">
                                            <h6 class="sell-price">৳ 7,99 <span
                                                    class="badge badge-danger text-uppercase">Sell</span></h6>
                                            <span class="old-price">৳8,99</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="list-inline-item white-bg custom-shadow">
                                <a href="#">
                                    <div class="single-domain">
                                        <img src="@/assets/img/s3.png" alt="domain" class="img-fluid" />
                                        <div class="domain-price">
                                            <h6 class="sell-price">৳ 1,550<span
                                                    class="badge badge-danger text-uppercase">Sell</span></h6>
                                            <span class="old-price">৳1,650</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!--domain name block end-->

         <PromoSection/>

         <Service/>

         <Testimonial/>

</template>




<style>

@media (min-width: 700px) and (max-width: 2560px) {
    .res {

      display: none;
    }
  }

</style>
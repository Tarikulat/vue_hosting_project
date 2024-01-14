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
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-6 col-12">
                        <div class="hero-content-left text-center">
                            <h1 class="text-white testing">Choose Best Domain Name and Create Your Website</h1>
                            <p class="lead">Up to 50% Off domain and hosting, Starting from $2.99/month, free SSL certificate, 24/7/365 support, money back guarantee.</p>
                            <form action="domain-search-result.php" class="domain-search-form mt-3  mx-auto">
                                <div class="input-group">
                                    <input type="text" name="domain" id="domain" class="form-control" placeholder="example.com" />
                                    <div class="input-group-append">
                                        <button class="btn search-btn btn-hover d-flex align-items-center" type="submit">
                                            <span class="ti-search mr-2"></span> Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div class="domain-list-wrap mt-4">
                                <ul class="list-inline domain-search-list text-white">
                                    <li class="list-inline-item"><a href="#"><img src="@/assets/img/lg1.png" alt="com" width="75" class="img-fluid" /> <span>$8.99</span></a></li>
                                    <li class="list-inline-item"><a href="#"><img src="@/assets/img/lg2.png" alt="com" width="75" class="img-fluid" /> <span>$4.99</span></a></li>
                                    <li class="list-inline-item"><a href="#"><img src="@/assets/img/lg3.png" alt="com" width="75" class="img-fluid" /> <span>$2.99</span></a></li>
                                    <li class="list-inline-item"><a href="#"><img src="@/assets/img/lg4.png" alt="com" width="75" class="img-fluid" /> <span>$0.99</span></a></li>
                                    <li class="list-inline-item"><a href="#"><img src="@/assets/img/lg5.png" alt="com" width="75" class="img-fluid" /> <span>$0.99</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                      <div class="col-lg-5 col-12">
                        <div class="animation-image-wrap">
                            <img src="@/assets/img/servers.svg" alt="wp hosting" class="img-fluid" />
                            <img src="@/assets/img/animated-icon-1.png" alt="wp hosting" class="animation-icon-img animation-icon-1" />
                            <img src="@/assets/img/animated-icon-2.png" alt="wp hosting" class="animation-icon-img animation-icon-2" />
                            <img src="@/assets/img/animated-icon-3.png" alt="wp hosting" class="animation-icon-img animation-icon-3" />
                            <img src="@/assets/img/animated-icon-4.png" alt="wp hosting" class="animation-icon-img animation-icon-4" />
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
                        <ul class="list-inline domain-list">
                            <li class="list-inline-item white-bg custom-shadow">
                                <a href="#">
                                    <div class="single-domain">
                                        <img src="@/assets/img/com.png" alt="domain" class="img-fluid" />
                                        <div class="domain-price">
                                            <h6 class="sell-price">$2.56 <span
                                                    class="badge badge-danger text-uppercase">Sell</span></h6>
                                            <span class="old-price">$29.95</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="list-inline-item white-bg custom-shadow">
                                <a href="#">
                                    <div class="single-domain">
                                        <img src="@/assets/img/net.png" alt="domain" class="img-fluid" />
                                        <div class="domain-price">
                                            <h6 class="sell-price">$5.56 <span
                                                    class="badge badge-danger text-uppercase">Sell</span></h6>
                                            <span class="old-price">$49.99</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="list-inline-item white-bg custom-shadow">
                                <a href="#">
                                    <div class="single-domain">
                                        <img src="@/assets/img/club.png" alt="domain" class="img-fluid" />
                                        <div class="domain-price">
                                            <h6 class="sell-price">$1.56 <span
                                                    class="badge badge-danger text-uppercase">Sell</span></h6>
                                            <span class="old-price">$19.00</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="list-inline-item white-bg custom-shadow">
                                <a href="#">
                                    <div class="single-domain">
                                        <img src="@/assets/img/org.png" alt="domain" class="img-fluid" />
                                        <div class="domain-price">
                                            <h6 class="sell-price">$6.99 <span
                                                    class="badge badge-danger text-uppercase">Sell</span></h6>
                                            <span class="old-price">$59.95</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="list-inline-item white-bg custom-shadow">
                                <a href="#">
                                    <div class="single-domain">
                                        <img src="@/assets/img/store.png" alt="domain" class="img-fluid" />
                                        <div class="domain-price">
                                            <h6 class="sell-price">$0.99 <span
                                                    class="badge badge-danger text-uppercase">Sell</span></h6>
                                            <span class="old-price">$4.99</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="list-inline-item white-bg custom-shadow">
                                <a href="#">
                                    <div class="single-domain">
                                        <img src="@/assets/img/online.png" alt="domain" class="img-fluid" />
                                        <div class="domain-price">
                                            <h6 class="sell-price">$2.56 <span
                                                    class="badge badge-danger text-uppercase">Sell</span></h6>
                                            <span class="old-price">$29.95</span>
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

    <Pricing/>

    <Faq/>

    <Testimonial/>
</template>

<style>


</style>
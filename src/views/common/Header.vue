
<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const isOpenModal = () =>{
    isOpen.value =  !isOpen.value
}
</script>

<template>
    <div>
        <header>
        <div id="logoAndNav" class="main-header-menu-wrap white-bg border-bottom">
            <div class="container">
                <nav class="js-mega-menu navbar navbar-expand-md header-nav">
                    <!--logo start-->
                    <a class="navbar-brand" href="index.html"><img src="@/assets/img/logo_host.png" width="180" alt="logo" class="img-fluid" /></a>
                    <!--logo end-->

                    <!--responsive toggle button start-->
                    <button type="button" class="navbar-toggler btn" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                        <span id="hamburgerTrigger">
                          <span class="fas fa-bars"></span>
                        </span>
                    </button>
                    <!--responsive toggle button end-->

                    <!--main menu start-->
                    <div id="navBar" class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto main-navbar-nav">
                            <!--home start-->
                            <li class="nav-item hs-has-mega-menu custom-nav-item" data-max-width="250px" data-position="right">
                                <router-link :to="{name:'home'}" id="aboutMegaMenu" class="nav-link custom-nav-link " aria-haspopup="true" aria-expanded="false">Home</router-link>
                            </li>
                            <!--home end-->
                            <!--pages start-->
                            <li class="nav-item hs-has-sub-menu custom-nav-item">
                                <a id="pagesMegaMenu" class="nav-link custom-nav-link main-link-toggle" href="javascript:void(0);" aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">Domain</a>
                                
                                <!-- Pages - Submenu -->
                                <ul id="pagesSubMenu" class="hs-sub-menu main-sub-menu" aria-labelledby="pagesMegaMenu" style="min-width: 260px;">
                                    <div class="title-with-icon-item">
                                                <router-link class="title-with-icon-link" :to="{ name: 'domainRegister' }">
                                                    <div class="media">
                                                        <div class="menu-item-icon"><i class="fab fa-artstation"></i></div>
                                                        <div class="media-body">
                                                            <span class="u-header__promo-title">Domain Register</span>
                                                        </div>
                                                    </div>
                                                </router-link>
                                    </div>

                                     <div class="title-with-icon-item">
                                                <a class="title-with-icon-link" href="">
                                                    <div class="media">
                                                        <div class="menu-item-icon"><i class="fas fa-arrows-alt"></i></div>
                                                        <div class="media-body">
                                                            <span class="u-header__promo-title">Domain Transfer</span>
                                                        </div>
                                                    </div>
                                                </a>
                                     </div>
                                </ul>
                                <!-- End Pages - Submenu -->
                            </li>
                            <!--pages end-->

                            <!--hosting start-->
                            <li class="nav-item hs-has-mega-menu custom-nav-item" data-max-width="700px" data-position="right">
                                <a id="hostingMegaMenu" class="nav-link custom-nav-link main-link-toggle" href="JavaScript:Void(0);" aria-haspopup="true" aria-expanded="false">Hosting</a>

                                <!-- Demos - Mega Menu -->
                                <div class="hs-mega-menu w-65 main-sub-menu" aria-labelledby="hostingMegaMenu">
                                    <div class="row no-gutters">
                                        <div class="col-md-6">
                                            <!--menu title with subtitle and icon item start-->
                                            <div class="title-with-icon-item">
                                                <a class="title-with-icon-link" href="shared-hosting.html">
                                                    <div class="media">
                                                        <div class="menu-item-icon"><i class="fas fa-server"></i></div>
                                                        <div class="media-body">
                                                            <span class="u-header__promo-title">Landing Page Hosting</span>
                                                            <small class="u-header__promo-text">Innovate reliable quality
                                                                Starting at <strong>$2.99</strong></small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <!--menu title with subtitle and icon item end-->
                                            <!--menu title with subtitle and icon item start-->
                                            <div class="title-with-icon-item">
                                                <a class="title-with-icon-link" href="vps-hosting.html">
                                                    <div class="media">
                                                        <div class="menu-item-icon"><i class="fas fa-box"></i></div>
                                                        <div class="media-body">
                                                            <span class="u-header__promo-title">Website Shared Hosting</span>
                                                            <small class="u-header__promo-text">Pefficiently maintain
                                                                Starting at <strong>$11.99</strong></small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <!--menu title with subtitle and icon item end-->
                                            <!--menu title with subtitle and icon item start-->
                                            <div class="title-with-icon-item">
                                                <a class="title-with-icon-link" href="dedicated-server-hosting.html">
                                                    <div class="media">
                                                        <div class="menu-item-icon"><i class="fas fa-tachometer-alt"></i></div>
                                                        <div class="media-body">
                                                            <span class="u-header__promo-title">E-commerce Hosting<span
                                                                    class="badge badge-success ml-1">Popular</span></span>
                                                            <small class="u-header__promo-text">Quickly build Starting at
                                                                <strong>$150.99/mo</strong></small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="title-with-icon-item">
                                                <a class="title-with-icon-link" href="shared-wp-hosting.html">
                                                    <div class="media">
                                                        <div class="menu-item-icon"><i class="fab fa-asymmetrik"></i></div>
                                                        <div class="media-body">
                                                            <span class="u-header__promo-title">Reseller Hosting</span>
                                                            <small class="u-header__promo-text">Conveniently Starting at
                                                                <strong>$9.99/mo</strong></small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <!-- End Demos - Mega Menu -->
                            </li>
                            <!--hosting end-->

                            <li class="nav-item hs-has-sub-menu custom-nav-item">
                                <a id="pagesMegaMenu" class="nav-link custom-nav-link main-link-toggle" href="javascript:void(0);" aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">Server</a>                            
                                <!-- Pages - Submenu -->
                                <ul id="pagesSubMenu" class="hs-sub-menu main-sub-menu" aria-labelledby="pagesMegaMenu" style="min-width: 330px;">
                                    <div class="title-with-icon-item">
                                                <a class="title-with-icon-link" href="">
                                                    <div class="media">
                                                        <img class="menu-titile-icon" src="@/assets/img/chat.svg" alt="SVG">
                                                        <div class="media-body">
                                                            <span class="u-header__promo-title">VPS Server</span>
                                                            <small class="u-header__promo-text">Support team quickly response </small>
                                                        </div>
                                                    </div>
                                                </a>
                                     </div>

                                     <div class="title-with-icon-item">
                                                <a class="title-with-icon-link" href="">
                                                    <div class="media">
                                                        <img class="menu-titile-icon" src="@/assets/img/data-services.svg" alt="SVG">
                                                        <div class="media-body">
                                                            <span class="u-header__promo-title">Dedicated Server</span>
                                                            <small class="u-header__promo-text">24 Data center globally</small>
                                                        </div>
                                                    </div>
                                                </a>
                                     </div>
                                </ul>
                                <!-- End Pages - Submenu -->
                            </li>
                            <!--pages end-->
                           
                            <!--about start-->
                            <li class="nav-item hs-has-mega-menu custom-nav-item" data-max-width="250px" data-position="right">
                                <a id="aboutMegaMenu" class="nav-link custom-nav-link " href="JavaScript:Void(0);" aria-haspopup="true" aria-expanded="false">About</a>
                            </li>

                            <li class="nav-item hs-has-mega-menu custom-nav-item" data-max-width="250px" data-position="right">
                                <a id="aboutMegaMenu" class="nav-link custom-nav-link " href="JavaScript:Void(0);" aria-haspopup="true" aria-expanded="false">Contact</a>
                            </li>

                            <li class="nav-item hs-has-mega-menu custom-nav-item" data-max-width="250px" data-position="right">
                                <!-- <router-link :to="{name:'nav-search'}" id="aboutMegaMenu" class="nav-link custom-nav-link " aria-haspopup="true" aria-expanded="false"><i class="fa fa-search"></i> Domain Search</router-link> -->
                                <a href="javascript::void(0)" id="aboutMegaMenu" class="nav-link custom-nav-link " @click.prevent="isOpenModal"><i class="fa fa-search"></i> Domain Search</a>
                                
                            </li>
                        </ul>
                    </div>
                    <!--main menu end-->  
                </nav>
            </div>
        </div>
        <div id="myModal" class="searchDomainModal" :class="{ 'is-open': isOpen == true, 'is-close': isOpen == false }"  >
            <div class="d-flex justify-content-center align-items-center">
                <div class="modal-content" style="width:1050px; margin-top:100px;">
                    <span class="close" @click.prevent="isOpenModal"  id="closeModalBtn" >&times;</span> 
                    <div class="domain-search-cta-type ptb-100" style="background: url('@/assets/img/map-bg.png')no-repeat center center">
                        <div class="container">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-md-6 col-lg-6">
                                    <div class="domain-search-content text-center mb-4">
                                        <h2>Search Unique Domain!</h2>
                                        <p>Get your perfect domain name starting from <strong>9.99$ </strong> for the first year and
                                            free domain privacy included build.</p>
                                    </div>
                                    <div class="domain-search-wrap text-center">
                                        <form action="domain-search-result.php" class="domain-search-form">
                                            <div class="input-group shadow">
                                                <input type="text" name="domain" id="domain" class="form-control" placeholder="example.com" />
                                                <div class="input-group-append">
                                                    <button class="btn search-btn btn-hover d-flex align-items-center" type="submit">
                                                        <span class="ti-search mr-2"></span> Search
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="domain-list-wrap mt-4">
                                            <ul class="list-inline domain-search-list">
                                                <li class="list-inline-item"><a href="#"><img src="@/assets/img/lg1.png" alt="com" width="70" class="img-fluid" /> <span>$8.99</span></a>
                                                </li>
                                                <li class="list-inline-item"><a href="#"><img src="@/assets/img/lg2.png" alt="com" width="70" class="img-fluid" /> <span>$0.99</span></a>
                                                </li>
                                                <li class="list-inline-item"><a href="#"><img src="@/assets/img/lg3.png" alt="com" width="70" class="img-fluid" /> <span>$4.99</span></a>
                                                </li>
                                                <li class="list-inline-item"><a href="#"><img src="@/assets/img/lg4.png" alt="com" width="70" class="img-fluid" /> <span>$2.99</span></a>
                                                </li>
                                                <li class="list-inline-item"><a href="#"><img src="@/assets/img/lg5.png" alt="com" width="70" class="img-fluid" /> <span>$0.99</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <!--main header menu end-->
    </header>
    </div>
</template>

<style>
.searchDomainModal{
    top: 0;
    left: 0;
    margin: 0;
    clear: both;
    width: 100%;
    z-index:999;
    height: 100vh;
    display: flex;
    position: fixed;
    padding-bottom: 40px;
    box-sizing: border-box;
    justify-content: center;
    background-color: #691414c3; 
    font-family: Arial, sans-serif;
   
}

.close {
    opacity: .5;
    float: right;
    color: #000;
    line-height: 1;
    font-weight: 700;
    margin: 0px 13px;
    font-size: 3.5rem;
    text-shadow: 0 1px 0 #fff;
}

.is-open{
    display:block;
}
.is-close{
    display:none;
}

</style>
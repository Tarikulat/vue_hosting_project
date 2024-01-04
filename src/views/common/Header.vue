
<script setup>
import { ref } from 'vue';

const isOpen = ref();
const isOpenModal = () =>{
    isOpen.value = !isOpen.value;
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
                                                <a class="title-with-icon-link" href="">
                                                    <div class="media">
                                                        <div class="menu-item-icon"><i class="fab fa-artstation"></i></div>
                                                        <div class="media-body">
                                                            <span class="u-header__promo-title">Domain Register</span>
                                                        </div>
                                                    </div>
                                                </a>
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
                            <li class="nav-item hs-has-mega-menu custom-nav-item" data-max-width="720px" data-position="right">
                                <a id="hostingMegaMenu" class="nav-link custom-nav-link main-link-toggle" href="JavaScript:Void(0);" aria-haspopup="true" aria-expanded="false">Hosting</a>

                                <!-- Demos - Mega Menu -->
                                <div class="hs-mega-menu w-100 main-sub-menu" aria-labelledby="hostingMegaMenu">
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

                            <!--support start-->
                            <li class="nav-item hs-has-mega-menu custom-nav-item" data-max-width="360px" data-position="right">
                                <a id="supportMegaMenu" class="nav-link custom-nav-link main-link-toggle" href="JavaScript:Void(0);" aria-haspopup="true" aria-expanded="false">Server</a>
                                <!--support submenu start-->
                                <div class="hs-mega-menu main-sub-menu" aria-labelledby="supportMegaMenu" style="min-width: 330px;">

                                    <!--menu title with subtitle and icon item start-->
                                    <div class="title-with-icon-item">
                                        <a class="title-with-icon-link" href="">
                                            <div class="media align-items-center">
                                                <img class="menu-titile-icon" src="@/assets/img/chat.svg" alt="SVG">
                                                <div class="media-body">
                                                    <span class="u-header__promo-title">VPS Server</span>
                                                    <small class="u-header__promo-text">Support team quickly response
                                                    </small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <!--menu title with subtitle and icon item end-->
                
                                    <!--menu title with subtitle and icon item start-->
                                    <div class="title-with-icon-item">
                                        <a class="title-with-icon-link" href="network.html">
                                            <div class="media align-items-center">
                                                <img class="menu-titile-icon" src="@/assets/img/data-services.svg" alt="SVG">
                                                <div class="media-body">
                                                    <span class="u-header__promo-title">Dedicated Server</span>
                                                    <small class="u-header__promo-text">24 Data center globally</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <!--menu title with subtitle and icon item end-->

                                </div>
                                <!--support submenu end-->
                            </li>
                            <!--support end-->

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
>
                        </ul>
                    </div>
                    <!--main menu end-->  
                </nav>
            </div>
        </div>
        <div id="myModal" class="searchDomainModal" :class="{'is-open' : isOpen}" @click.prevent="isOpenModal">
            <div class="d-flex justify-content-center align-items-center">
                <div class="modal-content" style="width:400px; margin-top:50px;">
                    <span class="close" id="closeModalBtn" @click.prevent="isOpenModal">&times;</span> 
                    <p>This is a modal! You can add your content here.</p>
                </div>
            </div>
        </div>
        <!--main header menu end-->
    </header>
    </div>
</template>

<style>
.searchDomainModal{

    font-family: Arial, sans-serif;
    position: fixed;
    width: 100%;
    top:0;
    left:0;
    height: 100vh;
    /* background-color: #691414c3; */
    z-index:999;
    display: none;
}

.is-open{
    display:block;

}

</style>
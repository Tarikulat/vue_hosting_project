<script></script>

<template>
  <section id="main-body">
    <div class="container">
      <div class="row">
        <div class="col-12 primary-content">
          <link
            rel="stylesheet"
            type="text/css"
            href="" />

          <div id="order-standard_cart">
            <div class="row">
              <div class="cart-sidebar">
                <div
                  menuitemname="Categories"
                  class="panel card card-sidebar mb-3 panel-sidebar" >
                  <div class="panel-heading card-header">
                    <h3 class="panel-title">
                      <i class="fas fa-shopping-cart"></i>&nbsp; Categories
                      <i class=" card-minimise panel-minimise pull-right float-right" ></i>
                    </h3>
                  </div>

                  <div class="list-group collapsable-card-body">
                    <a
                      menuitemname="Landing Page Hosting"
                      href=""
                      class="list-group-item list-group-item-action"
                      id="Secondary_Sidebar-Categories-Landing_Page_Hosting" >
                      Landing Page Hosting
                    </a>
                    <a
                      menuitemname="Website Shared Hosting"
                      href=""
                      class="list-group-item list-group-item-action"
                      id="Secondary_Sidebar-Categories-Website_Shared_Hosting" >
                      Website Shared Hosting
                    </a>
                    <a
                      menuitemname="VPS Server"
                      href=""
                      class="list-group-item list-group-item-action"
                      id="Secondary_Sidebar-Categories-VPS_Server" >
                      VPS Server
                    </a>
                    <a
                      menuitemname="Dedicated Server"
                      href=""
                      class="list-group-item list-group-item-action"
                      id="Secondary_Sidebar-Categories-Dedicated_Server" >
                      Dedicated Server
                    </a>
                    <a
                      menuitemname="Maintenance"
                      href=""
                      class="list-group-item list-group-item-action"
                      id="Secondary_Sidebar-Categories-Maintenance" >
                      Maintenance
                    </a>
                    <a
                      menuitemname="Ecommerce Hosting"
                      href=""
                      class="list-group-item list-group-item-action"
                      id="Secondary_Sidebar-Categories-Ecommerce_Hosting" >
                      Ecommerce Hosting
                    </a>
                  </div>
                </div>

                <div
                  menuitemname="Actions"
                  class="panel card card-sidebar mb-3 panel-sidebar"
                >
                  <div class="panel-heading card-header">
                    <h3 class="panel-title">
                      <i class="fas fa-plus"></i>&nbsp; Actions
                      <i
                        class=" card-minimise panel-minimise pull-right float-right"
                      ></i>
                    </h3>
                  </div>

                  <div class="list-group collapsable-card-body">
                    <a
                      menuitemname="Domain Registration"
                      href=""
                      class="list-group-item list-group-item-action"
                      id="Secondary_Sidebar-Actions-Domain_Registration" >
                      <i class="fas fa-globe fa-fw"></i>&nbsp; Register a New Domain
                    </a>
                    <a
                      menuitemname="Domain Transfer"
                      href=""
                      class="list-group-item list-group-item-action active"
                      id="Secondary_Sidebar-Actions-Domain_Transfer" >
                      <i class="fas fa-share fa-fw"></i>&nbsp; Transfer in a Domain
                    </a>
                    <a
                      menuitemname="View Cart"
                      href=""
                      class="list-group-item list-group-item-action"
                      id="Secondary_Sidebar-Actions-View_Cart" >
                      <i class="fas fa-shopping-cart fa-fw"></i>&nbsp; View Cart
                    </a>
                  </div>
                </div>
              </div>
              <div class="cart-body">
                <div class="header-lined">
                  <h1 class="font-size-36">Transfer Domain</h1>
                </div>
                <div class="sidebar-collapsed">
                  <div class="panel card panel-default">
                    <div class="m-0 panel-heading card-header">
                      <h3 class="panel-title">
                        <i class="fas fa-shopping-cart"></i>&nbsp; Categories
                      </h3>
                    </div>

                    <div class="panel-body card-body">
                      <form role="form">
                        <select
                          class="form-control custom-select"
                          onchange="selectChangeNavigate(this)" >
                          <option
                            menuitemname="Landing Page Hosting"
                            value=""
                            class="list-group-item" >
                            Landing Page Hosting
                          </option>
                          <option
                            menuitemname="Website Shared Hosting"
                            value=""
                            class="list-group-item" >
                            Website Shared Hosting
                          </option>
                          <option
                            menuitemname="VPS Server"
                            value=""
                            class="list-group-item"
                          >
                            VPS Server
                          </option>
                          <option
                            menuitemname="Dedicated Server"
                            value=""
                            class="list-group-item"
                          >
                            Dedicated Server
                          </option>
                          <option
                            menuitemname="Maintenance"
                            value=""
                            class="list-group-item"
                          >
                            Maintenance
                          </option>
                          <option
                            menuitemname="Ecommerce Hosting"
                            value=""
                            class="list-group-item"
                          >
                            Ecommerce Hosting
                          </option>
                          <option value="" class="list-group-item" selected="">
                            - Choose Another Category -
                          </option>
                        </select>
                      </form>
                    </div>
                  </div>
                  <div class="panel card panel-default">
                    <div class="m-0 panel-heading card-header">
                      <h3 class="panel-title">
                        <i class="fas fa-plus"></i>&nbsp; Actions
                      </h3>
                    </div>

                    <div class="panel-body card-body">
                      <form role="form">
                        <select
                          class="form-control custom-select"
                          onchange="selectChangeNavigate(this)"
                        >
                          <option
                            menuitemname="Domain Registration"
                            value=""
                            class="list-group-item"
                          >
                            Register a New Domain
                          </option>
                          <option
                            menuitemname="Domain Transfer"
                            value=""
                            class="list-group-item"
                            selected="selected"
                          >
                            Transfer in a Domain
                          </option>
                          <option
                            menuitemname="View Cart"
                            value=""
                            class="list-group-item"
                          >
                            View Cart
                          </option>
                        </select>
                      </form>
                    </div>
                  </div>
                </div>
                
                <!-- <div class="text-center">
                  <h2 class="font-size-30">Transfer your domain to us</h2>
                  <p>Transfer now to extend your domain by 1 year!*</p>
                </div> -->
                
                <form method="post" action="" id="frmDomainTransfer">
                  <input
                    type="hidden"
                    name="token"
                    value="c0c6cb39f14865c4def0cf50872e3a5776e4ad1d"
                  />
                  <input type="hidden" name="a" value="addDomainTransfer" />

                  <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 offset-sm-2">
                      <div class="panel card panel-default">
                        <div class="panel-heading card-header pb-0">
                          <h3 class="panel-title card-title font-size-24 mb-2">
                            Single domain transfer
                          </h3>
                        </div>
                        <div class="panel-body card-body">
                          <div class="form-group">
                            <label for="inputTransferDomain">Domain Name</label>
                            <input
                              type="text"
                              class="form-control"
                              name="domain"
                              id="inputTransferDomain"
                              value=""
                              placeholder="example.com"
                              data-toggle="tooltip"
                              data-placement="left"
                              data-trigger="manual"
                              title=""
                              data-original-title="Please enter your domain"
                            />
                          </div>
                          <div class="form-group">
                            <label for="inputAuthCode" style="width: 100%">
                              Authorization Code
                              <a
                                data-toggle="tooltip"
                                data-placement="left"
                                title="To initiate a transfer you will need to obtain the authorization code from your current registrar. These can often be referred to as either the epp code or auth code. They act as a password and are unique to the domain name."
                                class="pull-right float-right"
                                ><i class="fas fa-question-circle"></i> Help</a
                              >
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              name="epp"
                              id="inputAuthCode"
                              placeholder="Epp Code / Auth Code"
                              data-toggle="tooltip"
                              data-placement="left"
                              data-trigger="manual"
                              title=""
                              data-original-title="Required"
                            />
                          </div>
                          <div
                            id="transferUnavailable"
                            class="alert alert-warning slim-alert text-center w-hidden"
                          ></div>
                        </div>

                        <div class="panel-footer card-footer text-right">
                          <button
                            type="submit"
                            id="btnTransferDomain"
                            class="btn btn-primary btn-transfer"
                          >
                            <span class="loader w-hidden" id="addTransferLoader">
                              <i class=""></i>
                            </span>
                            <span id="addToCart">Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <p class="text-center small">
                  * Excludes certain TLDs and recently renewed domains
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </section>

  <section class="call-to-action ptb-100 backg gradient-overly-right" >
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 col-lg-6">
                <div class="call-to-action-content text-center text-white">
                    <h2 class="text-white">Buy new valuable domain with low cost.</h2>
                    <p>No problem! It's quick and painless to transfer your hosting, domain registrations, or both
                        to HostLar.</p>
                </div>
            </div>
        </div>
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
</section>
<!--domain name block end-->
<!--start and transfer section start-->
<section class="start-transfer ptb-100 gray-light-bg">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 col-lg-8">
                <div class="section-heading text-center mb-5">
                    <h2>Easy to Start and Hassle free Transfer</h2>
                    <p class="lead">Get Immediate Activation or Express Transfer service free of charge.
                        Enthusiastically enhance testing procedures and cross.</p>
                </div>
            </div>
        </div>
        <div class="row start-website-box">
            <div class="col-lg-6 col-12 pr-lg-0">
                <div class="left-box white-bg">
                    <div class="d-flex align-items-center mb-4">
                        <span class="ti-vector icon-sm text-white primary-bg p-2 rounded mr-3"></span>
                        <h5 class="mb-0">Start a New Website <span
                                class="badge color-1 color-1-bg">Easy to start</span></h5>
                    </div>
                    <ul>
                        <li>
                            <strong>One-click App Marketplace</strong>
                            <p>Over 450 Apps ready to be installed in seconds</p>
                        </li>
                        <li>
                            <strong>The best DIY solution</strong>
                            <p>20+ Frameworks and your favorite dev tools</p>
                        </li>
                        <li>
                            <strong>Step by Step Tutorials</strong>
                            <p>3000+ pages of tutorials to get you started</p>
                        </li>
                        <li>
                            <strong>Unlimited 24/7 Priority Support</strong>
                            <p>Always-free in-house technical support</p>
                        </li>
                    </ul>
                    <div class="btn-holder mt-4">
                        <a class="btn primary-solid-btn" href="#">Start now</a>
                    </div>
                    <p class="mt-3">
                        <small>Sign up today before <span class="text-blue" data-role="site-activation-timer"
                                                          data-type="new">04:00 PM</span> and get Immediate Account
                            Activation and Free Website Setup!
                        </small>
                    </p>
                </div>
            </div>
            <div class="col-lg-6 col-12 pl-lg-0">
                <div class="right-box primary-bg">
                    <div class="d-flex align-items-center mb-4">
                        <span class="ti-loop icon-sm color-primary white-bg p-2 rounded mr-3"></span>
                        <h5 class="mb-0 text-white">Express Transfer</h5>
                    </div>
                    <ul>
                        <li>
                            <strong>People-powered site transfer</strong>
                            <p>No messy automation - get it done by experts</p>
                        </li>
                        <li>
                            <strong>No downtime, Fast and Painless</strong>
                            <p>Express Transfer service included in all plans</p>
                        </li>
                        <li>
                            <strong>Free Domain Transfer</strong>
                            <p>Free one-year domain renewal after transfer</p>
                        </li>
                        <li>
                            <strong>Free months of hosting</strong>
                            <p>Up to six months unused time compensation</p>
                        </li>
                    </ul>
                    <div class="btn-holder mt-4">
                        <a class="btn solid-white-btn" href="#">Transfer Now</a>
                    </div>
                    <p class="mt-3">
                        <small>Sign up now and get your website transferred by <span class="text-yellow"
                             data-role="site-activation-timer"
                            data-type="transfer">04:57 PM</span>
                            today with free Express Transfer!
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

 <!--faq new style start-->
 <section class="ptb-100 ">
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
                    <p>Intrinsicly implement high standards in strategic theme areas via inexpensive solutions.
                        Assertively conceptualize prospective bandwidth whereas client-based imperatives.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="single-faq pt-4">
                    <h5>Is it possible to pay yearly?</h5>
                    <p>Assertively iterate user friendly innovation without open-source markets. Monotonectally extend
                        resource sucking manufactured products without high-payoff paradigms. Objectively customize
                        ubiquitous information before economically sound relationships. </p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="single-faq pt-4">
                    <h5>Do you offer discounts on multiple items?</h5>
                    <p>Dramatically target focused testing procedures after holistic ideas. Collaboratively maximize
                        high-payoff ROI and value-added products. Distinctively deliver cooperative collaboration and
                        idea-sharing whereas customized</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="single-faq pt-4">
                    <h5>Is VAT included in plan prices?</h5>
                    <p>Distinctively simplify high-quality initiatives for highly efficient applications. Monotonectally
                        repurpose integrated customer service after magnetic e-services. </p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="single-faq pt-4">
                    <h5>Will I pay more for some features?</h5>
                    <p>Enthusiastically pontificate resource-leveling supply chains whereas scalable markets.
                        Authoritatively streamline resource maximizing methods of empowerment</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="single-faq pt-4">
                    <h5>Why are there no limits on the number of messages?</h5>
                    <p>Assertively target turnkey ideas for market-driven portals. Appropriately e-enable world-class
                        intellectual capital whereas 2.0 mindshare.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<!--faq new style end--> 

</template>

<style>
.backg{
  background-image: url("@/assets/img/z2.webp");
}



#order-standard_cart .cart-body {
    float: right;
    width: 75%;
    position: relative;
    min-height: 1px;
    padding-right: 100px;
    padding-left: 100px;
    margin-top: 50px;  
    background-color: rgb(0 115 236 / 0%);
}


@media (max-width: 1440px) {
  .card-sidebar {
    margin: 16px 0px;
  }
  .card-sidebar {
    width: 900px;
    left: 50px;
    margin-left: 35px;
  }
}
@media (max-width: 1024px) {
  .card-sidebar {
    margin: 16px 0px;
    margin-left: 5px;
  }
  .card-sidebar {
    width: 700px;
    left: 75px;
    margin-left: 20px;
  }
}
@media (max-width: 768px) {
  .card-sidebar {
    margin: 16px 0px;
  }
  .card-sidebar {
    width: 570px;
    left: 50px;
    margin-left: 35px;
  }
}




@media (max-width: 655px) {
  .card-sidebar {
    margin: 16px 0px;
    margin-left: 5px;
  }
  .card-sidebar {
    width: 350px;
    left: 75px;
    margin-left: 20px;
  }
}

@media (max-width: 425px) {
  .card-sidebar {
    margin: 16px 0px;
  }
  .card-sidebar {
    width: 330px;
    left: 50px;
    margin-left: 35px;
  }
}

@media (max-width: 375px) {
  .card-sidebar {
    margin: 16px 0px;
  }
  .card-sidebar{
    width: 200px;
    left: 55px;
    margin-left: 20px;
  }
}

@media (max-width: 320px) {
  .card-sidebar{
    margin: 16px 0px;
  }
  .card-sidebar {
    width: 290px;
    left: 55px;
    margin-left: 20px;
  }
}




@media (max-width: 320px) {
  .sidebar-collapsed {
    margin: 16px 0px;
  }
  .sidebar-collapsed {
    width: 295px;
    left: 50px;
    margin-left: 5px;
  }
}



@media (max-width: 655px) {
  #order-standard_cart .cart-body {
    margin: 16px 0px;
  }
  #order-standard_cart .cart-body {
    width: 450px;
  }
}
@media (max-width: 425px) {
  #order-standard_cart .cart-body {
    margin: 16px 0px;
  }
  #order-standard_cart .cart-body {
    width: 350px;
  }
}

@media (max-width: 375px) {
  #order-standard_cart .cart-body {
    margin: 16px 0px;
  }
  #order-standard_cart .cart-body{
    width: 200px;
  }
}

@media (max-width: 320px) {
  #order-standard_cart .cart-body {
    margin: 16px 0px;
  }
  #order-standard_cart .cart-body {
    width: 350px;
  }
}








.panel{
    margin-top: 30px;
}
#order-standard_cart .sidebar-collapsed {
    margin-top: 20px;
    padding: 4px;
    border-radius: 4px;
}
.list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #f64f00;
    border-color: #f64f00;
}

</style>

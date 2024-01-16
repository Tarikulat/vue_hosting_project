<script>

</script>

<template>
 <!--hero section start-->
 <section class="hero-equal-height gradient-overly-bottom" style="background: url('assets/img/bg.png')no-repeat center center / cover">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 col-lg-7">
                <div class="hero-content-left text-white text-center">
                    <p>REGISTER</p>
                    <h1 class="text-white">Find your ideal Domain Name</h1>
                    <p class="lead">Secure your domain by registering your domain with us!</p>

                    <form action="domain-search-result.php" class="domain-search-form mt-3 w-75  mx-auto">
                        <div class="input-group">
                            <input type="text" name="domain" id="domain" class="form-control" placeholder="example.com">
                            <div class="input-group-append">
                                <button class="btn search-btn btn-hover d-flex align-items-center" type="submit">
                                    <span class="ti-search mr-2"></span> Search
                                </button>
                            </div>
                        </div>
                    </form>
                    <div class="domain-list-wrap mt-4">
                        <ul class="list-inline domain-search-list text-white">
                            <li class="list-inline-item"><a href="#"><img src="@/assets/img/s5.png" alt="com" width="70" class="img-fluid"> <span>$8.99</span></a></li>
                            <li class="list-inline-item"><a href="#"><img src="@/assets/img/s4.png" alt="com" width="70" class="img-fluid"> <span>$4.99</span></a></li>
                            <li class="list-inline-item"><a href="#"><img src="@/assets/img/s3.png" alt="com" width="70" class="img-fluid"> <span>$2.99</span></a></li>
                            <li class="list-inline-item"><a href="#"><img src="@/assets/img/s2.png" alt="com" width="70" class="img-fluid"> <span>$0.99</span></a></li>
                            <li class="list-inline-item"><a href="#"><img src="@/assets/img/s1.png" alt="com" width="70" class="img-fluid"> <span>$0.99</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="shape-bottom">
        <img src="@/assets/img/curve-shape-top.svg" alt="shape" class="bottom-shape img-fluid">
    </div>
</section>
<!--hero section end-->

<!--domain search result section start-->
<section class="domain-search-result-section gray-light-bg ptb-100">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-lg-3">
                <div class="domain-extension-filter-wrap p-4 white-bg rounded">
                    <div class="domain-filter-title">
                        <h5 class="mb-0">Filter Results <span class="ti-angle-down float-right"></span></h5>
                    </div>
                    <ul class="list-unstyled domain-filter-list mt-3">
                        <li class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="">Show All
                            </label>
                        </li>
                        <li class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="">.com
                            </label>
                        </li>
                        <li class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="">.net
                            </label>
                        </li>
                        <li class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="">.online
                            </label>
                        </li>
                        <li class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="">.org
                            </label>
                        </li>
                        <li class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="">.xyz
                            </label>
                        </li>
                        <li class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="">.store
                            </label>
                        </li>
                        <li class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="">.website
                            </label>
                        </li>
                        <li class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="">.biz
                            </label>
                        </li>
                        <button type="submit" class="btn btn-block outline-btn mt-3">Apply</button>
                    </ul>
                </div>
            </div>
            <div class="col-md-12 col-lg-9">
                <div class="content-with-sidebar">
                    <!--alert table start-->
                    <table class="table vps-hosting-pricing-table domain-search-result-table alert-table mb-5">
                        <tbody>
                            <tr class="vps-pricing-row border-accent-primary">
                                <td>Domain <span class="color-primary">example.com</span> is available!
                                    <br><small>Get this domain now </small>
                                </td>
                                <td>
                                    <p>
                                        <span class="rate">$3.95<span>/month</span></span>
                                        <span class="pricing-onsale">On sale - <span class="badge color-3 color-3-bg">Save 30%</span></span>
                                    </p>
                                </td>
                                <td>
                                    <a href="#" class="btn secondary-solid-btn">Add to Cart</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!--alert table end-->
                    <h4 class="text-center">More domain options</h4>
                    <table class="table vps-hosting-pricing-table domain-search-result-table">
                        <tbody>
                            <tr class="vps-pricing-row border-accent-primary">
                                <td data-value="Available">host service<span class="color-primary">.com</span></td>
                                <td data-value="Price">
                                    <p>
                                        <span class="rate">$3.95<span>/month</span></span>
                                        <span class="pricing-onsale">On sale - <span class="badge color-3 color-3-bg">Save 30%</span></span>
                                    </p>
                                </td>
                                <td>
                                    <a href="" class="btn primary-solid-btn">Add to Cart</a>
                                </td>
                            </tr>
                            <tr class="vps-pricing-row border-red-themes">
                                <td data-value="Available">host service<span class="color-primary">.net</span></td>
                                <td data-value="Price">
                                    <p>
                                        <span class="rate">$8.95<span>/month</span></span>
                                        <span class="pricing-onsale">On sale - <span class="badge color-1 color-1-bg">Save 50%</span></span>
                                    </p>
                                </td>
                                <td>
                                    <a href="" class="btn primary-solid-btn">Add to Cart</a>
                                </td>
                            </tr>
                            <tr class="vps-pricing-row border-orange-themes">
                                <td data-value="Available">host service<span class="color-primary">.org</span></td>
                                <td data-value="Price">
                                    <p>
                                        <span class="rate">$12.95<span>/month</span></span>
                                        <span class="pricing-onsale">On sale - <span class="badge color-3 color-3-bg">Save 10%</span></span>
                                    </p>
                                </td>
                                <td>
                                    <a href="" class="btn primary-solid-btn">Add to Cart</a>
                                </td>
                            </tr>
                            <tr class="vps-pricing-row border-yellow-themes">
                                <td data-value="Available">host service<span class="color-primary">.info</span></td>
                                <td data-value="Price">
                                    <p><span class="rate">$15.95<span>/month</span></span><span class="pricing-onsale">On sale - <span
                                        class="badge color-3 color-3-bg">Save 30%</span></span></p>
                                </td>
                                <td>
                                    <a href="" class="btn primary-solid-btn">Add to Cart</a>
                                </td>
                            </tr>
                            <tr class="vps-pricing-row border-blue-themes">
                                <td data-value="Available">host service<span class="color-primary">.store</span></td>
                                <td data-value="Price">
                                    <p><span class="rate">$23.95<span>/month</span></span><span class="pricing-onsale">On sale - <span
                                        class="badge color-5 color-5-bg">Save 40%</span></span></p>
                                </td>
                                <td>
                                    <a href="" class="btn primary-solid-btn">Add to Cart</a>
                                </td>
                            </tr>
                            <tr class="vps-pricing-row border-lime-themes">
                                <td data-value="Available">host service<span class="color-primary">.online</span></td>
                                <td data-value="Price">
                                    <p><span class="rate">$29.95<span>/month</span></span><span class="pricing-onsale">On sale - <span
                                        class="badge color-3 color-3-bg">Save 10%</span></span></p>
                                </td>
                                <td>
                                    <a href="" class="btn primary-solid-btn">Add to Cart</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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

<section class="contact-us-promo pt-100">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card single-promo-card single-promo-hover text-center">
                    <div class="card-body py-5">
                        <div class="pb-2">
                            <span class="ti-mobile icon-sm color-primary"></span>
                        </div>
                        <div>
                            <h5 class="mb-0">Call Us</h5>
                            <p class="text-muted mb-0">+123 456-78900</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card single-promo-card single-promo-hover text-center">
                    <div class="card-body py-5">
                        <div class="pb-2">
                            <span class="ti-location-pin icon-sm color-primary"></span>
                        </div>
                        <div>
                            <h5 class="mb-0">Visit Us</h5>
                            <p class="text-muted mb-0">New York, CA N310</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card single-promo-card single-promo-hover text-center">
                    <div class="card-body py-5">
                        <div class="pb-2">
                            <span class="ti-email icon-sm color-primary"></span>
                        </div>
                        <div>
                            <h5 class="mb-0">Mail Us</h5>
                            <p class="text-muted mb-0">help@yourdomain.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card single-promo-card single-promo-hover text-center">
                    <div class="card-body py-5">
                        <div class="pb-2">
                            <span class="ti-headphone-alt icon-sm color-primary"></span>
                        </div>
                        <div>
                            <h5 class="mb-0">Live Chat</h5>
                            <p class="text-muted mb-0">Chat with Us 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><br>
</section>

</template>

<style>


</style>
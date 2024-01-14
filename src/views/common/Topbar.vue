

<script>

</script>

<template>
<header id="header" class="header-main">
        <!--topbar start-->
        <div id="header-top-bar" class="gray-light-bg">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-7 col-lg-7">
                        <div class="topbar-text d-none d-md-block d-lg-block">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a href="tell:888-1234567"><span class="fas fa-phone mr-2"></span>Host Service, Support 01793--------</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="topbar-text">
                            <ul class="list-inline text-right">
                                <li class="list-inline-item">
                                    <router-link :to="{ name: 'login' }"><span class="fas fa-user mr-2"></span> Login</router-link></li>                 
                                <li class="list-inline-item">
                                    <router-link :to="{ name: 'signup' }"><span class="fas fa-lock mr-2"></span> Register</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</header>
</template>

<style>


</style>
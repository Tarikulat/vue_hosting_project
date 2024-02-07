<script setup>
import { Topbar, Header, HeroSection, Service, Testimonial, Chartbot, Footer } from '@/views/common'

</script>

<template>
  <div>
    <!-- This is home page Layout structure start -->

    <Topbar />

    <Header />

    <RouterView />

    <Chartbot />

    <Footer />

    <!-- This is home page Layout structure end -->
  </div>
</template>


<style scoped></style>
<template>
  <TheNavBar />
  <div class="container">
    <router-view />
  </div>
</template>

<style>
@import "assets/style.css";
</style>
<script>
import TheNavBar from "@/components/TheNavBar";
export default {
  components: { TheNavBar },
};
</script>

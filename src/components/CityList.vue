<template>
  <div id="list" class="flex-container">
    <div class="box small">
      <router-link to="/city/Tartu">Tartu</router-link>
    </div>
    <div class="box small">
      <router-link to="/city/polva">Polva</router-link>
    </div>
    <div class="box small">
      <router-link to="/city/tallinn">Tallinn</router-link>
    </div>
    <div class="box small">
      <router-link to="/city/saaremaa">Saaremaa</router-link>
    </div>
    <div class="box small">
      <router-link to="/city/hiiumaa">Hiiumaa</router-link>
    </div>
    <div class="box small">
      <router-link to="/city/parnu">Pärnu</router-link>
    </div>
    <div class="box small">
      <router-link to="/city/voru">Võru</router-link>
    </div>
    <div class="box small">
      <router-link to="/city/narva">Narva</router-link>
    </div>
  </div>
</template>

<style scoped>
  #list {
    -webkit-animation: slide-in 500ms;
    animation: slide-in 500ms;
    margin-top: 0;
  }
  @-webkit-keyframes slide-in {
      from {margin-top: -100%;}
      to {margin-top: 0;}
  }
  @keyframes slide-in {
      from {margin-top: -100%;}
      to {margin-top: 0;}
  }
</style>


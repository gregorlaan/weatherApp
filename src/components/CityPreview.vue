<template>
    <div id="weather" class="flex-container">
        <div class="box small" title="Go Back">
            <a class="back-to-home" @click="goHome()">Home</a>
        </div>
        <div class="box small" title="Temperature">
            <p>{{ temperature }} °C</p>
        </div>
        <div class="box small" title="Wind Speed">
            <p>{{ windSpeed }} m/s</p>
        </div>
        <div class="box small" title="Humidity">
            <p>{{ humidity }} %</p>
        </div>
        <div class="box map">
            <iframe :src="locationMap" frameborder="0"></iframe>
        </div>
    </div>
</template>

<style scoped>
  #weather {
    -webkit-animation: slide-in 500ms;
    animation: slide-in 500ms;
    margin-bottom: 0;
  }
  @-webkit-keyframes slide-in {
      from {margin-bottom: -100%;}
      to {margin-bottom: 0;}
  }
  @keyframes slide-in {
      from {margin-bottom: -100%;}
      to {margin-bottom: 0;}
  }
</style>


<script>
export default {
    
    data() {
        return {
            temperature: 0,
            humidity: 0,
            windSpeed: 0,
            locationMap: "",
            country: this.$route.params.cityId
        }
    },
    mounted:function(){
        this.getData();
    },
    methods: {
        goHome() {
            this.$router.push('/');
        },
        getData: function() {
            this.$http({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + this.country + '&units=metric&APPID=f64c70d9b7a5917e3c314dba26ac1b84', 
            method: 'GET'
            }).then(function (response) {
            // success callback
                var data = response.body;
                this.temperature = data.main.temp;
                this.humidity = data.main.humidity;
                this.windSpeed = data.wind.speed;
                this.locationMap = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAxrKvTlkvCiMTfDKZ2BAyy4yddbhiGv70&q=" + data.name;

            }, function (response) {
            // error callback
            });
        }
    }
}
</script>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:700');
  html, body, #app {
    height: 100%;
    background: whitesmoke;
    margin: 0;
    padding: 0;
  }
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;

  }
  .flex-container {
        display: -webkit-flex;
        display: flex;
        background-color: white;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        border: solid 1px #eee;
        box-shadow: 0 0 5px #eee;
    }
    .box {
        background: #0060ff;
        color: white;
        height: 200px;
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .box p {
      text-align: center;
    }
    .box:hover {
      opacity: .9;
    }
    .box.small {
        width: calc(25% - 20px);
    }
    .box.wide {
        width: calc(50% - 20px);
    }
    .box.tall {
    }
    .box.map {
        height: 100%;
        width: 100%;
    }
    iframe {
        width: 100%;
        min-height: 400px;
    }
    a {
        display: block;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: white;
        cursor: pointer;
    }
    @media screen and (max-width: 1000px) {
      .flex-container .box {
        width: calc(50% - 20px);
      }
      .flex-container .box.map {
        width: calc(100% - 20px);
      }
      #app {
        align-items: baseline;
      }
      #weather, #list {
        animation: none!important;
      }
    }
    @media screen and (max-width: 500px) {
      .flex-container .box {
        width: calc(100% - 20px);
      }
    }
    ::-webkit-scrollbar {
      display: none;
    }
</style>

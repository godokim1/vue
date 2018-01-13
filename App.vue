<template>
  <div class="wrapper">
    <div id="app">
      <div class="box">
        <div class="row row-offcanvas row-offcanvas-left">
          <!-- header -->
          <router-view name="header"/>

          <!-- main right col -->
          <div class="column col-sm-10 col-xs-11" id="main">

            <!-- topNavi -->
            <router-view name="top_navi"/>

            <router-view/>

          </div>
          <!-- /main -->

        </div>
      </div>



    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


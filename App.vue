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

            <div class="padding">
              <div class="full col-sm-9">

                <!-- content -->
                <div class="row">

                  <!-- main col left -->
                  <div class="col-sm-5">

                    <div id="defaultText"></div>



                    <div class="panel panel-default">
                      <div class="panel-heading"><a href="#" class="pull-right">View all</a> <h4>Stackoverflow</h4></div>
                      <div class="panel-body">
                        <img src="assets/img/150x150.gif" class="img-circle pull-right"> <a href="#">Keyword: Bootstrap</a>
                        <div class="clearfix"></div>
                        <hr>

                        <p>If you're looking for help with Bootstrap code, the <code>twitter-bootstrap</code> tag at <a href="http://stackoverflow.com/questions/tagged/twitter-bootstrap">Stackoverflow</a> is a good place to find answers.</p>

                        <hr>
                        <form>
                          <div class="input-group">
                            <div class="input-group-btn">
                              <button class="btn btn-default">+1</button><button class="btn btn-default"><i class="glyphicon glyphicon-share"></i></button>
                            </div>
                            <input class="form-control" placeholder="Add a comment.." type="text">
                          </div>
                        </form>

                      </div>
                    </div>

                    <div class="panel panel-default">
                      <div class="panel-heading"><a href="#" class="pull-right">View all</a> <h4>Stackoverflow</h4></div>
                      <div class="panel-body">
                        <img src="assets/img/150x150.gif" class="img-circle pull-right"> <a href="#">Keyword: Bootstrap</a>
                        <div class="clearfix"></div>
                        <hr>

                        <p>If you're looking for help with Bootstrap code, the <code>twitter-bootstrap</code> tag at <a href="http://stackoverflow.com/questions/tagged/twitter-bootstrap">Stackoverflow</a> is a good place to find answers.</p>

                        <hr>
                        <form>
                          <div class="input-group">
                            <div class="input-group-btn">
                              <button class="btn btn-default">+1</button><button class="btn btn-default"><i class="glyphicon glyphicon-share"></i></button>
                            </div>
                            <input class="form-control" placeholder="Add a comment.." type="text">
                          </div>
                        </form>

                      </div>
                    </div>

                  </div>

                </div><!--/row-->

                <div class="row">
                  <div class="col-sm-6">
                    <a href="#">Twitter</a> <small class="text-muted">|</small> <a href="#">Facebook</a> <small class="text-muted">|</small> <a href="#">Google+</a>
                  </div>
                </div>

                <div class="row" id="footer">
                  <div class="col-sm-6">

                  </div>
                  <div class="col-sm-6">
                    <p>
                      <a href="#" class="pull-right">Copyright 2017</a>
                    </p>
                  </div>
                </div>

              </div><!-- /col-9 -->
            </div><!-- /padding -->
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


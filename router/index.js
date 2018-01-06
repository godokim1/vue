import Vue from 'vue';
import Router from 'vue-router';
// import DefaultText from '@/components/default_text';
import Default from '@/components/default';
import Header from '@/components/header';
import TopNavi from '@/components/top_navi';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Default,
        header: Header,
        top_navi: TopNavi,
      },
    },
  ],
});

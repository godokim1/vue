import Vue from 'vue';
import Router from 'vue-router';
import DefaultText from '@/components/default_text';
import Header from '@/components/header';
import TopNavi from '@/components/top_navi';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      // naem: "default_text",
      components: {
        default: DefaultText,
        header: Header,
        top_navi: TopNavi,
      },
    },
  ],
});

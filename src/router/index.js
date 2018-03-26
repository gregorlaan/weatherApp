import Vue from 'vue';
import Router from 'vue-router';
import CityList from '@/components/CityList';
import CityPreview from '@/components/CityPreview';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CityList',
      component: CityList
    },
    {
      path: '/city/:cityId',
      name: 'CityPreview',
      component: CityPreview
    }
  ]
})

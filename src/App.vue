<template></template>

<script>
import HelloWorld from './components/HelloWorld.vue';

import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style></style>

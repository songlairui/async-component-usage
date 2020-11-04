<script>
import Vue from 'vue';
import Cc from '@/cc.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Cc
  }
});
</script>

<template>
  <div id="app">
    <cc />
  </div>
</template>

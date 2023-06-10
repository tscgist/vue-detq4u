<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h3 class="text-right">{{ msg }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AutentikInput',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  watch: {},
};
</script>

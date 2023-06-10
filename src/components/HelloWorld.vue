<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h3 class="text-right">{{ msg }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div>
          <b-form-input
            v-model="text"
            placeholder="Enter your name"
          ></b-form-input>
          <div class="mt-2">Value: {{ text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Hello World!',
    },
    cssUrls: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      parsedCssUrls: [],
    };
  },
  watch: {
    cssUrls: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          try {
            console.log(newValue);
            this.parsedCssUrls = JSON.parse(newValue);
          } catch (e) {
            this.parsedCssUrls = [];
          }
        }
      },
    },
  },
  mounted() {
    console.log('test', this);
    this.parsedCssUrls.forEach((cssUrl) => {
      let link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssUrl;

      this.$el.appendChild(link);
    });
  },
};
</script>

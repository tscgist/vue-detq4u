import { createApp, h, defineCustomElement } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
  
const HelloWorldElement = defineCustomElement(HelloWorld);

if (!customElements.get('hello-world-element')) {
  customElements.define('hello-world-element', HelloWorldElement);
}

const app = createApp({
  render: () => h(HelloWorld),
});

app.mount('#app');

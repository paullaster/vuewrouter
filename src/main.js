import {createApp} from 'vue';
import App from './App.vue';
import {router} from '';

const app = createApp(App).use(router);
app.mount('#app')
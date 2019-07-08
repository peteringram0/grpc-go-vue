import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import GRPC from './GRPC';

new Vue({
    render: (h) => h(App),

    mounted() {

        GRPC.init();

    },
}).$mount('#app');

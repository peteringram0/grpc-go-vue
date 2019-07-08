import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import { Empty } from './../proto/echo_pb';
import { EchoServiceClient } from './../proto/echo_pb_service';

new Vue({
  render: h => h(App),

  mounted() {
    const client = new EchoServiceClient('http://localhost:8080');
    const payload = new Empty();

    // client.echo(payload, (err, res) => {
    //   if (err) {
    //     console.log('Error', err);
    //   } else {
    //     console.log('Res', res);
    //   }
    // });

    const stream = client.echoStream(payload);

    stream.on('data', msg => {
      console.log(msg);
    });

  }
}).$mount('#app');

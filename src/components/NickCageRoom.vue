<template>
  <div class="container" @click="transferNick">
      <img src="https://goo.gl/qrrwWm" alt="" class="nick" v-bind:style="{ left: x-50 + 'px', top: y-50 + 'px' }" v-if="clicked">
  </div>
</template>

<script>
import io from 'socket.io-client';
export default {
    data() {
        return {
            clicked: false,
            y: '',
            x: '',
            socket : io('localhost:3001')
        }
    },
    methods: {
        transferNick(e) {
            this.socket.emit('sendLocation', {
                x: e.pageX, y: e.pageY
            });
        },
    },
    mounted() {
       this.socket.on('sendLocation', (data) => {
            this.clicked = true;           
            console.log(data.coords.x);
            this.x = data.coords.x;
            this.y = data.coords.y;
        });
    },
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
}
body{
    background-color:lightsteelblue
}
.nick {
    position: absolute;
    width: 100px;
}
.container {
    width: 100%;
    height: 100vh;
}
</style>
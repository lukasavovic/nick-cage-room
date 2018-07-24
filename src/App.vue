
<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <NickCageRoom />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NickCageRoom from './components/NickCageRoom.vue'

export default {
  name: 'app',
  components: {
    NickCageRoom
  }
}
</script>

<style>

</style>
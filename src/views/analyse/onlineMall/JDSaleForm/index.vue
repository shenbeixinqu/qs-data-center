<!--  -->
<template>
  <div class="jdData">
      <top-header></top-header>
      <scroll-board></scroll-board>
  </div>
</template>

<script>
import topHeader from './components/topHeader'
import scrollBoard from './components/scrollBoard'

export default {
  name: 'jdData',
  data () {
    return {
    };
  },

  components: {
      topHeader,
      scrollBoard
  },

  computed: {},

  methods: {}
}

</script>
<style scoped>

.jdData{
    width: 100%;
    height: 95vh;
    color: #fff;
    padding-top: 20px;
    background-image: url('./img/bg.png');
}
</style>
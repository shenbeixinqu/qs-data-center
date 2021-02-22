<template>
  <div>
    <div id="worldMap" style="width: 88vw; height: 95vh"></div>
  </div>
</template>

<script>
import './world'
import { createMap } from "@/utils/worldMap";
export default {
  mounted() {
    var dom = document.getElementById("worldMap");
    createMap(dom);
  }
};
</script>
<style scoped>
</style>

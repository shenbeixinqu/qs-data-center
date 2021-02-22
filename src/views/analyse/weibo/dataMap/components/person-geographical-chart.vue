<template>
  <div>
    <div id="main" style="width: 98vw; height: 95vh"></div>
  </div>
</template>

<script>
import { createMap } from "@/utils/map";
export default {
  name: "personGeographEchart",
  mounted() {
    var dom = document.getElementById("main");
    createMap(dom);
  },
};
</script>
<style>
</style>

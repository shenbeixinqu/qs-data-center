<template>
  <div>
    <div id="sleep-time-chart" style="width: 45vw; height: 40vh"></div>
  </div>
</template>

<script>
import { createMap } from "@/utils/sleep-time-chart";
export default {
  mounted() {
    var dom = document.getElementById("sleep-time-chart");
    createMap(dom);
  }
};
</script>
<style>
</style>

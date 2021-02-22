<template>
  <div>
    <div id="sex-chart" style="width: 98vw; height: 95vh"></div>
  </div>
</template>

<script>
import { createMap } from "@/utils/sex-chart";
export default {
  mounted() {
    var dom = document.getElementById("sex-chart");
    createMap(dom);
  }
};
</script>
<style>
</style>

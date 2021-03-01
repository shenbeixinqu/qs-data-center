<!--  -->



<template>
  <div></div>
</template>

<script>
// TODO： 展示京东数据销售图
// import { getAnnualsalesDetails } from '@/api/jingdong'
import { getAnnualsales } from '@/api/jingdong'
export default {
  data () {
    return {
    };
  },
    created(){
        this.getData()
    },
  components: {},

  computed: {},

  mounted: {},

  methods: {
      getData(){
          getAnnualsales().then(res =>{
              console.log(res);
          })
      },
      
  }
}

</script>
<style  scoped>
</style>
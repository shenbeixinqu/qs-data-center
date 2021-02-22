<template>
  <div >
    <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
  </div>
</template>

<script>
import UploadExcelComponent from './components/upload'

export default {
  
  components: { UploadExcelComponent },
  data() {
    return {
      
    }
  },
  methods: {
    beforeUpload(file) {
      return true
    },
    handleSuccess() {
    }
  }
}
</script>

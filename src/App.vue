<template>
  <div id="app">
    <input type="button" value="显示弹窗" @click="showToast">	
	<div> 
	</div>
  </div>
  
  
</template>
<script>
  export default {
    methods: {
      showToast () {
        this.$toast('我是弹出消息')
      }
    }
  }
</script>
<template>
	<div>
		<h5 v-show='visible'>已经大于5次</h5>
		<input class="input-text" type="text" @change="parentHandleFunction" @focus="focus" @blur="blur"/>
	</div>
</template>

<script>
	export default {
    data() {
      return {
        searchnum:0,
        searchFlag: false,
        visible: false,
      }
    },
    props: {
      searchList: Array,
      selectValue: Object
    },
	methods:{
		parentHandleFunction(){
			//把英文字符变成中文搜索
			console.log("this is a search "+ this.searchnum++);
			if(this.searchnum >5)
			    this.visible = true;
		},
		focus(){
			console.log("focus");
		},
		blur(){
			console.log("blur");
		}
		
	},
	}
</script>

<style>
	.input-text {
    height: 16px;
    line-height: 16px;
    padding: 8px 0 8px 10px;
    width: 220px;
    border: 1;
}
</style>

<template>
	<div class="wrap0" v-show="show">
     <div class="wrap1">看</div><div class="wrap">{{text}}</div>
	</div>
</template>

<style scoped>
	.wrap0{left:50%;position: fixed}
	.tt{
		 perspective:600px;
	}
	.wrap1{
		 border-radius: 1px;
		padding: 3px;
		background-color:#27AE60;
		color:white;
		-moz-box-shadow:3px 5px 5px #333333; 
			-webkit-box-shadow:3px 5px 5px #333333; 
			box-shadow:3px 5px 5px #333333;
		border:20px solidhsla(0,0%,100%,.5);
	}
  .wrap{   
     
    padding: 10px 50px 20px 10px;
    border-radius: 0px;
  
		background-color: skyblue;
    color:#fff;
	  -moz-box-shadow:3px 5px 5px #333333; 
		-webkit-box-shadow:3px 5px 5px #333333; 
		box-shadow:3px 5px 5px #333333;
    border:20px solidhsla(0,0%,100%,.5);
  }
	.Rotation{
	transform:rotateY(30deg);
}

</style>

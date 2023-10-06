<script>
	import {onMount} from 'svelte'
	import { fade } from 'svelte/transition';

	export let data = {}

	function back(event) {
		if (event.target === event.currentTarget) {
	     data.modal = false
	    }
	}

	onMount(()=>{
	  	data.opacity = false
	  	setTimeout(function() {data.opacity = true}, 50);
	})
</script>

<div on:click={()=> data.modal = true} class="container" class:opacity={data.opacity}>
	<img src={data.img} alt="">
	<p>{data.title}</p>
</div>

{#if data.modal}
<div on:click={back} transition:fade={{ duration: 200 }} class="modal">
	<img src={data.img} alt="">
</div>
{/if}

<style lang="scss">
	.container{
		height: 150px;
		aspect-ratio: 1/1;
  		opacity: 0;
  		display: flex;
  		justify-content: center;
  		align-items: center;
  		cursor: pointer;
  		position: relative;
  		transition: 0.2s;
  		border-radius: 10px;
  		overflow: hidden;
  		img{
  			height: 100%;
  			transition: 0.1s;
  		}
  		p{
  			position: absolute;
  			font-weight: bold;
  			opacity: 0;
  			transition: 0.1s;
  		}
  		&:hover{
  			img{
  				filter: brightness(0.1);
  			}
  			p{
  				opacity: 1;
  			}
  		}
  		@media (max-width : 800px) {
  			width: 80vw;
  			height: auto;
  			pointer-events: none;
  		}
	}
	.modal{
		position: fixed;
		height: -moz-available; 
		height: -webkit-fill-available; 
		width: 100vw;
		top: 0;
		left: 0;
		background: rgb(10 10 10 / 85%);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5rem 0;
		z-index: 5;
		transition: 0.2s;
		img{
			height: 100%;
			aspect-ratio:1/1
		}
	}
	.opacity{
		opacity: 1;
	}
</style>
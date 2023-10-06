<script>
	import {createEventDispatcher} from 'svelte'
	const distpach = createEventDispatcher()

	export let props

	function event(a,b) {
		distpach('position',{target:a,text:b})
	}
</script>

<div class="container">
    <div on:click={()=> event(1,'Esteban J Querecuto')} class="circle" class:active={props === 1}></div>
    <div class="thread"></div>
    <div on:click={()=> event(2,'HABILIDADES')} class="circle" class:active={props === 2}></div>
    <div class="thread"></div>
    <div on:click={()=> event(3,'PROYECTOS')} class="circle" class:active={props === 3}></div>
    <div class="thread"></div>
    <div on:click={()=> event(4,'ACERCA')} class="circle" class:active={props === 4}></div>
    <div class="thread"></div>
    <div on:click={()=> event(5,'CONTACTO')} class="circle" class:active={props === 5}></div>
</div>

<style lang="scss">
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    flex-direction: column;
    @media (max-width : 800px) {
    	position: fixed;
    	right: 1rem;
    }
  }
  .circle{
  	cursor: pointer;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    border: 1px solid #fd0a54;
    transition: 0.2s ease-in;
  }
  .thread{
    height: 50px;
    width: 1px;
    background: #fd0a54;
  }
  .active{
  	background-color: #fd0a54;
  }
</style>
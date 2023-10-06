<script>
  import {onMount} from 'svelte'
  import {createEventDispatcher} from 'svelte'
  const dispatch = createEventDispatcher()

  export let data = {}


  function click(argument) {
  	dispatch('appShow', {img:data.img,app:data.title})
  }

  onMount(()=>{
  	data.opacity = false
  	setTimeout(function() {data.opacity = true}, 50);
  })
</script>


<div on:click={data.click ? click : null} class="container" class:nofilter={data.nofilter} class:opacity={data.opacity}>
	<img src={data.img} alt="">
	<div>{data.title}</div>
	<p>{data.text}</p>
</div>	


<style lang="scss">
 .container{
  aspect-ratio: 1/1;
  width: 28vh;
  background-color: #1a1322;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  padding: 1rem;
  opacity: 0;
  transition: 0.2s;
  &.opacity{
  	opacity: 1;
  }
  div{
    font-weight: bold;
  }
  img{
    width: 3em;
    filter: brightness(0) saturate(100%) invert(18%) sepia(79%) saturate(7471%) hue-rotate(336deg) brightness(101%) contrast(98%);
    &.nofilter{
    	filter: initial;
    }
  }
  p{
    font-size: 0.75em;
  }
  &.nofilter{
    border: 1px solid transparent;
    cursor: pointer;
    aspect-ratio:2/1;
    width: auto;
    img{
    	filter: none;
    }
    &:hover{
    	border: 1px solid #fd0a54;
    }
  }
  @media (max-width : 800px) {
    width: auto;
    margin: 1rem 0;
    margin-right: 1rem;
    aspect-ratio:2/1
  }
 }
</style>
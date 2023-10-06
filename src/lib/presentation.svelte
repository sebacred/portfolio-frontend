<script>
	import electron from '../assets/electron.svg'
	import {onMount} from 'svelte'

	export let data = {}


	onMount(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting === true && entry.target === data.b0 && entry.intersectionRatio >= 0.65 ? data.b0 = null : null
          entry.isIntersecting === true && entry.target === data.b1 && entry.intersectionRatio >= 0.65 ? data.b1 = null : null
          entry.isIntersecting === true && entry.target === data.b2 && entry.intersectionRatio >= 0.65 ? data.b2 = null : null
          entry.isIntersecting === true && entry.target === data.b3 && entry.intersectionRatio >= 0.65 ? data.b3 = null : null
          entry.isIntersecting === true && entry.target === data.b4 && entry.intersectionRatio >= 0.65 ? data.b4 = null : null
          entry.isIntersecting === true && entry.target === data.b5 && entry.intersectionRatio >= 0.65 ? data.b5 = null : null
          entry.isIntersecting === true && entry.target === data.b6 && entry.intersectionRatio >= 0.65 ? data.b6 = null : null
        });
      }, { threshold: 0.65 });
   	  observer.observe(data.b0); 
      observer.observe(data.b1);
      observer.observe(data.b2);
      observer.observe(data.b3);
      observer.observe(data.b4); 
      observer.observe(data.b5);
      observer.observe(data.b6); 
    });   
</script>

<svelte:head>
	<title>{data.app}</title>
</svelte:head>

<div class="container">
	<div bind:this={data.b0} class="block">
		<div class:slide={data.b0} class="title"><h1>Presentación de</h1><img src={data.img} alt=""><h1>{data.app}</h1></div>
		<img class:slide={data.b0} class="imgcover" src={data.content[0].img} alt="">
	</div>
	<div bind:this={data.b1} class="block nobg pt">
		<h1 class:slide={data.b1}>DETALLES</h1>
		<p>{data.content[0].text}</p>
	</div>
	<div bind:this={data.b2} class="block row">
		<div class="cfps">
			{@html data.content[1].text}
		</div>
		<img src={data.content[1].img} class:slide={data.b2} alt="">
	</div>
	<div bind:this={data.b3} class="block nobg cfps">
		<div class:slide={data.b3}> {@html data.content[2].text}</div>
		<img src={data.content[2].img} class:slide={data.b3} alt="">
	</div>
	<div bind:this={data.b4} class="block">
		<div class:slideleft={data.b4}>{@html data.content[3].text}</div>
		<img class="imgcover center" src={data.content[3].img} class:slideright={data.b4} alt="">
	</div>
	<div bind:this={data.b5} class="block row nobg pt">
		<img class:scale={data.b5} src={data.content[4].img} alt="">
		<div class="cfps" class:slideright={data.b5}>
			{@html data.content[4].text}
		</div>
	</div>
	<div bind:this={data.b6} class="block medium">
		<div class:slide={data.b6}>{@html data.content[5].text}</div>
	</div>
	<div class="block pb">
		<img class="img100" src={data.content[5].img} alt="">
	</div>
	<div class="block medium nobg">
		<div class="title center white"><img src={data.content[6].img} alt=""><h1>{data.app} WAS MADE WITH</h1><img src={electron} alt=""></div>
	</div>
</div>

<style lang="scss">
	h1{
		margin: 0;
	}
	*{
		transition: 0.5s ease;
	}
	.container{
		width: 100%;
		flex-grow: 1;
		background-color: #1a1919;
		overflow: hidden;
		overflow-y: scroll;
		position: relative;
		.block{
			width: auto;
			height: 100%;
			display: flex;
			justify-content: space-evenly;
			padding: 0 5rem;
			align-items: center;
			flex-direction: column;
			text-align: center;
			position: relative;
			&.nobg{
				background-color: rgb(18, 18, 19);
				color: white;
			}
			&.row{
				flex-direction: row;
				justify-content: space-between;
				div{
					font-size: 1.5em;
					text-align: left;
					max-width: 40%;
					position: relative;
				}
			}
			&.pt{
				padding-top: 10rem;
			}
			&.pb{
				padding-bottom: 10rem;
			}
			> img{
				height: 60%;
				filter: drop-shadow(-1px 13px 15px black);
				z-index: 5;
				&.img100{
					height: 100%;
				}
			}
			&.medium{
				height: 50%;
			}
			.imgcover{
				position: absolute;
				height: 100%;
				filter: drop-shadow(-1px 13px 15px black);
				right: 0;
				top: 50%;
				&.center{
					right: auto;
				}
			}
			.title{
				display: flex;
				height: 50px;
				justify-content: center;
				align-items: center;
				z-index: 1;
				position: absolute;
				left: 5rem;
				&.row{
					flex-direction: column;
				}
				&.center{
					left: auto;
				}
				img{
					height: 100%;
					margin: 0 1rem;
				}
			}
			.white{
				color: white;
				img{
					filter: brightness(0) saturate(100%) invert(99%) sepia(99%) saturate(0%) hue-rotate(164deg) brightness(105%) contrast(100%);
				}
			}
			@media (max-width: 800px) {
				padding: 1rem;
				min-height: 50%;
				flex-direction: column!important;
				justify-content: space-evenly!important;
				height: auto;
				p{
					margin-bottom: 1rem;
				}
				div{
					max-width:initial!important;
				}
				.imgcover{
					height:auto;
					width: 100%;
					top: 60%;
				}
				>img{
					height: auto;
					width: 100%;
					margin-bottom: 1rem;
				}
				&.pb{
					padding-bottom: 1rem;
				}
				&.pt{
					padding-top: 7rem;
				}
				.title{
					left: auto;
					img{
						height: 6vw;
					}
				}
			}
		}
		p{
			font-size: 1.2em;
		}
	}
	.slide{
		transform: translateY(250%);
	}
	.slideleft{
		transform: translateX(-250%);
	}
	.slideright{
		transform: translateX(250%);
	}
	.scale{
		transform: scale(1.5);
		opacity: 0;
	}
</style>
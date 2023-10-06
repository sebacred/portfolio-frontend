<script>
  import Root from './lib/root.svelte'
  import Card from './lib/card.svelte'
  import Logo from './lib/logos.svelte'
  import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
  import Presentation from './lib/presentation.svelte'
  import {skills, design, logos, electronApps} from './lib/skills.js'
  import {STAIR,DREINK} from './lib/appinfo.js'
  import { onMount } from 'svelte';
  import aboutbg from './assets/about-bg.jpg'
  import mail from './assets/mail.json'
  import back from './assets/back.svg'

  let data = {}


  function position(e) {
    data.menuBG = false
    data.show = false
    data.top = true
    data.filter = 1 
    data.logo = e.detail.text
    setTimeout(function() {
      data.active = e.detail.target; 
      e.detail.target === 2 ? data.cards = skills: []
      e.detail.target === 3 ? data.cards = logos: []
      data.top = false;
    }, 450);
  }

  function filter(a,b) {
    data.filter = a
    data.cards = []
    setTimeout(function() {data.cards = b}, 250);
  }

  function appShow(e) {
    data.logo = e.detail.app
    data.show = true
    data.appInfo = e.detail
    if (e.detail.app === "STAIR") {data.appInfo.content = STAIR;data.menuBG = "#0c0c0c"}
    if (e.detail.app === "DREINK") {data.appInfo.content = DREINK;data.menuBG = "#0c0c0c"}
  }

  function submit(argument) {
    event.preventDefault()
    let text = data.mensaje.value
    let correo = data.email.value

    fetch('https://portfolio-backend-eib7.onrender.com/api/send-mail', {
      method: 'POST',
      body: JSON.stringify({ text: text, correo: correo }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.text())
      .then(res => {
        data.send = true
        setTimeout(function() {data.send = false}, 2000);
      })
      .catch(error => {
        console.error(error); // Maneja cualquier error que ocurra durante la solicitud
      });
  }

  onMount(() => {
    data.active = 1
    data.filter = 1
    data.logo = "Esteban J Querecuto"
  });
</script>
  <svelte:head>
    {#if !data.show}
      <title>Esteban J Querecuto</title>
    {/if}
  </svelte:head>
<main>
  <div style:background-color={data.menuBG ? data.menuBG : null} class="menu">
    <div class="logo">{data.logo}</div>
    <div class="items">
      <div on:click={() => position({detail:{target:1,text:"Esteban J Querecuto"}})}>HOME</div>
      <div on:click={() => position({detail:{target:2,text:"HABILIDADES"}})}>HABILIDADES</div>
      <div on:click={() => position({detail:{target:3,text:"PROYECTOS"}})}>PROYECTOS</div>
      <div on:click={() => position({detail:{target:4,text:"ACERCA"}})}>ACERCA</div>
      <div on:click={() => position({detail:{target:5,text:"CONTACTO"}})}>CONTACTO</div>
    </div>
    {#if data.show}<div on:click={() => position({detail:{target:data.active,text:"HABILIDADES"}})} class="back"><img src={back} alt=""></div>{/if}
  </div>
  {#if data.show}
    <Presentation data={data.appInfo}/>
  {:else}
  <div class="hero">
    <img style:opacity={data.active === 4 ? 1 : 0} class="bg" src={aboutbg} alt="">
    <div class="title" class:top={data.top}>
      {#if data.active == 1}
        <div class="welcome">
          <h1>Hello, I'm <br> a front end Developer</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa voluptatibus harum totam suscipit assumenda cum commodi reiciendis facere, perspiciatis aliquid eaque ad nam repudiandae autem explicabo expedita blanditiis qui rem.</p>
          <div on:click={() => position({detail:{target:2,text:"Habilidades"}})} class="buttom">Get started</div>
        </div>
      {:else if data.active == 2}
        <div class="filter">
          <h1 on:click={()=> filter(1,skills)} class:active={data.filter === 1}>Tecnologias Web</h1>
          <h1 on:click={()=> filter(2,design)} class:active={data.filter === 2}>Diseño grafico</h1>
        </div>
        <div class="container">
          {#each data.cards as item, index}
            <Card data={item}/>
          {/each}
        </div>
      {:else if data.active == 3}
        <div class="filter">
          <h1 on:click={()=> filter(1,logos)} class:active={data.filter === 1}>Logos</h1>
          <h1 on:click={()=> filter(2,electronApps)} class:active={data.filter === 2}>Electron apps</h1>
        </div>
          {#if data.filter === 2}
            <div class="container">
              {#each data.cards as item, index}
                <Card on:appShow={appShow} data={item}/>
              {/each}
            </div>
          {:else}
            <div class="proyectContainer">
            {#each data.cards as item, index}
              <Logo data={item}/>
            {/each}
            </div>
          {/if}
      {:else if data.active == 4}
        <div class="about">
          <h1>Hola, soy Esteban, un apasionado diseñador web.</h1>
          <p>Me encanta crear experiencias digitales atractivas y funcionales que cautiven a los usuarios. Para mí, el diseño web es mucho más que simplemente crear una página bonita; se trata de encontrar el equilibrio perfecto entre estética y usabilidad.</p>
          <p>Mi enfoque se basa en comprender las necesidades y objetivos de mis clientes para crear diseños personalizados que reflejen su identidad y atraigan a su público objetivo. Me esfuerzo por crear interfaces intuitivas y fáciles de usar, centrándome en la experiencia del usuario en cada paso del proceso de diseño.</p>
        </div>
      {:else if data.active == 5}
      <div class="formfield">
        <form on:submit={submit} class="contact">
          <h1 >CONTACTAME</h1>
          <div class="input-wrapper">
            <input bind:this={data.email} type="email" id="email" class="input-field" placeholder="CORREO ELECTRÓNICO" required>
          </div>
          <div class="input-wrapper">
            <input bind:this={data.mensaje} type="text" id="name" class="input-field" placeholder="MENSAJE" required>
          </div>
          <div class="submit-container">
            {#if data.send}
              <p>Mensaje enviado con exito!</p>
            {/if}
            <input type="submit" value="Enviar" class="submit-button">
          </div>
        </form>
        <div class="animationfield">
          <LottiePlayer src={mail} autoplay={true} style="width: 60%; margin:0 auto" loop={true}/>
        </div> 
      </div>        
      {/if}
    </div>
    <Root on:position={position} props={data.active}/>
  </div>
  {/if}
</main>

<style lang="scss">
  main{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .menu{
    padding: 0 5rem;
    min-height: 70px;
    background-color: #1a1322;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    position: relative;
    .items{
      display: flex;
      div{
        padding: 0 1rem;
        font-size: 0.75em;
        font-weight: 700;
        cursor: pointer;
      }
    }
    .back{
      display: none;
      position: absolute;
      height: 45%;
      right: 1rem;
      img{
        height: 100%;
        filter: invert(1);
      }
    }
    @media (max-width : 800px) {
      grid-template-columns: 1fr;
      text-align: center;
      .items{
        display: none;
      }
      .back{
        display: inline;
      }
    }
  }
  .hero{
    background-color: #23192d;
    flex-grow: 1;
    display: flex;
    padding: 0 5rem;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    .title{
      flex-grow: 1;
      position: relative;
      opacity: 1;
      transition: 0.2s;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      overflow: hidden;
      z-index: 1;
      &.top{
        opacity: 0;
        animation: toTop 0.25s ease-in forwards;
      }
      .buttom{
        background-color: #fd0a54;
        width: fit-content;
        color: #ecf0f1;
        font-weight: 700;
        margin-top: 1rem;
        padding: 1rem 2rem;
        cursor: pointer;
      }
      .container{
        display: grid;
        grid-template-columns:repeat(3, 1fr); 
        grid-gap: 20px;
        height: 100%;
        overflow: hidden;
        align-content: center;
        @media (max-width : 800px) {
            display: block;
            overflow: auto;
            height: auto;
        }
      }
      .filter{
        position: absolute;
        width: 100%;
        top: 0;
        display: flex;
        font-size: 0.5em;
        h1{
          margin-right: 1rem;
          transition: 0.2s ease-in;
          cursor: pointer;
        }
        h1:not(.active) {
          opacity: 0.5;
        }
        .active{
          color:#fd0a54;
        }
        @media (max-width : 800px) {
          position: relative;
        }
      }
      .welcome{
        width: 50%;
        @media (max-width : 800px) {
          width: auto;
          top: 50%;
          position: relative;
          transform: translatey(-50%);
          h1{
            font-size: 1.5em;
            max-width: 80%;
          }
        }
      }
    }
    @media (max-width : 800px) {
      padding: 0 1.5rem;
      .title {
        justify-content: flex-start;
        h1{
          font-size: 2em;
        }
        p{
          max-width: 60%;
        }
      }
    }
  }
  .skill {
    color: #fd0a54;
    position: relative;
    padding-bottom: 10px;
    width: fit-content;
  }
  .skill::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30%;
    height: 5px;
    background-color: #fd0a54;
  }
  .proyectContainer{
    display: flex;
    height: 68%;
    width: 80%;
    flex-wrap: wrap;
    align-items: center;
    grid-gap: 20px;
    overflow: hidden;
    overflow-y: scroll;
    @media (max-width : 800px) {
      width: 100%;
      height: 100%;
      margin-bottom: 2rem;
    }
  }
  .bg{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.2);
    left: 0;
    pointer-events: none;
    transition: 0.2s;
    opacity: 0;
  }
  .about{
    max-width: 70%;
    overflow-y: scroll;
    p{
      margin-bottom: 1rem;
      line-height: 2rem;
    }
    @media (max-width : 800px) {
      max-width: initial;
      p{
        max-width: initial!important;
      }
    }
  }
  .contact{
    display: flex;
    flex-direction: column;
    width: 50%;
    h1 {
      font-size: 24px;
      margin-bottom: 20px;
    }

    .input-wrapper {
      position: relative;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
    }

    .input-field {
      padding: 1.5rem 10px;
      border: none;
      outline: none;
      color: white;
      background-color: #1a1322; /* Fondo violeta oscuro */

      color:#fd0a54;

      &::placeholder{
        color:#fd0a54;
      }

      &:focus::placeholder {
        color: transparent;
      }
    }

    .submit-container{
      display: flex;
      align-items: center;
      p{
        color:#fd0a54;
      }
    }

    .submit-button {
      width: fit-content;
      padding: 1rem 2rem;
      margin-left: auto;
      background-color: #1a1322; /* Fondo violeta oscuro */
      color: #fff;
      border: none;
      cursor: pointer;
      &:hover{
        background-color: #fd0a54;;
      }
    }
    @media (max-width : 800px) {
      width: -webkit-fill-available; /* Para navegadores basados en WebKit (Safari, Chrome, Opera) */
      width: -moz-available; /* Para navegadores basados en Gecko (Firefox) */
      width: fill-available;
      margin: 0 1rem;
      justify-content: center;
    }
  }

  .formfield{
    display: flex;
    overflow: hidden;
    align-items: center;
    @media (max-width : 800px) {
      flex-direction: column;
      height: 100%;
      justify-content: center;
    }
  }

  .animationfield{
    @media (max-width : 800px) {
      position: absolute;
      top: -10vh;
    }
  }

  @keyframes toTop {
    from {
      top: 0;
    }
    to {
      top: -100vh;
    }
  }
</style>

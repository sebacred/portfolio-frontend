import html from '../assets/html.svg'
import js from '../assets/javascript.svg'
import css from '../assets/css.svg'
import sass from '../assets/sass.svg'
import electron from '../assets/electron.svg'
import svelte from '../assets/svelte.svg'
import ilus from '../assets/illustrator.svg'
import ps from '../assets/photoshop.svg'
import ae from '../assets/aftereffects.svg'
import belius from '../assets/belius.jpg'
import alvaro from '../assets/ALVARO.jpg'
import bp from '../assets/blue-palm.jpg'
import cvoa from '../assets/cvoa-l.jpg'
import gosh from '../assets/gosh-r.jpg'
import intelix from '../assets/intelix.jpg'
import iog from '../assets/iog-l.jpg'
import motmot from '../assets/motmot.jpg'
import tamilux from '../assets/tamilux.jpg'
import zera from '../assets/ZERA.jpg'
import dreink from '../assets/dreink.png'
import stair from '../assets/stair.png'

export let skills = 
	[
      {img:html,title:"HTML",
        text:"Conocimiento completo y profundo de este lenguaje de marcado utilizado para crear y estructurar páginas web."},
      {img:css,title:"CSS",
        text:"Puedo crear diseños visualmente atractivos y garantizar la compatibilidad con diferentes dispositivos y navegadores."},
      {img:js,title:"JAVASCRIPT",
        text:"Familiarizado con los conceptos avanzados de JavaScript, como el uso de promesas, async/await y el manejo de eventos."},
      {img:sass,title:"SASS",
        text:"En Sass, puedo agilizar el proceso de desarrollo de estilos y mejorar la mantenibilidad de los proyectos web."},
      {img:electron,title:"ELECTRON JS",
        text:"En Electron.js, puedo desarrollar aplicaciones de escritorio potentes y personalizadas de manera eficiente."},
      {img:svelte,title:"SVELTE",
        text:"En Svelte, puedo desarrollar aplicaciones web modernas y escalables de manera efectiva."}
  ]

  export let design = 
  [
    {img:ilus,title:"ILLUSTRATOR",
      text:"Adobe Illustrator es mi herramienta de elección cuando se trata de diseño gráfico. Tengo un amplio conocimiento en el uso de esta poderosa herramienta"},
    {img:ps,title:"PHOTOSHOP",
      text:"Tengo conocimientos sólidos sobre Photoshop y aunque no me considero un experto, puedo manejar cualquier proyecto que requiera esta herramienta"},
    {img:ae,title:"AFTER EFFECTS",
      text:"Aunque no soy un experto en Adobe After Effects, tengo conocimientos intermedios y puedo realizar tareas más avanzadas."},
  ]

  export let logos = 
  [
    {img:belius,title:"BELIUS",
      text:""},
    {img:alvaro,title:"ALVARO",
      text:""},
    {img:bp,title:"BLUE PALM",
      text:""},
    {img:cvoa,title:"CVOA",
      text:""},
    {img:gosh,title:"GOSH",
      text:""},
    {img:intelix,title:"INTELIX",
      text:""},
    {img:iog,title:"IOG",
      text:""},
    {img:motmot,title:"MOTMOT",
      text:""},
    {img:tamilux,title:"TAMILUX",
      text:""},
    {img:zera,title:"ZERA",
      text:""}
  ]

  export let electronApps = 
  [
    {img:stair,title:"STAIR",nofilter:true,click:true,
      text:"Aplicacion de musica"},
    {img:dreink,title:"DREINK",nofilter:true,click:true,
      text:"Editor de texto y creador de E-Books"}
  ]

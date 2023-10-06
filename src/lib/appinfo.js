//Stair
import s5 from '../assets/s5.jpg'
import s19 from '../assets/s19.jpg'
import s25 from '../assets/s25.jpg'
import s28 from '../assets/s28.jpg'
import scover from '../assets/scover.png'
import mini from '../assets/mini.png'
import stairlogo from '../assets/stairlogo.svg'
//stair

//dreink
import d1 from '../assets/d1.jpg'
import d3 from '../assets/d3.jpg'
import d5 from '../assets/d5.jpg'
import d6 from '../assets/d6.jpg'
import dcover from '../assets/dcover.png'
import dreinklogo from '../assets/dreinklogo.svg'

export let STAIR = [
  {img:scover,text:"Stair es una innovadora aplicación desarrollada con Electron JS que está diseñada para brindarte una experiencia musical única. Su principal función es actuar como una biblioteca musical inteligente, permitiéndote organizar y disfrutar de tus canciones favoritas de una manera sencilla y eficiente."},
  
  {img: s5,
    text:`
      <p>Una de las características destacadas de Stair es su capacidad para escanear y organizar automáticamente las canciones de tu carpeta musical por artista.</p>

      <p>Esto te permite acceder rápidamente a la música de tus artistas preferidos y disfrutar de una experiencia de escucha más personalizada.</p>`
  },

  {img: s25,
    text:`
      <p>Dreink es una aplicación de edición de texto diseñada específicamente para la creación de Ebooks. Su interfaz es sencilla y fácil de usar, lo que la hace accesible para usuarios de todos los niveles de experiencia. Con Dreink, puedes crear documentos y agregar las secciones que deseas incluir en tu Ebook.</p>`
  },
  {img: mini,
    text:`
      <h1>Stair ofrece un modo de mini-reproductor que actúa en segundo plano.</h1>
      <p>Esto significa que puedes seguir escuchando tu música mientras realizas otras tareas sin tener que mantener la app abierta en primer plano.</p>`
  },
  {img: s19,
    text:`
      <p>Además, Stair te permite crear playlists personalizadas, lo que te da la libertad de organizar tu música de acuerdo a tus preferencias y estados de ánimo.</p>
      <p>Puedes crear listas de reproducción para diferentes ocasiones o simplemente para disfrutar de una selección de canciones específicas.</p>`
  },
  {img: s28,
    text:`
      <h1>La app también cuenta con un recolector de datos de tus reproducciones.</h1>
      <p>Lo que te permite tener un registro de las canciones que has escuchado y cuántas veces las has reproducido. Esto puede ser útil para descubrir tus artistas y canciones favoritas.</p>`
  },
  {img: stairlogo}
]

export let DREINK = [
  {img:dcover,text:"Dreink es una aplicación de edición de texto diseñada específicamente para la creación de Ebooks. Su interfaz es sencilla y fácil de usar, lo que la hace accesible para usuarios de todos los niveles de experiencia. Con Dreink, puedes crear documentos y agregar las secciones que deseas incluir en tu Ebook."},
  
  {img: d1,
    text:`
      <p>Una de las características destacadas de Dreink es su capacidad para personalizar los documentos.</p>

      <p>Puedes cambiar el nombre del Ebook, agregar una contraseña para protegerlo, y reorganizar el orden de las secciones según tus preferencias.</p>`
  },

  {img: d3,
    text:`
      <p>Dreink ofrece opciones de personalización para la estructura del texto, como la elección de la fuente, los espacios entre líneas, el tamaño del texto y varios estilos.</p>`
  },
  {img: null,
    text:`
      <h1>Dreink también tiene la capacidad de recolectar información sobre tus documentos.</h1>
      <p>Puede proporcionarte datos como la cantidad de palabras en el documento, las secciones que has creado y la fecha en que fue creado. Esta función te permite tener un seguimiento detallado de tus proyectos y te brinda información útil para tu proceso de escritura.</p>`
  },
  {img: d5,
    text:`
      <p>Dreink integra la API de LanguageTools.</p>
      <p>lo que significa que ofrece correcciones y sugerencias de gramática y ortografía para los usuarios. Esta función es especialmente útil para aquellos que desean mejorar la calidad de su escritura y asegurarse de que su Ebook esté libre de errores.</p>`
  },
  {img: d6,
    text:`
      <h1>Una de las características más importantes de Dreink es su capacidad de exportación.</h1>
      <p>Puedes seleccionar una portada para tu libro, agregar el nombre del autor, una descripción y un título. Luego, Dreink exportará el Ebook en formato Epub, listo para ser utilizado en lectores electrónicos.</p>`
  },
  {img: dreinklogo}
]

import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Descripcion from './components/Descripcion/Descripcion';


function App() {
  const [count, setCount] = useState(0)

let perritos = [
  {name: "Rufina",desc: "Llena de energía y siempre lista para jugar ¡Dale el hogar que se merece!",direccion:"Los Pequenes 9043, Antofagasta",img: "https://images.pexels.com/photos/1933464/pexels-photo-1933464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", tag:"Chihuahua", colortag:"primary"},
  {name: "Ciro",desc: "Juguetón, amigable y se lleva bien con niños y gatos. ¡Házlo parte de tu familia!",direccion:"Del Rey 1874, Santiago",img: "https://images.pexels.com/photos/1346086/pexels-photo-1346086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",tag:"Pastor", colortag:"success"},
  {name: "Olivia",desc: "De tamaño mediano pero de gran corazón. Muy maternal y cariñosa ¡Experimenta un amor incondicional!",direccion:"5 Norte 1123, Viña del Mar",img: "https://images.pexels.com/photos/1404727/pexels-photo-1404727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",tag:"Terrier", colortag:"danger"},
  {name: "Gaspar",desc: "Compañero leal y cariñoso que adora los mimos y abrazos ¡Ayúdalo a tener un final feliz!",direccion:"Las Acacias 1100, Santiago",img: "https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", tag:"Mestizo", colortag:"warning"}
]

let descripcion = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam id quasi maiores voluptates accusantium eveniet quis, delectus officia necessitatibus rerum quidem temporibus placeat, debitis nemo explicabo, tempora dolor. Voluptates, voluptas."

  return (
    <>

      <Header title="Adopta un Perrito" />

      <div className='cont-cards'>

        {perritos.map((perrito) => <Card nombre={perrito.name} desc={perrito.desc} direcc={perrito.direccion} imagen={perrito.img} color={perrito.colortag} textotag={perrito.tag} />)}

      </div>

      <div className='cont-footer'>

      <Footer />

      </div>

    </>
  )
}

export default App
